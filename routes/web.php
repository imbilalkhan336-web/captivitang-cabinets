<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
 * Scan public/images/brands/{slug} and return an ordered list of series, each
 * with whatever image files currently live in its folder. Drop new images into
 * a series folder and they appear automatically — no code change required.
 *
 * Each series: ['name' => Display Name, 'line' => Grouping, 'images' => [urls]].
 */
function brand_gallery(string $slug): array
{
    // Fabuwood uses a curated, ordered layout so its lines group correctly.
    $layouts = [
        'fabuwood' => [
            ['Allure Galaxy', 'Allure', 'allure/Galaxy Cabinets'],
            ['Allure Fusion', 'Allure', 'allure/Fusion Cabinets'],
            ['Allure Luna', 'Allure', 'allure/Luna Cabinets'],
            ['Allure Nexus', 'Allure', 'allure/Nexus Cabinets'],
            ['Echo', 'Echo', 'Echo'],
            ['Luxe', 'Luxe', 'luxe'],
            ['Illume Catalina Gloss', 'Illume', 'illume/Catalina Gloss Cabinets'],
            ['Illume Catalina Matt & Texture', 'Illume', 'illume/Catalina Matt & Texture'],
            ['Ovela Catalina', 'Ovela', 'ovela/Catalina Cabinets'],
        ],
    ];

    if (isset($layouts[$slug])) {
        $base = public_path("images/brands/{$slug}");
        $root = "/images/brands/{$slug}";
        $series = [];

        foreach ($layouts[$slug] as [$name, $line, $rel]) {
            $dir = $base . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $rel);
            $images = [];

            if (is_dir($dir)) {
                $files = scandir($dir) ?: [];
                sort($files);
                foreach ($files as $file) {
                    if (preg_match('/\.(png|jpe?g|webp|avif)$/i', $file)) {
                        // URL-encode each path segment so spaces/commas resolve.
                        $segments = array_map('rawurlencode', array_merge(explode('/', $rel), [$file]));
                        $images[] = $root . '/' . implode('/', $segments);
                    }
                }
            }

            $series[] = ['name' => $name, 'line' => $line, 'images' => $images];
        }

        return $series;
    }

    // All other brands are auto-scanned. Folder names differ from slugs, so map
    // them, then group images by their folder (one or two levels deep).
    return scanned_brand_gallery($slug);
}

/*
 * Generic two-level scanner for non-Fabuwood brands. A folder that directly
 * holds images becomes one series; a folder of sub-folders yields one series
 * per sub-folder (with the parent folder as its "line").
 */
function scanned_brand_gallery(string $slug): array
{
    $folders = [
        'jk' => 'j&k',
        'modernform' => 'Modernform',
        'diamond' => 'Diamond',
        'decora' => 'Decorá',
        'mantra' => 'Mantra',
        'tribeca' => 'Tribeca',
        'kcd' => 'KCD',
        'uscd' => 'USDC',
    ];

    $folder = $folders[$slug] ?? $slug;
    $base = public_path("images/brands/{$folder}");
    $root = "/images/brands/" . rawurlencode($folder);

    if (! is_dir($base)) {
        return [];
    }

    // Return [imageFilenames, subDirNames] for a directory.
    $scan = function (string $dir): array {
        $images = [];
        $subdirs = [];
        $entries = scandir($dir) ?: [];
        sort($entries);
        foreach ($entries as $e) {
            if ($e === '.' || $e === '..') {
                continue;
            }
            $path = $dir . DIRECTORY_SEPARATOR . $e;
            if (is_dir($path)) {
                $subdirs[] = $e;
            } elseif (preg_match('/\.(png|jpe?g|webp|avif)$/i', $e)) {
                $images[] = $e;
            }
        }
        return [$images, $subdirs];
    };

    $series = [];
    [, $tops] = $scan($base);

    foreach ($tops as $top) {
        $topDir = $base . DIRECTORY_SEPARATOR . $top;
        $topUrl = $root . '/' . rawurlencode($top);
        [$imgs, $subs] = $scan($topDir);

        if ($imgs) {
            $series[] = [
                'name' => $top,
                'line' => '',
                'images' => array_map(fn ($f) => $topUrl . '/' . rawurlencode($f), $imgs),
            ];
        }

        foreach ($subs as $sub) {
            [$simgs] = $scan($topDir . DIRECTORY_SEPARATOR . $sub);
            if ($simgs) {
                $subUrl = $topUrl . '/' . rawurlencode($sub);
                $series[] = [
                    'name' => $sub,
                    'line' => $top,
                    'images' => array_map(fn ($f) => $subUrl . '/' . rawurlencode($f), $simgs),
                ];
            }
        }
    }

    return $series;
}

Route::get('/', function () {
    return Inertia::render('Home2');
})->name('home');

Route::get('/financing', function () {
    return Inertia::render('Financing');
})->name('financing');

Route::get('/contractor-program', function () {
    return Inertia::render('ContractorProgram');
})->name('contractor-program');

Route::get('/cabinet-brands', function () {
    return Inertia::render('CabinetBrands');
})->name('cabinet-brands');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/testimonials', function () {
    return Inertia::render('Testimonials');
})->name('testimonials');

Route::get('/resources/specbooks', function () {
    return Inertia::render('Specbooks');
})->name('specbooks');

Route::get('/blogs', function () {
    return Inertia::render('Blogs');
})->name('blogs');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/design-service', function () {
    return Inertia::render('DesignService');
})->name('design-service');

Route::get('/brands/{slug}', function (string $slug) {
    return Inertia::render('Brand', [
        'slug' => $slug,
        'gallery' => brand_gallery($slug),
    ]);
})->whereIn('slug', ['fabuwood', 'jk', 'modernform', 'diamond', 'decora', 'mantra', 'tribeca', 'kcd', 'uscd'])
  ->name('brand');

Route::get('/brands/{slug}/{line}', function (string $slug, string $line) {
    return Inertia::render('Brand', [
        'slug' => $slug,
        'line' => $line,
        'gallery' => brand_gallery($slug),
    ]);
})->whereIn('slug', ['fabuwood'])
  ->whereIn('line', ['allure', 'illume', 'ovela'])
  ->name('brand.line');

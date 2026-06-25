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
    // Ordered series definitions per brand: [display name, line, folder path].
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

    if (! isset($layouts[$slug])) {
        return [];
    }

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

Route::get('/', function () {
    return Inertia::render('Home2');
})->name('home');

Route::get('/financing', function () {
    return Inertia::render('Financing');
})->name('financing');

Route::get('/contractor-program', function () {
    return Inertia::render('ContractorProgram');
})->name('contractor-program');

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

Route::get('/cabinet-brands', function () {
    return Inertia::render('Brands');
})->name('cabinet-brands');

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

<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            // Auto-scanned door/finish images per brand for the Shop Cabinets menu.
            // Drop images into public/images/brands/{slug}/{Series}/ and they appear.
            'shopFinishes' => $this->shopFinishes(),
        ];
    }

    /**
     * Scan public/images/brands/{slug}/{Series}/ for finish images.
     * Fabuwood is excluded — it is configured statically in the menu catalog.
     *
     * @return array<string, array<int, array{name: string, images: array<int, string>}>>
     */
    private function shopFinishes(): array
    {
        $slugs = ['jk', 'modernform', 'diamond', 'decora', 'mantra', 'tribeca', 'kcd', 'uscd'];
        $out = [];

        foreach ($slugs as $slug) {
            $brandDir = public_path("images/brands/{$slug}");

            if (! is_dir($brandDir)) {
                continue;
            }

            $entries = scandir($brandDir) ?: [];
            sort($entries);
            $series = [];

            foreach ($entries as $name) {
                if ($name === '.' || $name === '..') {
                    continue;
                }

                $dir = $brandDir . DIRECTORY_SEPARATOR . $name;
                if (! is_dir($dir)) {
                    continue;
                }

                $files = scandir($dir) ?: [];
                sort($files);
                $images = [];

                foreach ($files as $file) {
                    if (preg_match('/\.(png|jpe?g|webp|avif)$/i', $file)) {
                        $images[] = "/images/brands/{$slug}/" . rawurlencode($name) . '/' . rawurlencode($file);
                    }
                }

                $series[] = ['name' => $name, 'images' => $images];
            }

            if ($series) {
                $out[$slug] = $series;
            }
        }

        return $out;
    }
}

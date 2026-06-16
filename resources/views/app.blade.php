<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Favicon -->
        <link rel="icon" type="image/webp" href="/images/cc.webp">
        <link rel="apple-touch-icon" href="/images/cc.webp">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=roboto-flex:100,200,300,400,500,600,700,800,900|dm-sans:400,500,600,700,800|playfair-display:400i,500i,600i,700i,800i,900i|alata:400|allura:400|italianno:400|great-vibes:400&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="antialiased font-sans">
        @inertia
    </body>
</html>

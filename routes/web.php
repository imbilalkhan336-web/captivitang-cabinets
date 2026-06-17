<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

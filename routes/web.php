<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Home')->name('home');
Route::inertia('/nosotros', 'About')->name('about');
Route::inertia('/contactenos', 'Contact')->name('contact');
Route::post('/contact', ContactController::class)->name('contact.mail');
Route::inertia('/clientes', 'Client')->name('client');

Route::prefix('servicios')->name('services.')->group(function () {
    Route::inertia('/instrumentos-de-gestión-ambiental', 'Services/InstrumentosDeGestionAmbiental')->name('service1');
    Route::inertia('/servicios-de-monitoreos-ambientales', 'Services/ServiciosDeMonitoreosAmbientales')->name('service2');
    Route::inertia('/servicios-de-monitoreos-ocupacionales', 'Services/ServiciosDeMonitoreosOcupacionales')->name('service3');
    Route::inertia('/construcción-de-sistemas-de-tratamiento', 'Services/ConstruccionDeSistemasDeTratamiento')->name('service4');
    Route::inertia('/elaboración-de-expedientes-técnicos', 'Services/ElaboracionDeExpedientesTecnicos')->name('service5');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

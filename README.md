<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Proyecto Administracion Banderas 

### Variables de entorno
#### 1-Crear un fichero `.env` a partir del fichero `env.environment` con los mismos datos
#### 2-Crear base de datos con el nombre que se encuentra en la variable `DB_DATABASE` en el fichero  `.env` Character set :`utf8mb4`  y Collation `utf8mb4_general_ci`

#### 3-Comandos a instalar

- `composer install`
- `jwt.bat`
- `storage.bat`
- `php artisan migrate`
- `php artisan db:seed --class=DatabaseSeeder`


#### 3.1-Actualizar datos de wordpress

- `php artisan migrate_wp_categories`
- `php artisan migrate_wp_product_type`
- `php artisan migrate_wp_products`


##### - Esto no es necesario correrlo si ya se corrio anteriormente el comando:
`php artisan db:seed --class=DatabaseSeeder` 

---
#### Usuario email:`admin@banderas.com` password:`adminbanderas`

#### Si el sistema operativo es linux copiar el comando dentro de los ficheros `jwt.bat` y `storage.bat` y ejecutarlo en consola

---
#### 4-Errores
 Si no existen las carpetas siguientes , entonces crearlas

 - `storage/framework/cache`
 - `storage/framework/sessions`
 - `storage/framework/testing`
 - `storage/framework/views`

---
### Documentacion
#### Cargar el fichero en la carpeta `open_api` con el insomnia para conocer los endpoints del proyecto y la documentacion

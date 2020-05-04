<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/apple-icon.png">
    <link rel="icon" type="image/png" href="{{ asset('img/favicon.png') }}">
    <title>
        Guilherme Albert
    </title>
    @include('layouts.includes.assets.fonts')
    @include('layouts.includes.assets.icons')
    @include('layouts.includes.assets.css')
</head>

<body>

    <div id="app" class="app">
        @include('layouts.includes.header')

        <div class="wrapper">
            @section('content')
            @show

            @include('layouts.includes.footer')
        </div>
    </div>

    @include('layouts.includes.assets.scripts')
</body>

</html>
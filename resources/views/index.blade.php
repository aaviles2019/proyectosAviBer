<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Componentes</title>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">


        </head>

        <body>
         <div id="app">
        
         <!--<post-component></post-component>-->

         <app-component></app-component>
        <!-- <blog-component></blog-component>-->



         </div>
        <h1>Desde Index</h1>
        <script src="{{ asset('js/app.js') }}" ></script>
    </body>
</html>

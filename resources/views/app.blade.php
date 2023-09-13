<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>City Beauty</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <meta name="description" content="{{ config('settings.description') }}">
        <meta name="keywords" content="{{ config('settings.keywords') }}">
        <meta name="author" content="{{ config('settings.author') }}">

        <link rel="apple-touch-icon" href="{{ config('app.url') }}/apple-touch-icon.png" sizes="180x180">

        <meta name="theme-color" content="#ffffff">

        <script>
            const GA_ENABLED="{{ $ga_enabled }}"
            const GA_TAG="{{ $ga_key }}"
            const APP_URL="{{ config('app.url') }}"
            const SENTRY_ENABLED="{{ config('services.sentry.enabled') }}"
            const SENTRY_FEEDBACK_ENABLED="{{ config('services.sentry.feedback-enabled') }}"
            const SENTRY_DSN="{{ config('sentry.dsn') }}"
            const ENVIRONMENT="{{ config('app.env') }}"
            const KONAMI_TOASTY_ENABLED="{{ config('settings.enableKonamiToasty') }}"
            const KONAMI_ASTEROIDS_ENABLED="{{ config('settings.enableKonamiAsteroids') }}"
            const VULTR_REFERRAL_ENABLED="{{ config('settings.vultrReferralEnabled') }}"
            const VULTR_REFERRAL_LINK="{{ config('settings.vultrReferralLink') }}"
        </script>  

        @vite(['resources/css/app.css'])
        @laravelPWA
    </head>
    <body class="bg-gray-50 h-screen antialiased leading-none font-sans overflow-x-hidden overflow-y-auto">
        <div id="app"  v-cloak></div>       
        @vite(['resources/js/app.js'])
        @if(config('settings.enableKonamiAsteroids'))
            <script type="text/javascript" src="{{ config('app.url') }}/js/s-code.min.js"></script>
        @endif
    </body>

</html>

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  {!!  getFavicons() !!}
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Builder</title>

  <!-- Scripts -->

  <script>
    window.ALTRP_DEBUG = {!! json_encode( ! ! get_altrp_setting( 'altrp_debug', false ) ) !!};
    let _token = '{{ csrf_token() }}';
  </script>
  @if( env( 'ALTRP_SETTING_ADMIN_LOGO' ) )
  <script>
    window.admin_logo = {!! env( 'ALTRP_SETTING_ADMIN_LOGO' ) !!};
    window.altrpMenus = [];
  </script>
  @endif
  <script>
    let altrp_version = '{!! config( 'app.altrp_version' ) !!}';
  </script>

  <script src="{{ altrp_asset( '/modules/admin/admin.js', 'http://localhost:3002/' ) }}" defer></script>

  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">

</head>
<body>
<div id="admin">

</div>
</body>
</html>

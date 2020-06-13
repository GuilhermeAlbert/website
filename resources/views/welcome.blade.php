@extends('layouts.master')

@section('content')
<welcome-component :show="true"></welcome-component>

<contact-component :show="false"></contact-component>
@endsection

@section('javascripts')
@endsection
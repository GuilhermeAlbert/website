<template>
  <li class="nav-item dropdown" v-if="show">
    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
      <i class="ni ni-ui-04 d-lg-none"></i>
      <span class="nav-link-inner--text">{{ $t('header.services') }}</span>
    </a>
    <div class="dropdown-menu dropdown-menu-xl">
      <div class="dropdown-menu-inner">
        <a href="#" class="media d-flex align-items-center">
          <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
            <i class="ni ni-spaceship"></i>
          </div>
          <div class="media-body ml-3">
            <h6 class="heading text-primary mb-md-1">{{ $t('header.softwareDevelopment') }}</h6>
            <p
              class="description d-none d-md-inline-block mb-0"
            >Learn how to use compiling Scss, change brand colors and more.</p>
          </div>
        </a>
        <a href="#" class="media d-flex align-items-center">
          <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
            <i class="ni ni-palette"></i>
          </div>
          <div class="media-body ml-3">
            <h6 class="heading text-primary mb-md-1">{{ $t('header.design') }}</h6>
            <p
              class="description d-none d-md-inline-block mb-0"
            >Learn more about colors, typography, icons and the grid system we used for .</p>
          </div>
        </a>
        <a href="#" class="media d-flex align-items-center">
          <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
            <i class="ni ni-ruler-pencil"></i>
          </div>
          <div class="media-body ml-3">
            <h5 class="heading text-warning mb-md-1">{{ $t('header.consulting') }}</h5>
            <p
              class="description d-none d-md-inline-block mb-0"
            >Browse our 50 beautiful handcrafted components offered in the Free version.</p>
          </div>
        </a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  //
};
</script>

<style>
</style>
<template>
  <li class="nav-item" v-if="show">
    <a href="#" class="nav-link">
      <i class="ni ni-collection d-lg-none"></i>
      <span class="nav-link-inner--text">{{ $t('header.projects') }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style>
</style>
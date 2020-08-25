<template>
  <nav
    id="navbar-main"
    class="navbar navbar-main navbar-expand-lg headroom"
    :class="{'navbar-transparent': !nightMode, 'navbar-default bg-default': nightMode}"
  >
    <div class="container">
      <a class="navbar-brand mr-lg-5" v-if="show" href="/">
        <img v-if="requestIs" src="img/brand/ga-mono.png" />
        <img v-else src="img/brand/ga-colored.png" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar_global"
        aria-controls="navbar_global"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbar_global">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="#">
                <img src="img/brand/ga-colored.png" />
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbar_global"
                aria-controls="navbar_global"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <!-- <li class="nav-item"> -->
          <!-- <a href="#" class="nav-link"> -->
          <!-- <i class="ni ni-ui-04 d-lg-none"></i> -->
          <!-- <span class="nav-link-inner--text">{{ $t('header.about') }}</span> -->
          <!-- </a> -->
          <!-- </li> -->

          <services-component :show="true"></services-component>
          <projects-component :show="true"></projects-component>

          <!-- <li class="nav-item"> -->
          <!-- <a href="#" class="nav-link"> -->
          <!-- <i class="ni ni-ui-04 d-lg-none"></i> -->
          <!-- <span class="nav-link-inner--text">{{ $t('header.contact') }}</span> -->
          <!-- </a> -->
          <!-- </li> -->
        </ul>
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://github.com/GuilhermeAlbert"
              target="_blank"
              data-toggle="tooltip"
              title="Star me on Github"
            >
              <i class="fa fa-github"></i>
              <span class="nav-link-inner--text d-lg-none">Github</span>
            </a>
          </li>
          <li class="nav-item d-none d-lg-block ml-lg-4">
            <a
              href="https://www.buymeacoffee.com/guilhermealbert"
              target="_blank"
              class="btn btn-neutral btn-icon"
            >
              <span class="btn-inner--icon">
                <i class="fas fa-coffee"></i>
              </span>
              <span class="nav-link-inner--text">{{ $t('header.buyMeACoffee') }}</span>
            </a>
          </li>
          <dark-mode-button-component v-if="isDarkModeButtonEnabled"></dark-mode-button-component>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["requestIs", "isDarkModeButtonEnabled", "isLocaleButtonEnabled"],
  data() {
    return {
      lightThemeEnabled: true,
      darkThemeEnabled: false,
      nightMode: false,
    };
  },
  watch: {
    nightMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));

    let darkMode = localStorage.getItem("dark_mode");

    console.log(darkMode);

    this.darkThemeEnabled = !this.darkThemeEnabled;
    this.lightThemeEnabled = !this.lightThemeEnabled;
  },
};
</script>

<style scoped>
</style>
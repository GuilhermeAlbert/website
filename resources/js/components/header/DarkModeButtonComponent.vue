<template>
  <li class="nav-item">
    <a
      class="nav-link nav-link-icon"
      data-toggle="tooltip"
      title="Dark mode"
      @click="nightMode = !nightMode"
    >
      <i class="fa fa-moon" v-if="nightMode"></i>
      <i class="fas fa-sun" v-else></i>
      <span class="nav-link-inner--text d-lg-none">Dark mode</span>
    </a>
  </li>
</template>

<script>
export default {
  props: [
    //
  ],
  data() {
    return {
      isDarkModeEnabled: false,
      nightMode: false,
    };
  },
  watch: {
    nightMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
      location.reload();
    },
  },
  methods: {
    handleDarkMode() {
      this.isDarkModeEnabled = !this.isDarkModeEnabled;

      localStorage.setItem("dark_mode", this.isDarkModeEnabled);
      let darkMode = localStorage.getItem("dark_mode");

      if (darkMode) {
        this.$cookies.set("dark_mode", darkMode, 24);
      }

      location.reload();
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>

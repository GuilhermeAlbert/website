<template>
  <footer class="footer has-cards">
    <div class="container">
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-8">
          <div class="copyright">
            &copy;
            <a href="#">{{ $t('author') }}. {{ $t('website.poweredBy') }} Trebla Labs.</a>
          </div>
        </div>
        <div class="col-md-4">
          <locale-component v-if="isLocaleButtonEnabled"></locale-component>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["isLocaleButtonEnabled"],
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
</style>
<template>
  <div class="section section-hero section-shaped">
    <div class="shape shape-style-1 shape-primary">
      <!-- <span class="span-150"></span> -->
      <!-- <span class="span-50"></span> -->
      <!-- <span class="span-50"></span> -->
      <!-- <span class="span-75"></span> -->
      <!-- <span class="span-100"></span> -->
      <!-- <span class="span-75"></span> -->
      <!-- <span class="span-50"></span> -->
      <!-- <span class="span-100"></span> -->
      <!-- <span class="span-50"></span> -->
      <!-- <span class="span-100"></span> -->
    </div>
    <div class="page-header">
      <div class="container shape-container d-flex align-items-center py-lg">
        <div class="col px-0">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 text-center">
              <img src="img/brand/ga-mono.png" class="img-fluid" />
              <p class="lead text-white">{{ $t("website.makingSomeChanges") }}</p>
              <div class="btn-wrapper mt-5" v-if="show">
                <a href="#" class="btn btn-lg btn-white btn-icon mb-3 mb-sm-0">
                  <span class="btn-inner--icon">
                    <i class="ni ni-cloud-download-95"></i>
                  </span>
                  <span class="btn-inner--text">Download HTML</span>
                </a>
                <a href="#" class="btn btn-lg btn-github btn-icon mb-3 mb-sm-0" target="_blank">
                  <span class="btn-inner--icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span class="btn-inner--text">
                    <span class="text-warning">Star us</span> on Github
                  </span>
                </a>
              </div>
              <div class="mt-5">
                <small class="font-weight-bold mb-0 mr-2 text-white">{{ $t("website.poweredBy") }}</small>
                <img src="img/brand/trebla-main-mono.svg" style="height: 28px;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="separator separator-bottom separator-skew zindex-100">
      <svg
        x="0"
        y="0"
        viewBox="0 0 2560 100"
        preserveAspectRatio="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon class="fill-white" points="2560 0 2560 100 0 100" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style scoped>
</style>
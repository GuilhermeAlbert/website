<template>
  <div class="section pb-0 section-components" v-if="show">
    <div class="container mb-5">
      <!-- Inputs -->
      <h3 class="h4 text-success font-weight-bold mb-4">Contact</h3>
      <div class="mb-3">
        <small class="text-uppercase font-weight-bold">Send me a message</small>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div
            class="form-group"
            :class="{'has-success': validation.isValidName, 'has-danger': validation.hasErrorName}"
          >
            <input
              type="text"
              placeholder="Your name"
              class="form-control form-control-alternative"
              :class="{'is-valid': validation.isValidName, 'is-invalid': validation.hasErrorName}"
            />
          </div>
          <div
            class="form-group"
            :class="{'has-success': validation.isValidEmail, 'has-danger': validation.hasErrorEmail}"
          >
            <input
              type="email"
              placeholder="Your email"
              class="form-control form-control-alternative is-invalid"
              :class="{'is-valid': validation.isValidEmail, 'is-invalid': validation.hasErrorEmail}"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6 mt-4 mt-md-0">
          <!-- Toggle buttons -->
          <div class="mb-3">
            <small class="text-uppercase font-weight-bold">Complete form</small>
          </div>
          <span class="clearfix"></span>
          <label class="custom-toggle">
            <input type="checkbox" v-model="model.toggleSlider" @click="toggleSlider()" />
            <span class="custom-toggle-slider rounded-circle"></span>
          </label>
          <div>I want to put my phone.</div>
        </div>
      </div>
    </div>

    <div class="py-5 bg-secondary" v-if="isCompleteFormChecked">
      <div class="container">
        <div class="mb-3">
          <small class="text-uppercase font-weight-bold">More fields</small>
        </div>
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <div class="form-group has-success">
              <input
                type="text"
                placeholder="Your phone"
                class="form-control form-control-alternative is-valid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-5">
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <button class="btn btn-success" @click="handleSubmit">Send</button>
          <img v-if="isLoading" src="/img/loading.gif" alt="Loading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    //
  ],
  data() {
    return {
      isCompleteFormChecked: false,
      isLoading: false,
      model: {
        name: "",
        email: "",
        toggleSlider: "",
        phone: ""
      },
      validation: {
        isValidName: false,
        hasErrorName: false,
        isValidEmail: false,
        hasErrorEmail: false,
        isValidPhone: false,
        hasErrorPhone: false,
        isValidDescription: false,
        hasErrorDescription: false
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await update();
      } catch (error) {
        console.log(error);
      }
    },
    update(data) {
      //
    },
    toggleSlider() {
      let isSliderTogged = this.model.toggleSlider;

      this.isCompleteFormChecked = !isSliderTogged;
    }
  },
  mounted() {
    console.log("Component mounted.");
  },
  created() {
    console.log("Component created.");
    // this.selected = this.preference.value
  }
};
</script>

<style scoped>
</style>
<template>
  <div>
    <div class="form-group" v-for="setting in settings" :key="setting.id">
      <label :for="setting.key">{{ setting.key }}</label>
      <input
        type="text"
        class="form-control"
        :id="setting.key"
        v-model="setting.value"
        @change="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  props: [
    //
  ],
  data() {
    return {
      isLoading: false,
      settings: [],
    };
  },
  methods: {
    /**
     * Realiza a atualização do componente
     * @return {Void}
     */
    async handleSubmit(data) {
      try {
        await this.update(data);
      } catch (error) {
        throw error;
      }
    },

    /**
     * Updates the settings on database
     * @param {FormData} data
     * @return {JSON}
     */
    update(data) {
      let formData = {
        key: data.key,
        value: data.value,
      };

      axios
        .get("/api/settings", formData)
        .then((response) => {
          this.settings = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    /**
     * Loads all application settings
     * @return {Array} settings
     */
    loadSettings() {
      axios
        .get("/api/settings")
        .then((response) => {
          this.settings = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    // Loads the initial settings
    this.loadSettings();
  },
};
</script>

<style scoped></style>

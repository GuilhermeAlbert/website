<template>
  <div>
    <select class="form-control" v-model="model.language" @change.prevent="update">
      <option value="pt-br">{{ $t('preferences.locale.portuguese') }}</option>
      <option value="en">{{ $t('preferences.locale.english') }}</option>
    </select>
  </div>
</template>

<script>
import i18n from "../../locales/i18n";

export default {
  data() {
    return {
      model: {
        language: ""
      },
      selected: ""
    };
  },
  methods: {
    update() {
      // Save the preference into local storage
      localStorage.setItem("preferenceLanguage", this.model.language);

      // Get the preference inside local storage
      this.getPreferenceLanguage();
    },
    getPreferenceLanguage() {
      let language = localStorage.getItem("preferenceLanguage");

      if (language) {
        i18n.locale = language;
        this.model.language = language;
      } else {
        this.model.language = i18n.locale;
      }
    }
  },
  created() {
    this.getPreferenceLanguage();
  }
};
</script>
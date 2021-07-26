<template>
  <div>
    <div class="d-flex flex-column flex-center py-5 bgi-size-cover bgi-no-repeat rounded">
      <h6 class="ml-3">{{ speciality }}</h6>
      <span class="form-text text-muted mb-4 ml-2 mr-2">
        <a href="/after_register">Change Speciality</a>
      </span>
      <button class="btn btn-light-primary btn-bold" @click="onLogout">
        Sign out
      </button>
    </div>
  </div>
</template>

<script>
import { LOGOUT } from "@/core/services/store/auth.module";

export default {
  props: ['speciality'],
  name: "ExtraDropDown",
  methods: {
    onLogout() {
      this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie))
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    }
  },
  computed: {},
};
</script>

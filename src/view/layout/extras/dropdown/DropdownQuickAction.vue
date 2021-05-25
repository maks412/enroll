<template>
  <div>
    
    <!--begin::Header -->
    <div
      class="d-flex flex-column flex-center py-5 bgi-size-cover bgi-no-repeat rounded">
      <button class="btn btn-light-primary btn-bold" @click="onLogout">
              Sign out
      </button>
      
    </div>
    <!--end::Header -->

    <!--begin::Nav -->
    <!--end::Nav -->
  </div>
</template>

<script>

import { LOGOUT } from "@/core/services/store/auth.module";
import KTLayoutQuickUser from "@/assets/js/layout/extended/quick-user.js";

export default {
  name: "KTDropdownQuickAction",
  mounted() {
    // Init Quick User Panel
    KTLayoutQuickUser.init(this.$refs["kt_quick_user"]);
  },
  methods: {
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    }
    
  },
  computed: {
    
  }
};
</script>

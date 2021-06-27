<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      :class="{ 
        'login-signin-on': this.state == 'signin', 
        'login-signup-on': this.state == 'signup', 
        'login-forgot-on': this.state == 'forgot' 
      }"
      id="kt_login"
    >
      <div class="login-aside d-flex flex-column flex-row-auto" style="background-color: #fff0f0">
        <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <a href="" class="text-center mb-10">
            <img src="media/logos/sdu_logo.png" class="max-h-70px" alt="" />
          </a>
          <h3 class="font-weight-bolder text-center font-size-h4 font-size-h2-lg" style="color: #986923">
            SDU Enroll <br />build your bright future
          </h3>
        </div>
        <div
          class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
      </div>
      <div class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        <div class="d-flex flex-column-fluid flex-center">
          <!--begin::Signup-->
          <div class="login-form login-signup">
            <register-tab @switchVisibility_in="switchVisibility_in" @showForm="showForm" :show_hide="show_hide" @switchVisibility="switchVisibility"></register-tab>
          </div>
          <!--end::Signup-->

          <!--begin::Signin-->
          <div class="login-form login-signin">
            <login-tab @showForm="showForm" :show_hide="show_hide" :show_hide_in="show_hide_in" @switchVisibility="switchVisibility"></login-tab>
          </div>
          <!--end::Signin-->

          <!--begin::Forgot-->
          <div class="login-form login-forgot">
            <!--begin::Form-->
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_forgot_form"
              ref="kt_login_forgot_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Forgotten Password ?
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Enter your email to reset your password
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
                />
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0">
                <button
                  type="button"
                  id="kt_login_forgot_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <!--end::Forgot-->
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
  @import "@/assets/sass/pages/login/login-1.scss";

  .clickable{
    cursor: pointer;
  }
</style>

<script>
import KTUtil from "@/assets/js/components/util";
import { mapState } from "vuex";


import { mapGetters } from "vuex";

import registertab from './tabs/register.vue';
import logintab from './tabs/login.vue';

export default {
  name: "login-1",
  components: {
    'register-tab': registertab,
    'login-tab': logintab
  },
  data() {
    return {
      state: "signup",
      // Remove this dummy login info
      form: {
        // email: "admin@demo.com",
        // password: "demo",
        email: "",
        password: "",
      },
      passwordFieldType: "password",
      show_hide: "show",
      passwordFieldType_in: "password",
      show_hide_in: "show",
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),

    ...mapGetters(["currentUser", 'isAuthenticated']),
    backgroundImage() {
      return (
        process.env.BASE_URL + "media/svg/illustrations/login-visual-5.svg"
      );
    },
    backgroundLogo() {
      return process.env.BASE_URL + "media/svg/illustrations/Logo.png";
    },
  },
  methods: {
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
    },
    switchVisibility() {
      /*this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.show_hide = this.show_hide === "show" ? "hide" : "show";
      */
    },
    switchVisibility_in() {
      /*this.passwordFieldType_in =
        this.passwordFieldType_in === "password" ? "text" : "password";
      this.show_hide_in = this.show_hide_in === "show" ? "hide" : "show";
      */
    },
    loginIt(){
      alert('I am herer')
    }
  },
  mounted(){
    if (this.isAuthenticated) {
      this.$router.push({ name: "wizard-1" });
    }
  }
};
</script>

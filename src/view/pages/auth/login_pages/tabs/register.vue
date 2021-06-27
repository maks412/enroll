<template>
  <form class="form" @submit.prevent="registerStudent()">
    <div class="pb-13 pt-lg-0 pt-5">
      <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
        Sign Up
      </h3>
      <span class="text-muted font-weight-bold font-size-h4">
        Already have an account?
        <a id="kt_login_signup" class="text-primary font-weight-bolder clickable" @click="$emit('showForm', 'signin')">Sign In</a>
      </span>
    </div>
    <div class="form-group">
      <label class="font-size-h6 font-weight-bolder text-dark">Email</label>
      <input 
        class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6" 
        type="email"
        name="email"
        v-model="form.email"
        required />
    </div>
    <div class="form-group">
      <label class="font-size-h6 font-weight-bolder text-dark"
        >Password</label
      >
      <input
        class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
        placeholder=""
        name="password"
        type="password"
        v-model="form.password"
        required />
    </div>
    <div class="form-group">
      <label class="font-size-h6 font-weight-bolder text-dark">Confirm password</label>
      <input
        class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
        placeholder=""
        name="confpassword"
        type="password"
        v-model="form.confpassword"
        required />
    </div>

    <div class="alert alert-custom alert-notice  fade show" :class="status.code == 1 ? 'alert-light-success' : 'alert-light-danger'" v-if="status.message != ''" role="alert">
      <div class="alert-icon"><i class="flaticon-warning"></i></div>
      <div class="alert-text">{{ status.message }}</div>
      <div class="alert-close">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"><i class="ki ki-close"></i></span>
          </button>
      </div>
    </div>
    <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
      <button
        class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
        style="width: 150px"
      >
        Submit
      </button>
    </div>
  </form>
</template>
<style lang="scss">
  @import "@/assets/sass/pages/login/login-1.scss";

  .clickable{
    cursor: pointer;
  }
</style>

<script>
import { mapGetters } from "vuex";
var url = 'https://enroll.sdu.edu.kz' // window.location.origin;

export default {
  props: [
    'show_hide'
  ],
  name: "register",
  data() {
    return {
      form: {
        email: null,
        password: null,
        confpassword: null
      },
      status: {
        code: null,
        message: ''
      }
    };
  },
  computed: {},
  methods: {
    registerStudent(){
      var data = new FormData();
      data.append("json", JSON.stringify(this.form));

      fetch(url + "/backend/register.php", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: data
      }).then((response) => response.json()).then((res) => {
        this.status = res
        this.$emit('showForm', 'signin')
      }).catch(({ response }) => {
        console.log(response);
      });
    }
  },
};
</script>

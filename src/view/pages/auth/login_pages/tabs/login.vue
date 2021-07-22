<template>
  <form class="form" @submit.prevent="loginIt()">
    <div class="pb-13 pt-lg-0 pt-5">
      <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
        Welcome back to Enroll
      </h3>
    </div>
    <div class="form-group">
      <label class="font-size-h6 font-weight-bolder text-dark">Email</label>
      <div label="" label-for="example-input-1">
        <input
          class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
          type="email"
          name="email"
          v-model="form.email"
          required />
      </div>
    </div>
    <div class="form-group">
      <div class="d-flex justify-content-between mt-n5">
        <label class="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
        <a class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5 clickable" @click="$emit('showForm','forgot')">Forgot Password ?</a>
      </div>
      <div label-for="example-input-2">
        <input
          class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
          type="password"
          name="password"
          v-model="form.password"
          required />
      </div>
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
    <div class="pb-lg-0 pb-5">
      <button
        ref="kt_login_signin_submit"
        class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
        type="submit"
      >
        Sign In
      </button>
      <button type="button" class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3" @click="$emit('showForm', 'signup')">
        Cancel
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
import Swal from "sweetalert2";
var url = 'https://enroll.sdu.edu.kz' // window.location.origin;
import { mapGetters } from "vuex";

export default {
  props: [
    'show_hide',
    'show_hide_in'
  ],
  name: "register",
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      status: {
        code: null,
        message: ''
      }
    };
  },
  computed: {
    ...mapGetters([
      "isAuthenticated"
    ]),
  },
  methods: {
    loginIt(){
      var data = new FormData();
      data.append("json", JSON.stringify(this.form));

      fetch(url + "/backend/login.php", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: data
      }).then((response) => response.json()).then((res) => {
        
        if (res.CODE != null && res.CODE == "101") {
          this.$cookies.set('email', res.email);
          this.$cookies.set('token', res.token);

          Swal.fire({
            title: 'Successfully authentificated!',
            text: 'Your validation was successfully. We are redirecting you to our main page...',
            icon: 'success',
            confirmButtonText: 'Got it!'
          })

          if(res.AFTER_REG == '1'){
            this.$router.push({
              name: 'after_register'
            })
          }
          else{
            //this.$router.push("/after_register");
            location.reload();
          }
        }else{
          Swal.fire({
            title: 'Error!',
            text: 'Email or password is incorrect!',
            icon: 'error',
            confirmButtonText: 'Got it!'
          })
        }
      }).catch(({ response }) => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong',
          icon: 'error',
          confirmButtonText: 'Got it!'
        })
      });
    }
  },
  mounted(){
    if (this.$cookies.isKey('token') && this.$cookies.isKey('email')) {
        this.$router.push({ name: "wizard-1" });
        //location.reload();
        return false
    }
  }
};
</script>

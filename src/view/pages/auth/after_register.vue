<template>
  <div class="d-flex flex-column flex-root">
    <KTHeaderMobile></KTHeaderMobile>
    <Loader v-if="loaderEnabled" v-bind:logo="loaderLogo"></Loader>
    <div class="d-flex flex-row flex-column-fluid page">
      <div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
        <KTHeader></KTHeader>
        <div
          id="kt_content"
          class="content d-flex flex-column flex-column-fluid"
        >
          <div class="card-body p-0">
            <div class="row justify-content-center py-0 px-0 py-lg-0 px-lg-10">
              <div class="col-xl-12 col-xxl-7">
                <div
                  class="card card-custom card-shadowless rounded-top-0 after_register_p"
                >
                  <div class="pb-13 pt-lg-0 pt-5">
                    <h3
                      class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                    >
                      Registration Requirements
                    </h3>
                    <span class="text-muted font-weight-bold font-size-h4">
                      Basic Information to Registration
                    </span>
                  </div>
                  <div>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                      <b-form-group
                        id="citizenship"
                        label="Choose Citizenship"
                        label-for="citizenship_label"
                      >
                        <b-form-select
                          v-on:change="OnChange"
                          id="citizenship_select"
                          v-model="form.citizenship"
                          :options="country"
                          required
                        ></b-form-select>
                      </b-form-group>

                      <!-- Begin of Degree -->

                      <p id="citizenship__BV_label_">
                        Choose Education Program
                      </p>
                      <div class="form-group">
                        <b-tabs
                          pills
                          card
                          fill
                          v-model="form.tabDegree"
                          @input="change_speciality"
                        >
                          <template>
                            <b-tab
                              v-for="(d, index) in degree"
                              :key="index"
                              :title="d"
                            >
                              <b-card-text v-if="index == 0">
                                <p id="citizenship__BV_label_">
                                  Choose Education Type
                                </p>
                                <div class="form-group">
                                  <b-tabs
                                    pills
                                    card
                                    fill
                                    v-model="form.tab_bachDegree"
                                    type="is-toggle"
                                    @input="change_bach_speciality"
                                  >
                                    <b-tab title="Full" active></b-tab>
                                    <b-tab title="Shortened"></b-tab>
                                    <b-tab title="Second Higher"></b-tab>
                                  </b-tabs>
                                </div>
                                <!-- END of Degree -->
                              </b-card-text>
                            </b-tab>
                          </template>
                        </b-tabs>
                      </div>
                      <!-- END of Degree -->
                      <!-- Begin of Speciality -->
                      <b-form-group
                        id="citizenship"
                        label="Choose Speciality"
                        label-for="citizenship_label"
                      >
                        <b-form-select
                          id="citizenship_select"
                          v-model="form.speciality"
                          :options="show_speciality"
                          required
                        ></b-form-select>
                      </b-form-group>
                      <!-- END of Speciality -->

                      <!-- Begin of Payment -->
                      <b-form-group
                        id="citizenship"
                        label="Choose Tuition Payment"
                        label-for="citizenship_label"
                      >
                        <b-form-select
                          id="citizenship_select"
                          v-model="form.payment"
                          :options="payment"
                          required
                          v-on:change="OnChange_paid"
                        ></b-form-select>
                      </b-form-group>
                      <!-- END of Payment -->

                      <!-- Begin IELTS -->
                      <div>
                        <b-form-group
                          label="Do you have SDU English Entrance exam certificate or IELTS?"
                          label-size="lg"
                          class="font-weight-bold"
                        >
                          <b-form-radio-group
                            buttons="true"
                            button-variant="outline-primary"
                            id="radio-group-1"
                            v-model="form.IELTS"
                            :options="options"
                            name="radio-options"
                          >
                            <b-form-radio value="yes">yes</b-form-radio>
                            <b-form-radio value="no"
                              >no</b-form-radio
                            ></b-form-radio-group
                          >
                          <div style="display: inline; margin-left: 5%">
                            <b-link
                              v-if="form.IELTS == 'no'"
                              target="blank"
                              href="https://docs.google.com/forms/d/e/1FAIpQLSfvl1BmV_dPhTNZ2THgJKbZhgfwp771DFDqmU75B50TI99WEA/viewform?ts=60d04f1d&edit_requested=true"
                              >If you don't have, please follow this
                              link</b-link
                            >
                          </div>
                        </b-form-group>
                      </div>
                      <!-- END IELTS -->

                      <!-- Begin Interview -->
                      <div :style="{ display: Interview_div }">
                        <b-form-group
                          label="Have you passed international students interview?"
                          label-size="lg"
                          class="font-weight-bold"
                        >
                          <b-form-radio-group
                            buttons="true"
                            button-variant="outline-primary"
                            id="radio-group-2"
                            v-model="form.Interview"
                            :options="options"
                            name="radio-options"
                          >
                            <b-form-radio value="yes">yes</b-form-radio>
                            <b-form-radio value="no"
                              >no</b-form-radio
                            ></b-form-radio-group
                          >
                          <div style="display: inline; margin-left: 5%">
                            <b-link
                              v-if="form.Interview == 'no'"
                              target="blank"
                              href="https://docs.google.com/forms/d/e/1FAIpQLSftZA82vom7qPFNrAtTDdNlPLpED4NMk9pE04xLgtaFWetiAQ/viewform"
                              >If you didn't pass, please follow this
                              link</b-link
                            >
                          </div>
                        </b-form-group>
                      </div>
                      <!-- END Interview -->
                      <!-- Begin admin_Interview -->
                      <div :style="{ display: Admin_Interview_div }">
                        <b-form-group
                          label="Have you passed admission interview?"
                          label-size="lg"
                          class="font-weight-bold"
                        >
                          <b-form-radio-group
                            buttons="true"
                            button-variant="outline-primary"
                            id="radio-group-2"
                            v-model="form.admin_Interview"
                            :options="options"
                            name="radio-options"
                          >
                            <b-form-radio value="yes">yes</b-form-radio>
                            <b-form-radio value="no"
                              >no</b-form-radio
                            ></b-form-radio-group
                          >
                        </b-form-group>
                      </div>
                      <!-- END admin_Interview -->
                      <b-button
                        type="submit"
                        variant="primary"
                        style="float: right"
                        >Next <b-icon-chevron-right></b-icon-chevron-right
                      ></b-button>
                    </b-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <KTFooter></KTFooter>
      </div>
    </div>
    <KTStickyToolbar v-if="toolbarDisplay"></KTStickyToolbar>
    <KTScrollTop></KTScrollTop>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
// import KTAside from "@/view/layout/aside/Aside.vue";
import KTHeader from "@/view/layout/header/Header.vue";
import KTHeaderMobile from "@/view/layout/header/HeaderMobile.vue";
import KTFooter from "@/view/layout/footer/Footer.vue";
import HtmlClass from "@/core/services/htmlclass.service";
// import KTSubheader from "@/view/layout/subheader/Subheader.vue";
import KTStickyToolbar from "@/view/layout/extras/StickyToolbar.vue";
import KTScrollTop from "@/view/layout/extras/ScrollTop";
import Loader from "@/view/content/Loader.vue";
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME,
} from "@/core/services/store/htmlclass.module.js";

var url = "https://enroll.sdu.edu.kz"; // window.location.origin;

export default {
  name: "Layout",
  components: {
    KTHeader,
    KTHeaderMobile,
    KTFooter,
    KTStickyToolbar,
    KTScrollTop,
    Loader,
  },
  beforeMount() {
    // show page loading
    this.$store.dispatch(ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init(this.layoutConfig());
  },
  mounted() {
    // check if current user is authenticated
    if (!this.isAuthenticated) {
      this.$router.push({ name: "login" });
    }

    // Simulate the delay page loading
    setTimeout(() => {
      // Remove page loader after some time
      this.$store.dispatch(REMOVE_BODY_CLASSNAME, "page-loading");
    }, 2000);
  },

  computed: {
    ...mapGetters([
      "isAuthenticated",
      "breadcrumbs",
      "pageTitle",
      "layoutConfig",
    ]),

    /**
     * Check if the page loader is enabled
     * @returns {boolean}
     */
    loaderEnabled() {
      return !/false/.test(this.layoutConfig("loader.type"));
    },

    /**
     * Check if container width is fluid
     * @returns {boolean}
     */
    contentFluid() {
      return this.layoutConfig("content.width") === "fluid";
    },

    /**
     * Page loader logo image using require() function
     * @returns {string}
     */
    loaderLogo() {
      return process.env.BASE_URL + this.layoutConfig("loader.logo");
    },

    /**
     * Check if the left aside menu is enabled
     * @returns {boolean}
     */
    asideEnabled() {
      return !!this.layoutConfig("aside.self.display");
    },

    /**
     * Set the right toolbar display
     * @returns {boolean}
     */
    toolbarDisplay() {
      // return !!this.layoutConfig("toolbar.display");
      return true;
    },

    /**
     * Set the subheader display
     * @returns {boolean}
     */
    subheaderDisplay() {
      return !!this.layoutConfig("subheader.display");
    },
  },

  //for lists after_register
  data() {
    return {
      form: {
        citizenship: null,
        tabDegree: 0,
        tab_bachDegree: 0,
        IELTS: null,
        Interview: null,
        admin_Interview: null,
        speciality: null,
        payment: null,
        degree: null,
      },
      country: [],
      payment: ["State Grant", "Paid"],
      speciality: {},
      show_speciality: [],
      degree: [],
      show: true,
      Interview_div: "inline",
      Admin_Interview_div: "none",

      token: this.$cookies.get('token'),
      email: this.$cookies.get('email'),

      mod: "set_require",
      method: "set",
      action: "getAllData",
    };
  },
  async created() {
    var data_created = new FormData();
    data_created.append(
      "json",
      JSON.stringify({
        mod: "get_require",
        method: "get",
        action: "getAllData",
        token: this.$cookies.get("token"),
        email: this.$cookies.get("email"),
      })
    );
    fetch(url + "/backend/middle.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data_created,
    })
      .then((response) => response.json())
      .then((res) => {
        this.form.citizenship = res.country.selected_id;
        this.country = res.country.list;
        this.form.speciality = res.speciality.selected_id;
        this.speciality = res.speciality.list;
        this.form.IELTS = res.IELTS;
        this.form.Interview = res.Interview;
        this.form.admin_Interview = res.admin_Interview;
        this.form.payment = res.payment;
        this.show_speciality = this.speciality.B.a8;

        this.degree = res.degree.list;
        if (res.degree.value == "B") this.form.tabDegree = 0;
        if (res.degree.value == "M") this.form.tabDegree = 1;
        if (res.degree.value == "D") this.form.tabDegree = 2;

        this.$cookies.set('token', res.token);
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //alert(JSON.stringify(this.form));
      var data_send = new FormData();
      data_send.append("json", JSON.stringify(this.form));
      fetch(url + "/backend/middle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Access-Token": this.$cookies.get("token"),
          "Access-Email": this.$cookies.get("email"),
        },
        body: data_send,
      })
        .then((response) => response.json())
        .then(() => this.$router.push({ path: "/home/1" }));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    OnChange: function () {
      if (this.form.citizenship == "Kazakhstan") this.Interview_div = "none";
      else this.Interview_div = "inline";
    },
    OnChange_paid: function () {
      if (this.form.tab_bachDegree == 1 || this.form.tab_bachDegree == 2) {
        if (this.form.payment != "Paid") this.Admin_Interview_div = "none";
        else this.Admin_Interview_div = "inline";
      }
      if (this.form.tab_bachDegree == 0) this.Admin_Interview_div = "none";
    },
    change_speciality: function () {
      //a4 - second higher education
      //a6 - shortoned
      //a8 - full
      if (this.form.tabDegree == 0) {
        this.show_speciality = this.speciality.B.a8;
      }
      if (this.form.tabDegree == 1) {
        this.show_speciality = this.speciality.M;
      }
      if (this.form.tabDegree == 2) {
        this.show_speciality = this.speciality.D;
      }
    },
    change_bach_speciality: function () {
      this.OnChange_paid();
      if (this.form.tab_bachDegree == 0) {
        this.show_speciality = this.speciality.B.a8;
      }
      if (this.form.tab_bachDegree == 1) {
        this.show_speciality = this.speciality.B.a6;
      }
      if (this.form.tab_bachDegree == 2) {
        this.show_speciality = this.speciality.B.a4;
      }
    },
  },
};
</script>

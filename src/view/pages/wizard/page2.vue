<template>
  <div class="card card-custom card-transparent">
    <div class="card-body p-0">
      <!--begin: Wizard-->
      <div
        class="wizard wizard-4"
        id="kt_wizard_v4"
        data-wizard-state="step-first"
        data-wizard-clickable="true"
      >
        <!--begin: Wizard Nav-->
        <div class="wizard-nav">
          <div class="wizard-steps">
            <div
              class="wizard-step"
              data-wizard-type="step"
              data-wizard-state="current"
              v-for="(tab, index) in tabs"
              :key="index"
            >
              <div class="wizard-wrapper">
                <div class="wizard-number">{{ index + 1 }}</div>
                <div class="wizard-label">
                  <div class="wizard-title">{{ $t(tab.title) }}</div>
                  <div class="wizard-desc">{{ $t(tab.desc) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Nav -->

        <!--begin: Wizard Body-->
        <div class="card card-custom card-shadowless rounded-top-0">
          <div class="card-body p-0">
            <div class="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
              <div class="col-xl-12 col-xxl-7">
                <!--begin: Wizard Form-->
                <form class="form mt-0 mt-lg-10" id="kt_form">
                  <!--begin: Wizard Step 1-->
                  <div
                    class="pb-5"
                    data-wizard-type="step-content"
                    data-wizard-state="current"
                  >
                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page2.enter_school_details") }}
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.country") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.country"
                              :options="country"
                              required
                              size="lg"
                              v-on:change="press_country"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_country")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.province") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.province"
                              :options="province"
                              required
                              size="lg"
                              v-on:change="press_province"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_province")
                          }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.school") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.school"
                              :options="school"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_school")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-3">
                        <div class="form-group">
                          <label>{{ $t("page2.language") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.language"
                              :options="language_options"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_language")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-3">
                        <div class="form-group">
                          <label>{{ $t("page2.f_language") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.foreign_language"
                              :options="foreign_language"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_f_language")
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page2.enter_att_details") }}
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.attestat_type") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.attestat_type"
                              :options="attestat_type"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_attestat_type")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.attestat_series") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.attestat_series"
                              :options="attestat_series"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_attestat_series")
                          }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.attestat_no") }}</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            name="Nname"
                            v-model="form.attestat_number"
                          />
                          <span class="form-text text-muted">{{
                            $t("page2.enter_attestat_no")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.attestat_score") }}</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            name="lname"
                            v-model="form.attestat_score"
                          />
                          <span class="form-text text-muted">{{
                            $t("page2.enter_attestat_score")
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.given_date") }}</label>
                          <div>
                            <b-input-group class="mb-3">
                              <b-form-input
                                v-model="form.attestat_given_date"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
                              ></b-form-input>
                              <b-input-group-append>
                                <b-form-datepicker
                                  v-model="form.attestat_given_date"
                                  button-only
                                  right
                                  locale="en-US"
                                  aria-controls="example-input"
                                ></b-form-datepicker>
                              </b-input-group-append>
                            </b-input-group>
                          </div>
                          <span class="form-text text-muted">{{
                            $t("page2.enter_given_date")
                          }}</span>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <label>{{ $t("page2.upload_attestat") }}</label>
                        <b-form-file
                          multiple
                          v-model="form.attestat_upload"
                          :state="Boolean(file)"
                          :placeholder="$t('common.choose_file')"
                          :drop-placeholder="$t('common.drop_file')"
                          ><template slot="file-name" slot-scope="{ names }">
                            <b-badge variant="dark">{{ names[0] }}</b-badge>
                            <b-badge
                              v-if="names.length > 1"
                              variant="dark"
                              class="ml-1"
                            >
                              +
                              {{
                                $t("page2.more_files", {
                                  num: names.length - 1,
                                })
                              }}
                            </b-badge>
                          </template></b-form-file
                        >
                      </div>
                    </div>
                  </div>
                  <!--end: Wizard Step 2-->

                  <!--begin: Wizard Step 3-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page2.enter_prep_c_details") }}
                    </h4>
                    <!-- <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Country</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.preparation_country"
                              :options="preparation_country"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your preparation course country</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Province</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.preparation_province"
                              :options="preparation_province"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your preparation course city</span
                          >
                        </div>
                      </div>
                    </div> -->

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.preparation_course") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.preparation_course"
                              :options="preparation_course"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_preparation_course")
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end: Wizard Step 3-->

                  <!--begin: Wizard Actions -->
                  <div class="d-flex justify-content-between border-top pt-10">
                    <div class="mr-2">
                      <button
                        class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
                        data-wizard-type="action-prev"
                      >
                        {{ $t("common.previous") }}
                      </button>
                    </div>
                    <div>
                      <button
                        v-on:click="submit"
                        class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                        data-wizard-type="action-submit"
                      >
                        {{ $t("common.submit") }}
                      </button>
                      <button
                        class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                        data-wizard-type="action-next"
                      >
                        {{ $t("common.next_step") }}
                      </button>
                    </div>
                  </div>
                  <!--end: Wizard Actions -->
                </form>
                <!--end: Wizard Form-->
              </div>
            </div>
          </div>
        </div>
        <!--end: Wizard Bpdy-->
      </div>
      <!--end: Wizard-->
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-4.scss";
</style>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import KTUtil from "@/assets/js/components/util";
import KTWizard from "@/assets/js/components/wizard";
import Swal from "sweetalert2";

var url = "https://enroll.sdu.edu.kz"; // window.location.origin;

export default {
  data() {
    return {
      tabs: [
        { title: "page2.school_info", desc: "page2.school_info_d" },
        { title: "page2.attestat_info", desc: "page2.attestat_info_d" },
        {
          title: "page2.preparation_course",
          desc: "page2.preparation_course_d",
        },
      ],
      country: [],
      province: [],
      school: [],
      attestat_type: [],
      preparation_course: [],
      nationality: [],
      language_options: [],
      foreign_language: [],
      attestat_series: [],
      //preparation_province: [],
      //preparation_country: [],

      form: {
        country: null,
        province: null,
        school: null,
        language: "",
        foreign_language: null,
        attestat_type: "",
        attestat_series: "",
        attestat_number: "",
        attestat_score: "",
        attestat_given_date: null,
        attestat_upload: null,
        preparation_course: null,
        //preparation_country: null,
        //preparation_province: null,

        mod: "page2",
        method: "set",
        action: "setAllData",
      },
      file: "",
    };
  },
  async created() {
    var data_created = new FormData();
    data_created.append(
      "json",
      JSON.stringify({
        data: { mod: "page2", method: "get", action: "getAllData" },
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
        this.form.language = res.language.selected_id;
        this.language_options = res.language.list;
        this.form.foreign_language = res.foreign_language.selected_id;
        this.foreign_language = res.foreign_language.list;
        this.form.attestat_type = res.attestat_type.selected_id;
        this.attestat_type = res.attestat_type.list;
        this.form.attestat_series = res.attestat_series.selected_id;
        this.attestat_series = res.attestat_series.list;
        this.form.attestat_number = res.attestat_number;
        this.form.attestat_score = res.attestat_score;
        this.form.attestat_given_date = res.attestat_given_date;
        //this.form.attestat_upload = res.attestat_upload;
        this.form.preparation_course = res.preparation_course.selected_id;
        this.preparation_course = res.preparation_course.list;

        this.form.school = res.school.selected_id;
        this.school = res.school.list;

        this.form.country = res.country.selected_id;
        this.country = res.country.list;
        this.form.province = res.province.selected_id;
        this.province = res.province.list;
        
      });
  },
  name: "Wizard-4",
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Wizard", route: "wizard-1" },
      { title: "Wizard-4" },
    ]);

    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v4", {
      startStep: 1, // initial active step number
      clickableSteps: true, // allow step clicking
    });

    // Validation before going to next page
    wizard.on("beforeNext", function (/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    wizard.on("change", function (/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  },
  methods: {
    submit: function (e) {
      e.preventDefault();
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: this.form,
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
          if (res.code == 0) {
            Swal.fire({
              title: "",
              text: res.message,
              icon: "error",
              confirmButtonClass: "btn btn-secondary",
              heightAuto: false,
            });
          }
          if (res.code == 1) {
            Swal.fire({
              title: "",
              text: res.message,
              icon: "success",
              confirmButtonClass: "btn btn-secondary",
            });
            this.$router.push({ name: "/home/2" });
          }
        });
    },

    press_country: function () {
      this.get_address(0, "country", this.form.country);
    },
    press_province: function () {
      this.get_address(1, "province", this.form.province);
    },
    press_region: function () {
      this.get_address(2, "region", this.form.region);
    },
    press_city: function () {
      this.get_address(3, "city", this.form.city);
    },

    get_address: function (index, type1, value) {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            mod: "page2",
            method: "get",
            action: "getAddress",
            type: index,
            pid: value,
          },
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
          if (type1 == "country") {
            this.form.province = res.province.selected_id;
            this.province = res.province.list;
            this.form.school = res.school.selected_id;
            this.school = res.school.list;
          }
          if (type1 == "province") {
            this.form.school = res.school.selected_id;
            this.school = res.school.list;
          }
        });
    },
  },
};
</script>

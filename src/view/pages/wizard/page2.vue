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
                  <div class="wizard-title">{{ tab.title }}</div>
                  <div class="wizard-desc">{{ tab.desc }}</div>
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
                      Enter your School Details
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Country</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.country"
                              :options="country"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your schools country</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Province</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.province"
                              :options="province"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your schools city</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>School</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.school"
                              :options="school"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your school</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-3">
                        <div class="form-group">
                          <label>Language</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.language"
                              :options="language"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your language</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-3">
                        <div class="form-group">
                          <label>Foreign Language</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.foreign_language"
                              :options="foreign_language"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your foreign language</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      Enter Your Attestat Ditails
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Attestat type</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.attestat_type"
                              :options="attestat_type"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your attestat type</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Attestat Series</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.attestat_series"
                              :options="attestat_series"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your attestat series</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Attestat No</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            name="Nname"
                            v-model="form.attestat_number"
                          />
                          <span class="form-text text-muted"
                            >Please enter your attestat number.</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Attestat Score</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            name="lname"
                            v-model="form.attestat_score"
                          />
                          <span class="form-text text-muted"
                            >Please enter your attestat score.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Given Date</label>
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
                          <span class="form-text text-muted"
                            >Please enter your attestat given date</span
                          >
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <label>Upload your attestat</label>
                        <b-form-file
                          multiple
                          v-model="form.attestat_upload"
                          :state="Boolean(file)"
                          placeholder="Choose files..."
                          drop-placeholder="Drop file here..."
                          ><template slot="file-name" slot-scope="{ names }">
                            <b-badge variant="dark">{{ names[0] }}</b-badge>
                            <b-badge
                              v-if="names.length > 1"
                              variant="dark"
                              class="ml-1"
                            >
                              + {{ names.length - 1 }} More files
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
                      Enter your Preparation Course Details
                    </h4>
                    <div class="row">
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
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Preparation Course</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.preparation_course"
                              :options="preparation_course"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your preparation course</span
                          >
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
                        Previous
                      </button>
                    </div>
                    <div>
                      <button
                        v-on:click="submit"
                        class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
                        data-wizard-type="action-submit"
                      >
                        Submit
                      </button>
                      <button
                        class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
                        data-wizard-type="action-next"
                      >
                        Next Step
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

export default {
  data() {
    return {
      tabs: [
        { title: "School Information", desc: "Primary School" },
        { title: "Attestat Information", desc: "" },
        { title: "Preparation Course", desc: "" },
      ],
      country: [],
      province: [],
      school: [],
      attestat_type: [],
      preparation_course: [],
      nationality: [],
      language: [],
      foreign_language: [],
      attestat_series: [],
      preparation_province: [],
      preparation_country: [],

      form: {
        country: null,
        province: null,
        school: null,
        language: null,
        foreign_language: null,
        attestat_type: null,
        attestat_series: null,
        attestat_number: null,
        attestat_score: null,
        attestat_given_date: null,
        attestat_upload: null,
        preparation_course: null,
        preparation_country: null,
        preparation_province: null,

        mod: "page2",
        method: "set",
        action: "setAllData"
      },
    };
  },
  async created() {
    var data_created = new FormData();
    data_created.append("json", JSON.stringify({ mod: "page2", method: "get", action: "getAllData" }));
    fetch("./backend/middle.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data_created,
    })
      .then((response) => response.json())
      .then((res) => {
        this.form.country = res.country.selected_id;
        this.country = res.country.list;
        this.form.province = res.province.selected_id;
        this.province = res.province.list;
        this.form.school = res.school.selected_id;
        this.school = res.school.list;
        this.form.language = res.language.selected_id;
        this.language = res.language.list;
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
        this.form.preparation_country = res.preparation_country.selected_id;
        this.preparation_country = res.preparation_country.list;
        this.form.preparation_province = res.attestat_series.selected_id;
        this.preparation_province = res.preparation_province.list;
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
      data_created.append("json", JSON.stringify(this.form));
      fetch("./backend/middle.php", {
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
  },
};
</script>

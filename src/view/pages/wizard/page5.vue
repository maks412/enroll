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
                      Upload your Medical Document
                    </h4>

                    <div>
                      <b-form-file
                        multiple
                        v-model="form.certificate75"
                        :state="Boolean(file)"
                        placeholder="Choose a file or drop it here..."
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
                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      Upload your Achivements
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>SPT Certificate No</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.spt_number"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>SPT Score</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            name="lname"
                            v-model="form.spt_point"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-8">
                        <label>Upload your SPT Certificate</label>
                        <b-form-file
                          multiple
                          v-model="form.spt_upload"
                          :state="Boolean(file)"
                          placeholder="Choose SPT file..."
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
                    <hr />
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Infomatrix Certificate No</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.infomatrix_number"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Infomatrix Score</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            name="lname"
                            v-model="form.infomatrix_point"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-8">
                        <label>Upload your Infomatrix Certificate</label>
                        <b-form-file
                          multiple
                          v-model="form.infomatrix_upload"
                          :state="Boolean(file)"
                          placeholder="Choose SPT file..."
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
                      Upload Your Payment Documents
                    </h4>

                    <div class="row">
                      <div class="col-xl-8">
                        <label>Upload your Student Fee Receipt</label>
                        <b-form-file
                          multiple
                          v-model="form.student_fee"
                          :state="Boolean(file)"
                          placeholder="Choose Student fee..."
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
                    <hr />
                    <div class="row">
                      <div class="col-xl-8">
                        <label>Upload your Tuition Fee Receipt</label>
                        <b-form-file
                          multiple
                          v-model="form.tuition_fee"
                          :state="Boolean(file)"
                          placeholder="Choose Tuition Fee..."
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
                    <hr />
                    <div class="row">
                      <div class="col-xl-8">
                        <label
                          >Upload your English Language Course Receipt</label
                        >
                        <b-form-file
                          multiple
                          v-model="form.eng_course"
                          :state="Boolean(file)"
                          placeholder="Choose English Language Course..."
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
                  <!--end: Wizard Step 3-->

                  <!-- STEP 4 -->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      Enter Your Addtional Documents Information
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Creative Exam Reference</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.creative_exam_text"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <label
                          >Upload your Creative Exam Reference(if journal 6B03201)</label
                        >
                        <b-form-file
                          multiple
                          v-model="form.creative_exam"
                          :state="Boolean(file)"
                          placeholder="Choose Creative Exam..."
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

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>IPedagogical Test Reference</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.pedagogical_test_text"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <label
                          >Upload your Pedagogical Test Reference(If pedagog)</label
                        >
                        <b-form-file
                          multiple
                          v-model="form.eng_course"
                          :state="Boolean(file)"
                          placeholder="Choose Pedagogical Test..."
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
        { title: "Medical Document" },
        { title: "Achivements", desc: "" },
        { title: "Payments", desc: "" },
        { title: "Additional Documents", desc: "" },
      ],

      form: {
        certificate75: null,
        spt_number: null,
        spt_point: null,
        spt_upload: null,
        infomatrix_number: null,
        infomatrix_point: null,
        infomatrix_upload: null,
        student_fee: null,
        tuition_fee: null,
        eng_course: null,
        creative_exam: null,
        pedagogical_test: null,
        creative_exam_text: null,
        pedagogical_test_text: null,

        mod: "page5",
        method: "set",
        action: "setAllData"
      },
      file:''
    };
  },
  async created() {
    var data_created = new FormData();
    data_created.append("json", JSON.stringify({ mod: "page5", method: "get", action: "getAllData" }));
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

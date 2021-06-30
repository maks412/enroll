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
                      {{ $t("page6.upload_med_doc") }}
                    </h4>

                    <div>
                      <b-form-file
                        multiple
                        v-model="form.certificate75"
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
                              $t("common.more_files", { num: names.length - 1 })
                            }}
                          </b-badge>
                        </template></b-form-file
                      >
                    </div>
                  </div>
                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page6.upload_achievements") }}
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page6.spt_certificate_no") }}</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.spt_number"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page6.spt_score") }}</label>
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
                        <label>{{ $t("page6.upload_spt_certificate") }}</label>
                        <b-form-file
                          multiple
                          v-model="form.spt_upload"
                          :state="Boolean(file)"
                          :placeholder="$t('page6.choose_spt')"
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
                                $t("common.more_files", {
                                  num: names.length - 1,
                                })
                              }}
                            </b-badge>
                          </template></b-form-file
                        >
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page6.inf_certificate_no") }}</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.infomatrix_number"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page6.inf_score") }}</label>
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
                        <label>{{ $t("page6.upload_inf_certificate") }}</label>
                        <b-form-file
                          multiple
                          v-model="form.infomatrix_upload"
                          :state="Boolean(file)"
                          :placeholder="$t('page6.choose_inf')"
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
                                $t("common.more_files", {
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
                      {{ $t("page6.upload_payment_doc") }}
                    </h4>

                    <div class="row">
                      <div class="col-xl-8">
                        <label>{{ $t("page6.upload_stud_fee") }}</label>
                        <b-form-file
                          multiple
                          v-model="form.student_fee"
                          :state="Boolean(file)"
                          :placeholder="$t('page6.choose_stud_fee')"
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
                                $t("common.more_files", {
                                  num: names.length - 1,
                                })
                              }}
                            </b-badge>
                          </template></b-form-file
                        >
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-xl-8">
                        <label>{{ $t("page6.upload_tut_fee") }}</label>
                        <b-form-file
                          multiple
                          v-model="form.tuition_fee"
                          :state="Boolean(file)"
                          :placeholder="$t('page6.choose_tut_fee')"
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
                                $t("common.more_files", {
                                  num: names.length - 1,
                                })
                              }}
                            </b-badge>
                          </template></b-form-file
                        >
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-xl-8">
                        <label>{{ $t("page6.upload_eng") }}</label>
                        <b-form-file
                          multiple
                          v-model="form.eng_course"
                          :state="Boolean(file)"
                          :placeholder="$t('page6.choose_eng')"
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
                                $t("common.more_files", {
                                  num: names.length - 1,
                                })
                              }}
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
                      {{ $t("page6.enter_add_doc_info") }}
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{
                            $t("page6.creative_exam_referrence")
                          }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.creative_exam_text"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <label>{{
                          $t("page6.upload_creative_exam_referrence")
                        }}</label>
                        <b-form-file
                          multiple
                          v-model="form.creative_exam"
                          :state="Boolean(file)"
                          :placeholder="$t('page6.choose_creative_exam')"
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
                                $t("common.more_files", {
                                  num: names.length - 1,
                                })
                              }}
                            </b-badge>
                          </template></b-form-file
                        >
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page6.ped_test") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.pedagogical_test_text"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <label>{{ $t("page6.upload_ped_test") }}</label>
                        <b-form-file
                          multiple
                          v-model="form.eng_course"
                          :state="Boolean(file)"
                          :placeholder="$t('page6.choose_ped_test')"
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
                                $t("common.more_files", {
                                  num: names.length - 1,
                                })
                              }}
                              More files
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
        { title: this.$t("page6.med_doc"), desc: this.$t("page6.med_doc_d") },
        {
          title: this.$t("page6.achievements"),
          desc: this.$t("page6.achievements_d"),
        },
        { title: this.$t("page6.payments"), desc: this.$t("page6.payments_d") },
        { title: this.$t("page6.add_docs"), desc: this.$t("page6.add_docs_d") },
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
        data: { mod: "page5", method: "get", action: "getAllData" },
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
  },
};
</script>

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
                        v-model="certificate75"
                        @change="previewImage_multi"
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
                      <div
                        class="d-flex justify-content-between mt-3"
                        v-if="certificate75 != null && certificate75.length > 0"
                      >
                        <button
                          class="btn btn-primary"
                          @click="certificate75 = []"
                        >
                          {{ $t("common.reset") }}
                        </button>
                        <button class="btn btn-primary" @click="upload_multi()">
                          {{ $t("common.upload") }}
                        </button>
                      </div>
                    </div>

                    <div
                      class="text-center"
                      style="display: flex; flex-wrap: wrap"
                    >
                      <div
                        :v-if="previews.length > 0"
                        v-for="(image, i) in previews"
                        :key="i"
                        class="m-5"
                        style="display: block"
                      >
                        <img
                          :src="image"
                          class="img-thumbnail"
                          style="width: 15em; display: block"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-x-square-fill m-1"
                          viewBox="0 0 16 16"
                          @click="remove_upload_multi(i)"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                          />
                        </svg>
                      </div>
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
                          @change="previewImage"
                          id="upload_spt"
                          v-model="spt_upload"
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
                        <div
                          class="text-center"
                          style="display: flex; flex-wrap: wrap"
                        >
                          <div
                            v-if="preview_spt"
                            class="m-5"
                            style="display: block"
                          >
                            <img
                              :src="preview_spt"
                              class="img-thumbnail"
                              style="width: 15em; display: block"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="bi bi-x-square-fill m-1"
                              viewBox="0 0 16 16"
                              @click="remove_upload('upload_spt')"
                            >
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                              />
                            </svg>
                          </div>
                        </div>
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
                          @change="previewImage"
                          id="upload_infomatrix"
                          v-model="infomatrix_upload"
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

                        <div
                          class="text-center"
                          style="display: flex; flex-wrap: wrap"
                        >
                          <div
                            v-if="preview_infomatrix"
                            class="m-5"
                            style="display: block"
                          >
                            <img
                              :src="preview_infomatrix"
                              class="img-thumbnail"
                              style="width: 15em; display: block"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="bi bi-x-square-fill m-1"
                              viewBox="0 0 16 16"
                              @click="remove_upload('upload_infomatrix')"
                            >
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                              />
                            </svg>
                          </div>
                        </div>
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
                          @change="previewImage"
                          id="upload_studentFee"
                          v-model="student_fee"
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

                        <div
                          class="text-center"
                          style="display: flex; flex-wrap: wrap"
                        >
                          <div
                            v-if="preview_studentFee"
                            class="m-5"
                            style="display: block"
                          >
                            <img
                              :src="preview_studentFee"
                              class="img-thumbnail"
                              style="width: 15em; display: block"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="bi bi-x-square-fill m-1"
                              viewBox="0 0 16 16"
                              @click="remove_upload('upload_studentFee')"
                            >
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-xl-8">
                        <label>{{ $t("page6.upload_tut_fee") }}</label>
                        <b-form-file
                          @change="previewImage"
                          id="upload_tuitionFee"
                          v-model="tuition_fee"
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

                        <div
                          class="text-center"
                          style="display: flex; flex-wrap: wrap"
                        >
                          <div
                            v-if="preview_tuitionFee"
                            class="m-5"
                            style="display: block"
                          >
                            <img
                              :src="preview_tuitionFee"
                              class="img-thumbnail"
                              style="width: 15em; display: block"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="bi bi-x-square-fill m-1"
                              viewBox="0 0 16 16"
                              @click="remove_upload('upload_tuitionFee')"
                            >
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                              />
                            </svg>
                          </div>
                        </div>
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
                          @change="previewImage"
                          id="upload_creativeExam"
                          v-model="creative_exam"
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
                        <div
                          class="text-center"
                          style="display: flex; flex-wrap: wrap"
                        >
                          <div
                            v-if="preview_creativeExam"
                            class="m-5"
                            style="display: block"
                          >
                            <img
                              :src="preview_creativeExam"
                              class="img-thumbnail"
                              style="width: 15em; display: block"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="bi bi-x-square-fill m-1"
                              viewBox="0 0 16 16"
                              @click="remove_upload('upload_creativeExam')"
                            >
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                              />
                            </svg>
                          </div>
                        </div>
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
                          @change="previewImage"
                          id="upload_pedTest"
                          v-model="pedagogical_test"
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
                        <div
                          class="text-center"
                          style="display: flex; flex-wrap: wrap"
                        >
                          <div
                            v-if="preview_pedTest"
                            class="m-5"
                            style="display: block"
                          >
                            <img
                              :src="preview_pedTest"
                              class="img-thumbnail"
                              style="width: 15em; display: block"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              class="bi bi-x-square-fill m-1"
                              viewBox="0 0 16 16"
                              @click="remove_upload('upload_pedTest')"
                            >
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                              />
                            </svg>
                          </div>
                        </div>
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
import compress from "compress-base64";
import { createLogger } from "vuex";

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
      certificate75: null,
      previews: [],
      photos: null,
      spt_upload: null,
      infomatrix_upload: null,
      student_fee: null,
      tuition_fee: null,
      creative_exam: null,
      pedagogical_test: null,

      preview_spt: null,
      preview_infomatrix: null,
      preview_studentFee: null,
      preview_tuitionFee: null,
      preview_creativeExam: null,
      preview_pedTest: null,

      form: {
        spt_number: null,
        spt_point: null,
        infomatrix_number: null,
        infomatrix_point: null,
        creative_exam_text: null,
        pedagogical_test_text: null,

        mod: "page5",
        method: "set",
        action: "setAllData",
      },

      delids: {
        delid_multi: [],
        delid_spt: null,
        delid_infomatrix: null,
        delid_studentFee: null,
        delid_tuitionFee: null,
        delid_engCourse: null,
        delid_creativeExam: null,
        delid_pedTest: null,
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
        this.form.spt_number = res.spt_number;
        this.form.spt_point = res.spt_point;
        this.form.infomatrix_number = res.infomatrix_number;
        this.form.infomatrix_point = res.infomatrix_point;
        this.form.creative_exam_text = res.creative_exam_text;
        this.form.pedagogical_test_text = res.pedagogical_test_text;
      });
    this.getUpload_multi();
    this.getUpload("16", "upload_spt");
    this.getUpload("44", "upload_infomatrix");
    this.getUpload("36", "upload_studentFee");
    this.getUpload("35", "upload_tuitionFee");
    this.getUpload("27", "upload_creativeExam");
    this.getUpload("38", "upload_pedTest");
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
            var url2 = window.location.origin;
            window.location.replace(url2 + '/home/6')
          }
        });
    },

    getUpload_multi: function () {
      //Get Uploads Documents
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "33",
            method: "setUpload",
            action: "getImages",
            mod: "setUpload",
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
          for (var i = 0; i < res.response.length; i++) {
            this.delids.delid_multi.push(res.response[i].delid);
            this.previews.push(url + "/" + res.response[i].doc_path);
          }
        });
    },

    getUpload: function (doc_id, id) {
      //Get Uploads Documents
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: doc_id,
            method: "setUpload",
            action: "getImages",
            mod: "setUpload",
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
          for (var i = 0; i < res.response.length; i++) {
            if (id == "upload_spt") {
              this.delids.delid_spt = res.response[i].delid;
              this.preview_spt = url + "/" + res.response[i].doc_path;
            }
            if (id == "upload_infomatrix") {
              this.delids.delid_infomatrix = res.response[i].delid;
              this.preview_infomatrix = url + "/" + res.response[i].doc_path;
            }
            if (id == "upload_studentFee") {
              this.delids.delid_studentFee = res.response[i].delid;
              this.preview_studentFee = url + "/" + res.response[i].doc_path;
            }
            if (id == "upload_tuitionFee") {
              this.delids.delid_tuitionFee = res.response[i].delid;
              this.preview_tuitionFee = url + "/" + res.response[i].doc_path;
            }
            if (id == "upload_creativeExam") {
              this.delids.delid_creativeExam = res.response[i].delid;
              this.preview_creativeExam = url + "/" + res.response[i].doc_path;
            }
            if (id == "upload_pedTest") {
              this.delids.delid_pedTest = res.response[i].delid;
              this.preview_pedTest = url + "/" + res.response[i].doc_path;
            }
          }
        });
    },

    previewImage: function (e) {
      var input = e.target;
      var id = e.target.id;
      if (id == "upload_spt" && this.preview_spt) {
        Swal.fire({
          title: "",
          text: "Maximum images uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      if (id == "upload_infomatrix" && this.preview_infomatrix) {
        Swal.fire({
          title: "",
          text: "Maximum images uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      if (id == "upload_studentFee" && this.preview_studentFee) {
        Swal.fire({
          title: "",
          text: "Maximum images uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      if (id == "upload_tuitionFee" && this.preview_tuitionFee) {
        Swal.fire({
          title: "",
          text: "Maximum images uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      if (id == "upload_creativeExam" && this.preview_creativeExam) {
        Swal.fire({
          title: "",
          text: "Maximum images uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      if (id == "upload_pedTest" && this.preview_pedTest) {
        Swal.fire({
          title: "",
          text: "Maximum images uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (event) => {
          compress(event.target.result, {
            width: 400,
            type: "image/jpg", // default
            max: 200, // max size
            min: 20, // min size
            quality: 0.8,
          }).then((result) => {
            if (id == "upload_spt") this.preview_spt = result;

            if (id == "upload_infomatrix") this.preview_infomatrix = result;

            if (id == "upload_studentFee") this.preview_studentFee = result;

            if (id == "upload_tuitionFee") this.preview_tuitionFee = result;

            if (id == "upload_creativeExam") this.preview_creativeExam = result;

            if (id == "upload_pedTest") this.preview_pedTest = result;

            this.dataURLtoFile(result, id);
          });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    dataURLtoFile: function (dataurl, id) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      if (id == "upload_spt")
        this.spt_upload = new Blob([u8arr], { type: mime });
      if (id == "upload_infomatrix")
        this.infomatrix_upload = new Blob([u8arr], { type: mime });
      if (id == "upload_studentFee")
        this.student_fee = new Blob([u8arr], { type: mime });
      if (id == "upload_tuitionFee")
        this.tuition_fee = new Blob([u8arr], { type: mime });
      if (id == "upload_creativeExam")
        this.creative_exam = new Blob([u8arr], { type: mime });
      if (id == "upload_pedTest")
        this.pedagogical_test = new Blob([u8arr], { type: mime });

      this.upload(id);
    },

    upload: function (id) {
      var doc = null;
      var data_created = new FormData();
      if (id == "upload_spt") {
        doc = "16";
        data_created.append("file[]", this.spt_upload);
      }
      if (id == "upload_infomatrix") {
        doc = "44";
        data_created.append("file[]", this.infomatrix_upload);
      }
      if (id == "upload_studentFee") {
        doc = "36";
        data_created.append("file[]", this.student_fee);
      }
      if (id == "upload_tuitionFee") {
        doc = "35";
        data_created.append("file[]", this.tuition_fee);
      }
      if (id == "upload_creativeExam") {
        doc = "27";
        data_created.append("file[]", this.creative_exam);
      }
      if (id == "upload_pedTest") {
        doc = "38";
        data_created.append("file[]", this.pedagogical_test);
      }
      console.log(doc);
      var delid = null;
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: doc,
            mod: "page5",
            method: "setUpload",
            action: "setImage",
            upload: this.grant_cert,
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
          delid = res.docid;
        });

      if (id == "upload_spt") this.delids.delid_spt = delid;
      if (id == "upload_infomatrix") this.delids.delid_infomatrix = delid;
      if (id == "upload_studentFee") this.delids.delid_studentFee = delid;
      if (id == "upload_tuitionFee") this.delids.delid_tuitionFee = delid;
      if (id == "upload_creativeExam") this.delids.delid_creativeExam = delid;
      if (id == "upload_pedTest") this.delids.delid_pedTest = delid;
    },

    previewImage_multi: function (e) {
      if (this.delids.delid_multi.length >= 8) {
        Swal.fire({
          title: "",
          text: "Maximum imeges uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      var input = e.target;
      let slide = this.previews;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (event) => {
          compress(event.target.result, {
            width: 400,
            type: "image/*", // default
            max: 200, // max size
            min: 20, // min size
            quality: 0.8,
          }).then((result) => {
            slide.push(result);
            this.dataURLtoFile_multi(result);
          });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    dataURLtoFile_multi: function (dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      this.photos = new Blob([u8arr], { type: mime });
      this.upload_multi();
    },

    upload_multi: function () {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "33",
            mod: "page5",
            method: "setUpload",
            action: "setImage",
            upload: this.photos,
          },
          token: this.$cookies.get("token"),
          email: this.$cookies.get("email"),
        })
      );

      data_created.append("file[]", this.photos);

      fetch(url + "/backend/middle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data_created,
      })
        .then((response) => response.json())
        .then((res) => {
          this.delids.delid_multi.push(res.docid);
        });
    },
    remove_upload_multi: function (i) {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            delid: this.delids.delid_multi[i],
            method: "setUpload",
            action: "delImage",
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
          if (res.code == 1) {
            this.previews.splice(i, 1);
            this.delids.delid_multi.slice(i,1);
            this.certificate75 = null;
          }
        });
    },
    remove_upload: function (id) {
      if (id == "upload_spt") var delid = this.delids.delid_spt;
      if (id == "upload_infomatrix") var delid = this.delids.delid_infomatrix;
      if (id == "upload_studentFee") var delid = this.delids.delid_studentFee;
      if (id == "upload_tuitionFee") var delid = this.delids.delid_tuitionFee;
      if (id == "upload_creativeExam")
        var delid = this.delids.delid_creativeExam;
      if (id == "upload_pedTest") var delid = this.delids.delid_pedTest;

      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            delid: delid,
            method: "setUpload",
            action: "delImage",
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
          if (res.code == 1) {
            if (id == "upload_spt") {
              this.preview_spt = null;
              this.spt_upload = null;
            }
            if (id == "upload_infomatrix") {
              this.preview_infomatrix = null;
              this.infomatrix_upload = null;
            }
            if (id == "upload_studentFee") {
              this.preview_studentFee = null;
              this.student_fee = null;
            }
            if (id == "upload_tuitionFee") {
              this.preview_tuitionFee = null;
              this.tuition_fee = null;
            }
            if (id == "upload_creativeExam") {
              this.preview_creativeExam = null;
              this.creative_exam = null;
            }
            if (id == "upload_pedTest") {
              this.preview_pedTest = null;
              this.pedagogical_test = null;
            }
          }
        });
    },
  },
};
</script>

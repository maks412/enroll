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
                          <label class="required">{{
                            $t("page2.country")
                          }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.country"
                              :options="country"
                              required
                              :disabled="
                                status == 'ACCEPTED' || status == 'CONFIRMED'
                              "
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
                          <label class="required">{{
                            $t("page2.province")
                          }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.province"
                              :options="province"
                              required
                              :disabled="
                                status == 'ACCEPTED' || status == 'CONFIRMED'
                              "
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
                          <label class="required">{{
                            $t("page2.school")
                          }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.school"
                              :options="school"
                              required
                              :disabled="
                                status == 'ACCEPTED' || status == 'CONFIRMED'
                              "
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
                              :disabled="
                                status == 'ACCEPTED' || status == 'CONFIRMED'
                              "
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
                              :disabled="
                                status == 'ACCEPTED' || status == 'CONFIRMED'
                              "
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
                          <label class="required">{{
                            $t("page2.attestat_type")
                          }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.attestat_type"
                              :options="attestat_type"
                              required
                              :disabled="
                                status == 'ACCEPTED' || status == 'CONFIRMED'
                              "
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
                          <label class="required">{{
                            $t("page2.attestat_series")
                          }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.attestat_series"
                              :options="attestat_series"
                              required
                              :disabled="
                                status == 'ACCEPTED' || status == 'CONFIRMED'
                              "
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
                          <label class="required">{{
                            $t("page2.attestat_no")
                          }}</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            name="Nname"
                            v-model="form.attestat_number"
                            required
                            :disabled="
                              status == 'ACCEPTED' || status == 'CONFIRMED'
                            "
                          />
                          <span class="form-text text-muted">{{
                            $t("page2.enter_attestat_no")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label class="required">{{
                            $t("page2.attestat_score")
                          }}</label>
                          <input
                            type="number"
                            class="form-control form-control-solid form-control-lg"
                            name="lname"
                            v-model="form.attestat_score"
                            required
                            :disabled="
                              status == 'ACCEPTED' || status == 'CONFIRMED'
                            "
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
                          <label class="required">{{
                            $t("page2.given_date")
                          }}</label>
                          <div>
                            <b-input-group class="mb-3">
                              <b-form-input
                                v-model="form.attestat_given_date"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
                                required
                                :disabled="
                                  status == 'ACCEPTED' || status == 'CONFIRMED'
                                "
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
                        <label class="required">{{
                          $t("page2.upload_attestat")
                        }}</label>
                        <b-form-file
                          @change="previewImage"
                          v-model="attestat_upload"
                          :state="Boolean(file)"
                          :placeholder="$t('upload_format')"
                          :drop-placeholder="$t('common.drop_file')"
                          required
                          :disabled="
                            status == 'ACCEPTED' || status == 'CONFIRMED'
                          "
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
                              @click="remove_upload(i)"
                              v-if="
                                status != 'ACCEPTED' && status != 'CONFIRMED'
                              "
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
                      {{ $t("page2.enter_prep_c_details") }}
                    </h4>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page2.preparation_course") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.preparation_course"
                              :options="preparation_course"
                              :disabled="
                                status == 'ACCEPTED' || status == 'CONFIRMED'
                              "
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_preparation_course")
                          }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-12">
                        <label>{{ $t("page2.upload_prep") }}</label>
                        <b-form-file
                          v-model="prep_cert"
                          @change="previewImage_prep"
                          :state="Boolean(file)"
                          :disabled="
                            status == 'ACCEPTED' || status == 'CONFIRMED'
                          "
                          :placeholder="$t('upload_format')"
                          :drop-placeholder="$t('common.drop_files')"
                          ><template slot="file-name" slot-scope="{ names }">
                            <b-badge variant="dark">{{ names[0] }}</b-badge>
                            <b-badge
                              v-if="names.length > 1"
                              variant="dark"
                              class="ml-1"
                            >
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
                            v-if="preview"
                            class="m-5"
                            style="display: block"
                          >
                            <img
                              :src="preview"
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
                              @click="remove_upload_prep()"
                              v-if="
                                status != 'ACCEPTED' && status != 'CONFIRMED'
                              "
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
import { LOGOUT } from "@/core/services/store/auth.module";

var url = "https://enroll.sdu.edu.kz"; // window.location.origin;

export default {
  data() {
    return {
      status: this.$cookies.get("status"),

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
      previews: [],
      delids: [],
      attestat_upload: null,

      preview: null,
      prep_cert: null,
      delid: null,

      photos: null,
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
        this.preparation_course.unshift({ value: null, text: "" });

        this.form.school = res.school.selected_id;
        this.school = res.school.list;

        this.form.country = res.country.selected_id;
        this.country = res.country.list;
        this.form.province = res.province.selected_id;
        this.province = res.province.list;

        this.getUpload();
        this.getUpload_prep();
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
            var url2 = window.location.origin;
            window.location.replace(url2 + "/home/3");
          }
        });
    },

    getUpload: function () {
      //Get Uploads
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "1",
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
            this.delids.push(res.response[i].delid);
            this.previews.push(url + "/" + res.response[i].doc_path);
          }
        });
    },

    getUpload_prep: function () {
      //Get Uploads
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "41",
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
            this.delid = (res.response[i].delid);
            this.preview = (url + "/" + res.response[i].doc_path);
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
      if (index == 1) {
        data_created.append(
          "json",
          JSON.stringify({
            data: {
              mod: "page2",
              method: "get",
              action: "getAddress",
              type: index,
              pid: value,
              country: this.form.country,
            },
            token: this.$cookies.get("token"),
            email: this.$cookies.get("email"),
          })
        );
      } else {
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
      }
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

    previewImage: function (e) {
      if (this.delids.length >= 2) {
        Swal.fire({
          title: "",
          text: "Maximum images uploaded",
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
            max: 500, // max size
            min: 20, // min size
            quality: 0.8,
          }).then((result) => {
            slide.push(result);
            this.dataURLtoFile(result);
          });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    previewImage_prep: function (e) {
      if (this.delid) {
        Swal.fire({
            title: "",
            text: "Maximum images uploaded",
            icon: "error",
            confirmButtonClass: "btn btn-secondary",
          });
          return 0;
      }
      var input = e.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (event) => {
          compress(event.target.result, {
            width: 400,
            type: "image/jpg", // default
            max: 500, // max size
            min: 20, // min size
            quality: 0.8,
          }).then((result) => {
            this.preview = result;
            this.dataURLtoFile_prep(result);
          });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    dataURLtoFile_prep: function (dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      this.prep_cert = new Blob([u8arr], { type: mime });
      this.upload_prep();
    },

    upload_prep: function () {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "41",
            mod: "page2",
            method: "setUpload",
            action: "setImage",
          },
          token: this.$cookies.get("token"),
          email: this.$cookies.get("email"),
        })
      );
      data_created.append("file[]", this.prep_cert);
      fetch(url + "/backend/middle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data_created,
      })
        .then((response) => response.json())
        .then((res) => {
          this.delid = res.docid;
        });
    },

    remove_upload_prep: function(){
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            delid: this.delid,
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
            this.preview = null;
            this.delid = null;
          }
        });
      
    },

    dataURLtoFile: function (dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      this.photos = new Blob([u8arr], { type: mime });
      this.upload();
    },

    upload: function () {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "1",
            method: "setUpload",
            action: "setImage",
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
          this.photos = null;
          this.delids.push(res.docid);
        });
    },
    remove_upload: function (i) {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            delid: this.delids[i],
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
            this.attestat_upload = null;
          }
        });
    },
  },
};
</script>
<style>
.required:after {
  content: " *";
  color: red;
}
</style>
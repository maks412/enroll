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
                      {{ $t("page2.enter_university_details") }}
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label class="required">{{
                            $t("page2.degree_type")
                          }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.degree_type"
                              :options="degree_type"
                              required
                              :disabled="
                                status == 'ACCEPTED' || status == 'CONFIRMED'
                              "
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page2.choose_degree")
                          }}</span>
                        </div>
                      </div>
                    </div>

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
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label class="required">{{
                            $t("page2.university")
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
                            $t("page2.choose_university")
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
                      <div class="col-xl-12">
                        <label class="required">{{
                          $t("page2.upload_diplom")
                        }}</label>
                        <b-form-file
                          @change="previewImage"
                          v-model="attestat_upload"
                          :state="Boolean(file)"
                          :placeholder="$t('common.choose_file')"
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
                    <hr />
                    <div class="row">
                      <div class="col-xl-12">
                        <label class="required">{{
                          $t("page2.upload_test")
                        }}</label>
                        <b-form-file
                          @change="test_previewImage"
                          v-model="test_upload"
                          :state="Boolean(file)"
                          :placeholder="$t('common.choose_file')"
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
                            :v-if="test_previews.length > 0"
                            v-for="(image, i) in test_previews"
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
                              @click="test_remove_upload(i)"
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
                    <hr v-if="degree_doc" />
                    <div class="row" v-if="degree_doc">
                      <div class="col-xl-12">
                        <label class="required">{{
                          $t("page2.upload_ref")
                        }}</label>
                        <b-form-file
                          @change="ref_previewImage"
                          v-model="ref_upload"
                          :state="Boolean(file)"
                          :placeholder="$t('common.choose_file')"
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
                            :v-if="ref_previews.length > 0"
                            v-for="(image, i) in ref_previews"
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
                              @click="ref_remove_upload(i)"
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

var url = "https://enroll.sdu.edu.kz"; // window.location.origin;

export default {
  data() {
    return {
      status: this.$cookies.get("status"),
      degree_doc: false,
      tabs: [
        { title: "page2.school_info", desc: "page2.school_info_d" },
        { title: "page2.attestat_info", desc: "page2.attestat_info_d" },
      ],
      country: [],
      degree_type: [
        { text: "Bachelor", value: "B" },
        { text: "Master", value: "M" },
        { text: "Doctorate", value: "DR" },
      ],
      school: [],
      nationality: [],
      previews: [],
      test_previews: [],
      ref_previews: [],
      delids: [],
      test_delids: [],
      ref_delids: [],
      attestat_upload: null,
      test_upload: null,
      ref_upload: null,

      photos: null,
      form: {
        country: null,
        degree_type: null,
        school: null,
        manid: null,

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
        this.form.country = res.country.selected_id;
        this.country = res.country.list;
        this.form.school = res.school.selected_id;
        this.school = res.school.list;
        this.form.manid = res.manid;
        this.form.degree_type = res.degree_type;

        this.getUpload();
        this.test_getUpload();
        this.ref_getUpload();
        this.getDegree();
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

    test_getUpload: function () {
      //Get Uploads
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "31",
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
            this.test_delids.push(res.response[i].delid);
            this.test_previews.push(url + "/" + res.response[i].doc_path);
          }
        });
    },

    ref_getUpload: function () {
      //Get Uploads
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "????",
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
            this.ref_delids.push(res.response[i].delid);
            this.ref_previews.push(url + "/" + res.response[i].doc_path);
          }
        });
    },

    getDegree: function () {
      //Get Uploads
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            method: "getDegree",
            action: "get",
            mod: "getDegree",
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
          this.degree_doc = res.degree;
        });
    },

    press_country: function () {
      this.get_address(0, "country", this.form.country);
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

    test_previewImage: function (e) {
      if (this.test_delids.length >= 2) {
        Swal.fire({
          title: "",
          text: "Maximum images uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      var input = e.target;
      let slide = this.test_previews;
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
            this.test_dataURLtoFile(result);
          });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    ref_previewImage: function (e) {
      if (this.ref_delids.length >= 2) {
        Swal.fire({
          title: "",
          text: "Maximum images uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      var input = e.target;
      let slide = this.ref_previews;
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
            this.ref_dataURLtoFile(result);
          });
        };
        reader.readAsDataURL(input.files[0]);
      }
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

    test_dataURLtoFile: function (dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      this.test_photos = new Blob([u8arr], { type: mime });
      this.test_upload();
    },

    ref_dataURLtoFile: function (dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      this.ref_photos = new Blob([u8arr], { type: mime });
      this.ref_upload();
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

    test_upload: function () {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "31",
            method: "setUpload",
            action: "setImage",
          },
          token: this.$cookies.get("token"),
          email: this.$cookies.get("email"),
        })
      );
      data_created.append("file[]", this.test_photos);

      fetch(url + "/backend/middle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data_created,
      })
        .then((response) => response.json())
        .then((res) => {
          this.test_photos = null;
          this.test_delids.push(res.docid);
        });
    },

    ref_upload: function () {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "?????",
            method: "setUpload",
            action: "setImage",
          },
          token: this.$cookies.get("token"),
          email: this.$cookies.get("email"),
        })
      );
      data_created.append("file[]", this.ref_photos);

      fetch(url + "/backend/middle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data_created,
      })
        .then((response) => response.json())
        .then((res) => {
          this.ref_photos = null;
          this.ref_delids.push(res.docid);
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

    test_remove_upload: function (i) {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            delid: this.test_delids[i],
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
            this.test_previews.splice(i, 1);
            this.test_upload = null;
          }
        });
    },

    ref_remove_upload: function (i) {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            delid: this.ref_delids[i],
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
            this.ref_previews.splice(i, 1);
            this.ref_upload = null;
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
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
              <!-- <div class="wizard-wrapper">
                <div class="wizard-number">{{ index + 1 }}</div>
                <div class="wizard-label">
                  <div class="wizard-title">{{ tab.title }}</div>
                  <div class="wizard-desc">{{ tab.desc }}</div>
                </div>
              </div> -->
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
                      {{ $t("page5.eng_test_info") }}<br />
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page5.eng_certificate") }}</label>
                          <b-form-select
                            v-model="form.english_certificate"
                            :options="english_certificate_options"
                            required
                            size="lg"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label> {{ $t("page5.certificate_num") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.certificate_number"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <label>{{ $t("page5.upload_certificate") }}</label>
                        <b-form-file
                          v-model="certificate_upload"
                          @change="previewImage"
                          :state="Boolean(file)"
                          :placeholder="$t('page5.choose_certificate')"
                          :drop-placeholder="$t('common.drop_files')"
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
                              @click="remove_upload()"
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
                  <!--end: Wizard Step 1-->

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
      tabs: [""],
      english_certificate_options: [
        { text: "IELTS", value: "8" },
        { text: "TOEFL", value: "49" },
        { text: "SDU Language Test", value: "" },
      ],
      certificate_upload: null,
      preview: null,
      delids: null,
      form: {
        english_certificate: null,
        certificate_number: "",

        mod: "page4_ielts",
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
        data: { mod: "page4_ielts", method: "get", action: "getAllData" },
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
        this.form.english_certificate = res.english_certificate;
        this.form.certificate_number = res.certificate_number;
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
            location.replace("/#/home/5");
          }
        });
    },

    previewImage: function (e) {
      var input = e.target;
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
            this.preview = result;
            this.dataURLtoFile(result);
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
      this.certificate_upload = new Blob([u8arr], { type: mime });
      this.upload();
    },

    upload: function () {
      var data_created = new FormData();
      
      console.log(this.form.english_certificate);
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: this.form.english_certificate,
            mod: "page4_ielts",
            method: "setUpload",
            action: "setImage",
          },
          token: this.$cookies.get("token"),
          email: this.$cookies.get("email"),
        })
      );
      data_created.append("file[]", this.certificate_upload);
      fetch(url + "/backend/middle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data_created,
      })
        .then((response) => response.json())
        .then((res) => {
          this.delids = res.docid;
        });
    },
    remove_upload: function () {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            delid: this.delids,
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
          }
        });
    },
  },
};
</script>

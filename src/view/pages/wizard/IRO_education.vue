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
                            :disabled="status == 'ACCEPTED' || status == 'CONFIRMED'"
                            size="lg"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label class="required"> {{ $t("page5.certificate_num") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.certificate_number"
                            :disabled="status == 'ACCEPTED' || status == 'CONFIRMED'"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <label class="required">{{ $t("page5.upload_certificate") }}</label>
                        <b-form-file
                          v-model="certificate_upload"
                          @change="previewImage"
                          :state="Boolean(file)"
                          :placeholder="$t('page5.choose_certificate')"
                          :drop-placeholder="$t('common.drop_files')"
                          :disabled="status == 'ACCEPTED' || status == 'CONFIRMED'"
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
                              v-if="status != 'ACCEPTED' && status != 'CONFIRMED'"
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

                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page6.transcript_info") }}<br />
                    </h4>

                    <div class="row">
                      <div class="col-xl-12">
                        <label>{{ $t("page6.upload_transcript") }}</label>
                        <b-form-file
                          v-model="transcript_upload"
                          @change="previewImage_trans"
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
                            v-if="preview_trans"
                            class="m-5"
                            style="display: block"
                          >
                            <img
                              :src="preview_trans"
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
                              @click="remove_upload_trans()"
                            >
                              <path
                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr>
                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page6.interview_info") }}<br />
                    </h4>
                    <!-- collage result -->
                      <div class="row">
                        <div class="col-xl-12">
                          <label>{{ $t("page6.upload_interview") }}</label>
                          <b-form-file
                            @change="previewImage_multi_college"
                            id="upload_college"
                            v-model="college_upload"
                            :state="Boolean(file)"
                            :placeholder="$t('page6.choose_interview')"
                            :drop-placeholder="$t('common.drop_file')"
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
                              :v-if="preview_college.length > 0"
                              v-for="(image, i) in preview_college"
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
                                @click="remove_upload_multi_college(i)"
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
      status: this.$cookies.get("status"),
      tabs: [""],
      english_certificate_options: [],
      certificate_upload: null,
      transcript_upload: null,
      preview: null,
      preview_trans: null,
      delids: null,
      delids_trans: null,
      doc_path: null,

      photos_college: [],
      college_upload: null,
      preview_college: [],
      delid_college: [],
      
      form: {
        english_certificate: null,
        certificate_number: "",

        mod: "page4_ielts",
        method: "setUpload",
        action: "setEngCert",
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
        this.form.english_certificate = res.cert_types.selected_id;
        this.form.certificate_number = res.result.cert_no;
        this.english_certificate_options = res.cert_types.list;

        this.delids = res.result.docid;
        this.preview = url+"/"+res.result.doc_path;
        this.form.doc_path = res.result.doc_path;
        if (res.result.doc_path == null) {
          this.preview = null;
          this.form.doc_path = null;
        }

        this.getUpload();
        this.getUpload_multi_college();
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
            this.delids = res.docid;
            Swal.fire({
              title: "",
              text: res.message,
              icon: "success",
              confirmButtonClass: "btn btn-secondary",
            });
            var url2 = window.location.origin;
            window.location.replace(url2 + '/home/IRO_contact')
          }
        });
    },

    getUpload: function(){
      //Get Uploads
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: { docid: "13", method: "setUpload", action: "getImages", mod: "setUpload" },
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
          for(var i = 0; i < res.response.length; i++){
            this.delids_trans = res.response[i].delid;
            this.preview_trans = url+"/"+res.response[i].doc_path;
          }
        });
    },

    getUpload_multi_college: function () {
      //Get Uploads Documents
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "42",
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
            this.delid_college.push(res.response[i].delid);
            this.preview_college.push(url + "/" + res.response[i].doc_path);
          }
        });
    },

    previewImage: function (e) {
      if (this.preview) {
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
            this.dataURLtoFile(result);
          });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    previewImage_multi_college: function (e) {
      console.log(this.delid_college.length);
      if (this.delid_college.length >= 2) {
        Swal.fire({
          title: "",
          text: "Maximum imeges uploaded",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
        });
        return 0;
      }
      var input = e.target;
      let slide = this.preview_college;
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
            this.dataURLtoFile_multi_college(result);
          });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    dataURLtoFile_multi_college: function (dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      this.photos_college.push(new Blob([u8arr], { type: mime }));
      this.upload_multi_college();
    },

    upload_multi_college: function () {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "42",
            mod: "page5",
            method: "setUpload",
            action: "setImage",
            upload: this.photos_college,
          },
          token: this.$cookies.get("token"),
          email: this.$cookies.get("email"),
        })
      );

      data_created.append("file[]", this.college_upload);

      fetch(url + "/backend/middle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data_created,
      })
        .then((response) => response.json())
        .then((res) => {
          if(res.code == 1){
            this.delid_college.push(res.docid);
          }
        });
    },

    remove_upload_multi_college: function (i) {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            delid: this.delid_college[i],
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
            this.preview_college.splice(i, 1);
            this.delid_college.slice(i, 1);
            this.college_upload = null;
          }
        });
    },

    previewImage_trans: function (e) {
      if (this.preview_trans) {
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
            this.preview_trans = result;
            this.dataURLtoFile_trans(result);
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
    },

    dataURLtoFile_trans: function (dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      this.transcript_upload = new Blob([u8arr], { type: mime });
      this.upload_trans();
    },

    upload: function () {
      var data_created = new FormData();
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

    upload_trans: function () {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            docid: "13",
            mod: "page4_ielts",
            method: "setUpload",
            action: "setImage",
          },
          token: this.$cookies.get("token"),
          email: this.$cookies.get("email"),
        })
      );
      data_created.append("file[]", this.transcript_upload);
      fetch(url + "/backend/middle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data_created,
      })
        .then((response) => response.json())
        .then((res) => {
          this.delids_trans = res.docid;
        });
    },
    remove_upload: function () {
      this.preview = null;
      this.delids = null;
      this.certificate_upload = null;
    },

    remove_upload_trans: function () {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            delid: this.delids_trans,
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
            this.preview_trans = null;
            this.delids_trans = null;
          }
        });
    },
  },
};
</script>
<style>
  .required:after {
    content:" *";
    color: red;
  }
</style>
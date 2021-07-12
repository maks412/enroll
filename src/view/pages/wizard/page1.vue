<template>
  <div class="card card-custom card-transparent">
    <div class="card-body p-0">
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
                  <div class="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page1.enter_acc_details") }}
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <!-- citizenship -->
                        <div class="form-group">
                          <label>{{ $t("page1.citizenship") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="fname"
                            v-model="form.citizenship"
                            disabled
                          />
                          <span class="form-text text-muted"
                            ><a href="/#/after_register">{{
                              $t("page1.change_citizenship")
                            }}</a></span
                          >
                        </div>
                      </div>
                      <!-- END citizenship -->
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.f_name") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="fname"
                            v-model="form.fname"
                            required
                          />
                          <span class="form-text text-muted">{{
                            $t("page1.enter_f_name")
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.native_name") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="Nname"
                            v-model="form.nname"
                          />
                          <span class="form-text text-muted">{{
                            $t("page1.enter_n_f_name")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.last_name") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="lname"
                            v-model="form.lname"
                            required
                          />
                          <span class="form-text text-muted">{{
                            $t("page1.enter_l_name")
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.native_last_name") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="Nsurname"
                            v-model="form.nlname"
                          />
                          <span class="form-text text-muted">{{
                            $t("page1.enter_n_l_name")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.patronymic") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="patronymic"
                            v-model="form.patronymic"
                          />
                          <span class="form-text text-muted">{{
                            $t("page1.enter_patronymic")
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <label>{{ $t("page1.upload_pic") }}</label>
                        <div class="custom-file mb-3">
                          <input type="file" class="custom-file-input" accept="image/png, image/gif, image/jpeg" id="customFile" @change="croppie">
                          <label class="custom-file-label" for="customFile">Choose an image</label>
                        </div>
                        <vue-croppie @update="update" ref="croppieRef" :enableOrientation="true" :boundary="{ width: '100%', height: 500 }" :viewport="{ width: 300, height: 300, type: 'square' }"> </vue-croppie>
                      </div>
                      <div class="col-xl-6">
                        <div>
                          <img
                            v-if="croppieImage != ''"
                            :src="croppieImage"
                            class="img-fluid rounded"
                            style="width: 200px; height: 200px;"
                            />
                        </div>
                        <button type="button" class="btn btn-primary mt-2" @click="upload()">
                          {{ $t("common.uploadwithCrop") }}
                        </button>

                        <button type="button" class="btn btn-danger mt-2 ml-2" @click="deleteProfile()" v-if="croppieImage != null">
                          {{ $t("common.deleteProfileImage") }}
                        </button>
                      </div>
                    </div>
                  </div>

                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page1.enter_acc_details") }}
                    </h4>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.date_of_birth") }}</label>
                          <div>
                            <b-input-group class="mb-3">
                              <b-form-input
                                v-model="form.birthday"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
                                size="lg"
                                required
                              ></b-form-input>
                              <b-input-group-append>
                                <b-form-datepicker
                                  v-model="form.birthday"
                                  button-only
                                  right
                                  locale="en-US"
                                  aria-controls="example-input"
                                ></b-form-datepicker>
                              </b-input-group-append>
                            </b-input-group>
                          </div>
                          <span class="form-text text-muted">{{
                            $t("page1.enter_date_of_birth")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.nationality") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.nationality"
                              :options="nationality"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page1.enter_nationality")
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.gender") }}</label>
                          <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-radio-group
                              v-model="form.gender"
                              :options="gender_options"
                              :aria-describedby="ariaDescribedby"
                              size="lg"
                              required
                            ></b-form-radio-group>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page1.choose_gender")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.married_status") }}</label>
                          <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-radio-group
                              v-model="form.married"
                              :options="gender_married"
                              :aria-describedby="ariaDescribedby"
                              size="lg"
                              required
                            ></b-form-radio-group>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page1.choose_married_status")
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.social_status") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.social_status"
                              :options="social_status"
                              required
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted">{{
                            $t("page1.choose_social_status")
                          }}</span>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <label>{{ $t("page1.upload_status_document") }}</label>
                        <div class="custom-file mb-3">
                          <input accept="image/png, image/gif, image/jpeg" type="file" class="custom-file-input" id="socialStatusFile" @change="social_status_doc">
                          <label class="custom-file-label" for="socialStatusFile">{{ social_status_upload_image_name }}</label>
                        </div>

                        <div
                          class="d-flex justify-content-between mt-3"
                          v-if="
                            social_status_upload_image != null"
                        >
                          <button
                            class="btn btn-primary"
                            @click="social_status_upload_image = null; social_status_upload_image_name = 'Choose an image'"
                          >
                            {{ $t("common.reset") }}
                          </button>

                          <button class="btn btn-primary" @click="upload_social_status_doc()">
                            {{ $t("common.upload") }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end: Wizard Step 2-->

                  <!--begin: Wizard Step 3-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page1.enter_acc_details") }}
                    </h4>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>{{ $t("page1.doc_type") }}</label>
                        <b-form-group v-slot="{ ariaDescribedby }">
                          <b-form-radio-group
                            v-model="form.document_type"
                            :options="document_options"
                            :aria-describedby="ariaDescribedby"
                            name="radio-inline"
                            size="lg"
                            required
                          ></b-form-radio-group>
                        </b-form-group>
                        <span class="form-text text-muted">{{
                          $t("page1.choose_doc_type")
                        }}</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.iin") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="IIN"
                            v-model="form.IIN"
                            required
                          />
                          <span class="form-text text-muted">{{
                            $t("page1.enter_iin")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.doc_no") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.document_no"
                            required
                          />
                          <span class="form-text text-muted">{{
                            $t("page1.enter_doc_no")
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.issued_by") }}</label>
                          <b-form-select
                            v-model="form.issued_by"
                            :options="issued_options"
                            required
                            size="lg"
                          ></b-form-select>
                          <span class="form-text text-muted">{{
                            $t("page1.select_issued_by")
                          }}</span>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page1.issued_date") }}</label>
                          <div>
                            <b-input-group class="mb-3">
                              <b-form-input
                                v-model="form.issued_date"
                                type="text"
                                placeholder="YYYY-MM-DD"
                                autocomplete="off"
                                size="lg"
                                required
                              ></b-form-input>
                              <b-input-group-append>
                                <b-form-datepicker
                                  v-model="form.issued_date"
                                  button-only
                                  right
                                  locale="en-US"
                                  aria-controls="example-input"
                                ></b-form-datepicker>
                              </b-input-group-append>
                            </b-input-group>
                          </div>
                          <span class="form-text text-muted">{{
                            $t("page1.enter_issued_date")
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label>{{ $t("page1.documents") }}</label>
                      <div class="custom-file mb-3">
                        <input accept="image/png, image/gif, image/jpeg" type="file" class="custom-file-input" id="documents" @change="docfiles_upload">
                        <label class="custom-file-label" for="documents">{{ document_image_name }}</label>
                      </div>

                      <div
                        class="d-flex justify-content-between mt-3"
                        v-if="document_image != null "
                      >
                        <button
                          class="btn btn-primary"
                          @click="document_image = null; document_image_name = 'Choose an image'"
                        >
                          {{ $t("common.reset") }}
                        </button>
                        <button class="btn btn-primary" @click="upload_document()">
                          {{ $t("common.upload") }}
                        </button>
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

import ApiService from "@/core/services/api.service.js";
import compress from "compress-base64";
import Button from "../vue-bootstrap/Button.vue";

var url = "https://enroll.sdu.edu.kz"; // window.location.origin;

export default {
  components: { Button },
  data() {
    return {
      croppieImage: '',
      cropped: null,

      social_status_upload_image: null,
      social_status_upload_image_name: 'Choose an image',

      document_image: null,
      document_image_name: 'Choose an image',

      tabs: [
        { title: "page1.personal_info", desc: "page1.personal_info_d" },
        { title: "page1.additional_info", desc: "page1.additional_info_d" },
        { title: "page1.doc_info", desc: "page1.doc_info_d" },
      ],
      gender_options: [
        { text: this.$t("page1.male"), value: "male" },
        { text: this.$t("page1.female"), value: "female" },
      ],
      gender_married: [
        { text: this.$t("page1.single"), value: "single" },
        { text: this.$t("page1.married"), value: "married" },
      ],
      document_options: [
        { text: this.$t("page1.id"), value: "22" },
        { text: this.$t("page1.passport"), value: "7" },
      ],
      issued_options: [
        { text: this.$t("page1.ministry"), value: "ministry" },
        { text: this.$t("page1.passport"), value: "passport" },
      ],
      nationality: [],
      social_status: [],
      preview: null,
      photo: null,
      social_status_upload: [],
      documents_upload: [],
      form: {
        citizenship: "",
        birthday: "",
        nationality: null,
        social_status: null,
        gender: "",
        married: "",
        document_type: "",
        IIN: "",
        document_no: "",
        issued_by: "",
        issued_date: "",
        fname: "",
        lname: "",
        nname: "",
        nlname: "",
        patronymic: "",

        mod: "page1",
        method: "set",
        action: "setAllData",
      },
      file: "",
    };
  },
  async created() {
    this.loadData();
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

    loadData() {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: { mod: "page1", method: "get", action: "getAllData" },
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
          this.form.citizenship = res.citizenship;
          this.form.birthday = res.birthday;
          this.form.gender = res.gender;
          this.form.married = res.married;
          this.form.document_type = res.document_type;
          this.form.IIN = res.IIN;
          this.form.document_no = res.document_no;
          this.form.issued_by = res.issued_by.selected_id;
          this.form.issued_date = res.issued_date;
          this.form.fname = res.fname;
          this.form.lname = res.lname;
          this.form.nname = res.nname;
          this.form.nlname = res.nlname;
          this.form.patronymic = res.patronymic;

          this.issued_options = res.issued_by.list;
          this.nationality = res.nationality.list;
          this.social_status = res.social_status.list;
          this.form.nationality = res.nationality.selected_id;
          this.form.social_status = res.social_status.selected_id;
        });

      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: { method: "get", action: "getProfile", mod: "page1" },
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
          this.croppieImage = res.image == 'data:image/jpeg;base64,' ? null : res.image;
        });
    },

    previewImage: function (e) {
      console.log(this.photo);
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
            //this.photo = result;
            this.dataURLtoFile(result);
            console.log(this.photo);
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
      this.photo = new Blob([u8arr], { type: mime });
    },

    upload_social_status_doc(){
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            mod: "page1",
            method: "setUpload",
            action: "setSocialStatusDocumentImage",
            image: this.social_status_upload_image,
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
          Swal.fire({
            title: "",
            text: res.image,
            icon: "success",
            confirmButtonClass: "btn btn-secondary",
          });

          this.social_status_upload_image = null
          this.social_status_upload_image_name = 'Choose an image'
        });
    },

    upload: function () {
      this.crop()
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            mod: "page1",
            method: "setUpload",
            action: "setProfileImage",
            image: this.cropped,
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
          Swal.fire({
            title: "",
            text: res.image,
            icon: "success",
            confirmButtonClass: "btn btn-secondary",
          });

          this.$refs.croppieRef.bind({
            url: null
          });
          this.cropped = null
        });
    },

    docfiles_upload(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      var reader = new FileReader();
      reader.onload = e => {
        this.document_image = e.target.result
      };

      reader.readAsDataURL(files[0]);
      this.document_image_name = files[0].name
    },

    upload_document(){
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            mod: "page1",
            method: "setUpload",
            action: "setPassportImage",
            image: this.document_image,
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
          Swal.fire({
            title: "",
            text: res.image,
            icon: "success",
            confirmButtonClass: "btn btn-secondary",
          });

          this.document_image = null
          this.document_image_name = 'Choose an image'
        });
    },

    deleteProfile(){
      this.croppieImage = null
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: { method: "setUpload", action: "delProfileImage", mod: "page1" },
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
          Swal.fire({
            title: "",
            text: res.image,
            icon: "success",
            confirmButtonClass: "btn btn-secondary",
          });
          this.croppieImage = null;
        });
    },

    social_status_doc(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      var reader = new FileReader();
      reader.onload = e => {
        this.social_status_upload_image = e.target.result
      };

      reader.readAsDataURL(files[0]);
      this.social_status_upload_image_name = files[0].name
    },

    croppie (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      var reader = new FileReader();
      reader.onload = e => {
        this.$refs.croppieRef.bind({
          url: e.target.result
        });
      };

      reader.readAsDataURL(files[0]);
    },
    crop() {
      // Options can be updated.
      // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
      let options = {
        type: 'base64',
        size: { width: 600, height: 450 },
        format: 'jpeg'
      };
      this.$refs.croppieRef.result(options, output => {
        this.cropped = this.croppieImage = output;
      });
    },

    update(){
      this.crop()
    }
  },
};
</script>

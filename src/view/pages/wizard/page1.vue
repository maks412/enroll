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
                      Enter your Account Details
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <!-- citizenship -->
                        <div class="form-group">
                          <label>Citizenship</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="fname"
                            v-model="form.citizenship"
                            disabled
                          />
                          <span class="form-text text-muted"
                            ><a href="/#/after_register"
                              >Change Citizenship</a
                            ></span
                          >
                        </div>
                      </div>
                      <!-- END citizenship -->
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="fname"
                            v-model="form.fname"
                            required
                          />
                          <span class="form-text text-muted"
                            >Please enter your first name.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Native Name</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="Nname"
                            v-model="form.nname"
                          />
                          <span class="form-text text-muted"
                            >Please enter your native name.</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="lname"
                            v-model="form.lname"
                            required
                          />
                          <span class="form-text text-muted"
                            >Please enter your last name.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Native Surname</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="Nsurname"
                            v-model="form.nlname"
                          />
                          <span class="form-text text-muted"
                            >Please enter your native last name.</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Patronymic</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="patronymic"
                            v-model="form.patronymic"
                          />
                          <span class="form-text text-muted"
                            >Please enter your fathers name.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <label>Upload your profile picture</label>
                        <b-form-file
                          v-model="form.photo"
                          :state="Boolean(file)"
                          placeholder="Choose a file or drop it here..."
                          drop-placeholder="Drop file here..."
                          @change="previewImage"
                        ></b-form-file>
                      </div>

                      <div class="col-xl-6">
                        <img
                          :src="preview"
                          class="img-fluid"
                          style="
                            padding: 20px;
                            width: 50%;
                            display: block;
                            margin: auto;
                          "
                        />
                      </div>
                    </div>
                  </div>

                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      Enter your Account Details
                    </h4>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Date of Birth</label>
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
                          <span class="form-text text-muted"
                            >Please choose date of birth</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Nationality</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.nationality"
                              :options="nationality"
                              required
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please enter your nationality</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Gender</label>
                          <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-radio-group
                              v-model="form.gender"
                              :options="gender_options"
                              :aria-describedby="ariaDescribedby"
                              name="radio-inline"
                              size="lg"
                              required
                            ></b-form-radio-group>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose gender</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Married Status</label>
                          <b-form-group v-slot="{ ariaDescribedby }">
                            <b-form-radio-group
                              v-model="form.married"
                              :options="gender_married"
                              :aria-describedby="ariaDescribedby"
                              name="radio-inline"
                              size="lg"
                              required
                            ></b-form-radio-group>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose married status</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Social Status</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.social_status"
                              :options="social_status"
                              required
                            ></b-form-select>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose your social status</span
                          >
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <label>Upload your Social Status Document</label>
                        <b-form-file
                          multiple
                          v-model="form.social_status_upload"
                          :state="Boolean(file)"
                          placeholder="Choose Socail Status Document..."
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
                      Enter your Account Details
                    </h4>
                    <div class="col-xl-6">
                      <div class="form-group">
                        <label>Document Type</label>
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
                        <span class="form-text text-muted"
                          >Please choose document type</span
                        >
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>IIN</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="IIN"
                            v-model="form.IIN"
                            required
                          />
                          <span class="form-text text-muted"
                            >Please enter your IIN: 12 numbers.</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Document No</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="form.document_no"
                            required
                          />
                          <span class="form-text text-muted"
                            >Please enter your document number.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Issued By</label>
                          <b-form-select
                            v-model="form.issued_by"
                            :options="issued_options"
                            required
                            size="lg"
                          ></b-form-select>
                          <span class="form-text text-muted"
                            >Please select issued place</span
                          >
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Issued Date</label>
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
                          <span class="form-text text-muted"
                            >Please enter your Card Expiry Year.</span
                          >
                        </div>
                      </div>
                    </div>
                    <div>
                      <b-form-file
                        multiple
                        v-model="form.documents"
                        :state="Boolean(file)"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        ><template slot="file-name" slot-scope="{ names }">
                          <b-badge variant="dark">{{ names[0] }}</b-badge>
                          <b-badge
                            v-if="names.length > 1"
                            variant="dark"
                            class="ml-1"
                            required
                          >
                            + {{ names.length - 1 }} More files
                          </b-badge>
                        </template></b-form-file
                      >
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
        { title: "Personal Information", desc: "Name and Surname" },
        { title: "Additional Information", desc: "Birthday and Others" },
        { title: "Document Information", desc: "IIN and Document type" },
      ],
      gender_options: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
      gender_married: [
        { text: "Single", value: "single" },
        { text: "Married", value: "married" },
      ],
      document_options: [
        { text: "Identity Card", value: "ID" },
        { text: "Passport", value: "passport" },
      ],
      issued_options: [
        { text: "Ministry of Justice KZ", value: "ministry" },
        { text: "Passport", value: "passport" },
      ],
      nationality: [],
      social_status: [],
      preview: null,
      image: null,
      form: {
        photo: null,
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
        action: "setAllData"
      },
    };
  },
  created() {
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
    loadData() {
      var data_created = new FormData();
      data_created.append("json", JSON.stringify({ mod: "page1", method: "get", action: "getAllData" }));
      fetch("./backend/middle.php", {
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
          this.form.issued_by = res.issued_by;
          this.form.issued_date = res.issued_date;
          this.form.fname = res.fname;
          this.form.lname = res.lname;
          this.form.nname = res.nname;
          this.form.nlname = res.nlname;
          this.form.patronymic = res.patronymic;

          this.nationality = res.nationality.list;
          this.social_status = res.social_status.list;
          this.form.nationality = res.nationality.selected_id;
          this.form.social_status = res.social_status.selected_id;

          this.form.photo = res.photo;
        });
    },

    previewImage: function (e) {
      var input = e.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (event) => {
          console.log("onload1");
          const imgElement = document.createElement("img");
          imgElement.src = event.target.result;

          imgElement.onload = function (e) {
            const canvas = document.createElement("canvas");
            const MAX_WIDTH = 400;

            const scaleSize = MAX_WIDTH / e.target.width;
            canvas.width = MAX_WIDTH;
            canvas.height = e.target.height * scaleSize;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

            const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
            // you can send srcEncoded to the server
            //this.form.photo = srcEncoded;
            this.form.photo = base64ToFile(srcEncoded);
            console.log("this.form.photo");
            pickFile();
            //console.log(srcEncoded);
          };
        };

        //this.preview = e.target.result;

        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }

      // const reader = new FileReader();

      // reader.readAsDataURL(event.target.result);
      // console.log("start");
    },
  },
};

function base64ToFile(dataURI) {
  var byteString, mimestring;

  if (dataURI.split(",")[0].indexOf("base64") !== -1) {
    byteString = atob(dataURI.split(",")[1]);
  } else {
    byteString = decodeURI(dataURI.split(",")[1]);
  }
  mimestring = dataURI.split(",")[0].split(":")[1].split(";")[0];

  var content = new Array();
  for (var i = 0; i < byteString.length; i++) {
    content[i] = byteString.charCodeAt(i);
  }
  //var uarray = new Uint8Array(content);
  var newFile = new File([new Uint8Array(content)], "sdu.jpeg", {
    type: mimestring,
  });
  // Copy props set by the dropzone in the original file

  return newFile;
}

function pickFile() {
  let input = this.form.photo;
  let file = input.files;
  if (file && file[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.preview = e.target.result;
    };
    reader.readAsDataURL(file[0]);
  }
}
</script>

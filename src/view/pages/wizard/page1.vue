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
                    <div class="mb-10 font-weight-bold text-dark">
                      Enter your Account Details
                    </div>
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
                          />
                          <span class="form-text text-muted"
                            >Please enter your fathers name.</span
                          >
                        </div>
                      </div>
                    </div>

                    <div>
                      <b-form-file
                        v-model="form.photo"
                        :state="Boolean(file)"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                      ></b-form-file>
                      <div class="mt-3">
                        Selected file: {{ file ? file.name : "" }}
                      </div>
                    </div>
                  </div>
                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <div class="mb-10 font-weight-bold text-dark">
                      Enter your Account Details
                    </div>

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
                              ></b-form-input>
                              <b-input-group-append>
                                <b-form-datepicker
                                  v-model="form.birthday"
                                  button-only
                                  right
                                  locale="en-US"
                                  aria-controls="example-input"
                                  @context="onContext"
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
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            name="nationality"
                          />
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
                            ></b-form-radio-group>
                          </b-form-group>
                          <span class="form-text text-muted"
                            >Please choose married status</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end: Wizard Step 2-->

                  <!--begin: Wizard Step 3-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <div class="mb-10 font-weight-bold text-dark">
                      Enter your Account Details
                    </div>
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
                            v-on:change="OnChange"
                            id="citizenship_select"
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
        { title: "Add Account", desc: "Create Custom Account" },
        { title: "Add Account", desc: "Create Custom Account" },
        { title: "Add Account", desc: "Create Custom Account" },
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
      form: {
        citizenship: "Kazakhstan",
        photo: null,

        birthday: "",
        formatted: "",
        selected: "",
        gender: null,
        married: null,
        document_type: null,
        IIN: null,
        document_no: null,
        issued_by: null,
        issued_date: null,
      },
    };
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
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
      });
    },

    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted;
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD;
    },
  },
};
</script>

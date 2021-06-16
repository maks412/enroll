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
                      Enter your Contact Details
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Current Address Country</label>
                          <b-form-select
                            v-model="form.current_address_country"
                            :options="current_address_country_options"
                            required
                            size="sm"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Current Address Province</label>
                          <b-form-select
                            v-model="form.current_address_province"
                            :options="current_address_province_options"
                            required
                            size="sm"
                          ></b-form-select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Current Address City</label>
                          <b-form-select
                            v-model="form.current_address_city"
                            :options="current_address_city_options"
                            required
                            size="sm"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Current Address</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-sm"
                            v-model="form.current_address"
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Registered Address Country</label>
                          <b-form-select
                            v-model="form.register_address_country"
                            :options="register_address_country_options"
                            required
                            size="sm"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Registered Address Province</label>
                          
                          <b-form-select
                            v-model="form.register_address_province"
                            :options="register_address_province_options"
                            required
                            size="sm"
                          ></b-form-select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Registered Address City</label>
                          
                          <b-form-select
                            v-model="form.register_address_city"
                            :options="register_address_city_options"
                            required
                            size="sm"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Registered Address</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-sm"
                            v-model="form.register_address"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Mobile Phone</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            @input="acceptNumber"
                            v-model="form.phone"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>Do you need student house?</label>
                          <div>
                            <b-form-group>
                              <b-form-radio-group
                                buttons="true"
                                button-variant="outline-primary"
                                id="radio-group-2"
                                v-model="form.student_house"
                                :options="options"
                                name="radio-options"
                                size="lg"
                              >
                                <b-form-radio value="yes">yes</b-form-radio>
                                <b-form-radio value="no"
                                  >no</b-form-radio
                                ></b-form-radio-group
                              >
                            </b-form-group>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end: Wizard Step 1-->

                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      Enter Your Relative Information
                    </h4>
                    <div class="row">
                      <div class="col-xl-4">
                        <div class="form-group">
                          <label>Relative Type</label>
                          <b-form-group>
                            <b-form-select
                              v-model="rel_type"
                              :options="relative_type_options"
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                        </div>
                      </div>
                      <div class="col-xl-4">
                        <div class="form-group">
                          <label>Full Name</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="rel_name"
                          />
                        </div>
                      </div>
                      <div class="col-xl-4">
                        <div class="form-group">
                          <label>Contact</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="rel_cont"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      style="float: right"
                      class="btn btn-primary text-uppercase px-3 py-1"
                      v-on:click="add_relative"
                    >
                      Add Relative
                    </button>

                    <div>
                      <b-table hover :items="form.items" :fields="fields">
                      </b-table>
                      <button
                        style="float: right"
                        class="btn btn-primary text-uppercase px-4 py-1"
                        v-on:click="delete_relative"
                      >
                        Delete Last
                      </button>
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
      tabs: [{ title: "Contact Ditails" }, { title: "Relative Information" }],
      relative_type_options: ["Mother", "Father", "Sister", "Brother"],
      fields: ["relative_type", "full_name", "contact"],
      rel_type: "",
      rel_name: "",
      rel_cont: "",
      current_address_country_options: [],
      current_address_province_options: [],
      current_address_city_options: [],
      register_address_country_options: [],
      register_address_province_options: [],
      register_address_city_options: [],
      form: {
        phone: "",
        current_address_country: "",
        current_address_province: "",
        current_address_city: "",
        current_address: "",
        register_address_country: "",
        register_address_province: "",
        register_address_city: "",
        register_address: "",
        student_house: "",
        items: [],
      },
    };
  },
  async created() {
    var data_created = new FormData();
    data_created.append("json", JSON.stringify({ action: "getAllData" }));
    fetch("http://localhost/Portal/enroll/backend/home/page3.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data_created,
    })
      .then((response) => response.json())
      .then((res) => {
        this.relative_type_options = res.relative_type_options;
        this.register_address_country_options = res.register_address_country_options;
        this.register_address_province_options = res.register_address_province_options;
        this.register_address_city_options = res.register_address_city_options;
        this.current_address_country_options = res.current_address_country_options;
        this.current_address_province_options = res.current_address_province_options;
        this.current_address_city_options = res.current_address_city_options;
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
      Swal.fire({
        title: "",
        text: "The application has been successfully submitted!",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
      });
    },
    acceptNumber() {
      var x = this.form.phone
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.form.phone = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    add_relative() {
      if (this.rel_type != "" && this.rel_name != "" && this.rel_cont != "") {
        this.form.items.push({
          relative_type: this.rel_type,
          full_name: this.rel_name,
          contact: this.rel_cont,
        });
        this.rel_type = "";
        this.rel_name = "";
        this.rel_cont = "";
      }
    },
    delete_relative() {
      this.form.items.splice(this.form.items.length - 1, 1);
    },
  },
};
</script>

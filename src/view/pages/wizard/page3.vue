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
                      {{ $t("page3.enter_contact_details") }}
                    </h4>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{
                            $t("page3.current_address_country")
                          }}</label>
                          <b-form-select
                            v-model="form.current_address_country"
                            :options="current_address_country_options"
                            required
                            size="sm"
                            v-on:change="press_country"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{
                            $t("page3.current_address_province")
                          }}</label>
                          <b-form-select
                            v-model="form.current_address_province"
                            :options="current_address_province_options"
                            required
                            size="sm"
                            v-on:change="press_province"
                          ></b-form-select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{
                            $t("page3.current_address_region")
                          }}</label>
                          <b-form-select
                            v-model="form.current_address_region"
                            :options="current_address_region_options"
                            required
                            size="sm"
                            v-on:change="press_region"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{ $t("page3.current_address_city") }}</label>
                          <b-form-select
                            v-model="form.current_address_city"
                            :options="current_address_city_options"
                            required
                            size="sm"
                          ></b-form-select>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-9">
                        <div class="form-group">
                          <label>{{ $t("page3.current_address") }}</label>
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
                          <label>{{
                            $t("page3.registered_address_country")
                          }}</label>
                          <b-form-select
                            v-model="form.register_address_country"
                            :options="register_address_country_options"
                            required
                            size="sm"
                            v-on:change="press_register_country"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{
                            $t("page3.registered_address_province")
                          }}</label>

                          <b-form-select
                            v-model="form.register_address_province"
                            :options="register_address_province_options"
                            required
                            size="sm"
                            v-on:change="press_register_province"
                          ></b-form-select>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{
                            $t("page3.registered_address_region")
                          }}</label>

                          <b-form-select
                            v-model="form.register_address_region"
                            :options="register_address_region_options"
                            required
                            size="sm"
                            v-on:change="press_register_region"
                          ></b-form-select>
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="form-group">
                          <label>{{
                            $t("page3.registered_address_city")
                          }}</label>

                          <b-form-select
                            v-model="form.register_address_city"
                            :options="register_address_city_options"
                            required
                            size="sm"
                          ></b-form-select>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-9">
                        <div class="form-group">
                          <label>{{ $t("page3.registered_address") }}</label>
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
                          <label>{{ $t("page3.mobile_phone") }}</label>
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
                          <label>{{ $t("page3.need_stud_house") }}</label>
                          <div>
                            <b-form-group>
                              <b-form-radio-group
                                :buttons="true"
                                button-variant="outline-primary"
                                id="radio-group-2"
                                v-model="form.student_house"
                                :options="options"
                                name="radio-options"
                                size="lg"
                              >
                                <b-form-radio value="1" id="yes">{{
                                  $t("page3.yes")
                                }}</b-form-radio>
                                <b-form-radio value="0">{{
                                  $t("page3.no")
                                }}</b-form-radio></b-form-radio-group
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
                      {{ $t("page3.enter_rel_info") }}
                    </h4>
                    <div class="row">
                      <div class="col-xl-4">
                        <div class="form-group">
                          <label>{{ $t("page3.relative_type") }}</label>
                          <b-form-group>
                            <b-form-select
                              v-model="form.rel_type"
                              :options="relative_type_options"
                              size="lg"
                            ></b-form-select>
                          </b-form-group>
                        </div>
                      </div>
                      <div class="col-xl-4">
                        <div class="form-group">
                          <label>{{ $t("page3.full_name") }}</label>
                          <input
                            type="text"
                            class="form-control form-control-solid form-control-lg"
                            v-model="rel_name"
                          />
                        </div>
                      </div>
                      <div class="col-xl-4">
                        <div class="form-group">
                          <label>{{ $t("page3.contact") }}</label>
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
                      {{ $t("page3.add_relative") }}
                    </button>

                    <div>
                      <b-table hover :items="form.items" :fields="fields">
                      </b-table>
                      <button
                        style="float: right"
                        class="btn btn-primary text-uppercase px-4 py-1"
                        v-on:click="delete_relative"
                      >
                        {{ $t("page3.delete_last") }}
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
import { createLogger } from 'vuex';

var url = "https://enroll.sdu.edu.kz"; // window.location.origin;

export default {
  data() {
    return {
      tabs: [
        { title: "page3.contact_details" },
        { title: "page3.relative_information" },
      ],

      fields: [
        { relative_type: this.$t("page3.relative_type") },
        { full_name: this.$t("page3.full_name") },
        { contact: this.$t("page3.contact") },
      ],

      rel_name: "",
      rel_cont: "",
      current_address_country_options: [],
      current_address_province_options: [],
      current_address_region_options: [],
      current_address_city_options: [],
      register_address_country_options: [],
      register_address_province_options: [],
      register_address_region_options: [],
      register_address_city_options: [],

      relative_type_options: [],
      form: {
        rel_type: null,
        phone: "",
        current_address_country: "",
        current_address_province: "",
        current_address_region: "",
        current_address_city: "",
        current_address: "",
        register_address_country: "",
        register_address_province: "",
        register_address_region: "",
        register_address_city: "",
        register_address: "",
        student_house: "",
        items: [],

        mod: "page3",
        method: "set",
        action: "setAllData",
      },
      options: [],
    };
  },

  async created() {
    var data_created = new FormData();
    data_created.append(
      "json",
      JSON.stringify({
        data: { mod: "page3", method: "get", action: "getAllData" },
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
        this.form.phone = res.phone;
        this.relative_type_options = res.relative_type.list;
        this.form.rel_type = res.relative_type.selected_id;

        this.form.register_address_country = res.register_country.selected_id;
        this.register_address_country_options = res.register_country.list;
        this.register_address_province_options =
          res.register_address_province.list;
        this.form.register_address_province =
          res.register_address_province.selected_id;
        this.register_address_region_options = res.register_address_region.list;
        this.form.register_address_region =
          res.register_address_region.selected_id;
        this.register_address_city_options = res.register_address_city.list;
        this.form.register_address_city = res.register_address_city.selected_id;
        this.form.register_address = res.register_address;

        //Current
        this.current_address_country_options = res.current_country.list;
        this.current_address_province_options =
          res.current_address_province.list;
        this.current_address_region_options = res.current_address_region.list;
        this.current_address_city_options = res.current_address_city.list;

        this.form.current_address_country = res.current_country.selected_id;
        this.form.current_address_province =
          res.current_address_province.selected_id;
        this.form.current_address_region =
          res.current_address_region.selected_id;
        this.form.current_address_city = res.current_address_city.selected_id;
        this.form.current_address = res.current_address;

        this.form.student_house = res.student_house;
        //this.form.items = res.relatives;
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
            
            location.replace("/#/home/4");
          }
        });
    },

    press_country: function () {
      this.get_address(0, "country", this.form.current_address_country);
    },
    press_province: function () {
      this.get_address(1, "province", this.form.current_address_province);
    },
    press_region: function () {
      this.get_address(2, "region", this.form.current_address_region);
    },

    get_address: function (index, type1, value) {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            mod: "page3",
            method: "get",
            action: "getCurrentAddress",
            type: index,
            pid: value,
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
          if (type1 == "country") {
            this.form.current_address_province = res.province.selected_id;
            this.current_address_province_options = res.province.list;
            this.form.current_address_region = res.region.selected_id;
            this.current_address_region_options = res.region.list;
            this.form.current_address_city = res.city.selected_id;
            this.current_address_city_options = res.city.list;
          }
          if (type1 == "province") {
            this.form.current_address_region = res.region.selected_id;
            this.current_address_region_options = res.region.list;
            this.form.current_address_city = res.city.selected_id;
            this.current_address_city_options = res.city.list;
          }
          if (type1 == "region") {
            this.form.current_address_city = res.city.selected_id;
            this.current_address_city_options = res.city.list;
          }
        });
    },

    press_register_country: function () {
      this.get_register_address(
        0,
        "country",
        this.form.register_address_country
      );
    },
    press_register_province: function () {
      this.get_register_address(
        1,
        "province",
        this.form.register_address_province
      );
    },
    press_register_region: function () {
      this.get_register_address(2, "region", this.form.register_address_region);
    },

    get_register_address: function (index, type, value) {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: {
            mod: "page3",
            method: "get",
            action: "getRegisteredAddress",
            type: index,
            pid: value,
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
          if (type == "country") {
            this.form.register_address_province = res.province.selected_id;
            this.register_address_province_options = res.province.list;
            this.form.register_address_region = res.region.selected_id;
            this.register_address_region_options = res.region.list;
            this.form.register_address_city = res.city.selected_id;
            this.register_address_city_options = res.city.list;
          }
          if (type == "province") {
            this.form.register_address_region = res.region.selected_id;
            this.register_address_region_options = res.region.list;
            this.form.register_address_city = res.city.selected_id;
            this.register_address_city_options = res.city.list;
          }
          if (type == "region") {
            this.form.register_address_city = res.city.selected_id;
            this.register_address_city_options = res.city.list;
          }
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
      if (
        this.form.rel_type != "" &&
        this.rel_name != "" &&
        this.rel_cont != ""
      ) {
        var index = this.relative_type_options.findIndex(
          (x) => x.value == this.form.rel_type
        );
        console.log(index);
        console.log(this.form.rel_type);
        this.form.items.push({
          relative_type: this.relative_type_options[index].text,
          relative_id: this.relative_type_options[index].value,
          full_name: this.rel_name,
          contact: this.rel_cont,
        });
        this.form.rel_type = "";
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

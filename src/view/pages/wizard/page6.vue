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
                      Download and Fill the Contract<br />
                      Then bring printed contract to SDU
                    </h4>

                    <div>
                      <b-link target="blank" href="https://enroll.sdu.edu.kz/2021-2022contract.pdf"
                        >Contract link</b-link
                      >
                    </div>
                  </div>
                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      Argee terms and conditions
                    </h4>

                    <div class="row">
                      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                      <p class="text-justify">
                        {{ checks.check1 }}{{ checks.check1_1 }}
                      </p>
                      <b-form-checkbox
                        v-model="checkbox1"
                        value="true"
                        unchecked-value="false"
                        switch
                        size="lg"
                      >
                        I accept the terms and use
                      </b-form-checkbox>
                    </div>
                    <hr />
                    <div class="row">
                      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                      <p class="text-justify">{{ checks.check2 }}</p>
                      <b-form-checkbox
                        v-model="checkbox2"
                        value="true"
                        unchecked-value="false"
                        switch
                        size="lg"
                      >
                        I accept the terms and use
                      </b-form-checkbox>
                    </div>
                    <hr />
                    <div class="row">
                      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                      <p class="text-justify">{{ checks.check3 }}</p>
                      <b-form-checkbox
                        v-model="checkbox3"
                        value="true"
                        unchecked-value="false"
                        switch
                        size="lg"
                      >
                        I accept the terms and use
                      </b-form-checkbox>
                    </div>
                    <hr />
                    <div class="row">
                      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                      <p class="text-justify">{{ checks.check4 }}</p>
                      <b-form-checkbox
                        v-model="checkbox4"
                        value="true"
                        unchecked-value="false"
                        switch
                        size="lg"
                      >
                        I accept the terms and use
                      </b-form-checkbox>
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
      tabs: [{ title: "Contract" }, { title: "Agreements", desc: "" }],
      selected: [], // Must be an array reference!
      checks: {
        check1:
          "In accordance with the Law of the Republic of Kazakhstan “On personal data and their protection” dated May 21, 2013 and other legislative acts of the Republic, I hereby give the Institution “Suleyman Demirel University” unconditional consent to the collection and processing of my (about me) ",
        check1_1:
          "personal data, that is, all information relating to me and recorded on electronic, paper and (or) other tangible media that will or will become known to the University in the course of its activities and / or within the framework of civil law / labor and / or other relationship.",
        check2:
          "I undertake to provide the original certificate / diploma, UNT certificate (if available), 6 photos of size 3 * 4, medical certificate 086 with fluorography, an identity card / passport before 08.20.2020 to the admission committee of the SDU.",
        check3:
          "I confirm that all information on this site has been filled in correctly and reliably.",
        check4:
          "I have been informed of the mandatory consent of the parents (legal representative) of the applicant under the age of 18) to conclude and sign the “Contract for the provision of paid / free educational services with the institution“ Suleyman Demirel University ”until 08.20.2021.",
      },
      checkbox1: "",
      checkbox2: "",
      checkbox3: "",
      checkbox4: "",
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

      if (
        this.checkbox1 == "true" &&
        this.checkbox2 == "true" &&
        this.checkbox3 == "true" &&
        this.checkbox4 == "true"
      ) {
        this.apply();
      }
    },

    apply() {
      var data_created = new FormData();
      data_created.append("json", JSON.stringify({ mod: "page6", method: "set", action: "setStatus" }));
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
          if (res.status == 1) {
            Swal.fire({
              title: "",
              text: "The application has been successfully submitted!",
              icon: "success",
              confirmButtonClass: "btn btn-secondary",
            });
          }
        });
    },
  },
};
</script>

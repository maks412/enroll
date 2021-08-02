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
                      {{ $t("page7.download_and_fill") }}<br />
                      {{ $t("page7.bring_to_SDU") }}
                    </h4>

                    <div>
                      <b-link
                        target="blank"
                        href="https://enroll.sdu.edu.kz/2021-2022contract.pdf"
                        >{{ $t("page7.contract_link") }}</b-link
                      >
                    </div>
                  </div>
                  <!--end: Wizard Step 1-->

                  <!--begin: Wizard Step 2-->
                  <div class="pb-5" data-wizard-type="step-content">
                    <h4 class="mb-10 font-weight-bold text-dark">
                      {{ $t("page7.agree_terms") }}
                    </h4>

                    <div class="row">
                      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                      <p class="text-justify">
                        {{ $t("page7.check1") }}
                      </p>
                      <b-form-checkbox
                        v-model="checkbox1"
                        value="true"
                        unchecked-value="false"
                        switch
                        size="lg"
                        :disabled="status == 'ACCEPTED' || status == 'CONFIRMED'"
                      >
                        {{ $t("page7.accept_terms") }}
                      </b-form-checkbox>
                    </div>
                    <hr />
                    <div class="row">
                      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                      <p class="text-justify">{{ $t("page7.check2") }}</p>
                      <b-form-checkbox
                        v-model="checkbox2"
                        value="true"
                        unchecked-value="false"
                        switch
                        size="lg"
                        :disabled="status == 'ACCEPTED' || status == 'CONFIRMED'"
                      >
                        {{ $t("page7.accept_terms") }}
                      </b-form-checkbox>
                    </div>
                    <hr />
                    <div class="row">
                      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                      <p class="text-justify">{{ $t("page7.check3") }}</p>
                      <b-form-checkbox
                        v-model="checkbox3"
                        value="true"
                        unchecked-value="false"
                        switch
                        size="lg"
                        :disabled="status == 'ACCEPTED' || status == 'CONFIRMED'"
                      >
                        {{ $t("page7.accept_terms") }}
                      </b-form-checkbox>
                    </div>
                    <hr />
                    <div class="row">
                      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                      <p class="text-justify">{{ $t("page7.check4") }}</p>
                      <b-form-checkbox
                        v-model="checkbox4"
                        value="true"
                        unchecked-value="false"
                        switch
                        size="lg"
                        :disabled="status == 'ACCEPTED' || status == 'CONFIRMED'"
                      >
                        {{ $t("page7.accept_terms") }}
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

var url = "https://enroll.sdu.edu.kz"; // window.location.origin;

export default {
  data() {
    return {
      status: this.$cookies.get("status"),
      tabs: [
        { title: "page7.contact" },
        { title: "page7.agreements", desc: "" },
      ],
      selected: [], // Must be an array reference!
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
      } else {
        Swal.fire({
          title: "",
          text: "Please accept all terms",
          icon: "error",
          confirmButtonClass: "btn btn-secondary",
          heightAuto: false,
        });
      }
    },

    apply() {
      var data_created = new FormData();
      data_created.append(
        "json",
        JSON.stringify({
          data: { mod: "page6", method: "set", action: "setStatus" },
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
            var print_text = "";
            if(res.response.main.length > 0) print_text += "1) Main Info: " + res.response.main +" <br> ";
            if(res.response.edu.length > 0) print_text += "2) Education: " + res.response.edu +" <br> ";
            if(res.response.address.length > 0) print_text += "3) Contacts: " + res.response.address +" <br> ";
            if(res.response.grantInfo.length > 0) print_text += "4) Grant Info: " + res.response.grantInfo +" <br> ";
            if(res.response.langInfo.length > 0) print_text += "5) English Test: " + res.response.langInfo +" <br> ";
            //if(res.response.docInfo.length > 0) print_text += "6) Documents: " + res.response.docInfo +" <br> ";
            Swal.fire({
              title: "Fill up this places!",
              html: print_text,
              icon: "error",
              confirmButtonClass: "btn btn-secondary",
            });
          }
          if (res.code == 1) {
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

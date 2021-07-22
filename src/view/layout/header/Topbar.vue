<template>
  <div class="topbar">
    <div class="topbar-item mr-4">
      <span class="btn" :class="'btn-light-'+status_color">
        <span  class="symbol-label font-size-h6 font-weight-bold">
          {{status}}
        </span>
      </span>
    </div>

    <div class="topbar-item">
      <b-dropdown
        size="sm"
        variant="link"
        toggle-class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 text-decoration-none"
        no-caret
        right
        no-flip
      >
        <template v-slot:button-content>
          <img
            class="h-20px w-20px rounded-sm"
            :src="languageFlag || getLanguageFlag"
            alt=""
          />
        </template>
        <b-dropdown-text tag="div" class="min-w-md-175px">
          <KTDropdownLanguage
            v-on:language-changed="onLanguageChanged"
          ></KTDropdownLanguage>
        </b-dropdown-text>
      </b-dropdown>
    </div>


    <!--end: Language bar -->
    <!--begin: Quick Actions -->
    <b-dropdown
      size="sm"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 w-auto">
          <span class="svg-icon svg-icon-xl svg-icon-primary">
            <!-- <inline-svg src="media/svg/icons/Media/Equalizer.svg" /> -->

            <span
              class="text-dark-50 font-weight-bolder font-size-base d-md-inline mr-4 ml-4"
            >
              {{ userEmail }}
            </span>
          </span>
        </div>
      </template>
      <b-dropdown-text tag="div">
        <KTDropdownQuickAction :speciality="back_special"></KTDropdownQuickAction>
      </b-dropdown-text>
    </b-dropdown>
    <!--end: Quick Actions -->
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";

import KTDropdownQuickAction from "@/view/layout/extras/dropdown/DropdownQuickAction.vue";
import KTDropdownLanguage from "@/view/layout/extras/dropdown/DropdownLanguage.vue";
import i18nService from "@/core/services/i18n.service.js";

var url = 'https://enroll.sdu.edu.kz' // window.location.origin;

export default {
  name: "KTTopbar",
  data() {
    return {
      languageFlag: "",
      languages: i18nService.languages,

      status: "Not applied",
      status_color: "warning",
      back_special: ""
    };
  },
  components: {
    KTDropdownLanguage,
    KTDropdownQuickAction
  },
  methods: {
    onLanguageChanged() {
      this.languageFlag = this.languages.find((val) => {
        return val.lang === i18nService.getActiveLanguage();
      }).flag;
    },
  },
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    },
    ...mapGetters(["currentUser"]),

    getFullName() {
      return (
        this.currentUserPersonalInfo.name + " " + this.currentUserPersonalInfo.surname
      );
    },
    userEmail(){
      return this.$cookies.get('email')
    }
  },

  async created(){
    var data_created = new FormData();
    data_created.append(
      "json",
      JSON.stringify({
        data: { mod: "user", method: "get", action: "getAllData" },
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
    }).then((response) => response.json())
        .then((res) => {
          this.currentUser.email = res.email;
          this.status = res.status;

          if(res.status == "NOT APPLIED") this.status_color = "danger";
          if(res.status == "APPLIED") this.status_color = "warning";
          if(res.status == "ACCEPTED") this.status_color = "info";
          if(res.status == "REJECTED") this.status_color = "primary";
          if(res.status == "CONFIRMED") this.status_color = "success";

          this.back_special = res.speciality;
        });
  }
}
</script>

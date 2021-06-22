<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <!--begin: Language bar -->
    <div class="topbar-item">
      <span class="symbol symbol-35" :class="'symbol-light-'+status_color">
        <span
          class="symbol-label font-size-h5 font-weight-bold"
          style="width: fit-content; padding: 0 5px; margin-right: 20px"
        >
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
              class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
            >
              {{ currentUser.email }}
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
// import KTSearchDefault from "@/view/layout/extras/dropdown/SearchDefault.vue";
// import KTDropdownNotification from "@/view/layout/extras/dropdown/DropdownNotification.vue";
import KTDropdownQuickAction from "@/view/layout/extras/dropdown/DropdownQuickAction.vue";
// import KTDropdownMyCart from "@/view/layout/extras/dropdown/DropdownMyCart.vue";
import KTDropdownLanguage from "@/view/layout/extras/dropdown/DropdownLanguage.vue";
// import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser.vue";
// import KTQuickPane l from "@/view/layout/extras/offcanvas/QuickPanel.vue";
import i18nService from "@/core/services/i18n.service.js";

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
    // KTSearchDefault,
    // KTDropdownNotification,

    // KTDropdownMyCart,
    KTDropdownLanguage,
    // KTQuickUser,
    KTDropdownQuickAction,
    // KTQuickPanel
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
        this.currentUserPersonalInfo.name +
        " " +
        this.currentUserPersonalInfo.surname
      );
    },
  },

  async created(){

      get_user();
    
  }, 
}

function get_user(){
    var data_created = new FormData();
      data_created.append("json", JSON.stringify({ mod: "user",method: "get", action: "getAllData"}));
      fetch("./backend/middle.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data_created,
      })
        .then((response) => response.json())
        .then((res) => {
          this.currentUser.email = res.email;
          this.status = res.status;

          if(res.status == "Not applied") this.status_color = "danger";
          if(res.status == "Applied") this.status_color = "warning";
          if(res.status == "Accepted") this.status_color = "info";
          if(res.status == "Rejected") this.status_color = "primary";
          if(res.status == "Confirmed") this.status_color = "success";

          this.back_special = res.speciality;
          /////////////
        });
  }
</script>

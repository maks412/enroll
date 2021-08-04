<template>
  <ul class="menu-nav" style="margin: 20px 0">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.navigate_to"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        style="margin-top: 10px"
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <div class="menu-icon menu_custom" :class="{ 'pad-1': index != 0 }">
            {{ index + 1 }}
          </div>
          <div>
            <span class="menu-text" style="font-size: 15px; font-weight: 500">{{
              $t(link.name)
            }}</span>

            <span class="menu-text" style="font-size: 11px">{{
              $t(link.description)
            }}</span>
          </div>
        </a>
      </li>
    </router-link>
  </ul>
</template>


<script>
const links = [
  {
    name: "aside.main_info",
    description: "aside.main_info_d",
    navigate_to: "/home/1",
  },
  {
    name: "aside.education",
    description: "aside.education_d",
    navigate_to: "/home/2",
  },
  {
    name: "aside.contact",
    description: "aside.contact_d",
    navigate_to: "/home/3",
  },
  {
    name: "aside.grant_info",
    description: "aside.grant_info_d",
    navigate_to: "/home/4",
  },
  {
    name: "aside.eng_tests",
    description: "aside.eng_tests_d",
    navigate_to: "/home/4_ielts",
  },
  {
    name: "aside.documents",
    description: "aside.documents_d",
    navigate_to: "/home/5",
  },
  {
    name: "aside.apply",
    description: "aside.apply_d",
    navigate_to: "/home/6",
  },
];
const iro_links = [
  {
    name: "aside.main_info",
    description: "aside.main_info_d",
    navigate_to: "/home/IRO",
  },
  {
    name: "aside.education",
    description: "Setup Your Education Information",
    navigate_to: "/home/IRO_education",
  },
  {
    name: "aside.contact",
    description: "Setup Your Contact Information",
    navigate_to: "/home/IRO_contact",
  },

  {
    name: "aside.apply",
    description: "aside.apply_d",
    navigate_to: "/home/6",
  },
];

const degree_links = [
  {
    name: "aside.main_info",
    description: "aside.main_info_d",
    navigate_to: "/home/1",
  },
  {
    name: "aside.education",
    description: "Setup Your Education Information",
    navigate_to: "/home/degree_education",
  },
  {
    name: "aside.contact",
    description: "Setup Your Contact Information",
    navigate_to: "/home/3",
  },
  {
    name: "aside.grant_info",
    description: "aside.grant_info_d",
    navigate_to: "/home/4",
  },
  {
    name: "aside.eng_tests",
    description: "aside.eng_tests_d",
    navigate_to: "/home/4_ielts",
  },
  {
    name: "aside.documents",
    description: "aside.documents_d",
    navigate_to: "/home/degree_decuments",
  },
  {
    name: "aside.apply",
    description: "aside.apply_d",
    navigate_to: "/home/6",
  },
];

var url = "https://enroll.sdu.edu.kz"; // window.location.origin;
const link = [];
export default {
  name: "KTMenu",
  data() {
    return {
      links: iro_links,
    };
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
  },
  async created() {
    var data_created = new FormData();
    data_created.append(
      "json",
      JSON.stringify({
        data: { mod: "isIRO", method: "get", action: "getIRO" },
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
        if (res.iro) this.links = iro_links;
        else this.links = links;
      });

    var data_created = new FormData();
    data_created.append(
      "json",
      JSON.stringify({
        data: { mod: "isDegree", method: "get", action: "getDegree" },
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
        if (res.degree) this.links = degree_links;
        else this.links = links;
      });
  },
};
</script>

<style>
.pad-1 {
  padding: 20px 20px 20px 18px;
}
</style>
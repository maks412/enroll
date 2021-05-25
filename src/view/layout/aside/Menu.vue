<template>
  <ul class="menu-nav" style="margin: 20px 0">
    <router-link
      v-for="(link,index) in links"
      :key="index"
      :to="link.navigate_to"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        style="margin-top:10px"
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <div class="menu-icon menu_custom" :class="{'pad-1':index!=0}">{{index+1}}</div>
          <div>
            <span class="menu-text" style="font-size: 15px; font-weight: 500"
              >{{link.name}}</span
            >

            <span class="menu-text" style="font-size: 11px"
              >{{link.description}}</span
            >
          </div>
        </a>
      </li>
    </router-link>

    
  </ul>
</template>


<script>
const links = [
  {
    name: "Main Info",
    description: "Setup Your Account Details",
    navigate_to: "/custom-wizard/wizard-2"
  },
  {
    name: "Contact",
    description: "Setup Your Account Details",
    navigate_to: "/custom-wizard/wizard-4"
  },
  {
    name: "Contact",
    description: "Setup Your Account Details",
    navigate_to: "/custom-wizard/wizard-3"
  },
  {
    name: "Contact",
    description: "Setup Your Account Details",
    navigate_to: "/custom-wizard/wizard-2"
  },
  {
    name: "Contact",
    description: "Setup Your Account Details",
    navigate_to: "/custom-wizard/wizard-3"
  },
  {
    name: "Contact",
    description: "Setup Your Account Details",
    navigate_to: "/custom-wizard/wizard-1"
  }
]
export default {
  name: "KTMenu",
  data(){
    return{
      links:links
    };
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
  },
};
</script>

<style>
.pad-1{
  padding: 20px 20px 20px 18px;
}
</style>
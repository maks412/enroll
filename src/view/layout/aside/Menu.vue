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
    navigate_to: "/home/1"
  },
  {
    name: "Education",
    description: "Setup Your Education Details",
    navigate_to: "/home/2"
  },
  {
    name: "Contact",
    description: "Add Your Contact Ditails",
    navigate_to: "/home/3"
  },
  {
    name: "Grant Info",
    description: "Provide Grant Information",
    navigate_to: "/home/4"
  },
  {
    name: "Documents",
    description: "Upload Your Documents",
    navigate_to: "/home/5"
  },
  {
    name: "Apply",
    description: "Review and Submit",
    navigate_to: "/home/6"
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
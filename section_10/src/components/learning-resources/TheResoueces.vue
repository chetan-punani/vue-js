<template>
  <section>
    <base-card>
      <base-button
        @click="setselectedTab('stored-resources')"
        :mode="storedResButton"
        >Stored Resources</base-button
      >
      <base-button @click="setselectedTab('add-resources')" :mode="addResButton"
        >Add Resources</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </section>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResources from "./AddResources.vue";

export default {
  components: {
    StoredResources,
    AddResources,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guid",
          title: "Official Guid",
          description: "The Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn about google...",
          link: "https://google.org",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  computed: {
    storedResButton() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButton() {
      return this.selectedTab === "add-resources" ? null : "flat";
    },
  },
  methods: {
    setselectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toString,
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res =>  res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  },
};
</script>

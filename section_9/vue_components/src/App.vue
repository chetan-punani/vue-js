<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader />
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goal>
      <template #default="slotitem">   
        <h2>{{ slotitem.item }}</h2>
        <p>{{ slotitem['another-props'] }}</p>
      </template>
    </course-goal> -->


  <button @click="setSelectedComponent('active-goals')">Active Goals</button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
  <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
  <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>



  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoal from './components/CourseGoal.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    // 'the-header' : TheHeader
    // TheHeader: TheHeader
    TheHeader,
    ActiveGoals,
    ManageGoals
    // BadgeList,
    // UserInfo,
    // CourseGoal

  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(component){
      this.selectedComponent = component;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
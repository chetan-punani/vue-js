<template>
<section>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</section>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { 
      changesSaved: false,
    }
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('userlist component beforerouteenter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('userlist component beforerouteleave');
    console.log(to, from);

    if(this.changesSaved) {
      next();
    } else {
      const userWarn = confirm('Unsaves chnage are there!!!');
      next(userWarn);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
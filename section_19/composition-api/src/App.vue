<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName" ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName" >set LastName</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from "vue";
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    // const uName = ref('Chetan');
    let uAge = ref(23);
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);
    // const user = reactive({
    //   name: 'chetan',
    //   age: 23
    // });

    provide('userAge', uAge);
    
    const uName = computed(function () {
      return firstName.value + " " + lastName.value;
    });

    watch([uAge, uName], function(newValue, oldValue) {
      console.log('old age: ',oldValue[0]);
      console.log('new age: ', newValue[0]);
      console.log('old age: ',oldValue[1]);
      console.log('new age: ', newValue[1]);
    });


    function setNewAge() {
      uAge.value = 32;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // }
  // provide() {
  //   return { age: this.age};
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>

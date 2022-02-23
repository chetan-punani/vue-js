<template>
  <!-- <section>
    <div class="container">
      <user-list></user-list> 
    </div>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <p v-if="paraIsVisible">Sometines visible...</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <div class="container">
      <transition name="fade-button" mode="out-in">
        <button @click="showUsers" v-if="!usersAreVisible">Show User</button>
        <button @click="hideUsers" v-else>Hide User</button>
      </transition>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>

    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </section> -->
  
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import UserList from './components/UserList.vue';

export default {
  // components: {
  //   UserList
  // },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled(element) {
      console.log(element);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(element) {
      console.log(element);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(element) {
      console.log("beforeEnter()");
      console.log(element);
      element.style.opacity = 0;
    },
    enter(element, done) {
      console.log("enter()");
      console.log(element);
      let round = 1;
      this.enterInterval = setInterval(() => {
        element.style.opacity = round * 0.01;
        round++;
        if(round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(element) {
      console.log("afterEnter");
      console.log(element);
    },
    beforeLeave(element) {
      console.log("beforeLeave()");
      console.log(element);
      element.style.opacity = 1;
    },
    leave(element, done) {
      console.log('leave');
      console.log(element);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        element.style.opacity = 1 - round * 0.01;
        round++;
        if(round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(element) {
      console.log('afterleave');
      console.log(element);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-50px); */
  animation: slide-fade 0.3s ease-out forwards;
}


.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 1;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 0;
}

.route-enter-form {}

.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}

.route-enter-to {}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}


/* .para-enter-from { */
  /* opacity: 0;
  transform: translateY(-30px); */
/* } */

/* .para-enter-active { */
  /* transition: all 0.3s ease-out; */
  /* animation: slide-scale 3s ease-out; */
/* } */

/* .para-enter-to { */
  /* opacity: 1;
  transform: translateY(0); */
/* } */

/* .para-leave-from { */
  /* opacity: 1;
  transform: translateY(0px); */
/* } */

/* .para-leave-active { */
  /* transition: all 0.3s ease-in; */
  /* animation: slide-scale 0.3s ease-out; */
/* } */

/* .para-leave-to { */
  /* opacity: 0;
  transform: translateY(-30px); */
/* } */
</style>

const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.texte.value;
    },
    beforeCreated(){
      console.log('beforecreated');
    },
    created(){
      console.log('created');
    },
    beforeMount(){
      console.log('beforemont');
    },
    Mounted(){
      console.log('mounted');
    },
    beforeUpdated(){
      console.log('beforeupdated');
    },
    updated(){
      console.log('updated');
    },
    beforerUnmounted(){
      console.log('beforeunmounted');
    },
    unmounted(){
      console.log('unmounted');
    }
  },
});

app.mount('#app');

const app2 = Vue.createApp({

});

app2.moount('#app2');
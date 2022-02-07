const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      finalName : ''
    };
  },
  methods : {
    funAdd(num) {
      this.counter = this.counter + num;
    },
    funRemove(num){
      this.counter = this.counter - num;
    },
    nameSet(event){
      this.name = event.target.value;
    },
    submitForm(){
     alert('Submit!!!'); 
    },
    funFinalName(){
      this.finalName = this.name;
    },
    resetInput(){
       this.name = '';
    }
  }
});

app.mount('#events');

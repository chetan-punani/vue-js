const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      lname : ''
      // finalName : ''
    };
  },
  watch : {
    counter(value){
      if(value > 50) {
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value){
    //   if(value === ''){
    //     this.finalName = '';
    //   }else {
    //     this.finalName = value + ' ' + 'punani';
    //   }
    // },
  },
  computed : {
    finalName(){
      console.log("running...");
      if(this.name === '' || this.lname === ''){
        return '';
      }
      return this.name + ' ' + this.lname;
    }
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
    resetInput(){
       this.name = '';
       this.lname = '';
    }
  }
});

app.mount('#events');

const appl = Vue.createApp({
    data(){
        return{
            courseTitlea : 'First Course',
            courseTitleb : 'Second Course',
            courseTitlec : 'Third Course',
            vbind : 'Link', 
            link : 'https://github.com/chetan-punani/vue-js.git'
        };
    },
    methods: {
        funGenerateRandomNumber() {
            const ranNum = Math.random()*100;
            if(ranNum <= 50 ){
                return this.courseTitlea;
            } else {
                return this.courseTitleb;
            }
        }
    }
});
appl.mount('#user-goal');
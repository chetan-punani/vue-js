const app = Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id:'parmar',
                    name:'chetan',
                    phone:'1234 5678 90',
                    email:'abc@gmail.com'
                },
                {
                    id:'chavda',
                    name:'sandip',
                    phone:'9874 563 21',
                    email:'def@gmail.com'
                }
            ]
        };
    }
});

app.component('friend-div',{
    template : `
    <li>
    <h2>{{ friend.name}}</h2>
    <button @click="toggleDetails">{{detailsVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
    `,
    data(){
        return{
            detailsVisible : false ,
            friend : {
                id:'parmar',
                name:'chetan',
                phone:'1234 5678 90',
                email:'abc@gmail.com'
            }
        };
    },
    methods: {
        toggleDetails(){
            this.detailsVisible = !this.detailsVisible;
        }
    }
    
});

app.mount('#app');
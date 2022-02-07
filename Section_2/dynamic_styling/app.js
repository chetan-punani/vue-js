const app = Vue.createApp({
    data(){
        return {
            divASel : false ,
            divBSel : false ,
            divCSel : false
        };
    },
    computed : {
        divAClass(){
            return {
                bcolor: this.divASel
            };
        },
        divBClass(){
            return {
                bcolor: this.divBSel
            };
        },
        divCClass(){
            return {
                bcolor: this.divCSel
            };
        }
    },
    methods : {
        divSelected(div){
            if(div === 'A'){
                this.divASel = !this.divASel;
            } else if (div === 'B'){
                this.divBSel = !this.divBSel;
            } else if(div === 'C'){
                this.divCSel = !this.divCSel;
            }
        }
    }
});

app.mount('#styling');
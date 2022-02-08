function getRandomVal(min, max){
    return Math.floor(Math.random()* (max-min) + min) ;
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 0,
            winner : null,
            logMessages : []
        }
    },
    computed: {
        monsterBarStyle(){
            if(this.monsterHealth < 0){
                return {width: '0%'};
            } else {
                return {width: this.monsterHealth + '%'};
            }
        },
        playerBarStyle(){
            if(this.playerHealth < 0){
                return {width: '0%'};
            } else {
                return {width: this.playerHealth + '%'};
            }
            
        },
        specialAtack(){
            return this.currentRound % 3  !== 0;
        }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            } else if( value <= 0){ 
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
            } else if( value <= 0){
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackOnMonster(){
            this.currentRound++;
            const health = getRandomVal(5, 10);
            this.monsterHealth -= health;
            this.addlogMessages('player','attack',health);
            this.attackOnplayer();
        },
        attackOnplayer(){
            const health = getRandomVal(6, 12);
            this.playerHealth -= health;
            this.addlogMessages('monster','attack',health);
        },
        specialAttackMonster(){
            this.currentRound++;
            const health = getRandomVal(10, 25);
            this.monsterHealth -= health;
            this.addlogMessages('player','special attack',health);
            this.attackOnplayer();
        },
        healPlayer(){
            const health = getRandomVal(7, 14);
            if(this.playerHealth + health > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth += health;
            }
            this.addlogMessages('player','heal',health);
            this.attackOnplayer();
        },
        startAgain(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        surrender(){
            this.winner = 'monster';
        },
        addlogMessages(who, what, value){
            this.logMessages.unshift({
                actionBy : who,
                actionType : what,
                actionValue : value
            });
        }
    }
});

app.mount('#game');
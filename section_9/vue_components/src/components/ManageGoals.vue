<template>
<div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal"/>
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
        <h2>Invalid Input!</h2>
        <p>Please enter some text...</p>
        <button @click="confirmError">Ok</button>
    </error-alert>
    </teleport>
</div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false
        };
    },
    methods: {
        setGoal() {
            const enterValue = this.$refs.goal.value;
            if(enterValue === ''){
                this.inputIsInvalid = true;
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    },

}
</script>
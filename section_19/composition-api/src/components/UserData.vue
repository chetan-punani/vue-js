<template>
<div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
    props: ['firstName', 'lastName'],
    setup(argument) {
        const uName = computed(function() {
            return argument.firstName + ' ' + argument.lastName
        });

        const age = inject('userAge');
        //context.emit('save-data', 1); //this.$emit('save-data', 1);

        return { userName: uName, age: age};
    }
    // computed: {
    //     userName() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
}
</script>
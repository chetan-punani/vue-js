<template>
<section>
    <h3>{{ counter }}</h3>
    <p>we do more....</p>
    </section>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters['numbers/normalizedCounter'];
        }
    }
}
</script>
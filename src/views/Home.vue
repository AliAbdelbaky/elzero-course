<template lang="pug">
.homepage
    <homeinfo/>
    section.hello
        h2 Hello Sexy
    section.hello
        h2 Hello ali
</template>

<script>
import homeinfo from "../components/home/homesection";
export default {
    name: "Home",
    components: { homeinfo }
};
</script>
<style lang="sass" scoped>
.info
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
.hello
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
</style>

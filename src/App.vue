<template>
    <navbar />
    <router-view />
</template>
<script>
import navbar from "./components/gobal/navbar";
import "./js/smothSroll";
export default {
    name: "app",
    components: { navbar }
};
</script>

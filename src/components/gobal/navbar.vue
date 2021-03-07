<template lang="pug">
header
    h3.logo#logo Ali Abdelbaky
    nav
        ul.nav-list
            li.nav-links
                router-link(to='/') Home
            li.nav-links
                router-link(to='/about') About
            li.nav-links
                router-link(to='/help') Help
            li.nav-links
                router-link(to='/blog') Blog
</template>
<script>
import "../../js/navbaranimte";
export default {
    name: "navbar"
};
</script>

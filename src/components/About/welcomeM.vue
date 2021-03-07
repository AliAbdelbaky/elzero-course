<template lang="pug">
.welcom-massege
    h1 {{pageName}}
    p {{pageDisc}}
</template>
<script>
export default {
    name: "welcomeM",
    data: () => {
        return {
            pageName: "About us",
            pageDisc: "This is an about page"
        };
    }
};
</script>

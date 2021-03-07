<template lang="pug">
.our-help
        h1 {{pageName}}
        p {{pageDisc}}
</template>
<script>
export default {
    name: "helpinfo",
    data: () => {
        return {
            pageName: "Help us",
            pageDisc:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quas"
        };
    }
};
</script>

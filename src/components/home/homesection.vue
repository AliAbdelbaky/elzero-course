<template lang="pug">
.info
    h2 {{pageName}}
    p {{pageDisc}}
</template>
<script>
export default {
    name: "homeinfo",
    data: () => {
        return {
            pageName: "Homepage",
            pageDisc: "Lorem Ipsuem agtf uj asdsdinmf kdrdf"
        };
    }
};
</script>

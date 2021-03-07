<template lang="pug">
.post-box.text-left
    span.post-views {{views}}
    h3.post-title {{title}}
    span.post-date {{date}}
    p.post-content {{content}}
    .row
        .col.sm-6.text-left
            span.post-author  {{author}}
        .col.sm-6.text-right
            span.post-category {{category}}
</template>
<script>
export default {
    name: "posts",
    props: ["views", "title", "date", "content", "author", "category"]
};
</script>

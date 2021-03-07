<template lang="pug">
.blog-page
    h2 {{pageName}}
    p {{pageDisc}}
    .container
        .row
            .col-md-8
                .posts-area
                    <posts v-for ="post in posts" v-bind:key="post.id" :views="post.views" :title="post.title" :date="post.date" :content="post.content" :author="post.author" :category="post.category"/>
            .col-md-4
                .sidbar
                    <sidbar/>
</template>
<script>
import posts from "../components/blog/blogPosts";
import sidbar from "../components/blog/blogSidbar";
import jsonBlog from "../json/blog-posts.json";
export default {
    name: "blog",
    components: { posts, sidbar },
    data: () => {
        return {
            pageName: "Blog",
            pageDisc: "This is Blog Page",
            posts: jsonBlog
        };
    }
};
</script>

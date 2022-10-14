<template>
  <div>
    <!-- if we have box in page is static in all routes as edit profile box
    ==> (change info , change img , change settings) and need there in all pages when select the change we need ok?
    => create file with the same name of the folder it  include all routes , start with _(underscore) ==> _blog.vue ==> is static in all pages under blog folder
     -->
    <h2>Static link in all blog pages</h2>
    <nuxt-link :to="{ name: `blog-id`, params: { id: '1' } }"
      >Post Id</nuxt-link
    >
    <!-- extendRoutes is in nuxt.config is used to create custome router in nuxt -->
    <nuxt-link to="/extendfromblog">Extend Router</nuxt-link>
    <!-- nuxt-child ==> is the pages in the blog folder  -->
    <nuxt-child />
  </div>
</template>
<script>
import userAuth from "../mixins/userAuth"
export default {
  middleware: "check-login",
  // mixins:[userAuth]
};
</script>

<template>
  <div>
    <h1>posts</h1>
    <div class="posts">
      <div class="post-box" v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <span>{{ post.body.slice(0, 100) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  asyncData({ $axios }) {
    /*
    ==> here we used asyncData for handle api WHY not use mounted ?
    ==> mounted it will be work normall but in the page source all posts not be found
     because server is ssr and will upload the content of page without api is bad for SEO
    ==> asyncData is make server upload the content and the content is depend on api in the source page and it's very good for SEO
    ==>in the nuxt if i install axios when install app i can use axios without import it
     here {$axios} is object from context and called it for use and use $axios.$method
    ==> this keyword  in the mounted is refere to vue instance of the component but we use SSR so this is will be undefined : solution ==> use context
     */

    // #####################
    /*
  return keyword for promise or function will be make request and return for the object it will pass data
*/
    return $axios.$get("/posts").then((res) => {
      return {
        posts: res,
      };
    });

    // fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"})
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     this.posts = res;
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
  },
};
</script>

<style>
h1 {
  text-align: center;
}
.posts {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.posts > div {
  width: 30.333%;
  padding: 10px;
  border: 1px solid #333;
  margin-bottom: 10px;
}
</style>

<template>
  <div>
    <h1>posts</h1>
    <div class="posts">
      <div class="post-box" v-for="post in posts" :key="post.id">
        <h3>
          <nuxt-link :to="`/blog/${post.id}`">
          <!-- here i use this click event for deny the request and pass data to store and get it without request -->
            <span @click="updatePost(post)">
              {{ post.title }}
            </span>
          </nuxt-link>
        </h3>
        <span>{{ post.body.slice(0, 100) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch({ $axios, store }) {
    /*
    with use fetch, i can pass data direct to store
     */
    return $axios
      .$get("/posts")
      .then((res) => {
        store.commit("updatePosts", res);
      });
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    updatePost(post) {
      this.$store.commit("selectedPost", post);
    },
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

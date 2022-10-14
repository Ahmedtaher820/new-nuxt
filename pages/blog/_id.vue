<template>
  <!-- here told the browser this page will be id pages -->
  <div>
    <h2>{{ $store.state.selectedPostObj.title }}</h2>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.$store.state.selectedPostObj.title.slice(0,5),
      meta:[
        {
          hid:"description",
          name:"description",
          content:this.$store.state.selectedPostObj.body
        }
      ]
    };
  },
  // validate is methods from nuxt to validate in the routes if we have id is not a number and need to check if it's number or no and this methods must be return true or false
  // is number ==> return true ==> open page
  // is not a number ==> return false ==> go to page is not found
  validate({ params }) {
    return !isNaN(params.id);
  },
  fetch({ $axios, store, params }) {
    // check for reduce requests and confirm for this post is which i selected
    if (
      store.state.selectedPostObj &&
      store.state.selectedPostObj.id == params.id
    ) {
      return true;
    }
    // this baseURL:url is in nuxt.config ==> my api is always called it
    return $axios.$get(`/posts/${params.id}`).then((res) => {
      console.log(res);
      store.commit("selectedPost", res);
    });
  },
};
</script>

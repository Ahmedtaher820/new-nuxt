<template>
  <div>
    <div>
      <h2>welcome to the default page</h2>
      <nuxt-link :to="{ name: 'postsWithAsync' }">postsWithAsync</nuxt-link>
      <br />
      <nuxt-link :to="{ name: 'postsWithFetch' }">postsWithFetch</nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  middleware:"check-login"
};
</script>

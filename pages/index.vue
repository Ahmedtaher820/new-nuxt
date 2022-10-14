<template>
<div>
  <nuxt-link to="blog/post">Post</nuxt-link>
  <Tutorial/>
</div>
</template>

<script>
export default {
  name: 'Home',
  layout:"headerLayout",
  head(){
    return{
      title:"Home Page",
      meta:[
        {
          hid:"description",
          name:"description",
          content:`This Is ${this.name} Page`
        }
      ]
    }
  }
}
</script>

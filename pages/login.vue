<template>
  <div>
    <form @submit.prevent="submitUser">
      <div class="input-group">
        <label for="username" ref="usernameLabel">User Name</label>
        <input
          type="text"
          id="username"
          ref="usernameInput"
          v-model="username"
        />
        <div class="err" v-if="err">Name Must be More Than 5 Letter</div>
      </div>
      <div class="input-group">
        <label for="username">Password</label>
        <input type="password" id="Password" v-model="password" />
      </div>
      <button type="submit" :disabled="!username || !password">Submit</button>
      <nuxt-link to="/signup">Sign Up</nuxt-link>
    </form>
  </div>
</template>

<script>
export default {
  layout: "headerLayout",
  // middleware is execute when open this page and make your code first
  // if i want to use middelware in most page use this way
  middleware: "say-hello", // here called the middleware file name
  /*
  // if i make middleware in the file
  middleware(){
    console.log("welocme sir")
  }
  */
  middleware: ["say-hello", "welcome"], // if i want to call more than middleware
  data() {
    return {
      username: "",
      password: "",
      err: false,
    };
  },
  methods: {
    submitUser() {
      if (this.usernameVaildation(this.username)) {
        console.log("done")
      } else {
        console.log("not done")
      }
    },
    usernameVaildation(val) {
      if (val.length < 5) {
        this.$refs.usernameInput.classList.add("error");
        this.$refs.usernameLabel.classList.add("error");
        this.err = true;
        return false;
      } else {
        this.$refs.usernameInput.classList.remove("error");
        this.$refs.usernameLabel.classList.remove("error");
        this.err = false;
        return true;
      }
    },


  },
  watch: {
    username: function (v) {
      this.usernameVaildation(v);
    },
    // username: function (v) {
    //   this.userpassVaildation(v);
    // },
  },
};
</script>

<style>
form {
  max-width: 800px;
  width: 600px;
  background-color: #eee;
  border: 2px solid #999;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 20px;
  margin: 30px auto;
}
form > div {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
form > div input {
  padding: 10px 5px;
  border: none;
  outline: none;
  margin-top: 5px;
}
form > div .err {
  margin-top: 5px;
  color: red;
  font-size: 14px;
}
form > div input.error {
  border: 1px solid red;
}
form > div label.error {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
form button {
  width: fit-content;
  background-color: #333;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  margin: 10px auto;
  cursor: pointer;
}
</style>

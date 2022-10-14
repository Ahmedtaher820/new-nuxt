export default {
  mounted() {
    const userToken = JSON.parse(localStorage.getItem("userTokenCode"));
    if (!userToken) {
      if (this.$route.name == "signup") {
        return;
      }
      this.$router.push("/login");
    }
  },
}

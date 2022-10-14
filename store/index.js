export default{
  state:()=>({
    posts:[],
    selectedPostObj : {}
  }),
  mutations:{
    updatePosts(state , payload){
      state.posts = payload
    },
    selectedPost(state , payload){
      state.selectedPostObj = payload
    },
  },
  actions:{
    nuxtServerInit({commit},{redirect}){
      console.log("nuxtServerInit Run")
      redirect("/blog")
      if(process.client){ // not work because here in this function will run in server status only not in client
        console.log(localStorage.getItem("user-list-token"))
      }
    }
  }
}
// nuxtServerInit
/*
if i have data and i want to upload this data when every time refresh page
// is call one time(مره واحده) , when application is run at first time or refresh website and not run in client site
*/

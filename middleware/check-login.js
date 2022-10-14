export default ({redirect , route }) =>{
  console.log("done from user")
  if(process.client){
     const userToken = JSON.parse(localStorage.getItem("userTokenCode"))
  if(!userToken){
    if(route.name == "signup"){
      return
    }
    redirect("/login")
  }
  }

}

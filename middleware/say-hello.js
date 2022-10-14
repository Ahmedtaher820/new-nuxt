// let me build function and execute before rendering page or all pages
// middleware is always execute when open the page one time ==> first time open this page execute in the ssr and then client side at every time
// but the plugin is execute for once time when app is rendering at the first time and may be call two time first in the ssr or in csr
// if i want to check if this user is login or not used middleware
// if i want to make middleware is work in pages used the normal way ==> middleware:"middleName"
// if i want to use middleware when router is change used ==> nuxt.config => router{middleware : "middlename"} ==> is recommanded in authentcation stats
export default(context) =>{
  console.log("welocme sir")
}

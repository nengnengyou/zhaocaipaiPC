import vm from "../main";

export default {
  /* 登陆后保存用户信息 */
  saveLogin (res) {
    vm.$store.commit("saveIsLogin", true);
    vm.$store.commit("saveToken", res.data.userinfo.token);
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("userToken", res.data.userinfo.token);	
	
	vm.$store.commit('saveMobile', res.data.mobile);
	localStorage.setItem('usermobile', res.data.mobile);
  },
  /* 同步store信息 */
  syncUserInfo () {
    let getLogin = localStorage.getItem("isLogin");
    let userToken = localStorage.getItem("token");
	let userMobile = localStorage.getItem("mobile");
	
    setTimeout(() => {
      if (getLogin == 'true') vm.$store.commit("saveIsLogin", getLogin);
      vm.$store.commit("saveToken", userToken);
	  vm.$store.commit("saveMobile", usermobile);
    }, 0);
  }
}
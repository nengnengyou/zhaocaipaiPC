import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";
import vm from "../main";
axios.defaults.timeout = 5 * 10000;

// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//axios.defaults.headers.post['XX-Device-Type'] = 'web'
//axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
// axios.defaults.headers['Access-Control-Allow-Headers'] = 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
// axios.defaults.headers['X-Powered-By'] = '3.2.1'
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

//axios.defaults.headers['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 配置接口地址
// axios.defaults.baseURL = 'https://zcp.zhaocaipaipai.com'
//axios.defaults.baseURL = 'http://dev.zhaocaipai.com'
// axios.defaults.baseURL = "http://192.168.2.22/"; //"http://192.168.2.23:8040/index.php"; //"https://test.zhaocaipaipai.com"; // "https://zcp.zhaocaipaipai.com";
// axios.defaults.baseURL = 'https://new.zhaocaipaipai.com'
// axios.defaults.baseURL = 'http://192.168.0.155:8010/'
///axios.defaults.baseURL = 'http://192.168.0.139/'
// axios.defaults.baseURL = 'http://192.168.0.138/'
// axios.defaults.baseURL = 'http://39.107.239.87/'
// axios.defaults.baseURL = 'http://192.168.0.155:8010/'
// axios.defaults.baseURL = 'http://192.168.0.111:8010'
axios.defaults.baseURL = "https://test.zhaocaipaipai.com";
// axios.defaults.baseURL = "http://192.168.2.23:8040/index.php";

var loadingInstance;
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  (config) => {
    // if(vm.$store.getters.getToken){
    // 	config.headers['token'] = vm.$store.getters.getToken
    // }

    if (config.method === "get") {
      config.paramsSerializer = function(params) {
        return qs.stringify(params, {
          arrayFormat: "repeat",
        });
      };
    }
    config.data = qs.stringify(config.data);
    config.headers.post["token"] = vm.$store.getters.getToken;
    config.headers.get["token"] = vm.$store.getters.getToken;

    return config;
  },
  (err) => {
    Message.error("请求错误");
    return Promise.reject(err);
  }
);
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  (res) => {
    //console.log(res)
    if (res.data.code === 1) {
      // loadingInstance.close()
      return res;
    } else if (res.data.code === 401) {
      Message.error("请登录");
      window.localStorage.clear();
      vm.$store.commit("clear");
      vm.$router.push("/login");
    } else if (res.data.code === 303) {
      console.log(res.data.code);
      return res;
    } else {
      return res;
      // loadingInstance.close()
      console.log(res.data);
      if (res.data.msg.msg) {
        //console.log(res.data.code)
        Message.error(res.data.msg.msg);
      } else {
        //console.log(res.data.code)
        Message.error(res.data.msg);
      }
    }
  },
  (err) => {
    //console.log(err)
    //console.log(err.response)
    //console.log(err.response.status)
    if (err.response.status === 401) {
      //console.log(vm.$route.path)
      console.log(vm.$route.path);
      if (vm.$route.path == "/" || vm.$route.path == "/live") {
        //console.log(Promise.reject(err))
        return Promise.reject(err.response);
      } else {
        Message.error("请登录");
        window.localStorage.clear();
        vm.$store.commit("clear");
        vm.$router.push("/login");
        console.log(Promise.reject(err));
        return Promise.reject(err);
      }
    } else {
      Message.error("请求失败，请稍后再试");
      return Promise.reject(err);
    }
  }
);
// 发送请求
export function post(url, params) {
  if (
    window.localStorage.getItem("mobile") == "" ||
    window.localStorage.getItem("mobile") == null
  ) {
    window.localStorage.clear();
    vm.$store.commit("clear");
  }

  // if(vm.$store.getters.getToken){
  // 	if(params==null||params==""){
  // 		let token =vm.$store.getters.getToken
  // 		params={
  // 			token:token
  // 		}
  // 	}else{
  // 		params.token=vm.$store.getters.getToken
  // 	}
  // }

  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err.data);
        }
      )
      .catch((err) => {
        reject(err.data);
      });
  });
}
export function get(url, params) {
  if (
    window.localStorage.getItem("mobile") == "" ||
    window.localStorage.getItem("mobile") == null
  ) {
    window.localStorage.clear();
    vm.$store.commit("clear");
    //vm.$router.push('/login')
  }

  // if(vm.$store.getters.getToken){
  // 	if(params==null||params==""){
  // 		let token =vm.$store.getters.getToken
  // 		params={
  // 			token:token
  // 		}
  // 	}else{
  // 		params.token=vm.$store.getters.getToken
  // 	}

  // }else{
  // 	console.log("falsesss")
  // }

  // if(params==null||params==""){
  // 		let token =vm.$store.getters.getToken
  // 		params={
  // 			token:token
  // 		}
  // 	}else{
  // 		params.token=vm.$store.getters.getToken
  // 	}

  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

// export let baseURL = "https://zcp.zhaocaipaipai.com/"
export let baseURL = "http://192.168.0.155:8010/";
// export let baseURL = "http://192.168.0.140/"
// export let baseURL = "http://39.107.239.87/"

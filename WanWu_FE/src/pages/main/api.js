import Vue from 'vue'
import axios from 'axios'
// eslint-disable-next-line
/* eslint-disable */
Vue.prototype.$http = axios
axios.defaults.baseURL = 'api'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
export default {
  	register (data) {
    	return ajax('register/', 'POST',{data})
    },
    checkUserExist(username,email){
      return ajax('checkUserExist/','POST',{data:{username,email}})
    }
}

function ajax(url,method,options){
  if(options!==undefined){
     var {params={},data={}}=options
  }
  else{
    data,params={}
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data
    }).then(obj => {
        resolve(obj)
    }, obj => {
    	reject(obj)
    	Vue.prototype.$error(obj.data.data)
    })
  })
}	
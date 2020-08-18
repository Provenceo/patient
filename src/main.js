// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/css/index.css'
import 'lib-flexible/flexible'
// require('videojs-contrib-hls/dist/videojs-contrib-hls');
import FastClick from 'fastclick'
FastClick.attach(document.body)
FastClick.prototype.focus = function (targetElement) {

  let length;
  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length;
    targetElement.focus();
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};
FastClick.prototype.click = function (targetElement) {
  console.log(targetElement)
};
Vue.use(Vant);
/***** name:localStorage的key* data:localStorage的Value* expire:localStorage的过期时间,默认是1天后过期****///设置缓存
Vue.prototype.localStorageSet = (name, data, expire = new Date().getTime() + expire * 60 * 60 * 1000) => {
  const obj = {
    data,
    expire
  };
  localStorage.setItem(name, JSON.stringify(obj));
};

//读取缓存
Vue.prototype.localStorageGet = name => {
  const storage = localStorage.getItem(name);
  const time = new Date().getTime();
  let result = '';
  if (storage) {
    const obj = JSON.parse(storage);
    if (time < obj.expire) {
      result = obj.data;
    } else {
      localStorage.removeItem(name);
    }
  }
  return result;
};

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

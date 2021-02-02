import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')











var colors = ['#760CE8', '#4782B1', '#E8890C', '#EF6C00', '#764ba2'];

var changeBackground = function () {
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("footerLogo").style.color="#eeeeee"
};

changeBackground();

//////////////////////////全局注册组件///////////////////////////
/* // 注册
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// 创建根实例
new Vue({
  el: '#app1'
}) */
/////////////////////////////////////////////////////////////////

///////////////////////局部注册组件////////////////////////////////
var Child = {
  template: '<div>A custom component!</div>'
}

new Vue({
  el: '#app1',
  components: {
    'my-component': Child
  }
})
//////////////////////////////////////////////////////////////////

var myrow = {
  template: '<tr>A custom component!</tr>'
}

new Vue({
  el: '#app2',
  components: {
    'my-row': myrow
  }
})


var data = { counter: 0 }
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function () {
    //return data  // 技术上 data 的确是一个函数了，因此 Vue 不会警告，但是我们却给每个组件实例返回了同一个对象的引用
	return {       //为每个组件返回全新的数据对象来修复这个问题(三个按钮点击数同时增加的问题)
		counter: 0
	}
  }
})
new Vue({
  el: '#app3'
})

Vue.component('child', {
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})
new Vue({
  el: '#app4'
})

new Vue({
  el: '#app5',
  data: {
    parentMsg: 'Message from parent'
  }
})


Vue.component('todo-item', {
  props: ['text','isComplete'],
  template: '<span>{{ text }}  '+'  {{isComplete}}</span>'
})
//It doesn't work to pass an object...
/* Vue.component('todo-item', {
  props: ['todo'],
  template: '<span>{{ todo.text }}</span>'
}) */
new Vue({
  el: '#app6',
  data:{
	todo: {
		text: 'Learn Vue',
		isComplete: false
	}
  } 
})

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
new Vue({
  el: '#app7'
})
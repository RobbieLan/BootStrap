// Define a new component called button-counter
Vue.component('button-counter', {
   // data:   {  //Wrong, data must be a function!
		// count: 0
	// }
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({ el: '#b-counter1' })
new Vue({ el: '#b-counter2' })

Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
new Vue({ el: '#props-demo' })

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'dynamic content1' },
      { id: 2, title: 'dynamic content2' },
      { id: 3, title: 'dynamic content3' },
    ]
  }
})

new Vue({
  el: '#single-root',
  data: {
    post: {
      title: 'Madame Bovary',
      content: 'Une Dame tres jolie.'
    }
  }
})


Vue.component('b-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
		 { id:1, title: 'title1', content:'content1' },
		 { id:2, title: 'title2', content:'content2' },
		 { id:3, title: 'title3', content:'content3' },
	],
    postFontSize: 1
  }
})

Vue.component('b-post2', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
new Vue({
  el: '#blog-posts-events-demo2',
  data: {
    posts: [
		 { id:1, title: 'title1', content:'content1' },
		 { id:2, title: 'title2', content:'content2' },
		 { id:3, title: 'title3', content:'content3' },
	],
    postFontSize: 1
  }
  // methods: {
  // onEnlargeText: function (enlargeAmount) {
    // this.postFontSize += enlargeAmount
  // }
// }
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
new Vue({
  el: '#custom-inputs',
  data: {
	searchText: 'Anything you want to know.'
  }
})

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
new Vue({
  el: '#content-slot'
})

Vue.component('tab-home', { 
	template: '<div>Home component</div>' 
})
Vue.component('tab-posts', { 
	template: '<div>Posts component</div>' 
})
Vue.component('tab-archive', { 
	template: '<div>Archive component</div>' 
})

new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})


var myrow = {
  template: '<tr>A custom component!</tr>'
}
new Vue({
  el: '#app2',
  components: {
    'my-row': myrow
  }
})
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

// Passing data to child components with props
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
new Vue({ el: '#props-demo' })

// Passing data dynamically (e.g.from an api call)
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

// A single root element
new Vue({
  el: '#single-root',
  data: {
    post: {
      title: 'Madame Bovary',
      content: 'Une Dame tres jolie.'
    }
  }
})

// Sending Messages to Parents with Events
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


// Emitting a Value With an Event
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

Vue.component('tab-home1', { 
	template: '<div>Home component</div>' 
})
Vue.component('tab-post1', { 
	template: '<div>Post component</div>' 
})
Vue.component('tab-archive1', { 
	template: '<div>Archive component</div>' 
})

new Vue({
  el: '#dynamic-component-demo1',
  data: {
    currentTab: 'Home1',
    tabs1: ['Home1', 'Post1', 'Archive1']
  },
  computed: {
    currentTabComponent1: function () {
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

// component in depth


Vue.component('b-post', {
  // camelCase in JavaScript
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
new Vue({
	el:"#d-props",
	data:{
		post:{
			title: 'My journey with vuejs'
		}
	}
})



Vue.component('blog-post', {
  props: ['post'],
  template: '<h2>{{post}}</h2>'
})
new Vue({
	el:"#dynamic-props",
	data:{
		post:{
			id: 1,
			title: 'My journey with vue'
		}
	}
})


Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
})
new Vue({
	el:"#disable-attribute",
	data: {
		username: "name"
	}
})

Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
new Vue({
	el:"#custom-com",
	data:{
		lovingVue:true
	}
})

Vue.component('base-input2', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
})
new Vue({
	el:"#native-events",
	data:{
		username: 'username'
	}
})

Vue.component('text-document', {
  props: ['value'],
  template: `
   <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('update:title', $event.target.value)"
      >
  `
})
new Vue({
	el:"#sync-modifier",
	data:{
		doc:{
			title:'Dark House'
		}
	}
})

Vue.component('base-layout', {
  template: `
   <div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
  <button type="submit">
	<slot name="btn">Submit</slot>
  </button>
</div>
  `
})
new Vue({
	el:"#named-slots",
})

Vue.component('todo-list', {
	props: ['todos'],
	template:`
		<ul>
		  <li
			v-for="todo in todos"
			v-bind:key="todo.id"
		  >
			<!-- We have a slot for each todo, passing it the -->
			<!-- todo object as a slot prop.                -->
			<slot v-bind:todo="todo">
			  <!-- Fallback content -->
			  {{ todo.text }}
			</slot>
		  </li>
		</ul>
	`
})
new Vue({
	el:"#scoped-slots",
	data: {
		todos: [
		  { id: 1, text: 'Foo', isComplete: true },
		  { id: 2, text: 'Bar', isComplete: true }
		]
	}
})

Vue.component('tab-posts', { 
  data: function () {
  	return {
      posts: [
        { 
        	id: 1, 
          title: 'Cat Ipsum',
          content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
        },
        { 
        	id: 2, 
          title: 'Hipster Ipsum',
          content: '<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>'
        },
        { 
        	id: 3, 
          title: 'Cupcake Ipsum',
          content: '<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>'
        }
      ],
      selectedPost: null
    }
  },
	template: `
  	<div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
					v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div 
        	v-if="selectedPost"
          class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
          Click on a blog title to the left to view it.
        </strong>
      </div>
    </div>
  `
})
Vue.component('tab-archive', { 
	template: '<div>Archive component</div>' 
})
new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Posts',
    tabs: ['Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})

Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
new Vue({
	el: '#async-component-demo'
})
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
// you can invoke methods in JavaScript too
//example2.greet() // => 'Hello Vue.js!'

new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

new Vue({
  el: '#example-4',
  methods: {
	  warn: function (message, event) {
		// now we have access to the native event
		if (event) event.preventDefault()
		alert(message)
	  }
	}
})
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})

new Vue({
  el: '#css-transition',
  data: {
    show: true
  }
})

new Vue({
  el: '#css-animation',
  data: {
    show: true
  }
})

new Vue({
  el: '#custom-transition-classes',
  data: {
    show: true
  }
})

new Vue({
  el: '#js-hooks',
  data: {
    show: false
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }
})

new Vue({
  el: '#transitioning-between-elements',
  data: {
    docState: 'saved'
  },
  computed: {
	  buttonMessage: function () {
		switch (this.docState) {
		  case 'saved': return 'Edit'
		  case 'edited': return 'Save'
		  case 'editing': return 'Cancel'
		}
	}
  }
})
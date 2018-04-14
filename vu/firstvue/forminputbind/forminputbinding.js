var app1 = new Vue({
  el: '#app1',
  data: {
    message:null
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    message:null
  }
})

var app3 = new Vue({
  el: '#app3',
  data: {
    checked:false
  }
})

new Vue({
  el: '#app4',
  data: {
    checkedNames: []
  }
})

new Vue({
  el: '#app5',
  data: {
    picked: ''
  }
})

new Vue({
  el: '#app6',
  data: {
    selected: ''
  }
})

new Vue({
  el: '#app7',
  data: {
    selected: []
  }
})

new Vue({
  el: '#app8',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
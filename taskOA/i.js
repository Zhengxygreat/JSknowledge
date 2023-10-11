let vm = new Vue({
  data: {
    x:0,
    y:0
  },
  computed: {
    sum() {
      return this.x + this.y
    }
  },
  methods: {
    
  },
});
vm.$mount('#app')
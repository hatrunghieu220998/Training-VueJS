export default {
  data () {
     return {
      name: 'Hello I am a mixin'
     }
  },

  created: function () {
     console.log('Mixin was applied!')
  },

  methods: {
     greet() {
        console.log(this.name)
     }
  }
}
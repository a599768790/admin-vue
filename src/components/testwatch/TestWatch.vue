<template>
    <div>
        <input type="text" v-model="myInput"/>
        <input type="text" v-model="myPhone"/>
        <span>{{myInput}}</span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      myInput: '子组件的文字',
      myPhone: 123456
    }
  },

  components: {},
  computed: {},
  methods: {},
  watch: {
    myInput: (val) => {
      // 当数据发生变化、执行的操作
      console.log(val)
    },
    myPhone: (val) => {
      // console.log(this.myPhone)
      // eslint-disable-next-line no-undef
      this.$emit('phoneChange', val)
    }
  }
}

</script>

<template>
  <div class="shortcut-wrapper">
      <div class="shortcut">
          <div class="hot-key">
              <h1 class="title">热门搜索</h1>
              <ul>
                  <li @click="addQuery(item.k)" class="item" v-for="item in hotkeys" :key="item.id">
                      <span>{{item.k}}</span>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotkeys: []
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    addQuery (query) {
      // console.log(query)
      // 执行searchbox组件里的setquery方法，传入query参数
      this.$refs.searchbox.setquery(query)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>

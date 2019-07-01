<!--  -->
<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input class="box" ref="searchbox" v-model="query" :placeholder="placeholder" />
    <i @click="clear" v-show="query" class="icon-dismiss">×</i>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  components: {},
  computed: {},
  created () {
    this.$watch('query', (newquery) => {
      this.$emit('query', newquery)
    })
  },
  methods: {
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    }
  }
}

</script>
<style scoped>
.icon-dismiss{
    position: relative;
    right: 25px;
    top: 1px;
    cursor: pointer;
}
</style>

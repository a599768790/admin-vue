
<template>
  <div>
      <div>{{headertext}}</div>
      <div :key="item.id" class="search-item" @click="selectItem(item)" v-for="item in arr">
          <span class="text">{{item.username}}</span>
          <span class="icon" @click.stop="deleteOne(item)">
          <i class="icon-delete"></i>
          </span>
      </div>
      <div>
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    headertext: {
      type: String,
      default: '默认文字'
    },
    arr: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  },
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {}
}

</script>

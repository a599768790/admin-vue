<template>
  <div>
      <search-box></search-box>
      <!-- <vheader :arr="arrList" :headertext="text">
          <div>插槽</div>
          <span>111</span>
      </vheader> -->

  </div>
</template>

<script>
import vheader from '@/components/header/Header'
import vwatch from '@/components/testwatch/TestWatch'
import SearchBox from '@/components/searchbox/Search'
import { getsearchData } from '@/api/getSearchData'
export default {
  data () {
    return {
      text: '父组件的文字',
      inputText: '父组件的input文字',
      phoneText: 123456
    }
  },
  components: {
    vheader,
    vwatch,
    SearchBox
  },
  methods: {
    fatherChange (val) {
      console.log(val)
    }
  },
  mounted () {
    getsearchData(7).then(res => {
      console.log(res)
    })
  }
}

</script>

<template>
  <div><button @click="zhu">猪</button></div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      id:100
    };
  },
  components: {},
  methods: {
    zhu() {
      // this.$router.push('/one')
      // this.$router.replace('/one')
      this.$router.push({path:'/one' , query:{id:this.id}})
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
<template>
  <div><button @click="zhu">猪</button></div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    zhu() {
      // this.$router.push('/one')
      this.$router.replace('/one')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
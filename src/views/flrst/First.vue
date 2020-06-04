<template>
  <div>
    <button @click="bo">不管怎么样都是小猪猪</button>
    <input type="text" />
  </div>
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
      bo(){
          this.$router.push('child')
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
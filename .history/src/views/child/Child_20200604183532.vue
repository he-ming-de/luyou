<template>
  <div>
    <button>小猪猪</button>
    <input type="text" name id />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  beforeEnter: (to, from, next) => {
    console.log(to);
    console.log(from);
    next()
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
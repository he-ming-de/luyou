<template>
  <div>222222222
  <div>我是传过来的参数---id: {{id}}</div>
  
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      id: ''
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.id=this.$router.params.id
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
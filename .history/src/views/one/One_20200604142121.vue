<template>
  <div>
  <div>我是传过来的参数---id: {{id}}</div> 
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      id: 0
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.id=this.$route.params.id
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
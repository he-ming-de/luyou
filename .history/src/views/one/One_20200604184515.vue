<template>
  <div>
  <button @click="togo">返回</button>
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
    beforeRouteEnter (to, from, next) {
    console.log(to);
    console.log(from);
    },
  components: {},
  methods: {
    togo(){
      this.$router.push('/')
    }
  },
  mounted() {
    this.id=this.$route.params.id
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
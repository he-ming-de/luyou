<template>
  <div>
    <div class="box"></div>
    <div class="box1"></div>
    <div class="box2"></div>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
    height: 20px;
    background:chartreuse;
}
.box1 {
    width: 20px;
    height: 600px;
    background: chocolate;
}
.box2 {
    position: relative;
    top: 900px;
    height: 30px;
    background:darkred;
}
</style>
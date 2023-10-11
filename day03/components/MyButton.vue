<template>
  <div>
    <h2>i am the good one</h2>
  </div>
  <button>good{{ count }}</button>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      count: 0,
    };
  },
};
//一个.vue文件通常我们就是说是一个组件，但是本质不是，本职其实是定义组件的配置对象
</script>

<style scoped>
h2 {
  color: aquamarine;
}
</style>

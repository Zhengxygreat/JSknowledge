<template>
  <div></div>
</template>

<script>
import Mybutton from "day03/components/MyButton.vue"; //拿到了一个定义组件的配置对象
export default {
  name: "",
  components: {
    //这里才使用导入进来的配置对象定义带注册了一个组件
    Mybutton: Mybutton,
  },
};
</script>

<style lang="less" scoped></style>

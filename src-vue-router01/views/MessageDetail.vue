<template>
  <ul class="list-group">
    <li class="list-group-item">msgId:{{msgId}}</li>
    <!-- this.$route是路由传过来的路由对象，从对象当中可以拿到msgId的值 -->
    <!-- <li class="list-group-item">msgContent:{{this.$route.query.msgContent}}</li> -->
    <!-- 简化版本 -->
    <li class="list-group-item">msgContent:{{msgContent}}</li>
    <li class="list-group-item">msgTitle:{{title}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
// 当两个参数的数据不在一个文件里的时候，九组要根据传过来的Id值计算，并且一秒后输出答案
let msgTitles = [
  { id: 1, title: "msg001" },
  { id: 2, title: "msg002" },
  { id: 3, title: "msg003" }
];
export default {
  props: ["msgId", "msgContent"],
  data() {
    return {
      title: ""
    };
  },
  //   mounted只执行一次
  mounted() {
    //   setTimeout(() => {
    //     // find找后边条件中符合条件的第一项
    //     //   msgId在props组件当中的数据，要写成this.props
    //     // msgId拿的是字符串 *1 就可以是一个数字
    //     this.title = msgTitles.find(item => item.id === this.msgId * 1).title;
    //   }, 1000);
    this.show();
  },
  //   点击第二次的时候，可以监视一个值
  watch: {
    //   监视传递过来的路由对象，每次传递过来都是变化的
    $route(newVal, oldVal) {
      //   setTimeout(() => {
      //     this.title = msgTitles.find(item => item.id === this.msgId * 1).title;
      //   }, 1000);
      this.show();
    }
  },

  //   简化对象
  //   上编代码里面写的两个是一样的代码，可以封装一个函数
  methods: {
    show() {
      setTimeout(() => {
        this.title = msgTitles.find(item => item.id === this.msgId * 1).title;
      }, 1000);
    }
  }
};
</script>

<style scoped>
</style>

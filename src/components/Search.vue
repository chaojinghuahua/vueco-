<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      searchName: ""
    };
  },
  methods: {
    // //   1、上边的search按钮一点击，就会走这个回调函数
    // search() {
    //   // 在这个回调函数里面吗可以发ajax回调函数， 但是通信次数太多，
    //   // 可以再main里面发送请求，通过全局事件总线将数据发送到main里面，在发送请求
    //   //  2、这回调函数里面要把点击search按钮获取到的数据发送给Main
    //   //   有了全局总线以后就可以在这个回调函数里面触发searchAjax事件，
    //   //  然后把this.searchName传递过去给Main
    //   this.$bus.$emit("searchAjax", this.searchName);
    // }

    search() {
      this.$store.dispatch("search", this.searchName);
    }
  }
};
</script>

<style scoped>
</style>

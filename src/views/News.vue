<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="(n) in news" :key="n.id">
        news1
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          @click="handlerJump(n)"
        >{{n.id}}</button>
      </li>
    </ul>
    <button @click="$router.back()">点击返回</button>
    <div class="alert alert-success" role="alert">
      <!-- 这行必须写，不然没法显示 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      news: [
        { id: 1, content: "newsOne" },
        { id: 2, content: "newsTwo" },
        { id: 3, content: "newsThree" }
      ]
    };
  },
  methods: {
    //   自己写代码处理跳转
    handlerJump(n) {
      //   this.$router.push("/home/news/info" + n.id + "?newsContent=" + n.content);
      this.$router.push("/home/news/info" + n.id + "?newsContent=" + n.content);
      //   this.$router.replace(
      //     "/home/news/info" + n.id + "?newsContent=" + n.content
      //   );
    }
  }
};
</script>

<style scoped>
</style>

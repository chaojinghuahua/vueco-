<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- <Add :addComment="addComment" /> -->
      <Add ref="add" />
      <List :comments="comments" :deleteComment="deleteComment" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from "@/components/Add"; //相对路径
import List from "@/components/List";

export default {
  components: {
    Add,
    List
  },
  mounted() {
    this.$refs.add.$on("addComment", this.addComment);
  },
  data() {
    return {
      comments: [
        { id: 1, username: "赵丽颖", content: "Vue还不错" },
        { id: 2, username: "易烊千玺", content: "Vue非常非常好" },
        { id: 3, username: "迪丽热巴", content: "Vue666" }
      ]
    };
  },
  methods: {
    // 把这个方法在上边的标签上传递过去，在add.vue当中才可以调用操作数据
    addComment(obj) {
      this.comments.unshift(obj);
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    }
  }
};
</script>

<style scoped></style>

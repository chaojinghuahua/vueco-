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
    <div class="container"></div>
    <!-- <Add :addComment="addComment" /> -->
    <Add ref="add" />
    <List :comments="comments" :deleteComment="deleteComment" />
  </div>
</template>

<script type="text/ecmascript-6">
import Add from "@/components/Add";
import List from "@/components/List";
export default {
  components: {
    Add,
    List
  },
  data() {
    return {
      comments: [
        { id: 1, username: "奥特曼", content: "Vue真的很好用" },
        { id: 2, username: "灰太狼", content: "Vue666" },
        { id: 3, username: "易烊千玺", content: "Vue还不错哈" }
      ]
    };
  },
  methods: {
    addComment(obj) {
      this.comments.unshift(obj);
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    }
  },
  mounted() {
    this.$refs.add.$on("addComment", this.addComment);
  }
};
</script>

<style scoped>
</style>

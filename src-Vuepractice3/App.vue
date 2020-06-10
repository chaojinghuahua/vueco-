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
      <Add ref="add" />
      <list :comments="comments" :deleteComment="deleteComment" />
    </div>
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
        { id: 1, username: "大力士", content: "Vue真棒" },
        { id: 2, username: "奥特曼", content: "Vue666" },
        { id: 3, username: "四字弟弟", content: "Vue很好用" }
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

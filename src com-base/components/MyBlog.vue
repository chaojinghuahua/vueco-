<template>
  <h2>
    这个标题是{{ title }}
    <MyButton :title="title"></MyButton>
  </h2>
</template>

<script type="text/ecmascript-6">
import MyButton from "./MyButton";
export default {
  props: ["title"],
  components: {
    MyButton
  }
};
</script>

<style scoped></style>

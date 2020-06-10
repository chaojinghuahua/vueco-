<template>
  <div>
    <Child>
      <template>
        <h2>哈哈哈哈哈哈</h2>
      </template>

      <h2>简写哈哈哈哈哈</h2>

      <template name="aa">
        <p>具名内容呵呵呵呵</p>
        <h1>呵呵呵呵</h1>
      </template>

      <span slot-scope="slotProps" v-show="isShow" slot="bb">√{{slotProps.person.name}}</span>
    </Child>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from "@/components/Child";
export default {
  components: {
    Child
  },
  data() {
    return {
      isShow: true
    };
  }
};
</script>

<style scoped>
</style>

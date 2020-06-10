<template>
  <div>
    <!-- 匿名插槽 -->
    <slot></slot>
    <slot name="aa"></slot>

    <ul>
      <li v-for="person in persons" :key="person.name">
        <slot name="bb" :person="person">{{person.name}}</slot>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      persons: [
        { id: 1, name: "zhaoliying", age: 33 },
        { id: 2, name: "yangmi", age: 34 },
        { id: 3, name: "qiwei", age: 40 }
      ]
    };
  }
};
</script>

<style scoped>
</style>

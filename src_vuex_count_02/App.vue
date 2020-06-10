<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">{{ count }}</button>
    <button @click="incrementAsync">{{ count }}</button>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  // data() {
  //   return {
  //     count:0
  //   }
  // },
  methods: {
    // increment(){
    //   this.count++
    // },
    // decrement(){
    //   this.count--
    // },
    // incrementIfOdd(){
    //   if(this.count %2===1){
    //      this.count++
    //   }
    // },
    // incrementAsync(){
    //   setTimeout(() => {
    //     this.count++
    //   }, 1000);
    // }

    // increment() {
    //   // this.$store.dispatch('increment')
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   // this.$store.dispatch('decrement')
    //   this.$store.commit("decrement");
    // },

    // 简写版本
    // mapMutations()是一个方法
    ...mapMutations(["increment", "decrement"]),

    // incrementIfOdd() {
    //   this.$store.dispatch("incrementIfOdd");
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // }

    // 简写版本
    // ...mapActions(["incrementIfOdd", "incrementAsync"])

    ...mapActions(["incrementAsync"]),
    ...mapActions({ incrementIfOdd: "IncrementIfOdd" })
  },
  computed: {
    // 获取计算的值
    // count() {
    //   return this.$store.getters.currentCount;
    // }
    ...mapState(["count"])
  }
};
</script>

<style scoped></style>

<template>
  <li @mouseenter="handlerItem(true)" @mouseleave="handlerItem(false)" :class="myClass">
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todo: Object
  },
  computed: {
    isCheck: {
      get() {
        return this.todo.isover;
      },
      set() {}
    }
  },
  data() {
    return {
      // 删除按钮一上来默认不显示
      isShow: false,
      myClass: "leaveClass"
    };
  },
  methods: {
    handlerItem(flag) {
      //   if (flag) {
      //     this.isShow = true;
      //     this.myClass = "enterClass";
      //   } else {
      //     this.isShow = false;
      //     this.myClass = "leaveClass";
      //   }
      this.isShow = !this.isShow;
      flag ? (this.myClass = "enterClass") : (this.myClass = "leaveClass");
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

.enterClass {
  background-color: #ddd;
}

.leaveClass {
  background-color: #ffffff;
}
</style>

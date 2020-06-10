<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span>
      <span>已完成{{overNum}}</span>
      / 全部{{allNum}}
    </span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todos: Array,
    updateAll: Function,
    deleteAll: Function
  },
  computed: {
    //   不是表单类元素获取，不能修改
    overNum() {
      return this.todos.filter(item => item.isOver).length;
    },
    allNum() {
      return this.todos.length;
    },
    isCheckAll: {
      get() {
        //   如果他俩相等，返回的就是true，上边按钮就是勾选状态
        return this.overNum === this.allNum && this.allNum > 0;
      },
      set(val) {
        //   val拿的是true那所有的都被勾选，否则全部不选
        // val的值在上边按钮上拿到，然后调用这个set方法，把val的值传给App.vue当中的函数
        this.updateAll(val);
      }
    }
  },
  methods: {
    deleteA() {
      this.deleteAll();
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

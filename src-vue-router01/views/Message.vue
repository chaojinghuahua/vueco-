<template>
  <div role="tabpanel" class="tab-pane active" id="Message">
    <ul class="list-group">
      <li class="list-group-item" v-for="(m) in messages" :key="m.id">
        <!-- <a href="##">{{m.content}}</a> -->
        <!-- <router-link :to="'/home/message/info'+m.id + '?msgContent=' + m.content">{{m.content}}</router-link> -->
        <!-- 
            此处传的参数可以是对象，前提是必须给这个路由起一个名字
        -->
        <router-link
          :to="{name:'msgInfo',params:{msgId:m.id},query:{msgContent:m.content}}"
        >{{m.content}}</router-link>
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      messages: [
        { id: 1, content: "msgOne" },
        { id: 2, content: "msgTwo" },
        { id: 3, content: "msgThree" }
      ]
    };
  }
};
</script>

<style scoped>
</style>

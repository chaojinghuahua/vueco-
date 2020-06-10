<template>
  <div class="row">
    <h2 v-if="isFirst">初次见面请多关照</h2>
    <h2 v-else-if="isLoading">发送请求中，请稍后...</h2>
    <h2 v-else-if="errMsg">请求出错，{{ errMsg }},请重新发送请求</h2>
    <div v-else class="card" v-for="user in users" :key="user.user_name">
      <a :href="user.user_url" target="_blank">
        <img :src="user.user_img" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.user_name }}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import axios from "axios";
import VueResource from 'vue-resource'//是vue官方的插件
// 对于安装的插件，必须要声明使用

import Vue from 'vue'
Vue.use(VueResource)// 是vue插件必须写上声明并使用插件
// console.dir(Vue);



export default {
  mounted() {
    // 绑定事件
    // 给谁绑定的事件名，绑定事件的回调函数
    this.$bus.$on("searchAjax", this.searchAjax);
  },
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: "",//这里有值就为true
      users: []
    };
  },
  methods: {
    // **********axios发送请求
    //  searchAjax(searchName) {
    //   // 3、Main里面的函数触发了这个回调函数，并且把searchName当做参数传递过来
    //   // 发送请求要把页面切换成正在发送请求中...
    //   this.isFirst = false
    //   this.isLoading = false
    //   axios({
    //      url:'https://api.github.com/search/users',
    //     method:'GET',
    //     params:{
    //       q:searchName
    //     }
    //   }).then(response=>{
    //     // 如果请求成功，需要把成功后的数据进行过滤，填充到数组users中
    //     this.isLoading = false

    //     response.data.items.forEach(item => {
    //       // 1-拿到的每一项item都要将他封装成一个对象(用户名，地址，头像)
    //       let user_name=item.login
    //       let user_img=item.avatar_url
    //       let user_url=item.url
    //       // 2-把我要的数据组装成一个对象
    //       let obj = {
    //           user_name,
    //           user_img,
    //           user_url
    //       }
    //       // 3-把数据对象给放到我的数据当中
    //       this.users.push(obj)
    //     });
    //   }).catch(error=>{
    //     // 如果请求失败，我们得把页面切换成请求失败的页面
    //     // 如果失败就要把失败的消息给上边数据里的值
    //     this.errMsg=error.message
    //     // 这样就会显示失败的消息
    //     this.isLoading = false
    //   })
    // }




    // axios 和await  async的使用
    async searchAjax(searchName){
            //发送请求的时候我们把页面切换成正在发送请求的页面
            this.isFirst = false
            this.isLoading = true

            try {
                let response = await axios({
                    url:'http://localhost:4000/user/info',
                    method:'GET',
                    params:{
                        q:searchName
                    }
                })
                this.isLoading = false
                //items 第一条信息就是一个用户信息 是一个对象
                response.data.items.forEach(item => {
                    //从每个获取到的数据当中过滤我要的数据
                    let user_name = item.login
                    let user_img = item.avatar_url
                    let user_url = item.url
                    //把我要的数据组装成一个对象
                    let obj = {
                        user_name,
                        user_img,
                        user_url
                    }
                    //把数据对象给放到我的数据当中
                    this.users.push(obj)
                })
            } catch (error) {
                this.errMsg = error.message//axios错误信息是message
                this.isLoading = false
            }
        }







  // vue-resource的使用 （是一个官网的插件）
  //   searchAjax(searchName) {
  //     // 3、Main里面的函数触发了这个回调函数，并且把searchName当做参数传递过来
  //     // 发送请求要把页面切换成正在发送请求中...
  //     this.isFirst = false
  //     this.isLoading = false
  //     this.$http({
  //        url:'https://api.github.com/search/users',
  //       method:'GET',
  //       params:{
  //         q:searchName
  //       }
  //     }).then(response=>{
  //       // 如果请求成功，需要把成功后的数据进行过滤，填充到数组users中
  //       this.isLoading = false

  //       response.data.items.forEach(item => {
  //         // 1-拿到的每一项item都要将他封装成一个对象(用户名，地址，头像)
  //         let user_name=item.login
  //         let user_img=item.avatar_url
  //         let user_url=item.url
  //         // 2-把我要的数据组装成一个对象
  //         let obj = {
  //             user_name,
  //             user_img,
  //             user_url
  //         }
  //         // 3-把数据对象给放到我的数据当中
  //         this.users.push(obj)
  //       });
  //     }).catch(error=>{
  //       // 如果请求失败，我们得把页面切换成请求失败的页面
  //       // 如果失败就要把失败的消息给上边数据里的值
  //       this.errMsg=error.message
  //       // 这样就会显示失败的消息
  //       console.log(error)
  //       this.errMsg = error.statusText//错误信息拿的时候不再是message
  //        this.isLoading = false
  //     })
  //   }
  }
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

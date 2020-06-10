import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// vuex的四个核心对象
const state = {
  isFirst: true,
  isLoading: false,
  errMsg: "", //这里有值就为true
  users: [],
};

const mutations = {
  // 请求中操作数据
  requesting(state) {
    this.isFirst = false;
    this.isLoading = true;
  },
  // 请求成功操作数据
  request_success(state, users) {
    this.isLoading = false;
    state.users = users;
  },
  // 请求失败在操作数据
  request_faild(state, msg) {
    this.errMsg = error.msg; //axios错误信息是message
    this.isLoading = false;
  },
};

const actions = {
  async search({ commit }, searchName) {
    // {commit}解构赋值
    //发送请求的时候我们把页面切换成正在发送请求的页面
    // context.commit也可以写成 commit
    commit("requesting");

    try {
      let response = await axios({
        url: "http://localhost:4000/user/info",
        method: "GET",
        params: {
          q: searchName,
        },
      });
      //   定义一个局部变量，过滤出来的数据先把它放在这个数组上
      let users = [];
      //items 第一条信息就是一个用户信息 是一个对象
      response.data.items.forEach((item) => {
        //从每个获取到的数据当中过滤我要的数据
        let user_name = item.login;
        let user_img = item.avatar_url;
        let user_url = item.url;
        //把我要的数据组装成一个对象
        let obj = {
          user_name,
          user_img,
          user_url,
        };
        //把数据对象给放到我的数据当中
        users.push(obj);
      });

      commit(" request_success", users);
    } catch (error) {
      commit(" request_faild", error.message);
    }
  },
};

const getters = {
  isFirst(state) {
    return state.isFirst;
  },
  isLoading(state) {
    return state.isLoading;
  },
  errMsg(state) {
    return state.errMsg;
  },
  users(state) {
    return state.users;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

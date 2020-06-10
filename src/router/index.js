import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@/views/Home";
import About from "@/views/About";
import Message from "@/views/Message";
import News from "@/views/News";
import MessageDetail from "@/views/MessageDetail";
import NewsDetail from "@/views/NewsDetail";

export default new VueRouter({
  mode: "history",
  // 定义路由
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home/message",
          component: Message,
          children: [
            {
              path: "/home/message/info:msgId",
              // query参数传过来的参数会自动放在这个路由对象中，传给子组件，
              // 传过去的就是这个路由对象，在子组件中就可以引用
              component: MessageDetail,
              // props: true, //在子组件当中要接收
              props(route) {
                return {
                  // 把路由对象当中的参数全部拿到，作为子组件的属性使用
                  // 映射为子组件的属性
                  msgId: route.params.msgId,
                  msgContent: route.query.msgContent,
                };
              },
              name: "msgInfo", //给当前路由起名，被称为命名路由
            },
          ],
        },
        {
          path: "/home/news",
          component: News,
          children: [
            {
              path: "/home/news/info:newsId",
              component: NewsDetail,
              props(route) {
                return {
                  newsId: route.params.newsId,
                  newsContent: route.query.newsContent,
                };
              },
              name: "newsInfo",
            },
          ],
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/",
      redirect: "/home", //重定向的意思，可以让它重定向到另外一个路径
      //如果你访问的路径是/ 那么我就转给/home
    },
  ],
});

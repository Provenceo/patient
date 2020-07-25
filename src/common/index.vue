<template>
  <div class="page">
    <router-view></router-view>

    <div class="nav-footer" v-if="$route.meta.navShow">
      <footer>
        <router-link
          v-for="(item, index) in navList"
          :to="item.path"
          :key="index"
          :class="{ active: activeRoute == item.path }"
        >
          <div class="iconfont" :class="item.icon"></div>
          <p>{{item.name}}</p>
        </router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "patient",
  data() {
    return {
      navList: [
        {
          path: "/home",
          icon: "icon-shouye",
          name: "首页"
        },
        {
          path: "/healthlog",
          icon: "icon-rizhi",
          name: "健康日志"
        },
        {
          path: "/footprints",
          icon: "icon-02",
          name: "知识/直播"
        },
        {
          path: "/my",
          icon: "icon-gerenzhongxinyonghu01",
          name: "个人中心"
        }
      ]
    };
  },
  computed: {
    activeRoute() {
      return this.$route.path;
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/styles/index.less";
@import "~@/styles/variable.less";
.page {
  .title {
    position: fixed;
    top: -3px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    color: #1a1a1a;
    background-color: #fff;
    z-index: 999999;
  }
}
.nav-footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  .h(98);
  background: @tab-general-bg-color;
  padding-bottom: 65px;
  display: block;
  footer {
    font-size: 0;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #f8f8f8;
    .pt(10);
    line-height: 1.2;
    width: 100%;
    .h(98);
    display: flex;
    a {
      font-size: 16px!important;
      text-decoration: none;
      color: @base-font-color;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      text-align: center;
      box-sizing: border-box;
      display: block;
      .fs(10);
      .tab-0,
      .tab-1,
      .tab-2,
      .tab-3 {
        display: inline-block;
        .h(42);
        .w(42);
        background-size: cover;
      }
      &:hover {
        text-decoration: none;
      }
    }
    p {
      margin-top: 5px;
      font-size: 12px;
    }
  }
  .active {
    color: #4589ed;
  }
}
</style>

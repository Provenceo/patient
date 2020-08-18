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
          <div :class="'tab-' + index"></div>
          <p v-text="item.name" :class="{ active: activeRoute == item.path }"></p>
        </router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          path: "/home",
          name: "康复方案"
        },
        {
          path: "/patient",
          name: "健康日志"
        },
        // {
        //   path: "/consultant",
        //   name: "康复社区"
        // },
        {
          path: "/consultant",
          name: "疾病知识"
        },
        {
          path: "/my",
          name: "我的信息"
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

<style lang="less">
@import "~@/styles/index.less";
@import "~@/styles/variable.less";
.nav-footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  .h(98);
  background: @tab-general-bg-color;
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
      .fs(22);
      // .tab-0,
      // .tab-1,
      // .tab-2,
      // .tab-3,
      // .tab-4 {
      //   display: inline-block;
      //   .h(42);
      //   .w(42);
      //   background-size: cover;
      // }
      .tab-0,
      .tab-1,
      .tab-2,
      .tab-3 {
        display: inline-block;
        .h(42);
        .w(42);
        background-size: cover;
      }
      .tab-0 {
        background-image: url("~@/assets/images/20200730_03.jpg");
      }
      .tab-1 {
        background-image: url("~@/assets/images/huanzhejkrz.png");
      }
      .tab-2 {
      //   background-image: url("~@/assets/images/huanzhekfsq.png");
       background-image: url("~@/assets/images/huanzhejbzs.png");
      }
      .tab-3 {
        // background-image: url("~@/assets/images/huanzhejbzs.png");
        background-image: url("~@/assets/images/huanzhewd.png");
      }
      // .tab-4 {
        
      // }
      &:hover {
        text-decoration: none;
      }
      &.router-link-active.active {
        .tab-0 {
          background-image: url("~@/assets/images/20200730_03.png");
        }
        .tab-1 {
          background-image: url("~@/assets/images/20200730_09.jpg");
        }
        .tab-2 {
        //   background-image: url("~@/assets/images/20200730_06.jpg");
        background-image: url("~@/assets/images/20200730_12.jpg");
        }
        .tab-3 {
          // background-image: url("~@/assets/images/20200730_12.jpg");
           background-image: url("~@/assets/images/20200730_14.png");
        }
        .tab-4 {
          background-image: url("~@/assets/images/20200730_14.png");
        }
      }
    }
    p {
      margin: 0;
      &.active {
        color: #2B89F5;
      }
    }
  }
}
</style>

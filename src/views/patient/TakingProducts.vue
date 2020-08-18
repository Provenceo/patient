<template>
  <div id="alljkrz">
    <van-nav-bar title="全部健康日志" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="main" v-for="item in list" :key="item.id" @click="$router.push(`jkrzxc/${item.id}`)">
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12" class="date">{{item.log_date}}</van-col>
          <van-col span="8" class="zhuangtai">{{item.nengliang_bili>70&&item.danbaizhi_bili>70 ?'已完成':"未完成"}} </van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="12">
            <div class="left">
              <h2>推荐能量</h2>
              <div class="city">{{item.nengliang}}单位</div>
            </div>
            <div class="right">
              <div class="radio">
                <span>完成率</span>
                <h1>{{item.nengliang_bili}}%</h1>
                <div>{{item.nengliang_bili > 70?"已达标":"未达标"}}</div>
              </div>
            </div>
          </van-col>
          <van-col span="12"
            ><div class="left">
              <h2>推荐蛋白质</h2>
              <div class="city">{{item.danbaizhi}}单位</div>
            </div>
            <div class="right">
              <div class="radio">
                <span>完成率</span>
                <h1>{{item.danbaizhi_bili}}%</h1>
                <div>{{item.danbaizhi_bili > 70?"已达标":"未达标"}}</div>
              </div>
            </div></van-col
          >
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getHealthLogList } from "@/apis/patient";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    getlist() {
      getHealthLogList()
        .then(res => {
          this.list = res.data.list;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    }
  },
  mounted() {
    this.getlist();
  }
};
</script>

<style lang="less">
#alljkrz {
  text-align: left;
  .content {
    padding: 0 20px 10px;
    background-color: #fff;
    .main {
      border-top: 1px solid rgba(210, 210, 210, 1);
      margin-bottom: 10px;
      .van-row {
        &:first-child {
          margin: 5px 0;
          .date {
            font-size: 15px;
            color: #151515;
          }
          .zhuangtai {
            font-size: 15px;
            color: #4d89f3;
          }
        }
        .van-col {
          &:last-child {
            text-align: right;
          }
        }
        .left,
        .right {
          vertical-align: middle;
          display: inline-block;
          width: 48%;
          h1 {
            font-size: 18px;
            display: block;
            width: fit-content;
            height: fit-content;
            margin: auto;
          }
          h2 {
            font-size: 14px;
          }
          .city {
            color: #3b89fb;
            font-size: 14px;
          }
          .radio {
            text-align: center;
            color: #fff;
            width: 56px;
            height: 56px;
            background: linear-gradient(
              132deg,
              rgba(104, 169, 242, 1) 0%,
              rgba(57, 121, 233, 1) 100%
            );
            border-radius: 50%;
            span {
              font-size: 7px;
            }
            div {
               font-size: 7px;
            }
          }
        }
      }
    }
  }
}
</style>

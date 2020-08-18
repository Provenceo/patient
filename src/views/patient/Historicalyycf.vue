<template>
  <div id="Historicalyycf">
    <van-nav-bar title="营养处方" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
    <div class="main" v-if="list.length">
      <van-row
        type="flex"
        justify="space-around"
        align="center"
        v-for="(item,index) in list"
        :key="item.id"
        @click="$router.push(`/yycf/${item.id}`)"
      >
        <van-col span="4">
          <div class="rl">
            <div class="year">{{ item.year }}</div>
            <div class="date">{{ item.date }}</div>
          </div>
        </van-col>
        <van-col span="14">第{{ index + 1 }}次营养处方</van-col>
        <van-col span="3"></van-col>
      </van-row>
    </div>
    <van-empty
      image="error"
      description="暂无数据"
      v-if="list.length === 0"
    />
  </div>
</template>

<script>
import { getMyNutritionList } from "@/apis/my";
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
    getMyNutrition() {
      getMyNutritionList()
        .then(({ data }) => {
          data.list.forEach(item => {
            item.created = item.created.replace(/-/g, "/");
            item.year = item.created.substring(0, 4);
            item.date = item.created.substring(6, item.created.length);
          });
          this.list = data.list;
        })
        .catch(err => {
          this.$toast(err.msg);
        });
    },
    getyycf(id){
      console.log(id)
    }
  },
  mounted() {
    this.getMyNutrition();
  },

};
</script>

<style lang="less">
#Historicalyycf {
  background-color: #fff;
  text-align: left;
  color: #404040;
  .van-nav-bar {
    background-color: #ededed;
  }
  .van-nav-bar__left {
    .van-icon {
      color: #404040;
    }
  }
  .van-empty {
    background-color: #f5f5f5;
  }
  .main {
    padding: 10px 20px 0;
    .van-row {
      height: 52px;
      margin-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #f5f5f5;
      .title {
        font-size: 20px;
        font-weight: 500;
        color: rgba(64,64,64,1);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .rl {
        background: url("~@/assets/images/bl.png") no-repeat;
        background-size: 60px 42px;
        width: 60px;
        height: 42px;
        line-height: 20px;
        padding-left: 5px;
        .year {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
        }
        .date {
          font-size: 16px;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>

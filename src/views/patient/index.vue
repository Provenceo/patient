<template>
  <div id="jkrz">
    <div class="harder">
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="15">
          <img src="@/assets/images/jkrzimg.png" alt="" />
          <span>{{ getnewDate() }}</span>
        </van-col>
        <van-col span="8">
          <span class="all" @click="$router.push('/TakingProducts')"
            >全部健康日志<van-icon name="arrow"
          /></span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="15"> </van-col>
        <van-col span="8">
          <div class="tx" v-show="is_have_weiwancheng">
            <img src="@/assets/images/jkrztx.png" alt="" /><span
              >有未完成日志</span
            >
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="main">
      <van-row
        type="flex"
        justify="space-between"
        align="center"
        @click="BodyAndExercise"
      >
        <van-col span="2">
          <img src="@/assets/images/stjyd.png" alt="" />
        </van-col>
        <van-col span="10">
          <span class="title">身体及运动</span>
        </van-col>
        <van-col span="6">
          <span v-if="list.is_shitiyundong == 0 || list.is_shitiyundong == 1">
            <span v-if="list.is_shitiyundong == 0"
              ><img src="@/assets/images/dot.png"/>去完成<van-icon name="arrow"
            /></span>
            <span v-else-if="list.is_shitiyundong == 1"
              ><img src="@/assets/images/Checkmark.png"/>已完成<van-icon
                name="arrow"
            /></span>
          </span>
          <span v-else-if="next.length">
            <span v-if="next[0].day_num"
              >{{ next[0].day_num }}天后<van-icon name="arrow"
            /></span>
          </span>
          <span v-else>可填写<van-icon name="arrow"/></span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center" @click="food">
        <van-col span="2">
          <img src="@/assets/images/ysyy.png" alt="" />
        </van-col>
        <van-col span="10">
          <span class="title">饮食营养</span>
        </van-col>
        <van-col span="6">
          <span
            v-if="list.is_yinshiyingyang == 0 || list.is_yinshiyingyang == 1"
          >
            <span v-if="list.is_yinshiyingyang == 0"
              ><img src="@/assets/images/dot.png"/>去完成<van-icon name="arrow"
            /></span>
            <span v-else-if="list.is_yinshiyingyang == 1"
              ><img src="@/assets/images/Checkmark.png"/>已完成<van-icon
                name="arrow"
            /></span>
          </span>
          <span v-else-if="next.length">
            <span v-if="next[0].day_num"
              >{{ next[0].day_num }}天后<van-icon name="arrow"
            /></span>
          </span>
          <span v-else>可填写<van-icon name="arrow"/></span>
        </van-col>
      </van-row>
      <van-row
        type="flex"
        justify="space-between"
        align="center"
        @click="Physical"
      >
        <van-col span="2">
          <img src="@/assets/images/stzz.png" alt="" />
        </van-col>
        <van-col span="10">
          <span class="title">
            身体症状
          </span>
        </van-col>
        <van-col span="6">
          <span
            v-if="
              list.is_shentizhengzhuang == 0 || list.is_shentizhengzhuang == 1
            "
          >
            <span v-if="list.is_shentizhengzhuang == 0"
              ><img src="@/assets/images/dot.png"/>去完成<van-icon name="arrow"
            /></span>
            <span v-else-if="list.is_shentizhengzhuang == 1"
              ><img src="@/assets/images/Checkmark.png"/>已完成<van-icon
                name="arrow"
            /></span>
          </span>
          <span v-else-if="next.length">
            <span v-if="next[0].day_num"
              >{{ next[0].day_num }}天后<van-icon name="arrow"
            /></span>
          </span>
          <span v-else>可填写<van-icon name="arrow"/></span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center" @click="bool">
        <van-col span="2">
          <img src="@/assets/images/xyzb.png" alt="" />
        </van-col>
        <van-col span="10">
          <span class="title">
            血液指标
          </span>
          <div class="info">
            如无检查，可不填写
          </div>
        </van-col>
        <van-col span="6">
          <span v-if="list.is_xueyezhibiao == 0 || list.is_xueyezhibiao == 1">
            <span v-if="list.is_xueyezhibiao == 0"
              ><img src="@/assets/images/dot.png"/>去完成<van-icon name="arrow"
            /></span>
            <span v-else-if="list.is_xueyezhibiao == 1"
              ><img src="@/assets/images/Checkmark.png"/>已完成<van-icon
                name="arrow"
            /></span>
          </span>
          <span v-else-if="next.length">
            <span v-if="next[0].day_num"
              >{{ next[0].day_num }}天后<van-icon name="arrow"
            /></span>
          </span>
          <span v-else>可填写<van-icon name="arrow"/></span>
        </van-col>
      </van-row>
      <van-row
        type="flex"
        justify="space-between"
        align="center"
        @click="DrugUse"
      >
        <van-col span="2">
          <img src="@/assets/images/yyqk.png" alt="" />
        </van-col>
        <van-col span="10">
          <span class="title">
            用药情况
          </span>
        </van-col>
        <van-col span="6">
          <span
            v-if="
              list.is_yongyaoqingkuang == 0 || list.is_yongyaoqingkuang == 1
            "
          >
            <span v-if="list.is_yongyaoqingkuang == 0"
              ><img src="@/assets/images/dot.png"/>去完成<van-icon name="arrow"
            /></span>
            <span v-else-if="list.is_yongyaoqingkuang == 1"
              ><img src="@/assets/images/Checkmark.png"/>已完成<van-icon
                name="arrow"
            /></span>
          </span>
          <span v-else-if="next.length">
            <span v-if="next[0].day_num"
              >{{ next[0].day_num }}天后<van-icon name="arrow"
            /></span>
          </span>
          <span v-else>可填写<van-icon name="arrow"/></span>
        </van-col>
      </van-row>
    </div>
    <div class="footer">
      <van-row
        type="flex"
        justify="space-between"
        align="center"
        @click="$router.push('/line')"
      >
        <van-col span="2">
          <img src="@/assets/images/jkqx.png" alt="" />
        </van-col>
        <van-col span="10">
          <div class="title">
            健康日志曲线
          </div>
        </van-col>
        <van-col span="6"
          ><span>更多<van-icon name="arrow"/></span
        ></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
// getHealthLog
import { getHealthLog } from "@/apis/patient";
export default {
  data() {
    return {
      is_have_weiwancheng: "",
      next: [],
      list: []
    };
  },
  methods: {
    getnewDate() {
      var myDate = new Date();
      var time = myDate
        .toLocaleDateString()
        .split("/")
        .join(" - ");
      return time;
    },
    healthLog() {
      getHealthLog()
        .then(res => {
          console.log(res);
          this.is_have_weiwancheng = res.data.is_have_weiwancheng;
          this.next = res.data.next;
          this.list = res.data.data;
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    },
    Physical() {
      // if (!this.next.day_num) {
      this.$router.push("/Physical");
      // }
    },
    BodyAndExercise() {
      // if (!this.next.day_num) {
      this.$router.push("/BodyAndExercise");
      // }
    },
    food() {
      // if (!this.next.day_num) {
      this.$router.push("/food");
      // }
    },
    bool() {
      // if (!this.next.day_num) {
      this.$router.push("/bool");
      // }
    },
    DrugUse() {
      // if (!this.next.day_num) {
      this.$router.push("/DrugUse");
      // }
    }
  },
  mounted() {
    this.healthLog();
  }
};
</script>

<style lang="less">
#jkrz {
  background-color: #fff;
  height: 100%;
  padding-bottom: 60px;
  text-align: left;
  .harder {
    padding: 47px 0;
    background: rgba(78, 138, 244, 1);
    position: relative;
    text-align: center;
    img {
      width: 32px;
      height: 32px;
      margin-right: 14px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      font-size: 25px;
      color: #fff;
      font-weight: 500;
      &.all {
        font-size: 12px;
        i {
          vertical-align: text-bottom;
        }
      }
    }
    .tx {
      width: 100px;
      height: 17px;
      margin: auto;
      line-height: 17px;
      background: rgba(58, 116, 222, 1);
      border-radius: 8px;
      img {
        width: 9px;
        height: 10px;
        vertical-align: middle;
        margin-right: 4px;
      }
      span {
        font-size: 10px;
        vertical-align: middle;
      }
    }
  }
  .main,
  .footer {
    margin: 15px 9px;
    .van-row {
      padding: 15px 14px;
      border-bottom: 1px solid rgba(210, 210, 210, 1);
      .info {
        font-size: 12px;
        font-weight: 400;
        color: rgba(104, 104, 104, 1);
      }
      &:last-child {
        border: none;
      }
      .van-col {
        img {
          width: 47px;
        }
        &:last-child {
          text-align: right;
          span {
            font-size: 12px;
            color: rgba(155, 155, 155, 1);
            img {
              width: 6px;
              margin-right: 4px;
            }
            i {
              margin-left: 3px;
              vertical-align: text-bottom;
            }
          }
        }
      }
    }
  }
}
</style>

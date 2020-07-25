<template>
  <div id="personal">
    <div class="massage">
      <div class="mass">
        <!-- <van-image width="100" height="100" src="@/assets/images/patient_avater.png" /> -->
        <van-row type="flex" align="center" justify="space-around">
          <van-col span="6">
            <div class="avater">
              <img src="@/assets/images/hz202007241508 _2.png" alt="" />
            </div>
          </van-col>
          <van-col span="18">
            <div class="information">
              <span class="nickname">土豆炖粉条</span>
              <span class="mobile">18888888888</span>
            </div>
            <div class="medicalrecord">
              肺部 &nbsp; 编号：2020110001&nbsp;&nbsp;<span>></span>
            </div>
          </van-col>
          <van-col span="4" :offset="1">
            <div class="code">
              <img src="@/assets/images/hz202007241508 _1.png" alt="" />
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="push">
        <div class="pushmass">
          <van-row type="flex" justify="space-around">
            <van-col span="8">
              <div class="review">复查通知：</div>
            </van-col>
            <van-col span="10">
              <div class="content">
                术后1个月复查
                <div>(2020年5月20号)</div>
              </div>
            </van-col>
            <van-col span="6">
              <div class="time">
                2天后
              </div>
            </van-col>
          </van-row>
        </div>
        <van-divider
          :style="{
            borderColor: '#dddd'
          }"
        />

        <div class="logmass">
          <van-row type="flex" justify="space-around">
            <van-col span="8">
              <div class="review">健康日志通知：</div>
            </van-col>
            <van-col span="10">
              <div class="content">
                术后7天填写
                <div class="datetime">(2020年5月20号)</div>
              </div>
            </van-col>
            <van-col span="6">
              <div class="time">
                2天后
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="mymassage">
        <van-button round>
          <img src="@/assets/images/hz202007241508 _12.png" alt="" />
          <span>我的通知</span></van-button
        >
        <!-- <van-button round type="info">我的通知</van-button> -->
      </div>
    </div>
    <div class="tool">
      <div class="pertitle">
        常用工具
      </div>
      <div class="common">
        <van-grid :border="false" :column-num="4">
          <!-- <div></div> -->
          <van-grid-item
            v-for="(item, index) in common"
            :key="index"
            @click="$router.push({ path: item.path })"
          >
            <div class="change">
              <van-image :src="item.imgSrc" class="img" />
              <span class="commonname">{{ item.name }}</span>
              <span class="van-info info">{{ item.info }}</span>
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      common: [
        {
          name: "我的医生",
          imgSrc: require("@/assets/images/hz202007241508 _13.png"),
          info: "",
          path: "mydoctor"
        },
        {
          name: "我的病历",
          imgSrc: require("@/assets/images/hz202007241508 _5.png"),
          info: "",
          path: "myrecord"
        },
        {
          name: "治疗方案",
          imgSrc: require("@/assets/images/hz202007241508 _11.png"),
          info: "",
          path: ""
        },
        {
          name: "营养处方",
          imgSrc: require("@/assets/images/hz202007241508 _10.png"),
          info: "",
          path: ""
        },
        {
          name: "我的积分",
          imgSrc: require("@/assets/images/hz202007241508 _9.png"),
          info: "",
          path: ""
        },
        {
          name: "留言板",
          imgSrc: require("@/assets/images/hz202007241508 _3.png"),
          info: "99",
          path: ""
        },
        {
          name: "我的收藏",
          imgSrc: require("@/assets/images/hz202007241508 _4.png"),
          info: "99+",
          path: ""
        },
        {
          name: "调查问卷",
          imgSrc: require("@/assets/images/hz202007241508 _6.png"),
          info: "",
          path: ""
        },
        {
          name: "直播关注",
          imgSrc: require("@/assets/images/hz202007241508 _7.png"),
          info: "",
          path: ""
        },
        {
          name: "意见反馈",
          imgSrc: require("@/assets/images/hz202007241508 _8.png"),
          info: "",
          path: ""
        }
      ]
    };
  }
};
</script>

<style lang="less">
#personal {
  .van-divider {
    // margin: 20px 0;
  }
  text-align: left;
  // margin-top: 15px;
  background-color: #fff;
  padding-bottom: 45px;
  .massage {
    background: url("~@/assets/images/patient_header.png") no-repeat;
    height: 285px;
    background-size: 100% 285px;
    color: #fff;
    padding: 0 28px;
    .mass {
      padding: 38px 0 22px 0;
      .avater {
        text-align: center;
        img {
          height: 67px;
          width: 67px;
        }
      }
      .information {
        font-size: 16px;
        color: #fff;
        .nickname {
        }
        .mobile {
          width: 84px;
          height: 30px;
          line-height: 30px;
          padding: 1px 8px;
          background-color: #4579e2;
          border-radius: 16px;
          font-size: 11px;
        }
      }
      .medicalrecord {
        text-align: center;
        border: 1px solid #fff;
        border-radius: 30px;
        font-size: 12px;
        width: 179px;
        height: 20px;
        padding: 1px;
        color: #fff;
        span {
          font-size: 14px;
        }
      }
      .code {
        img {
          height: 41px;
          width: 41px;
        }
      }
    }
    .push {
      text-align: center;
      font-size: 14px;
      margin: 0 10px;
      .pushmass {
        padding: 14px 0 0;
        .content {
          text-align: left;
        }
        .time {
          width: 67px;
          height: 32px;
          line-height: 32px;
          border: 1px solid #fff;
          border-radius: 32px;
        }
      }
      .logmass {
        padding: 0 0 14px;
        .content {
          text-align: left;
          .datetime {
            margin-left: 0px;
          }
        }
        .time {
          width: 67px;
          height: 32px;
          line-height: 32px;
          border: 1px solid #fff;
          border-radius: 32px;
        }
      }
    }
    .mymassage {
      text-align: center;
      // position: relative;
      // bottom: 10px;
      button {
        width: 124px;
        height: 36px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        img {
          width: 15px;
          height: 14px;
        }
        span {
          vertical-align: top;
        }
      }
    }
  }
  .tool {
    margin-top: 33px;
    padding: 0 28px;
    text-align: left;
    .change {
      position: relative;
      .img {
        margin: auto;
        width: 20px;
        height: 20px;
        display: block;
      }
      .commonname {
        display: block;
        margin-top: 8px;
      }
      .van-info {
        // background-color: #fff;
        top: 0px;
        right: 10px;
        border: 0px;
      }
    }
    .pertitle {
      border-left: 4px solid #3a8afb;
      padding-left: 5px;
      font-size: 15px;
    }
    .common {
      margin-top: 15px;
      .van-grid-item {
        margin-bottom: 15px;
      }
    }
  }
}
</style>

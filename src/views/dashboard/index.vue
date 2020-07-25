<template>
  <div id="patient">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-row>
        <van-col span="24">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img :src="image" style="height:100%;width:100%" />
            </van-swipe-item>
          </van-swipe>
        </van-col>
      </van-row>
      <div class="content">
        <div class="remind">
          <div class="titlename">提醒</div>
          <div class="massage">
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="8"
                ><div class="avater">
                  <img src="@/assets/images/patient_tz.png" alt="" />
                  <i>直播通知</i>
                </div>
              </van-col>
              <van-col span="12" class="introduction">
                <div>
                  丛明华医生
                </div>
                <div>肿瘤患者能不能吃保健品</div>
              </van-col>
              <van-col span="4">
                <div class="today">
                  <img src="@/assets/images/patient_rl.png" alt="" srcset="" />
                  <i>
                    {{ new Date().getMonth() + 1 }}月{{
                      new Date().getDate()
                    }}日
                  </i>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
        <div class="log">
          <van-cell
            title="我的健康日志"
            is-link
            value="查看全部"
            class="title"
          />
          <div class="btn">
            <div class="logbtn">
              <van-button icon="add-o" size="small" round type="info"
                >添加日志</van-button
              >
            </div>
            <div class="vibtn">
              <van-uploader>
                <van-button icon="upgrade" size="small" round type="info"
                  >图片/视频</van-button
                >
              </van-uploader>
            </div>
          </div>
          <div class="newlog">
            <div class="tltle">
              最新日志
            </div>
            <div class="detail">
              <div class="nav">
                <van-row type="flex">
                  <van-col span="12">
                    <div class="left">
                      <span class="title">2020.05.10</span>
                      <span class="tit">填写标题</span>
                    </div>
                  </van-col>
                  <van-col span="12" class="right">
                    <div class="write">未填写</div>
                  </van-col>
                </van-row>
              </div>
              <div class="energy">
                <van-row type="flex" justify="space-around" align="center">
                  <van-col span="12">
                    <div class="recommend">
                      <span>推荐能量</span>
                      <h3>200单位</h3>
                    </div>
                    <div class="recommend CompletionRate">
                      <span class="name">完成率</span>
                      <h2>50%</h2>
                      <span class="name">未达标</span>
                    </div>
                  </van-col>
                  <van-col span="12">
                    <div class="recommend">
                      <span>推荐蛋白质</span>
                      <h3>200单位</h3>
                    </div>
                    <div class="recommend CompletionRate">
                      <span class="name">完成率</span>
                      <h2>50%</h2>
                      <span class="name">未达标</span>
                    </div>
                  </van-col>
                </van-row>
              </div>
            </div>
          </div>
        </div>
        <div class="chart">
          <div class="wlzs">
            <div class="title">握力走势图</div>
            <canvas id="wlzs-chart" class="canvas"></canvas>
          </div>
          <div class="tzzs">
            <div class="title">体重走势图</div>
            <canvas id="tzzs-chart" class="canvas"></canvas>
          </div>
          <div class="yszs">
            <div class="title">饮食评分走势图</div>
            <canvas id="yszs-chart" class="canvas"></canvas>
          </div>
        </div>
        <div class="KnowledgePush">
          <div class="title">相关知识推送</div>
          <div class="main">
            <div class="hall">医生讲堂</div>
            <div class="cont">
              <van-row type="flex" align="center">
                <van-col span="15" class="detail">
                  <div class="title">
                    复旦大学肿瘤学博士,复旦大学附属肿瘤医院 (上海肿瘤医院)
                    肿瘤内科主治医生,复旦大学肿瘤学博士
                  </div>
                  <div class="name">
                    邱立新 复旦大学附属肿瘤医院主治医师
                  </div>
                  <div class="rs">888人观看 700人观看 10积分</div>
                </van-col>
                <van-col span="6">
                  <img
                    :src="require('@/assets/images/hz202007241508 _20.png')"
                    alt=""
                  />
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
const F2 = require("@antv/f2/lib/index");
export default {
  name: "patientIndex",
  data() {
    return {
      images: [
        require("@/assets/images/patient_banner.png"),
        require("@/assets/images/patient_banner.png")
      ],
      isLoading: false,
      data1: [
        {
          time: "2016-08-08 00:00:00",
          tem: 10
        },
        {
          time: "2016-08-08 00:10:00",
          tem: 9
        },
        {
          time: "2016-08-08 00:30:00",
          tem: 1
        },
        {
          time: "2016-08-09 00:35:00",
          tem: 2
        },
        {
          time: "2016-08-09 01:00:00",
          tem: 3
        },
        {
          time: "2016-08-09 01:20:00",
          tem: 4
        },
        {
          time: "2016-08-10 01:40:00",
          tem: 5
        },
        {
          time: "2016-08-10 02:00:00",
          tem: 6
        },
        {
          time: "2016-08-10 02:20:00",
          tem: 1
        }
      ]
    };
  },
  methods: {
    addlog() {
      this.$router.push({ path: "log" });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
    onloadchart() {
      var chart = new F2.Chart({
        id: "wlzs-chart",
        pixelRatio: window.devicePixelRatio
      });
      var defs = {
        time: {
          type: "timeCat",
          mask: "MM/DD",
          tickCount: 5,
          range: [0, 1]
        },
        tem: {
          type: "linear",
          tickCount: 10,
          ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          alias: "握力走势"
        }
      };
      chart.source(this.data1, defs);
      chart.axis("time", {
        label: function label(text, index, total) {
          var textCfg = {};
          if (index === 0) {
            textCfg.textAlign = "left";
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
          }
          return textCfg;
        }
      });
      chart.axis("tem", {
        position: "right"
      });
      chart.tooltip({
        alwaysShow: false,
        offsetY: 0,
        offsetX: 0,
        showTitle: false,
        triggerOn: "touchstart",
        triggerOff: "touchend",
        showCrosshairs: true,
        showTooltipMarker: true
      });
      chart
        .line()
        .position("time*tem")
        .shape("smooth");
      chart
        .point()
        .position("time*tem")
        .shape("smooth")
        .style({
          stroke: "#fff",
          lineWidth: 1
        });
      chart.render();
    },
    ontzzschart() {
      var chart = new F2.Chart({
        id: "tzzs-chart",
        pixelRatio: window.devicePixelRatio
      });
      var defs = {
        time: {
          type: "timeCat",
          mask: "hh:mm",
          tickCount: 5,
          range: [0, 1]
        },
        tem: {
          tickCount: 10,
          ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          alias: "体重走势"
        }
      };
      chart.source(this.data1, defs);
      chart.axis("time", {
        label: function label(text, index, total) {
          var textCfg = {};
          if (index === 0) {
            textCfg.textAlign = "left";
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
          }
          return textCfg;
        }
      });
      chart.axis("tem", {
        position: "right"
      });
      chart.tooltip({
        alwaysShow: false,
        offsetY: 0,
        offsetX: 0,
        showTitle: false,
        triggerOn: "touchstart",
        triggerOff: "touchend",
        showCrosshairs: true,
        showTooltipMarker: true
      });
      chart
        .line()
        .position("time*tem")
        .shape("smooth");
      chart
        .point()
        .position("time*tem")
        .shape("smooth")
        .style({
          stroke: "#fff",
          lineWidth: 1
        });
      chart.render();
    },
    onyszschart() {
      var chart = new F2.Chart({
        id: "yszs-chart",
        pixelRatio: window.devicePixelRatio
      });
      var defs = {
        time: {
          type: "timeCat",
          mask: "MM/DD",
          tickCount: 5,
          range: [0, 1]
        },
        tem: {
          tickCount: 10,
          ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          alias: "饮食评分走势"
        }
      };
      chart.source(this.data1, defs);
      chart.axis("time", {
        label: function label(text, index, total) {
          var textCfg = {};
          if (index === 0) {
            textCfg.textAlign = "left";
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
          }
          return textCfg;
        }
      });
      chart.axis("tem", {
        position: "right"
      });
      chart.tooltip({
        alwaysShow: false,
        offsetY: 0,
        offsetX: 0,
        showTitle: false,
        triggerOn: "touchstart",
        triggerOff: "touchend",
        showCrosshairs: true,
        showTooltipMarker: true
      });
      chart
        .line()
        .position("time*tem")
        .shape("smooth");
      chart
        .point()
        .position("time*tem")
        .shape("smooth")
        .style({
          stroke: "#fff",
          lineWidth: 1
        });
      chart.render();
    }
  },
  mounted() {
    this.onloadchart();
    this.ontzzschart();
    this.onyszschart();
  }
};
</script>

<style lang="less">
#patient {
  // margin-top: 45px;
  text-align: left;
  padding-bottom: 60px !important;

  .my-swipe {
    transform: translateZ(0);
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 150px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
  }
  .content {
    padding: 10px;
    .remind {
      background-color: #fff;
      border-radius: 15px;
      text-align: left;
      padding: 13px;
      margin-top: 10px;
      .titlename {
        font-size: 15px;
        font-weight: 500;
        color: #151515;
        padding: 0 0 10px;
        border-bottom: 1px solid #ebebeb;
      }
      .massage {
        margin-top: 10px;
        .van-col {
          text-align: center;
          margin: auto 0;
          .avater {
            padding-right: 8px;
            border-right: 1px solid #4a83c3;
            img {
              width: 28px;
              height: 20px;
            }
            i {
              vertical-align: super;
              font-size: 14px;
              font-weight: bold;
              color: #f73700;
            }
          }
          .today {
            position: relative;
            img {
              width: 50px;
              height: 40px;
              font-weight: bold;
            }
            i {
              width: fit-content;
              position: absolute;
              left: 50%;
              top: 60%;
              color: #fff;
              font-size: 10px;
              font-weight: bold;
              transform: translate(-50%, -50%);
            }
          }
        }
        .introduction {
          margin-left: 9px;

          text-align: left;

          h1 {
            display: inline;
            font-size: 15px;
          }
          div {
            width: 165px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 14px;
            &:first-child {
              margin-bottom: 8px;
            }
          }
        }
      }
    }
    .log {
      margin-top: 10px;
      padding: 10px;
      background-color: #fff;
      border-radius: 15px;
      .van-cell {
        padding: 10px 0;
        &::after {
          left: 0;
          right: 0;
        }
      }
      .van-cell--clickable:active {
        background: transparent;
      }
      .title {
        font-size: 15px;
      }
      .btn {
        padding: 24px 0;
        border-bottom: 1px solid #ebedf0;
        .logbtn {
          text-align: left;
          display: inline-block;
          width: 45%;
          margin-left: 17px;
        }
        .vibtn {
          text-align: right;
          display: inline-block;
          width: 45%;
        }
        .van-button {
          width: 125px;
        }
      }
      .newlog {
        margin-top: 18px;
        .nav {
          margin-top: 9px;
          color: #f33900;
          background-color: #fdd7cb;
          padding: 5px;
          border-radius: 4px;
          .left {
            text-align: left;
            .tit {
              font-size: 10px;
              margin-left: 9px;
            }
          }
          .right {
            position: relative;
            .write {
              position: absolute;
              right: 0;
              width: 46px;
              text-align: center;
              color: #fff;
              font-size: 12px;
              border-radius: 8px;
              background: #f33900;
            }
          }
        }
        .energy {
          padding: 16px 0;
          border-bottom: 1px solid #e9e7e8;
          .recommend {
            &:nth-child(2n-1) {
              margin-left: 10px;
            }
            display: inline-block;
            h3,
            h2 {
              display: block;
            }
            &.CompletionRate {
              // margin-left: 15px;
              text-align: center;
              width: 75px;
              padding: 10px;
              color: #fff;
              // background-color: #2880f4;
              background-image: linear-gradient(#4ca3fa, #2880f4);
              border-radius: 50%;
              .name {
                font-size: 8px;
              }
              h2 {
                font-size: 15px;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
    .chart {
      margin-top: 10px;
      background-color: #fff;
      border-radius: 15px;
      padding: 13px 15px;
      .title {
        margin-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e9e7ea;
      }
      .canvas {
        width: 100%;
        height: 200px;
      }
    }
    .KnowledgePush {
      margin-top: 10px;
      background-color: #fff;
      border-radius: 15px;
      padding: 13px 15px;
      .title {
        font-size: 15px;
        padding: 7px 0 20px 0;
        border-bottom: 1px solid #eae8eb;
      }
      .main {
        .hall {
          font-size: 14px;
          margin: 11px 0;
        }
        .cont {
          // background-color: #ddd;
          // font-size: 10px;
          .detail {
            width: 200px;
            margin-right: 10px;
          }
          .title {
            border-bottom: none;
            font-size: 12px;
            padding: 0;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .name {
            font-size: 10px;
            color: #908d90;
            margin-top: 8px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .rs {
            font-size: 12px;
            margin-top: 4px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .van-col {
          img {
            width: 115px;
          }
        }
      }
    }
  }
}
</style>

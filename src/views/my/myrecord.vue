<template>
  <div id="myrecord">
    <van-nav-bar
      title="我的病历"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="content">
      <div class="innutrition">
        <div class="chart">
          <div class="wlzs">
            <div class="title">体重走势图</div>
            <canvas id="wlzs-chart" class="canvas"></canvas>
          </div>
        </div>
      </div>
      <div class="record">
        <div class="title">
          病历本
        </div>
        <div class="detail">
          <van-row
            v-for="item in info"
            :key="item.id"
            type="flex"
            justify="space-between"
            align="center"
          >
            <van-col span="6">
              {{ item.title }}
            </van-col>
            <van-col span="6">
              <img :src="item.baogao" alt="" />
            </van-col>
            <van-col span="10"
              ><span>{{ item.created }}</span></van-col
            >
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMyRecordList } from "@/apis/my";
import { getHealthLogLine } from "@/apis/LogLine";
const F2 = require("@antv/f2/lib/index");
export default {
  data() {
    return {
      info: [],
      lineData: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    getDoctor() {
      getMyRecordList()
        .then(({ data }) => {
          this.info = data.list;

          console.log(this.info);
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    },
    getLogLine() {
      getHealthLogLine()
        .then(res => {
          this.lineData = res.data.list;
          console.log(res);
          this.onloadchart();
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    },
    onloadchart() {
      console.log(this.lineData);
      var chart = new F2.Chart({
        id: "wlzs-chart",
        pixelRatio: window.devicePixelRatio
      });
      var defs = {
        log_date: {
          type: "timeCat",
          // mask: "MM/DD",
          tickCount: 5,
          range: [0, 1]
        },
        tizhong: {
          type: "linear",
          tickCount: 5
          // ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          // alias: "体重走势"
        }
      };
      chart.source(this.lineData, defs);
      chart.axis("log_date", {
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
      chart.axis("tizhong", {
        position: "left"
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
        .position("log_date*tizhong")
        .shape("smooth");
      chart
        .point()
        .position("log_date*tizhong")
        .shape("smooth")
        .style({
          stroke: "#fff",
          lineWidth: 1
        });
      chart.render();
      // window.onresize = chart.resize;
    }
  },
  mounted() {
    this.getDoctor();
    this.getLogLine();
  }
};
</script>

<style lang="less">
#myrecord {
  text-align: left;
  .content {
    background-color: #fff;
    padding: 13px;
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
    .chart {
      margin-top: 10px;
      background-color: #fff;
      border-radius: 15px;
      // padding: 13px 15px;
      .title {
        margin-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e9e7ea;
      }
      .canvas {
        width: 100%;
        height: 210px;
      }
    }
    .record {
      margin-top: 25px;
      .detail {
        margin-top: 15px;
        .van-row {
          padding: 11px 0;
          border-bottom: 1px solid rgba(210, 210, 210, 1);
          .van-col {
            img {
              width: 65px;
              height: 41px;
            }
            &:first-child {
              width: 25%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &:last-child {
              text-align: right;
            }
          }
        }
      }
    }
  }
}
</style>

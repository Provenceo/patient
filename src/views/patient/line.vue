<template>
  <div id="line">
    <van-nav-bar title="健康日志曲线" left-arrow @click-left="back" />
    <div class="main">
      <div class="innutrition">
        <div class="chart">
          <div class="wlzs">
            <div class="title">体重走势图</div>
            <canvas id="wlzs-chart" class="canvas"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const F2 = require("@antv/f2/lib/index");
import { getHealthLogLine } from "@/apis/LogLine";
export default {
  data() {
    return {
      lineData: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
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
    this.getLogLine();
  }
};
</script>

<style lang="less">
#line {
  text-align: left;
  .main {
    background-color: #fff;
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
      padding: 10px;
      background-color: #fff;
      border-radius: 15px;
      // padding: 13px 15px;
      .title {
        // margin-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e9e7ea;
      }
      .canvas {
        width: 100%;
        height: 210px;
      }
    }
  }
}
</style>

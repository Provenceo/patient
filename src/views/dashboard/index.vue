<template>
  <div id="patient">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-row>
        <van-col span="24">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <!-- {{image.img}} -->
              <a :href="image.url">
                <img
                  :src="image.img"
                  :title="image.info"
                  :alt="image.title"
                  style="height:100%;width:100%"
                />
              </a>
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
        <div class="fangan">
          <div class="titlename">营养康复方案</div>
          <div class="info">
            <span>医生:丛明华</span>
            <span>2020-7-20</span>
          </div>
          <div class="zlyz">
            治疗原则
            <img src="@/assets/images/doctoradd (4).png" alt="" />
          </div>
          <div class="massage">
            <div class="nums">
              <van-row type="flex" justify="space-between" align="center">
                <van-col span="9">建议摄入能量</van-col>
                <van-col span="6" class="sz" style="color:#4EC0B8">{{
                  fangan.nengliang ? fangan.nengliang : 0
                }}</van-col>
                <van-col span="6" style="text-align:right">千卡</van-col>
              </van-row>
              <van-row type="flex" justify="space-between" align="center">
                <van-col span="9">建议摄入蛋白质</van-col>
                <van-col span="6" class="sz" style="color:#FD7E6F">{{
                  fangan.danbaizhi ? fangan.danbaizhi : 0
                }}</van-col>
                <van-col span="6" style="text-align:right">克</van-col>
              </van-row>
            </div>
            <div class="ywfa">
              <div class="title">药物和食物具体方案</div>
              <div class="time-line">
                <van-steps
                  direction="vertical"
                  :active="active"
                  active-color="#4589ED"
                  active-icon="stop-circle-o"
                >
                  <van-step v-for="item in fangan.list" :key="item.time">
                    <h3>{{ item.info }}</h3>
                    <p>{{ item.time }}</p>
                  </van-step>
                </van-steps>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { home } from "@/apis/home";
export default {
  name: "patientIndex",
  data() {
    return {
      images: [],
      tixing: [],
      fangan: {},
      isLoading: false,
      active: 0
    };
  },
  methods: {
    addlog() {
      this.$router.push({ path: "log" });
    },
    onRefresh() {
      this.load();
    },
    load() {
      home()
        .then(res => {
          this.isLoading = false;
          console.log(res);
          this.images = res.data.banner;
          this.fangan = res.data.fangan;
          var myDate = new Date();
          let getHours = myDate.getHours(); //获取当前小时数(0-23)
          let getMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
          if (getMinutes < 10) {
            getMinutes = "0" + getMinutes;
          }
          let hours = getHours * 3600 + getMinutes * 60;
          console.log(hours);
          let list = this.fangan.list;
          let array = [];
          let timestamp = [];
          for (const key in list) {
            array.push(key);
            let hour = key.split(":")[0];
            let min = key.split(":")[1];
            let hourMin = hour * 3600 + min * 60;
            // console.log(timestamp.length);
            this.$nextTick(() => {
              if (hours > hourMin) {
                timestamp.push(hourMin);
                this.active = timestamp.length - 1;
                console.log(this.active);
              }
            });
          }
          this.tixing = res.data.tixing;
        })
        .catch(err => {
          this.$toast(err.msg);
        });
    }
  },
  mounted() {
    this.load();
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
    // height: 150px;
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 150px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
      a,
      img {
        display: block;
      }
    }
  }
  .content {
    .remind {
      margin: 10px;
      background-color: #fff;
      border-radius: 15px;
      text-align: left;
      padding: 13px;
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
    .fangan {
      background-color: #fff;
      padding: 11px;
      .titlename {
        font-size: 15px;
        font-weight: 500;
        color: #151515;
        padding: 0 0 10px;
        margin: 0 21px;
        border-bottom: 1px solid #ebebeb;
      }
      .info {
        color: #9b9b9b;
        font-size: 12px;
        margin: 5px 21px;
        position: relative;
        span {
          display: inline-block;
          &:last-child {
            position: absolute;
            right: 0;
          }
        }
      }
      .zlyz {
        color: #9b9b9b;
        font-size: 12px;
        margin: 0 21px 10px;
        text-align: right;
        img {
          vertical-align: text-bottom;
          width: 15px;
        }
      }
      .massage {
        background-color: #f5f5f5;
        padding: 15px 13px;
        .nums {
          background: rgba(255, 255, 255, 1);
          border-radius: 6px;
          margin-bottom: 12px;
          .van-row {
            padding: 10px;
            font-size: 12px;
            .sz {
              font-size: 20px;
            }
            &:first-child {
              border-bottom: 1px solid #d2d2d2;
            }
          }
        }
        .ywfa {
          padding: 10px;
          .title {
            font-weight: 500;
            font-size: 15px;
            margin-bottom: 16px;
          }
          .time-line {
            .van-steps {
              padding-left: 68px;
              .van-step__title {
                p {
                  display: inline-table;
                  position: absolute;
                  left: -60px;
                  top: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

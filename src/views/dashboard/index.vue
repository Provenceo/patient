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
                  :src="'https://baijia.nutri-camel.com' + image.img"
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
          <van-notice-bar left-icon="volume-o" :scrollable="false">
            <van-swipe
              vertical
              class="notice-swipe"
              :autoplay="3000"
              :show-indicators="false"
            >
              <van-swipe-item v-for="item in tixing" :key="item.id">
                <van-row type="flex" justify="space-between" align="center">
                  <van-col span="4"
                    ><div class="avater">
                      <!-- <img src="@/assets/images/patient_tz.png" alt="" /> -->
                      <i>{{ item.cname }}</i>
                    </div>
                  </van-col>
                  <van-col span="12" class="introduction">
                    <div>{{ item.title }}</div>
                  </van-col>
                  <van-col span="4">
                    <div class="today">
                      <img
                        src="@/assets/images/patient_rl.png"
                        alt=""
                        srcset=""
                      />
                      <i>
                        {{ item.created }}
                      </i>
                    </div>
                  </van-col>
                </van-row>
              </van-swipe-item>
            </van-swipe>
          </van-notice-bar>
        </div>
        <div class="fangan">
          <div class="titlename">营养康复方案</div>
          <div class="info">
            <span>{{ fangan.doctor_name }}</span>
            <span>{{ fangan.created }}</span>
          </div>
          <div class="zlyz">
            <span @click="$router.push(`/fangan/${fangan.id}`)"
              >治疗原则 <img src="@/assets/images/doctoradd (4).png" alt=""
            /></span>
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
                <div class="t-line">
                  <div
                    class="t-line__item"
                    v-for="(item,index) in fangan.list"
                    :key="index"
                  >
                    <div class="t-line__item-date">{{ item.time }}</div>
                    <div class="t-line__item-line"></div>
                    <div
                      class="t-line__item-info"
                      :class="item.active ? 'active' : 'NoChange'"
                    >
                      <van-row type="flex" align="center" justify="center">
                        <van-col span="6"
                          ><img
                            :src="
                              item.active == 1 ? item.icon_hover : item.icon
                            "
                            alt=""
                          />
                        </van-col>
                        <van-col span="18">
                          <div class="title">
                            {{
                              item.ty == 1
                                ? "营养"
                                : item.ty == 2
                                ? "饮食"
                                : item.ty == 3
                                ? "运动"
                                : ""
                            }}
                          </div>
                          <div class="info">
                            {{ item.info }}
                          </div>
                        </van-col>
                      </van-row>
                    </div>
                  </div>
                  <div class="line" ref="line"></div>
                </div>
              </div>
              <div class="more">
                <img src="@/assets/images/more.png" alt="" />
                <span>查看更多</span>
              </div>
            </div>
          </div>
          <div class="video">
            <van-cell>
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title">营养康复方案教程</span>
              </template>
            </van-cell>
            <van-row gutter="20">
              <van-col
                span="8"
                v-for="(item, index) in fangan.videos"
                :key="index"
              >
                <div class="videoPlay">
                  <!-- <img :src="item.video_poster" alt="" /> -->
                  <img src="@/assets/images/play.png" alt="" />
                  <span class="tit">温梨水制作方法</span>
                </div>
              </van-col>
            </van-row>
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
          this.images = res.data.banner;
          this.fangan = res.data.fangan;
          var newData = [];
          Object.keys(this.fangan.list)
            .sort()
            .map(key => {
              newData[key] = this.fangan.list[key];
            });
          this.fangan.list = newData;
          var myDate = new Date();
          let getHours = myDate.getHours(); //获取当前小时数(0-23)
          let getMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
          if (getMinutes < 10) {
            getMinutes = "0" + getMinutes;
          }
          let hours = getHours * 3600 + getMinutes * 60;
          let list = this.fangan.list;
          let array = [];
          let timestamp = [];
          let timestamp1 = [];
          for (const key in list) {
            array.push(key);
            let hour = key.split(":")[0];
            let min = key.split(":")[1];
            let hourMin = hour * 3600 + min * 60;
            timestamp.push(hourMin);
          }
          timestamp.map((item, index) => {
            if (item >= hours) {
              Object.keys(this.fangan.list).map((key, ind) => {
                if (ind === index) {
                  this.fangan.list[key].active = 1;

                }
              });
              timestamp1.push(item);
              this.$refs.line.style.height =
                (timestamp1.length * 0.2 + (timestamp1.length - 1) / 10) * 55 +
                "%";
            } else {
              Object.keys(this.fangan.list).map(key => {
                this.fangan.list[key].active = 0;
              });
            }
          });
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
  .van-notice-bar {
    background-color:transparent;
    padding: 0;
    margin-top: 10px;
  }
  .van-notice-bar__content.van-ellipsis {
    width: 100%;
  }
  .notice-swipe {
    height: 40px;
    line-height: 40px;
    img {
      height: 20px;
    }
    .van-col {
      text-align: center;
      margin: auto 0;
      .avater {
        padding-right: 8px;
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
          vertical-align: top;
          width: 46px;
          height: 30px;
          font-weight: bold;
        }
        i {
          width: fit-content;
          position: absolute;
          left: 50%;
          top: 50%;
          color: #fff;
          font-size: 8px;
          font-weight: bold;
          transform: translate(-50%, -50%);
        }
      }
    }
    .introduction {
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
  .my-swipe {
    transform: translateZ(0);
    // height: 150px;
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      // height: 150px;
      // line-height: 150px;
      text-align: center;
      background-color: #fff;
      a,
      img {
        display: block;
        height: 190px;
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
            position: relative;
            .line {
              position: absolute;
              padding: 10px;
              bottom: 0;
              left: 46px;
              height: 10px;
              &::after {
                content: "";
                position: absolute;
                left: 8px;
                width: 2px;
                height: 100%;
                background: #4589ed;
              }
              &::before {
                position: absolute;
                left: 2px;
                content: "";
                margin-top: -5px;
                width: 10px;
                height: 10px;
                border: 2px solid #fff;
                background: #4589ed;
                box-shadow: 0 0 0 2px #4589ed;
                border-radius: 50%;
              }
            }
            .t-line {
              .t-line__item {
                display: flex;
                position: relative;
                align-items: center;
                // width: 240px;
                height: 80px;
                margin-bottom: 4px;
                .t-line__item-date {
                  width: 40px;
                  text-align: right;
                }
                .t-line__item-line {
                  margin: 0 15px;
                  height: 100%;
                  width: 0px;
                  border-left: 1px dashed #686868;
                }
                .t-line__item-info {
                  flex: 1;
                  height: 75px;
                  background-color: #fff;
                  border-radius: 10px;
                  img {
                    width: 31px;
                    height: 31px;
                    margin: auto;
                    vertical-align: middle;
                  }
                  .van-row {
                    height: 100%;
                    color: #686868;
                    padding: 13px 8px;
                    font-size: 15px;
                    font-weight: 500;
                    .title {
                      margin-bottom: 5px;
                    }
                    .info {
                      color: #9b9b9b;
                      font-size: 13px;
                      margin: 0;
                      width: 168px;
                      position: static;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                    }
                  }
                  &.active {
                    .title {
                      color: #2b89f5;
                    }
                  }
                  // &.NoChange {
                  //   .title {
                  //     color: #686868;
                  //   }
                  // }
                }
              }
            }
          }
          .more {
            margin: 13px 0 0 48px;

            img {
              width: 15px;
              height: 15px;
              vertical-align: middle;
            }
            span {
              vertical-align: middle;
              color: #9b9b9b;
              font-size: 12px;
              margin-left: 8px;
            }
          }
        }
      }
      .video {
        .van-cell {
          padding: 10px 0;
          &::after {
            left: 0;
            right: 0;
          }
        }
        .van-row {
          overflow: hidden;
          height: 70px;
        }
        .van-col {
          margin-top: 11px;
          width: 96px;
          height: 58px;
          background: #000;
          margin-right: 5px;
          padding: 0;
          position: relative;
          .videoPlay {
            img {
              position: absolute;
              top: 0;
              bottom: 12px;
              left: 0;
              right: 0;
              width: 8px;
              height: 9px;
              margin: auto;
            }

            .tit {
              background-color: rgba(255, 255, 255, 0.5);
              position: absolute;
              bottom: 0;
              text-align: left;
              left: 0;
              // top: 38px;
              font-size: 6px;
              color: #fff;
              display: block;
              width: 96px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              opacity: 0.5;
              padding-left: 3px;
            }
          }
        }
      }
    }
  }
}
</style>

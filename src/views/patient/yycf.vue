<template>
  <div id="newNutritionPrescription">
    <van-nav-bar title="历史营养处方" left-arrow @click-left="onClickLeft" />
    <div class="main">
      <div class="prescription">
        <h1>营养处方</h1>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="20">
            <van-field
              name="nengliang"
              :value="form.nengliang"
              label="建议摄入能量"
              placeholder="暂无信息"
              readonly
            />
          </van-col>
          <van-col span="3" class="company">千卡</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21">
            <van-field
              name="danbaizhi"
              v-model="form.danbaizhi"
              label="建议摄入蛋白质"
              placeholder="暂无信息"
              type="number"
              readonly
            />
          </van-col>
          <van-col span="3" class="company">g</van-col>
        </van-row>
      </div>
      <!-- 早中晚 膳食 -->
      <div class="dietprescription">
        <h1>膳食处方</h1>
        <div class="breakfast">
          <div class="break">
            <img src="@/assets/images/Dietzc_img.png" alt />
            <van-field
              readonly
              clickable
              name="zc_time"
              :value="form.zc_time"
              label="早餐"
              placeholder="暂无数据"
            />
          </div>
          <van-field name="zc_ty" label="食品方式" input-align="right">
            <template #input>
              <van-radio-group
                v-model="form.zc_ty"
                checked-color="#07c160"
                direction="horizontal"
              >
                <van-radio disabled name="1">软食</van-radio>
                <van-radio disabled name="2">半流食</van-radio>
                <van-radio disabled name="3">匀浆膳</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            readonly
            clickable
            name="picker"
            v-model="form.zc_taocan_title"
            label="食品套餐"
            placeholder="暂无数据"
          />
          <div class="foodMain" v-if="form.zc_taocan_id">
            <div class="food">
              <van-row type="flex" align="center">
                <van-col span="4">
                  <div class="num">{{ form.zc_taocan_id }}</div>
                </van-col>
                <van-col span="18" :offset="6">
                  <div class="content">
                    <div v-for="val in form.zc_taocan_info" :key="val">
                      {{ val }}
                    </div>
                  </div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
        <div class="lunch">
          <div class="break">
            <img src="@/assets/images/Dietwuc_img.png" alt />
            <van-field
              readonly
              clickable
              name="wc_time"
              :value="form.wc_time"
              label="午餐"
              placeholder="请选择"
            />
            <van-popup position="bottom">
              <van-datetime-picker type="time" />
            </van-popup>
          </div>
          <van-field name="wc_ty" label="食品方式" input-align="right">
            <template #input>
              <van-radio-group v-model="form.wc_ty" direction="horizontal">
                <van-radio disabled name="1">软食</van-radio>
                <van-radio disabled name="2">半流食</van-radio>
                <van-radio disabled name="3">匀浆膳</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            readonly
            clickable
            name="picker"
            v-model="form.wc_taocan_title"
            label="食品套餐"
            placeholder="请选择食品套餐"
          />
          <div class="foodMain" v-if="form.zc_taocan_id">
            <div class="food">
              <van-row type="flex" align="center">
                <van-col span="4">
                  <div class="num">{{ form.wc_taocan_id }}</div>
                </van-col>
                <van-col span="18" :offset="6">
                  <div class="content">
                    <div v-for="list in form.wc_taocan_info" :key="list">
                      {{ list }}
                    </div>
                  </div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
        <div class="dinner">
          <div class="break">
            <img src="@/assets/images/Dietwc_img.png" alt />
            <van-field
              readonly
              clickable
              name="d_time"
              :value="form.d_time"
              label="晚餐"
              placeholder="请选择"
            />
          </div>

          <van-field name="dinnerRadio1" label="食品方式" input-align="right">
            <template #input>
              <van-radio-group v-model="form.d_ty" direction="horizontal">
                <van-radio disabled name="1">软食</van-radio>
                <van-radio disabled name="2">半流食</van-radio>
                <van-radio disabled name="3">匀浆膳</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            readonly
            clickable
            name="picker"
            v-model="form.d_taocan_title"
            label="食品套餐"
            placeholder="请选择食品套餐"
          />
          <div class="foodMain" v-if="form.d_taocan_id">
            <div class="food">
              <van-row type="flex" align="center">
                <van-col span="4">
                  <div class="num">{{ form.d_taocan_id }}</div>
                </van-col>
                <van-col span="18" :offset="6">
                  <div class="content">
                    <div v-for="list in form.d_taocan_info" :key="list">
                      {{ list }}
                    </div>
                  </div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
      </div>
      <!-- 口服营养方案 -->

      <div class="oral">
        <h1>口服营养方案</h1>
        <div
          class="oralBox"
          v-for="(item, index) in form.kffangan"
          :key="index"
        >
          <van-field
            readonly
            clickable
            name="administration"
            :value="item.time"
            label="口服时间"
            placeholder="请选择口服时间"
          />

          <van-field
            readonly
            clickable
            name="picker"
            :value="item.title + item.info"
            label="服用产品"
            :placeholder="item.title == '' ? '请选择服用产品' : item.info"
          />
        </div>
      </div>
      <!-- 建议加餐 -->
      <div class="extrameals" v-if="form.jiacan.length">
        <h1>加餐建议</h1>
        <div
          class="extramealsBox"
          v-for="(item, index) in form.jiacan"
          :key="index"
        >
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="item.time"
            label="加餐时间"
            placeholder="请选择加餐时间"
          />
          <van-field
            readonly
            clickable
            name="picker"
            :value="item.title + item.info"
            label="加餐食品"
            placeholder="请选择加餐食品"
          />
        </div>
      </div>
      <!-- 运动处方 -->
      <div class="exercise" v-show="form.yundong.length">
        <h1>运动处方</h1>
        <div
          class="exerciseBox"
          v-for="(item, index) in form.yundong"
          :key="index"
        >
          <van-field
            readonly
            clickable
            name="datetimePicker($event,index)"
            :value="item.time"
            label="运动时间"
            placeholder="请选择运动时间"
          />

          <van-field
          readonly
            clickable
            name="picker"
            :value="item.title"
            label="运动方式"
            placeholder="请选择运动方式"
          />

          <van-row type="flex" justify="space-between" align="center">
            <van-col span="20">
              <van-field
              readonly
                v-model="item.shichang"
                label="运动时间"
                placeholder="请输入"
                type="number"
            /></van-col>
            <van-col span="3" class="company">分钟</van-col>
          </van-row>
        </div>
      </div>

      <div class="principle">
        <h1>治疗原则</h1>
        <div class="yd_textarea">
          <van-field
            v-model="form.zlyz_info"
            rows="4"
            autosize
            label=""
            type="textarea"
            placeholder="请输入"
            readonly
          />
        </div>
        <div class="video">
          <video
            id="my-video"
            class="video-js vjs-default-skin "
            controls
            preload="none"
            x5-playsinline=""
            webkit-playsinline=""
            playsinline=""
            poster=""
            x-webkit-airplay="allow"
          >
            <source :src="form.zlyz_video" />
          </video>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { getMyNutritionDetail } from "@/apis/my";
import videojs from "video.js";
import "video.js/dist/video-js.css";
export default {
  data() {
    return {
      id: "",
      radio: "1",
      radio: "2",
      radio: "3",
      form: {}
    };
  },
  methods: {
    initVideo() {
      //此处初始化的调用，我放在了获取数据之后的方法内，而不是放在钩子函数mounted
      //页面dom元素渲染完毕，执行回调里面的方法
      this.$nextTick(() => {
        let myPlayer = videojs(
          document.getElementById("my-video"),
          {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: false,
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            controlBar: {
              playToggle: true
            }
          },
          function() {
            let playbut = document.getElementsByClassName(
              "vjs-big-play-button"
            );
            playbut[0].style.display = "none";
            console.log(this);
            this.on("pause", function() {
              this.pause();
              playbut[0].style.display = "none";
            });
          }
        );
      });
    },
    records() {
      getMyNutritionDetail({ id: this.id })
        .then(res => {
          this.form = res.data.chufang;
          console.log(res.data);
          this.initVideo();
        })
        .catch(err => {
          this.$toast(err.msg);
        });
    },
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    }
  },
  mounted() {
    this.records();
    videojs.addLanguage("zh-CN", {
      "You aborted the media playback": "视频播放被终止",
      "A network error caused the media download to fail part-way.":
        "网络错误导致视频下载中途失败。",
      "The media could not be loaded, either because the server or network failed or because the format is not supported.":
        "视频因格式不支持或者服务器或网络的问题无法加载。",
      "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
        "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
      "No compatible source was found for this media.":
        "无法找到此视频兼容的源。"
    });
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>

<style lang="less">
#newNutritionPrescription {
  text-align: left;
  .van-nav-bar__left {
    .van-icon {
      color: #404040;
    }
  }
  .foodMain {
    margin: 10px 10px;
    box-shadow: 0px 2px 4px 0px rgba(230, 230, 230, 0.5);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .food {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    margin: 10px 0;
    background-color: #fff;
    .van-row {
      position: relative;
      border-bottom: none !important;
    }
    .van-col {
      &:first-child {
        position: absolute;
        background-color: #4589ed;
        height: 100%;
        font-size: 30px;
        color: #fff;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        width: 25%;
      }
      .num {
        position: absolute;
        height: 42px;
        width: 18px;
        left: 50%;
        top: 50%;
        margin-left: -9px;
        margin-top: -18px;
      }
      .content {
        padding: 9px 0 9px 9px;
        div {
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  .van-divider {
    border-color: transparent;
    margin: 10px 0;
  }
  .van-nav-bar__right {
    color: #3660c8;
    font-size: 14px;
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .main {
    .company {
      font-size: 15px;
    }
    margin: 15px;
    .van-row {
      border-bottom: 1px solid #f5f5f5;
    }

    .prescription,
    .dietprescription,
    .oral,
    .extrameals,
    .exercise,
    .principle {
      padding: 20px 15px 0;
      border-radius: 8px;
      background-color: #fff;
      margin-bottom: 15px;
      .breakfast,
      .lunch,
      .dinner {
        padding-top: 20px;
        img {
          height: 17px;
        }
      }
      .btn {
        display: flex;
        flex-direction: row-reverse;
        .del {
          img {
            width: 39px;
            margin: 22px 34px 24px 0;
          }
        }
        .add {
          text-align: right;
          img {
            width: 39px;
            margin: 22px 0 24px;
          }
        }
      }
      .van-cell {
        padding: 20px 0;
        &::after {
          right: 0;
          left: 0;
        }
        .van-field__label {
          font-size: 15px;
          margin-left: 5px;
          width: 120px;
        }
      }
      .extramealsBox,
      .oralBox,
      .exerciseBox,
      .principleBox {
        margin-top: 15px;
      }
    }
    .principle {
      padding-bottom: 10px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .titBtn {
          display: flex;
          align-items: center;
          .titBtnLeft,
          .titBtnRight {
            display: flex;
            align-items: center;
            margin: 0 5px;
          }
          img {
            width: 15px;
          }
          p {
            margin: 0 5px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: 12px;
            color: #404040;
          }
        }
      }

      .video-js {
        width: 100%;
        height: 150px;
        margin: 10px 0 0 0;
        .video-player {
          border-radius: 5px;
        }
        .vjs-big-play-button {
          font-size: 3em;
          line-height: 44px;
          height: 44px;
          width: 44px;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -22px;
          margin-left: -22px;
          padding: 0;
          cursor: pointer;
          opacity: 1;
          border: 0.06666em solid #fff;
          background-color: #2b333f;
          background-color: rgba(43, 51, 63, 0.7);
          border-radius: 50%;
          -webkit-transition: all 0.4s;
          transition: all 0.4s;
        }
      }
    }
    .dietprescription {
      padding-bottom: 15px;
    }
    .van-button {
      width: 100%;
      margin-top: 20px;
      border-radius: 3px;
      font-size: 16px;
      height: 50px;
      line-height: 50px;
    }
    .yd_textarea {
      margin-top: 10px;
      padding: 10px;
      border-radius: 4px;
      background: #f5f5f5;
      color: #999;
      .van-cell {
        padding: 0;
      }
      div {
        background: #f5f5f5;
      }
      textarea {
        background: #f5f5f5;
      }
    }
  }
}

#newNutritionPrescription .main .dietprescription .van-cell .van-field__label {
  font-size: 15px;
  margin-left: 5px;
  width: 60px !important;
}
.break {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebedf0;
}

.van-field__error-message {
  display: none;
}
</style>

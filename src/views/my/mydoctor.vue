<template>
  <div id="mydoctor">
    <van-nav-bar
      title="我的医生"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="content">
      <div class="card">
        <div class="massage">
          <van-row type="flex" align="center" justify="space-around">
            <van-col span="8">
              <div class="avater">
                <img src="@/assets/images/patient_doctor.png" alt="" />
              </div>
            </van-col>
            <van-col span="16">
              <div class="name">
                <h1 class="doctorname">{{ info.name }}</h1>
                <span>{{ info.hospital }}</span>
                <p style="margin-bottom:11px">
                  {{ info.section }}&nbsp;{{ info.level }}
                </p>
                <div v-if="info.tag">
                  <van-tag
                    round
                    plain
                    type="primary"
                    v-for="item in info.tag"
                    v-show="item"
                    :key="item"
                    >{{ item }}</van-tag
                  >
                </div>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- <div class="detail">
          <van-row>
            <van-col span="8">
              <div class="number">2632次</div>
              <div class="text">咨询人数</div>
            </van-col>
            <van-col span="8">
              <div class="number">100%</div>
              <div class="text">好评率</div>
            </van-col>
            <van-col span="8">
              <div class="number">100分</div>
              <div class="text">同行认可</div>
            </van-col>
          </van-row>
        </div> -->
      </div>
      <div class="recommend">
        <div class="tit">
          <h3>推荐理由</h3>
          <img src="@/assets/images/patient_recom.png" alt="" />
        </div>
        <div class="content">
          <ul>
            <li v-show="info.jyinfo">
              <h3 class="title">教育背景</h3>
              <p class="cont">{{info.jyinfo}}</p>
            </li>
            <li v-show="info.chengguo">
              <h3 class="title">学术研究成果、获奖介绍</h3>
              <p class="cont">{{info.chengguo}}</p>
            </li>
            <li v-show="info.shanchang">
              <h3 class="title">医生擅长</h3>
              <p class="cont">
                {{info.shanchang}}
              </p>
            </li>
            <li v-show="info.jiyu">
              <h3 class="title">医生寄语</h3>
              <p class="cont">{{info.jiyu}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="thank">非常感谢您的关注和信任！</div>
    </div>
  </div>
</template>

<script>
import { getMyDoctor } from "@/apis/my";
export default {
  data() {
    return {
      info: {}
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    getDoctor() {
      getMyDoctor()
        .then(({ data }) => {
          this.info = data;
          console.log(this.info);
        })
        .catch(err => {
          console.log(err)
          this.$toast(err);
        });
    }
  },
  mounted() {
    this.getDoctor();
  }
};
</script>

<style lang="less">
#mydoctor {
  .content {
    padding: 15px 10px;
    .card {
      color: #f5f5f5;
      border-radius: 10px;
      background: linear-gradient(to left, #377aeb 0, #6aabf4 100%);
      .massage {
        padding: 28px 0;
        .avater {
          img {
            width: 83px;
            height: 83px;
            border-radius: 50%;
          }
        }
        .name {
          font-size: 13px;
          text-align: left;
          .doctorname {
            display: inline-block;
            font-size: 15px;
            margin-bottom: 11px;
          }
        }
      }
      .detail {
        margin-top: 35px;
        padding-bottom: 27px;
        .number {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 7px;
        }
        .text {
          font-size: 13px;
        }
      }
    }
    .recommend {
      margin: 20px 0 79px 0;
      text-align: left;
      .tit {
        margin-bottom: 15px;
        img {
          width: 13.5px;
          height: 19px;
          vertical-align: middle;
          margin-left: 8px;
        }
      }
      .content {
        padding: 8px 12px 23.5px;
        li {
          padding: 16px 0;
          border-bottom: 1px solid rgba(210, 210, 210, 0.5);
          &:last-child {
            border-bottom: 0px;
          }
          .title {
            margin-bottom: 10px;
            color: #3678ea;
          }
          .cont {
            font-size: 12.5px;
            line-height: 1.5;
          }
        }
        .thank {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

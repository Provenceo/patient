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
        <div class="title">营养不良评分</div>
        <div class="radiu">
          <div class="num">30</div>
          <div class="date">2020.6.30</div>
        </div>
        <div class="name">
          <span>PG-SGA评分</span>
        </div>
      </div>
      <div class="record">
        <div class="title">
          病历本
        </div>
        <div class="detail">
          <van-row>
            <van-col span="8">
                第一次病历
            </van-col>
            <van-col span="8">
                <img src="" alt="">
            </van-col>
            <van-col span="8">span: 8</van-col>
          </van-row>
        </div>
      </div>
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
          console.log(err);
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
#myrecord {
  text-align: left;
  .content {
    background-color: #fff;
    padding: 13px;
    .title {
      font-size: 14px;
      font-weight: bold;
    }
    .innutrition {
      .radiu {
        margin: 22px auto 0;
        width: 121px;
        height: 121px;
        border: 4px solid rgba(69, 121, 226, 1);
        border-radius: 50%;
        text-align: center;
        .num {
          margin-top: 15px;
          font-size: 50px;
          font-weight: bold;
          color: rgba(25, 91, 204, 1);
        }
        .date {
          color: rgba(54, 120, 234, 1);
          font-size: 15px;
        }
      }
      .name {
        margin-top: 12px;
        color: rgba(54, 120, 234, 1);
        text-align: center;
      }
    }
    .record {
      margin-top: 25px;
      .detail {
        margin-top: 15px;
      }
    }
  }
}
</style>

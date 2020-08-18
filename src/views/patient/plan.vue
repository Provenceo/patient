<template>
  <div id="plan">
    <van-nav-bar title="治疗方案详情" left-arrow @click-left="onClickLeft" />
    <div class="main">
      <div>
        <van-form>
          <div class="nav">
            <van-field
              readonly
              v-model="fangan.title"
              label="治疗标题"
              placeholder="请输入治疗标题"
              :rules="[{ required: true, message: '请输入治疗标题！' }]"
            />
          </div>
          <div class="nav">
            <van-field
              readonly
              clickable
              :value="fangan.zldate"
              name="calendar"
              label="治疗时间"
              placeholder="请选择治疗时间"
              right-icon="arrow"
              
            />
          </div>
          <div class="nav">
            <div class="title">治疗方案</div>
            <van-field
              readonly
              v-model="fangan.fangan"
              autosize
              rows="4"
              type="textarea"
              placeholder="请输入"
              :rules="[{ required: true, message: '请输入治疗方案' }]"
            />
          </div>
          <div class="nav">
            <div class="title">特别注意</div>
            <van-field
              readonly
              v-model="fangan.zhuyi"
              autosize
              rows="4"
              type="textarea"
              placeholder="请输入"
            />
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getMyPlanDetail } from "@/apis/my";
export default {
  data() {
    return {
      fangan: {},
      id: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    getMyplan(id) {
      getMyPlanDetail({ id })
        .then(res => {
          this.fangan = res.data.fangan;
          console.log(res);
        })
        .catch(err => {
          this.$toast(err.msg);
        });
    }
  },
  mounted() {
    this.getMyplan(this.id);
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>

<style lang="less">
#plan {
  text-align: left;
  color: #404040;

  .van-nav-bar__left {
    .van-icon {
      color: #404040;
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
  .main {
    margin: 15px;
    .nav {
      margin-bottom: 15px;
      background-color: #fff;
      border-radius: 8px;
      .title {
        padding: 20px 0 0px 15px;
        font-size: 15px;
      }
    }
    .van-cell {
      padding: 20px 15px;
      border-radius: 8px;
      &::after {
        right: 0;
        left: 0;
      }
      .van-field__label {
        font-size: 15px;
        width: 60px;
      }
    }
  }
  .van-button {
    width: 100%;
    margin-top: 20px;
    border-radius: 3px;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
  }
}
</style>

<template>
  <div id="BodyAndExercise">
    <van-nav-bar title="身体及运动" left-arrow @click-left="back" />
    <div class="main">
      <van-form ref="vanForm">
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="form.tizhong"
              label="当前体重"
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="2" :offset="1" class="company">kg</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="form.tizhong_old"
              label="一个月前体重"
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="2" :offset="1" class="company">kg</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="form.tiwen"
              label="体温"
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="2" :offset="1" class="company">℃</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="form.woli"
              label="握力"
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="2" :offset="1" class="company">kg</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="form.tizhilv"
              label="体脂率"
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="2" :offset="1" class="company">%</van-col>
        </van-row>

        <div class="upload">
          <div class="title">请上传图片及视频</div>
          <van-uploader
            accept=" .jpg, .png, .gif, .jpeg,.mp4, .mov, .avi"
            v-model="fileList"
            :after-read="shentiMedia"
            :deletable="false"
          >
            <img src="@/assets/images/addjkrz.png" alt="" />
          </van-uploader>
        </div>

        <van-row
          type="flex"
          justify="space-between"
          align="center"
          :class="form.is_huodong == 0 ? 'bbn' : ''"
        >
          <van-field name="radio" label="是否活动" input-align="right">
            <template #input>
              <van-radio-group v-model="form.is_huodong" direction="horizontal">
                <van-radio name="1">有</van-radio>
                <van-radio name="0">无</van-radio>
              </van-radio-group>
            </template>
          </van-field>
        </van-row>
        <van-row
          type="flex"
          justify="space-between"
          align="center"
          v-show="form.is_huodong == 1"
        >
          <van-col span="21"
            ><van-field
              v-model="form.xiachuang_time"
              label="下床时间"
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="3" :offset="1" class="company">小时</van-col>
        </van-row>
        <van-row
          type="flex"
          justify="space-between"
          align="center"
          v-show="form.is_huodong == 1"
        >
          <van-col span="21"
            ><van-field
              v-model="form.buxing_time"
              label="步行时间"
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="3" :offset="1" class="company">分钟</van-col>
        </van-row>
      </van-form>
      <div class="upload" v-show="form.is_huodong == 1">
        <div class="title">请上传图片及视频</div>
        <van-uploader
          accept=" .jpg, .png, .gif, .jpeg,.mp4, .mov, .avi"
          v-model="fileList1"
          :after-read="huodongMedia"
          :deletable="false"
        >
          <img src="@/assets/images/addjkrz.png" alt="" />
        </van-uploader>
      </div>
      <van-button round type="info" @click="submit">保存并提交</van-button>
    </div>
  </div>
</template>

<script>
import { upFiles, addMedia } from "@/apis/common";
import { addHealthLog } from "@/apis/patient";

export default {
  data() {
    return {
      form: {
        part: 1,
        tizhong: "",
        tizhong_old: "",
        tiwen: "",
        woli: "",
        tizhilv: "",
        shenti_media: [],
        is_huodong: "",
        xiachuang_time: "",
        buxing_time: "",
        huodong_media: []
      },
      fileList: [],
      fileList1: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    shentiMedia(file) {
      upFiles(file)
        .then(res => {
          let arr = res.data;
          arr.forEach(item => {
            this.form.shenti_media.push(item);
          });
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    },
    huodongMedia(file) {
      upFiles(file)
        .then(res => {
          let arr = res.data;
          arr.forEach(item => {
            this.form.huodong_media.push(item);
          });
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    },
    submit() {
      addHealthLog(this.form)
        .then(res => {
          this.$toast("添加成功");
          this.$router.go(-1);
          this.form.id = res.data.id;
          let expire = new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0);
          this.localStorageSet("ssyd", this.form,expire);
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    }
  },
  mounted() {
    let detail = this.localStorageGet("ssyd");
    if (detail) {
      this.form = detail || {
        part: 1,
        tizhong: "",
        tizhong_old: "",
        tiwen: "",
        woli: "",
        tizhilv: "",
        shenti_media: [],
        is_huodong: "",
        xiachuang_time: "",
        buxing_time: "",
        huodong_media: []
      };

      this.fileList = this.form.shenti_media;
      this.fileList1 = this.form.huodong_media;
    }
  }
};
</script>

<style lang="less">
#BodyAndExercise {
  .main {
    padding: 10px;
    background-color: #fff;
    .van-row {
      border-bottom: 1px solid #ebedf0;
      &.bbn {
        border-bottom: none;
      }
      .van-cell {
        padding: 10px 5px;
        .van-cell__title {
          font-size: 15px;
        }
      }
    }
    .upload {
      margin-top: 18px;
      text-align: left;
      margin-bottom: 32px;
      .title {
        margin-bottom: 15px;
        font-size: 15px;
        color: #151515;
      }
      img {
        width: 43px;
      }
      .van-image {
        width: 34px;
        height: 34px;
      }
      .van-uploader__file {
        width: 34px;
        height: 34px;
      }
    }
    .van-button {
      width: 281px;
      height: 37px;
      font-size: 17px;
    }
  }
}
</style>

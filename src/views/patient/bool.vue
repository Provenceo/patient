<template>
  <div id="bool">
    <van-nav-bar title="血液指标" left-arrow @click-left="back" />
    <div class="main">
      <div class="content">
        <van-form :show-error-message="false" label-width="130px" ref="vanForm">
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="21"
              ><van-field
                v-model="form.xueye_na"
                label="钠"
                placeholder="请输入"
                type="number"
                :rules="[{ required: true, message: '请输入钠' }]"
            /></van-col>
            <van-col span="5" :offset="1" class="company">mmol/L</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="21"
              ><van-field
                v-model="form.xueye_gai"
                label="钙"
                placeholder="请输入"
                type="number"
                :rules="[{ required: true, message: '请输入钙' }]"
            /></van-col>
            <van-col span="5" :offset="1" class="company">mmol/L</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="21"
              ><van-field
                v-model="form.xueye_jia"
                label="钾"
                placeholder="请输入"
                type="number"
                :rules="[{ required: true, message: '请输入钾' }]"
            /></van-col>
            <van-col span="5" :offset="1" class="company">mmol/L</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="21"
              ><van-field
                v-model="form.xueye_lin"
                label="磷"
                placeholder="请输入"
                type="number"
                :rules="[{ required: true, message: '请输入磷' }]"
            /></van-col>
            <van-col span="5" :offset="1" class="company">mmol/L</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="21"
              ><van-field
                v-model="form.xueye_crp"
                label="C反应蛋白（CRP）"
                placeholder="请输入"
                type="number"
                :rules="[{ required: true, message: '请输入C反应蛋白（CRP）' }]"
            /></van-col>
            <van-col span="5" :offset="1" class="company">mg/DL</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="21"
              ><van-field
                v-model="form.xueye_tbil"
                label="总胆红素（TBIL）"
                placeholder="请输入"
                type="number"
                :rules="[{ required: true, message: '请输入总胆红素（TBIL）' }]"
            /></van-col>
            <van-col span="5" :offset="1" class="company">umd/L</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="21"
              ><van-field
                v-model="form.xueye_alb"
                label="白蛋白（ALB）"
                placeholder="请输入"
                type="number"
                :rules="[{ required: true, message: '请输入白蛋白（ALB）' }]"
            /></van-col>
            <van-col span="5" :offset="1" class="company">g/L</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="21"
              ><van-field
                v-model="form.xueye_alt"
                label="谷丙转氨酶（ALT）"
                placeholder="请输入"
                type="number"
                :rules="[{ required: true, message: '请输入白蛋白（ALB）' }]"
            /></van-col>
            <van-col span="5" :offset="1" class="company">u/L</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="21"
              ><van-field
                v-model="form.xueye_cr"
                label="肌酐（Cr）"
                placeholder="请输入"
                type="number"
                :rules="[{ required: true, message: '请输入白蛋白（ALB）' }]"
            /></van-col>
            <van-col span="5" :offset="1" class="company">umd/L</van-col>
          </van-row>
        </van-form>
      </div>
      <div class="upload">
        <!-- upload.png -->
        <van-uploader
          style="display:block"
          :after-read="afterRead"
          v-model="fileList"
          accept=".jpg,.png,.gif,.jpeg"
        >
          <img src="@/assets/images/upload.png" alt="" class="uploadImg" />
        </van-uploader>
      </div>
      <div class="save">
        <van-button round type="info" @click="save">保存并提交</van-button>
      </div>
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
        part: 4,
        xueye_na: "",
        xueye_gai: "",
        xueye_jia: "",
        xueye_lin: "",
        xueye_crp: "",
        xueye_tbil: "",
        xueye_alb: "",
        xueye_alt: "",
        xueye_cr: "",
        xueye_img: []
      },
      fileList: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      upFiles(file)
        .then(res => {
          let arr = res.data;
          arr.forEach(item => {
            console.log(item);
            this.form.xueye_img.push(item);
          });
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    },
    save() {
      addHealthLog(this.form)
        .then(res => {
          this.$toast("添加成功");
          this.$router.go(-1);
           this.form.id = res.data.id;
           let expire = new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0);
          this.localStorageSet("bool", this.form,expire);
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    }
  },
  mounted() {
    let detail =this.localStorageGet("bool");
    if(detail)
    {
      this.form = detail || {
      part: 4,
        xueye_na: "",
        xueye_gai: "",
        xueye_jia: "",
        xueye_lin: "",
        xueye_crp: "",
        xueye_tbil: "",
        xueye_alb: "",
        xueye_alt: "",
        xueye_cr: "",
        xueye_img: []
    };
    this.fileList = this.form.xueye_img;
    }
  },
};
</script>

<style lang="less">
#bool {
  .main {
    margin: 10px;
    .content {
      background-color: #fff;
    }
    .upload {
      margin-top: 10px;
      width: 355px;
      // height: 205px;
      background-color: #fff;
      padding: 53px 0 10px;
      .van-uploader,
      .van-uploader__input-wrapper,
      .uploadImg {
        width: 330px;
        // height: 125px;
        margin: auto;
      }
    }
    .save {
      margin-top: 50px;
      text-align: center;
      .van-button {
        width: 281px;
        height: 37px;
      }
    }
  }
}
</style>

<template>
  <div id="DrugUse">
    <van-nav-bar title="用药情况" left-arrow @click-left="back" />
    <div class="main">
      <div class="content">
        <div class="title">
          口服药物
        </div>
        <div class="srk" v-for="(item, index) in form.yaowu_list" :key="index">
          <van-field
            v-model="item.info"
            rows="12"
            autosize
            type="textarea"
            placeholder="请输入文字"
          />
          <div class="upload">
            <span @click="upload(index)">
              <van-uploader
                accept=".jpg,.png,.gif,.jpeg"
                v-model="item.filelist"
                :after-read="onRead"
              >
                <van-button type="info">上传图片</van-button>
              </van-uploader>
            </span>
          </div>
        </div>
        <div class="operation">
          <img
            src="@/assets/images/reduce.png"
            alt=""
            @click="reduce"
            v-show="form.yaowu_list.length > 1"
          />
          <img src="@/assets/images/add.png" alt="" @click="add" />
        </div>

        <div class="save">
          <van-button round type="info" @click="save">保存并提交</van-button>
        </div>
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
        part: 5,
        yaowu_list: [
          {
            info: "",
            img: []
          }
        ]
      },
      index: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    upload(index) {
      this.index = index;
    },

    onRead(file) {
      upFiles(file)
        .then(res => {
          let arr = res.data;
          arr.forEach(item => {
            this.form.yaowu_list[this.index].img.push(item);
          });
        })
        .catch(err => {
          this.$toast(err.msg);
        });
    },
    save() {
      this.form.yaowu_list.forEach(item => {
        delete item.filelist;
      });
      addHealthLog(this.form)
        .then(res => {
          this.$toast("添加成功");
          this.$router.go(-1);
          this.form.id = res.data.id;
           let expire = new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0);
          this.localStorageSet('druguse', this.form,expire);
          // let bool = JSON.stringify(this.form);
          // localStorage.setItem("druguse", bool);
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    },
    reduce() {
      this.form.yaowu_list.pop();
    },
    add() {
      this.form.yaowu_list.push({
        info: "",
        img: []
      });
    }
  },
  mounted() {

    let detail = this.localStorageGet("druguse");
    if(detail) {
      console.log(detail)
      this.form = detail || {
      part: 5,
      yaowu_list: [
        {
          info: "",
          img: []
        }
      ]
    };
    this.form.yaowu_list.forEach(item => {
      item.filelist=[]
      item.img.forEach(el => {
        console.log(el);
        var strurl = el.replace(/\\/g,'/');
        item.filelist.push("https://baijia.nutri-camel.com" + strurl);
      });
       console.log(item);
      //
    });
    }
  }
};
</script>

<style lang="less">
#DrugUse {
  text-align: left;
  .main {
    padding: 10px;
    background-color: #fff;
    .content {
      padding: 17px;
      .title {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      .srk {
        margin-bottom: 10px;
        .van-cell {
          padding: 0;
          background-color: #f5f5f5;
          border-radius: 5px;
          .van-field__control {
            padding: 14px;
          }
        }
        .upload {
          text-align: center;
          .van-uploader {
            margin: 10px 0;
            .van-button {
              width: 110px;
              height: 25px;
              border-radius: 55px;
            }
          }
        }
      }
      .operation {
        text-align: right;
        img {
          width: 19px;
          &:first-child {
            margin-right: 14px;
          }
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
}
</style>

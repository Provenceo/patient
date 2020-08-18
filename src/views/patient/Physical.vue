<template>
  <div id="Physical">
    <van-nav-bar title="身体症状" left-arrow @click-left="back" />
    <div class="main">
      <div class="header">
        <div class="xinqing">
          <div class="tit">
            <img src="@/assets/images/xq.png" alt="" /><span class="title"
              >心情</span
            >
          </div>
          <div id="xinqing" @click="xinqing($event)">
            <span v-for="item in 10" :key="item" id="dengji">
              {{ item }}
            </span>
          </div>
          <div class="detail">
            <span class="low">没有痛苦</span>
            <span class="nice">极度痛苦</span>
          </div>
        </div>
        <div class="shiyu">
          <div class="tit">
            <img src="@/assets/images/shiyu.png" alt="" /><span class="title"
              >食欲</span
            >
          </div>
          <div id="shiyu" @click="shiyu($event)">
            <span v-for="item in 10" :key="item" id="dengji">
              {{ item }}
            </span>
          </div>
          <div class="detail">
            <span class="low">无食欲</span>
            <span class="nice">食欲良好</span>
          </div>
        </div>
        <div class="shuimian">
          <div class="tit">
            <img src="@/assets/images/sm.png" alt="" /><span class="title"
              >睡眠</span
            >
          </div>
          <div class="main">
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="6" class="title">睡眠时长</van-col>
              <van-col span="8" class="title">
                <van-form :show-error-message="false">
                  <van-field
                    v-model="form.zz_shuimianshichang"
                    placeholder="请输入睡眠时长"
                  /> </van-form
              ></van-col>
              <van-col span="3"> <span>小时</span></van-col>
            </van-row>
          </div>
        </div>
      </div>
      <div class="paibian">
        <div class="pb">
          <div class="tit">
            <img src="@/assets/images/pb.png" alt="" />
            <span class="title">排便</span>
          </div>
          <div class="mian">
            <van-row type="flex" justify="space-between" align="center">
              <van-field
                name="radio"
                class="title"
                label="是否排便"
                input-align="right"
              >
                <template #input>
                  <van-radio-group
                    v-model="form.zz_shifoupaibian"
                    direction="horizontal"
                  >
                    <van-radio name="1">是</van-radio>
                    <van-radio name="0">否</van-radio>
                  </van-radio-group>
                </template>
              </van-field>
            </van-row>
            <van-row
              type="flex"
              justify="space-between"
              align="center"
              v-show="form.zz_shifoupaibian == 1"
            >
              <van-col span="6" class="title">大便次数</van-col>
              <van-col span="8" class="title">
                <van-form :show-error-message="false">
                  <van-field
                    v-model="form.zz_dabiancishu"
                    placeholder="请输入"
                  /> </van-form
              ></van-col>
              <van-col span="2"> <span>次</span></van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-field
                name="radio"
                class="title"
                label="大便干燥"
                input-align="right"
              >
                <template #input>
                  <van-radio-group
                    v-model="form.zz_shifouganzao"
                    direction="horizontal"
                  >
                    <van-radio name="1">是</van-radio>
                    <van-radio name="0">否</van-radio>
                  </van-radio-group>
                </template>
              </van-field>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-field
                name="radio"
                class="title"
                label="是否腹泻"
                input-align="right"
              >
                <template #input>
                  <van-radio-group
                    v-model="form.zz_shifoufuxie"
                    direction="horizontal"
                  >
                    <van-radio name="1">是</van-radio>
                    <van-radio name="0">否</van-radio>
                  </van-radio-group>
                </template>
              </van-field>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-field
                name="radio"
                class="title"
                label="小便"
                input-align="right"
              >
                <template #input>
                  <select v-model="form.zz_xiaobian">
                    <option value="500以下">500以下</option>
                    <option value="500-1000">500-1000</option>
                    <option value="1000-1500">1000-1500</option>
                    <option value="1500-2000">1500-2000</option>
                    <option value="2000以上">2000以上</option>
                  </select>
                </template>
              </van-field>
            </van-row>
          </div>
        </div>
      </div>
      <div class="zhengzhuang">
        <div class="zz">
          <div class="tit">
            <img src="@/assets/images/zz.png" alt="" />
            <span class="title">症状</span> <span class="info">(多选)</span>
          </div>
          <div class="mian">
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox v-model="form.zz_shifouxiongmen"
                  >胸闷</van-checkbox
                ></van-col
              >
              <van-col span="3">
                <select v-model="form.zz_xiongmencishu">
                  <option
                    v-for="(item, index) in 10"
                    :key="index"
                    :value="item"
                    >{{ item }}</option
                  >
                </select>
              </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox v-model="form.zz_shifouxinhuang"
                  >心慌</van-checkbox
                ></van-col
              >
              <van-col span="9"> </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox v-model="form.zz_shifououtu"
                  >呕吐</van-checkbox
                ></van-col
              >
              <van-col span="3">
                <select v-model="form.zz_outucishu">
                  <option
                    v-for="(item, index) in 10"
                    :key="index"
                    :value="item"
                    >{{ item }}</option
                  >
                </select>
              </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox v-model="form.zz_shifoufuzhang"
                  >腹胀</van-checkbox
                ></van-col
              >
              <van-col span="9"> </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox v-model="form.zz_shifouexin"
                  >恶心</van-checkbox
                ></van-col
              >
              <van-col span="9"> </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox v-model="form.zz_shifoutengtong"
                  >疼痛</van-checkbox
                ></van-col
              >
              <van-col span="3">
                <select v-model="form.zz_tengtongdengji">
                  <option
                    v-for="(item, index) in 10"
                    :key="index"
                    :value="item"
                    >{{ item }}</option
                  >
                </select>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
      <div class="qita">
        <div class="qt">
          <div class="tit">
            <img src="@/assets/images/qt.png" alt="" />
            <span class="title">其他情况</span>
          </div>
          <div class="mian">
            <van-field
              v-model="form.zz_content"
              rows="5"
              autosize
              type="textarea"
              placeholder="请输入留言"
            />

            <div class="meiti">
              <van-uploader
                accept=" .mp3,.amr"
                v-model="fileList1"
                :after-read="shangchuanyuyin"
                :deletable="false"
                class="yuyin"
              >
                <van-button round type="info" size="mini">上传语音</van-button>
              </van-uploader>
              <van-uploader
                accept=" .jpg, .png, .gif, .jpeg"
                v-model="fileList1"
                :after-read="huodongMedia"
                :deletable="false"
              >
                <van-button round type="info" size="mini">上传图片</van-button>
              </van-uploader>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="submit">
      <van-button round type="info" @click="save">保存并提交</van-button>
    </div>
  </div>
</template>

<script>
import { upFiles, addMedia } from "@/apis/common";
import { addHealthLog } from "@/apis/patient";
export default {
  data() {
    return {
      fileList1: [],
      form: {
        part: 3,
        zz_xinqing: "",
        zz_shiyu: "",
        zz_shuimianshichang: "",
        zz_shifoupaibian: "",
        zz_dabiancishu: "",
        zz_shifouganzao: "",
        zz_shifoufuxie: "",
        zz_xiaobian: "500以下",
        zz_shifouxiongmen: 0,
        zz_xiongmencishu: "1",
        zz_shifouxinhuang: 0,
        zz_shifououtu: 0,
        zz_outucishu: "1",
        zz_shifoufuzhang: 0,
        zz_shifouexin: 0,
        zz_shifoutengtong: 0,
        zz_tengtongdengji: "1",
        zz_content: "",
        zz_yuyin: "",
        zz_img: []
      }
    };
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    xinqing(el) {
      if (el.target.localName !== "div") {
        let doc = document.querySelector("#xinqing");
        for (let i = 0; i < doc.children.length; i++) {
          if (doc.children[i].className) {
            doc.children[i].setAttribute("class", "");
          }
        }
        el.target.setAttribute("class", "active");
        this.form.zz_xinqing = el.target.innerText;
      }
    },
    shiyu(el) {
      if (el.target.localName !== "div") {
        let doc = document.querySelector("#shiyu");
        for (let i = 0; i < doc.children.length; i++) {
          if (doc.children[i].className) {
            doc.children[i].setAttribute("class", "");
          }
        }
        el.target.setAttribute("class", "active");
        this.form.zz_shiyu = el.target.innerText;
      }
    },
    shangchuanyuyin(file) {
      upFiles(file)
        .then(res => {
          let arr = res.data;
          arr.forEach(item => {
            this.form.zz_yuyin = item;
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
            this.form.zz_img.push(item);
          });
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    },
    save() {
      this.form.zz_shifouxiongmen = this.form.zz_shifouxiongmen ? 1 : 0;
      this.form.zz_shifouxinhuang = this.form.zz_shifouxinhuang ? 1 : 0;
      this.form.zz_shifououtu = this.form.zz_shifououtu ? 1 : 0;
      this.form.zz_shifoufuzhang = this.form.zz_shifoufuzhang ? 1 : 0;
      this.form.zz_shifouexin = this.form.zz_shifouexin ? 1 : 0;
      this.form.zz_shifoutengtong = this.form.zz_shifoutengtong ? 1 : 0;
      addHealthLog(this.form)
        .then(res => {
          this.$toast("添加成功");
          this.$router.go(-1);
          this.form.id = res.data.id;
          let expire = new Date(
            new Date().setDate(new Date().getDate() + 1)
          ).setHours(0, 0, 0, 0);
          this.localStorageSet("physical", this.form, expire);
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    }
  },
  mounted() {
    let detail = this.localStorageGet("physical");
    console.log()
    if (detail) {
      this.form = detail || {
        part: 3,
        zz_xinqing: "",
        zz_shiyu: "",
        zz_shuimianshichang: "",
        zz_shifoupaibian: "",
        zz_dabiancishu: "",
        zz_shifouganzao: "",
        zz_shifoufuxie: "",
        zz_xiaobian: "500以下",
        zz_shifouxiongmen: 0,
        zz_xiongmencishu: "1",
        zz_shifouxinhuang: 0,
        zz_shifououtu: 0,
        zz_outucishu: "1",
        zz_shifoufuzhang: 0,
        zz_shifouexin: 0,
        zz_shifoutengtong: 0,
        zz_tengtongdengji: "1",
        zz_content: "",
        zz_yuyin: "",
        zz_img: []
      };
      this.fileList = this.form.zz_img;
      if (this.form.zz_xinqing) {
        const xinqing = document.getElementById("xinqing");
        xinqing.children[this.form.zz_xinqing - 1].className = "active";
      }
      if (this.form.zz_shiyu) {
        const shiyu = document.getElementById("shiyu");
        shiyu.children[this.form.zz_shiyu - 1].className = "active";
      }
    }
  }
};
</script>

<style lang="less">
#Physical {
  text-align: left;
  .main {
    margin: 10px;
    .header {
      padding: 23px 15px;
      background-color: #fff;
      border-radius: 6px;
      .shuimian {
        margin-top: 10px;
        .title {
          font-size: 17px;
          vertical-align: middle;
        }
        img {
          width: 21px;
          height: 21px;
          margin-right: 13px;
          vertical-align: middle;
        }
        .main {
          .title {
            font-size: 15px;
          }
          .van-cell {
            vertical-align: middle;
            display: inline-block;
            padding: 0;
          }
        }
      }
      .xinqing,
      .shiyu {
        // padding-bottom: 5px;
        border-bottom: 1px solid #d2d2d2;
        .title {
          font-size: 17px;
          vertical-align: middle;
        }
        img {
          width: 21px;
          height: 21px;
          margin-right: 13px;
          vertical-align: middle;
        }
        #shiyu,
        #xinqing {
          margin: 15px 10px;
          // margin-left: 3px;
          #dengji {
            display: inline-block;
            width: 25px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            border: 1px solid rgba(0, 0, 0, 1);
            margin-right: 6px;
            border-radius: 5px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
        .detail {
          margin: 10px 10px 10px;
          font-size: 10px;
          // text-align: right;
          .low {
            display: inline-block;
            // width: 78px;
            // height: 19px;
            text-align: left;
          }
          .nice {
            float: right;
          }
        }
      }
      .shiyu {
        margin-top: 10px;
        #shiyu {
          #dengji {
            &.active {
              background: rgba(110, 189, 183, 1);
            }
          }
        }
      }
      .xinqing {
        #xinqing {
          #dengji {
            &.active {
              background: rgba(245, 195, 92, 1);
            }
          }
        }
      }
    }
    .paibian {
      margin: 10px 0;
      padding: 23px 15px 0;
      background-color: #fff;
      border-radius: 6px;
      .pb {
        .title {
          font-size: 17px;
          vertical-align: middle;
        }
        img {
          width: 21px;
          height: 21px;
          margin-right: 13px;
          vertical-align: middle;
        }
      }
      .mian {
        margin-top: 17px;
        .van-row {
          padding: 20px 0;
          border-bottom: 1px solid rgba(210, 210, 210, 1);
          &:last-child {
            border-bottom: 0;
          }
          .title {
            font-size: 15px;
          }
        }
        .title {
          //  font-size: 15px;
          .van-cell__title {
            color: #151515;
            font-size: 15px;
          }
        }
        .van-cell {
          padding: 0;
        }
      }
    }
    .zhengzhuang {
      // margin: 10px 0;
      padding: 23px 15px 0;
      background-color: #fff;
      border-radius: 6px;
      .zz {
        .title {
          font-size: 17px;
          vertical-align: middle;
        }
        .info {
          vertical-align: bottom;
        }
        img {
          width: 21px;
          height: 21px;
          margin-right: 13px;
          vertical-align: middle;
        }
      }
      .mian {
        margin-top: 17px;
        .van-row {
          padding: 20px 0;
          border-bottom: 1px solid rgba(210, 210, 210, 1);
          &:last-child {
            border-bottom: 0;
          }
          .van-radio-group--horizontal {
            justify-content: flex-end;
          }
          .title {
            font-size: 15px;
          }
        }
        .title {
          //  font-size: 15px;
          .van-cell__title {
            color: #151515;
            font-size: 15px;
          }
        }
        .van-cell {
          padding: 0;
        }
      }
    }
    .qita {
      margin-top: 10px;
      padding: 23px 15px 0;
      background-color: #fff;
      border-radius: 6px;
      .qt {
        .title {
          font-size: 17px;
          vertical-align: middle;
        }
        img {
          width: 21px;
          height: 21px;
          margin-right: 13px;
          vertical-align: middle;
        }
      }
      .mian {
        margin-top: 17px;
        .van-cell {
          padding: 0;
          .van-field__control {
            padding: 5px 10px 0;
            border-radius: 6px;
            background: rgba(245, 245, 245, 1);
          }
        }
      }
      .meiti {
        padding-bottom: 10px;
        margin: 10px 0;
        text-align: center;
        .van-button {
          width: 110px;
          height: 25px;
        }
        .yuyin {
          margin-right: 20px;
          .van-button {
            background-color: #959595;
            border: 1px solid #959595;
          }
        }
      }
    }
  }
  .submit {
    margin-top: 20px;
    text-align: center;
    .van-button {
      width: 281px;
      height: 37px;
      background: rgba(78, 138, 244, 1);
      border-radius: 19px;
    }
  }
}
</style>

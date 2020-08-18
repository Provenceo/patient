<template>
  <div id="HealthLogDetails">
    <div class="top">
      <van-nav-bar
        class="van-nav-bar"
        title="历史健康日志"
        left-arrow
        left-text="返回"
        @click-left="onClickLeft"
      ></van-nav-bar>
      <div class="date">{{ list.log_date.split(" ")[0] }}</div>
    </div>
    <div class="bom-info">
      <div class="journalTitle">
        <img src="@/assets/images/journal/stjyd.png" alt />
        <h1>身体及运动</h1>
      </div>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.tizhong"
            label="当前体重"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="3" class="company">kg</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.tizhong_old"
            label="一个月前体重"
            placeholder="暂无数据"
            type="number"
            readonly
          />
        </van-col>
        <van-col span="3" class="company">kg</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.tiwen"
            label="体温"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="3" class="company">°C</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.woli"
            label="握力"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="3" class="company">kg</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.tizhilv"
            label="体脂率"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="3" class="company">kg</van-col>
      </van-row>
      <van-row
        type="flex"
        justify="flex-start"
        flex-direction="column"
        align="center"
        v-if="list.shenti_media"
      >
        <p class="p_title">图片及视频</p>
        <div class="img_box">
          <div class="img" v-for="item in list.shenti_media" :key="item">
            <van-image
              width="10rem"
              height="10rem"
              fit="contain"
              :src="apiConfig.baseUrl + '/' + item"
            />
          </div>
        </div>
      </van-row>
      <van-field
        class="mt25"
        name="breakRadio"
        label="是否活动"
        input-align="right"
      >
        <template #input>
          <van-radio-group v-model="list.is_huodong" direction="horizontal">
            <van-radio disabled :name="1">是</van-radio>
            <van-radio disabled :name="0">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.xiachuang_time"
            label="下床"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="3" class="company">小时</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.buxing_time"
            label="步行"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="3" class="company">分钟</van-col>
      </van-row>
      <van-row
        type="flex"
        justify="flex-start"
        flex-direction="column"
        align="center"
        v-if="list.huodong_media"
      >
        <p class="p_title">图片及视频</p>
        <div class="img_box">
          <div class="img" v-for="item in list.huodong_media" :key="item">
            <van-image
              width="10rem"
              height="10rem"
              fit="contain"
              :src="apiConfig.baseUrl + '/' + item"
            />
          </div>
        </div>
      </van-row>
    </div>
    <!-- 饮食情况 -->
    <div class="bom-info bom-infoTow">
      <div class="journalTitle">
        <img src="@/assets/images/journal/ysqk.png" alt="" />
        <h1>饮食情况</h1>
      </div>
      <div class="dietBox" v-if="list.yinshi_zaocan">
        <p class="dietTitle">早餐</p>
        {{ list.yinshi_zaocan.zaocan_date }}
        <div
          class="breakfast"
          v-for="item in list.yinshi_zaocan.zaocan_list"
          :key="item.id"
        >
          <div class="breakfastLeft">
            <div class="breakfastImg">
              <img
                v-if="item.img != ''"
                :src="apiConfig.baseUrl + '/' + item.img"
                alt=""
              />
              <van-empty v-if="item.img == ''" image="error" description="" />
            </div>
            <p>{{ item.title }}</p>
          </div>
          <p></p>
        </div>
      </div>
      <div class="dietBox" v-if="list.yinshi_wucan">
        <p class="dietTitle">午餐</p>
        {{ list.yinshi_wucan.wucan_date }}
        <div
          class="breakfast"
          v-for="item in list.yinshi_wucan.wucan_list"
          :key="item.id"
        >
          <div class="breakfastLeft">
            <div class="breakfastImg">
              <img
                v-if="item.img != ''"
                :src="apiConfig.baseUrl + '/' + item.img"
                alt=""
              />
              <van-empty v-if="item.img == ''" image="error" description="" />
            </div>
            <p>{{ item.title }}</p>
          </div>
          <p></p>
        </div>
      </div>
      <div class="dietBox" v-if="list.yinshi_wancan">
        <p class="dietTitle">晚餐</p>
        {{ list.yinshi_wancan.wancan_date }}
        <div
          class="breakfast"
          v-for="item in list.yinshi_wancan.wancan_list"
          :key="item.id"
        >
          <div class="breakfastLeft">
            <div class="breakfastImg">
              <img
                v-if="item.img != ''"
                :src="apiConfig.baseUrl + '/' + item.img"
                alt=""
              />
              <van-empty v-if="item.img == ''" image="error" description="" />
            </div>
            <p>{{ item.title }}</p>
          </div>
          <p></p>
        </div>
      </div>
      <div class="dietBox" v-if="list.yinshi_jiacan">
        <p class="dietTitle">加餐</p>
        <div v-for="(item, index) in list.yinshi_jiacan" :key="index">
          <div>{{ item.date }}</div>
          <div class="breakfast" v-for="el in item.list" :key="el.id">
            <div class="breakfastLeft">
              <div class="breakfastImg">
                <img
                  v-if="el.img != ''"
                  :src="apiConfig.baseUrl + '/' + el.img"
                  alt=""
                />
                <van-empty v-if="el.img == ''" image="error" description="" />
              </div>
              <p>{{ el.title }}</p>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="bom-info bom-infoTow main">
      <div class="journalTitle">
        <img src="@/assets/images/journal/stzz.png" alt />
        <h1>身体症状</h1>
      </div>
      <div class="header">
        <div class="xinqing">
          <div class="tit">
            <img src="@/assets/images/journal/xq.png" alt="" />
            <span class="title">心情</span>
          </div>
          <div id="xinqing">
            <div v-for="item in 10" :key="item">
              <span
                :class="list.zz_xinqing == item ? 'active' : ''"
                id="dengji"
              >
                {{ item }}
              </span>
            </div>
          </div>
          <div class="detail">
            <span class="low">没有痛苦</span>
            <span class="nice">极度痛苦</span>
          </div>
        </div>
        <div class="shiyu">
          <div class="tit">
            <img src="@/assets/images/journal/shiyu.png" alt="" />
            <span class="title">食欲</span>
          </div>
          <div id="shiyu">
            <div v-for="item in 10" :key="item">
              <span :class="list.zz_shiyu == item ? 'active' : ''" id="dengji">
                {{ item }}
              </span>
            </div>
          </div>
          <div class="detail">
            <span class="low">无食欲</span>
            <span class="nice">食欲良好</span>
          </div>
        </div>
        <div class="shuimian">
          <div class="tit">
            <img src="@/assets/images/journal/sm.png" alt="" />
            <span class="title">睡眠</span>
          </div>

          <van-row
            class="borderNone"
            type="flex"
            justify="space-between"
            align="center"
          >
            <van-col span="30">
              <van-field
                v-model="list.zz_shuimianshichang"
                label="睡眠时长"
                type="number"
                placeholder="暂无数据"
                readonly
              />
            </van-col>
            <van-col span="3" class="company">分钟</van-col>
          </van-row>
        </div>
      </div>
      <div class="paibian">
        <div class="pb">
          <div class="tit">
            <img src="@/assets/images/journal/pb.png" alt="" />
            <span class="title">排便</span>
          </div>
          <div>
            <van-field name="breakRadio" label="是否排便" input-align="right">
              <template #input>
                <van-radio-group
                  v-model="list.zz_shifoupaibian"
                  direction="horizontal"
                >
                  <van-radio disabled :name="1">是</van-radio>
                  <van-radio disabled :name="0">否</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="30">
                <van-field
                  v-model="list.zz_dabiancishu"
                  label="大便次数"
                  type="number"
                  placeholder="暂无数据"
                  readonly
                />
              </van-col>
              <van-col span="3" class="company">次</van-col>
            </van-row>
            <van-field name="breakRadio" label="大便干燥" input-align="right">
              <template #input>
                <van-radio-group
                  v-model="list.zz_shifouganzao"
                  direction="horizontal"
                >
                  <van-radio disabled :name="1">是</van-radio>
                  <van-radio disabled :name="0">否</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field name="breakRadio" label="是否腹泻" input-align="right">
              <template #input>
                <van-radio-group
                  v-model="list.zz_shifoufuxie"
                  direction="horizontal"
                >
                  <van-radio disabled :name="1">是</van-radio>
                  <van-radio disabled :name="0">否</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-row type="flex" justify="space-between" align="center">
              <van-field
                v-model="list.zz_xiaobian"
                name="radio"
                class="title"
                label="小便"
                input-align="right"
              >
              </van-field>
            </van-row>
          </div>
        </div>
      </div>
      <div class="zhengzhuang">
        <div class="zz">
          <div class="tit">
            <img src="@/assets/images/journal/xz.png" alt="" />
            <span class="title">症状</span> <span class="info">(多选)</span>
          </div>
          <div class="mian">
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox disabled :value="list.zz_shifouxiongmen == 1"
                  >胸闷</van-checkbox
                ></van-col
              >

              <van-col span="3">
                <p>
                  {{
                    list.zz_xiongmencishu == "" ? "0" : list.zz_xiongmencishu
                  }}次
                </p>
              </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox disabled :value="list.zz_shifouxinhuang == 1"
                  >心慌</van-checkbox
                ></van-col
              >
              <van-col span="9"> </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox disabled :value="list.zz_shifououtu == 1"
                  >呕吐</van-checkbox
                ></van-col
              >
              <van-col span="3">
                <p>{{ list.zz_outucishu == "" ? "0" : list.zz_outucishu }}次</p>
              </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox disabled :value="list.zz_shifoufuzhang == 1"
                  >腹胀</van-checkbox
                ></van-col
              >
              <van-col span="9"> </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox disabled :value="list.zz_shifouexin == 1"
                  >恶心</van-checkbox
                ></van-col
              >

              <van-col span="9"> </van-col>
            </van-row>
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="9" class="title">
                <van-checkbox disabled  :value="list.zz_shifoutengtong == 1"
                  >疼痛</van-checkbox
                ></van-col
              >
              <van-col span="3">
                <p>
                  {{
                    list.zz_tengtongdengji == " " ||
                    list.zz_tengtongdengji == null
                      ? "0"
                      : list.zz_tengtongdengji
                  }}级
                </p>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
      <div class="qita">
        <div class="qt">
          <div class="tit">
            <img src="@/assets/images/journal/qt.png" alt="" />
            <span class="title">其他情况</span>
          </div>
          <div>
            <van-field
              class="textarea"
              v-model="list.zz_content"
              rows="5"
              autosize
              type="textarea"
              placeholder="暂无数据"
              readonly
            />

            <div class="meiti">
              <!-- 语音列表 -->
              <div style="width: 60%">
                <!-- <aplayer :music="videoUpload"></aplayer> -->
              </div>
              <img :src="apiConfig.baseUrl + '/' + list.zz_img" alt="" />
              <!-- <div v-for="(item,index) in yuyinlist" :key="index" >
              </div> -->
              <!-- 图片列表 -->
              <!-- <div v-for="(item,index) in zzimglist" :key="index" >
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 血液指标 -->
    <div class="bom-info bom-infoTow ">
      <div class="journalTitle">
        <img src="@/assets/images/journal/xyzb.png" alt />
        <h1>血液指标</h1>
      </div>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.xueye_na"
            label="钠"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="6" class="company">mmol/L</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.xueye_gai"
            label="钙"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="6" class="company">mmol/L</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.xueye_jia"
            label="钾"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="6" class="company">mmol/L</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.xueye_lin"
            label="磷"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="6" class="company">mmol/L</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.xueye_crp"
            label="C反应蛋白（CRP）"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="6" class="company">mg/DL</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.buxing_time"
            label="总胆红素（TBIL）"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="6" class="company">umd/L</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.buxing_time"
            label="白蛋白（ALB）"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="6" class="company">g/L</van-col>
      </van-row>
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="20">
          <van-field
            v-model="list.buxing_time"
            label="谷丙转氨酶（ALT）"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="6" class="company">u/L</van-col>
      </van-row>
      <van-row
        class="borderNone"
        type="flex"
        justify="space-between"
        align="center"
      >
        <van-col span="20">
          <van-field
            v-model="list.buxing_time"
            label="肌酐（Cr）"
            type="number"
            placeholder="暂无数据"
            readonly
          />
        </van-col>
        <van-col span="6" class="company">umd/L</van-col>
      </van-row>
      <van-image
        class="BloodIndexImg BloodIndexImgMt80"
        fit="cover"
        src="list.xueye_img"
      />
    </div>
    <!-- 用药情况 -->
    <div class="bom-info bom-infoTow">
      <div class="journalTitle">
        <img src="@/assets/images/journal/yyqk.png" alt />
        <h1>用药情况</h1>
      </div>
      <p class="dietTitle">口服情况</p>
      <div class="dietBox" v-for="item in list.yaowu_list" :key="item.index">
        <van-field
          class="textarea"
          v-model="item.info"
          rows="4"
          autosize
          type="textarea"
          placeholder="暂无内容"
          readonly
        />
        <div v-for="items in item.img" :key="items.index">
          <van-image
            class="BloodIndexImg"
            fit="cover"
            @click="Preview(item.img)"
            :src="items"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiConfig from "../../../config/api.config";
import { getHealthLogDetail } from "@/apis/treatmentplan";
import { ImagePreview } from "vant";
import aplayer from "vue-aplayer";
export default {
  components: {
    ImagePreview,
    aplayer
  },
  data() {
    return {
      apiConfig,
      detailId: "",
      list: {},
      videoUpload: {
        progress: false,
        progressPercent: 0,
        successPercent: 0,
        music: {
          title: "",
          author: "",
          url: "",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        }
      }
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    jiankang() {
      getHealthLogDetail({ id: this.detailId })
        .then(res => {
          this.list = res.data;
        })
        .catch(err => {
          this.$toast(err.msg);
        });
    },
    Preview(imgs) {
      let arr = [];
      for (let i = 0; i < imgs.length; i++) {
        const element = imgs[i];
        arr.push(apiConfig.baseUrl + "/" + element);
      }
      ImagePreview(arr);
    }
  },
  mounted() {
    this.jiankang();
  },
  created() {
    this.detailId = this.$route.params.id;
  }
};
</script>

<style lang="less">
html {
  min-height: 100vh;
  background-color: #fff;
}
#HealthLogDetails {
        text-align: left;
  min-height: 100vh;
  background: #f5f5f5;
  .top {
    height: 150px;
    background: #4e8af4;
    .van-nav-bar {
      color: #fff;
      border: 0 solid #4e8af4;
      background: #4e8af4;
      div {
        color: #fff;
        span {
          color: #fff;
        }
        i {
          color: #fff;
        }
      }
    }
    .van-hairline--bottom::after {
      border-bottom-width: 0px;
    }
    .date {
      width: 120px;
      height: 30px;
      border-radius: 10px;
      margin: 25px auto 0;
      background: #fff;
      text-align: center;
      line-height: 30px;
      font-size: 15px;
    }
  }

  .bom-info {
    width: 94.53%;
    border-radius: 10px;
    margin: -40px auto 0;
    padding: 20px 12px;
    background: #fff;
    .journalTitle {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-bottom: 30px;
      img {
        width: 40px;
        height: 40px;
      }
      h1 {
        margin-left: 25px;
        font-size: 16px;
        color: #3b8afc;
        font-family: SourceHanSansCN;
        font-weight: bold;
      }
    }
    .dietBox {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
    .BloodIndexImg {
      width: 100%;
      height: 125px;
    }
    .BloodIndexImgMt80 {
      margin-top: 80px;
    }
    .textarea textarea {
      display: block;
      width: 100%;
      height: 167px;
      padding: 13px 15px;
      background: rgba(245, 245, 245, 1);
      border-radius: 5px;
      color: #959595;
    }
  }
  .img_box {
    img {
      width: 43px;
      height: 43px;
      border-radius: 5px;
      margin: 3px;
    }
  }
  .breakfast {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .breakfastLeft {
      display: flex;
      align-items: center;
      p {
        margin-left: 20px;
      }
    }
  }
  .breakfastImg,
  .van-empty {
    width: 68px;
    height: 55px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 身体症状
  .main {
    margin: 10px;
    .header {
      // padding: 23px 15px;
      background-color: #fff;
      border-radius: 6px;
      .shuimian {
        margin-top: 10px;
        .title {
          font-size: 17px;
          vertical-align: middle;
        }
        .tit {
          display: flex;
          align-self: start;
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
          display: flex;
          align-items: center;
          justify-content: space-between;
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
          display: flex;
          justify-content: space-between;
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
      padding: 23px 0 0;
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
      padding: 23px 0 0;
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
      padding: 23px 0 0;
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
            background: rgba(245, 245, 245, 1);
          }
        }
      }
      .meiti {
        margin: 5px 0;
        text-align: center;
      }
    }
  }
  .p_title,
  .dietTitle {
    padding: 10px 0;
    font-size: 16px;
    color: #151515;
    text-align-last: left;
  }
  .dietTitle {
    font-size: 18px;
    font-weight: bold;
  }
  .van-row {
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(210, 210, 210, 0.5);
  }

  .van-cell__title,
  .company {
    font-size: 15px;
    color: #151515;
  }
  .van-field__body {
    input {
      font-size: 15px;
      color: #9b9b9b;
    }
  }
  .mt25 {
    margin-top: 25px;
    padding-left: 10px 0;
    padding-right: 0;
    border-bottom: 1px solid rgba(210, 210, 210, 0.5);
  }
  .bom-infoTow {
    margin-top: 15px;
  }
  .van-cell__title {
    width: 133px;
  }
  .van-cell {
    padding: 10px 0;
  }
  .borderNone {
    border: none;
  }
  .tit {
    width: 100%;
    display: flex;
  }
}
</style>

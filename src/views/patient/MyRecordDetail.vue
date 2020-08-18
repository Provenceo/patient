<template>
  <div id="MyRecordDetail">
    <van-nav-bar title="病历详情" left-arrow @click-left="onClickLeft" />
    <div class="header">
      <van-row type="flex" align="center">
        <van-col span="3" class="avatar">
          <img
            :src="user.img ? user.img : require('@/assets/images/avatar.png')"
            alt=""
          />
        </van-col>
        <van-col span="21" :offset="1">
          <div class="gr">
            <span class="name">{{ user.name }}</span>
            <van-tag plain type="primary" v-if="user.jibing">{{
              user.jibing
            }}</van-tag>
            <van-tag plain type="warning" v-if="user.doctor_name">{{
              user.doctor_name
            }}</van-tag>
          </div>
          <div>病例次数：{{ user.bingli_cishu }}次</div>
        </van-col>
      </van-row>
    </div>
    <div class="nav">
      <div class="bt">
        <h1>病历标题</h1>
      </div>
      <van-divider
        :style="{ borderColor: 'rgba(225,225,225,.6)', padding: '0 20px' }"
      >
      </van-divider>
      <van-field v-model="bingli.title" label="标题" readonly />
    </div>
    <div class="main">
      <div class="information">
        <h1>基本信息</h1>
        <van-divider :style="{ borderColor: 'rgba(225,225,225,.6)' }">
        </van-divider>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.tizhong"
              label="当前体重"
              readonly
              type="number"
          /></van-col>
          <van-col span="2" :offset="5" class="company">kg</van-col>
        </van-row>
        <van-row type="flex" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.tizhong2"
              label="未生病前体重"
              readonly
              type="number"
          /></van-col>
          <van-col span="2" :offset="5" class="company">kg</van-col>
        </van-row>
        <van-row type="flex" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.tizhong3"
              label="一个月前体重"
              readonly
              type="number"
          /></van-col>
          <van-col span="2" :offset="5" class="company">kg</van-col>
        </van-row>
        <van-row type="flex" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.tizhong4"
              label="三个月前体重"
              readonly
              type="number"
          /></van-col>
          <van-col span="2" :offset="5" class="company">kg</van-col>
        </van-row>
        <van-row type="flex" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.shengao"
              label="身高"
              readonly
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="2" :offset="5" class="company">cm</van-col>
        </van-row>
        <van-row type="flex" align="center">
          <van-col span="21"
            ><van-field v-model="bingli.bmi" label="BMI" readonly type="number"
          /></van-col>
          <van-col span="2" :offset="6" class="company">%</van-col>
        </van-row>
        <van-row type="flex" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.gugeji"
              label="骨骼肌"
              readonly
              type="number"
          /></van-col>
          <van-col span="2" :offset="5" class="company">kg</van-col>
        </van-row>
      </div>
      <div class="indicator">
        <h1>营养指标</h1>
        <van-divider :style="{ borderColor: 'rgba(225,225,225,.6)' }">
        </van-divider>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.yy_na"
              label="钠"
              placeholder="请输入"
              readonly
              type="number"
          /></van-col>
          <van-col span="5" :offset="8" class="company">mmol/L</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.yy_gai"
              label="钙"
              placeholder="请输入"
              readonly
              type="number"
          /></van-col>
          <van-col span="5" :offset="8" class="company">mmol/L</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.yy_jia"
              label="钾"
              readonly
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="5" :offset="8" class="company">mmol/L</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.yy_lin"
              label="磷"
              readonly
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="5" :offset="8" class="company">mmol/L</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.yy_crp"
              label="CRP"
              readonly
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="5" :offset="10" class="company">mg/dL</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.yy_tbil"
              label="TBIL"
              readonly
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="5" :offset="10" class="company">umd/L</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.yy_alb"
              label="ALB"
              readonly
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="2" :offset="1" class="company">g/L</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.yy_alt"
              label="ALT"
              readonly
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="2" :offset="1" class="company">u/L</van-col>
        </van-row>
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="21"
            ><van-field
              v-model="bingli.yy_cr"
              label="Cr"
              readonly
              placeholder="请输入"
              type="number"
          /></van-col>
          <van-col span="5" :offset="10" class="company">umd/L</van-col>
        </van-row>
      </div>
      <div class="disease" v-show="bingli.jb_jclist || bingli.jb_bwlist">
        <h1>疾病信息</h1>
        <van-divider :style="{ borderColor: 'rgba(225,225,225,.6)' }">
        </van-divider>
        <div class="ty" v-if="bingli.jb_jclist">癌症类型</div>
        <div>
          {{ bingli.jb_jclist }}
        </div>
        <div class="ty" v-if="bingli.jb_bwlist">疾病部位</div>
        <div>
          {{ bingli.jb_bwlist }}
        </div>
      </div>
      <div class="complication">
        <h1>并发症</h1>
        <van-divider :style="{ borderColor: 'rgba(225,225,225,.6)' }">
        </van-divider>
        <van-field name="radio" label="胸水" input-align="right">
          <template #input>
            <van-radio-group
              v-model="bingli.bfz_xiongshui"
              direction="horizontal"
            >
              <van-radio disabled :name="1">有</van-radio>
              <van-radio disabled :name="0">无</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="radio" label="腹水" input-align="right">
          <template #input>
            <van-radio-group v-model="bingli.bfz_fushui" direction="horizontal">
              <van-radio disabled :name="1">有</van-radio>
              <van-radio disabled :name="0">无</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="radio" label="心包积液" input-align="right">
          <template #input>
            <van-radio-group v-model="bingli.bfz_xbjy" direction="horizontal">
              <van-radio disabled :name="1">有</van-radio>
              <van-radio disabled :name="0">无</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="radio" label="肺部感染" input-align="right">
          <template #input>
            <van-radio-group v-model="bingli.bfz_fbgr" direction="horizontal">
              <van-radio disabled :name="1">有</van-radio>
              <van-radio disabled :name="0">无</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="radio" label="肠梗阻" input-align="right">
          <template #input>
            <van-radio-group v-model="bingli.bfz_cgz" direction="horizontal">
              <van-radio disabled :name="1">有</van-radio>
              <van-radio disabled :name="0">无</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <div class="other">其他</div>
        <van-field
          v-model="bingli.bfz_else"
          rows="3"
          autosize
          type="textarea"
          placeholder="请输入"
          class="textarea"
          readonly
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getMyRecordDetail } from "@/apis/my";
export default {
  data() {
    return {
      id: "",
      radio: 1,
      detail: {},
      user: {},
      bingli: {},
      showAzlx: false,
      Azlx: false,
      message: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    getDetail(id) {
      getMyRecordDetail({ id })
        .then(res => {
          this.user = res.data.user;
          this.bingli = res.data.bingli;
          console.log(this.user, this.bingli);
        })
        .catch(err => {
          this.$toast(err.msg);
        });
    },
    onAzlxConfirm() {}
  },
  mounted() {
    this.getDetail(this.id);
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>

<style lang="less">
#MyRecordDetail {
  text-align: left;
  color: #404040;
  padding-bottom: 30px;
  .van-nav-bar__left {
    .van-icon {
      color: #404040;
    }
  }
  .gr {
    margin-bottom: 10px;
    .name {
      font-size: 15px;
      font-weight: bold;
    }
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
  }
  .company {
    font-size: 15px;
  }
  .van-nav-bar__right {
    color: #3660c8;
    font-size: 14px;
  }
  .header {
    color: #fff;
    padding: 25px 15px;
    background-image: linear-gradient(to right, #4589ed, #569aff);
    .van-tag--plain {
      background-color: transparent;
    }
    .van-tag--primary.van-tag--plain {
      color: #fff;
    }
    .van-tag--warning.van-tag--plain {
      color: #f7d300;
    }
  }
  .nav {
    background-color: #fff;
    padding-top: 30px;
    margin-bottom: 10px;
    h1 {
      font-size: 18px;
      margin-left: 20px;
      font-weight: bold;
    }
    .van-divider {
      margin: 20px 0;
    }
    .van-cell {
      padding: 0px 18px 20px;
      .van-field__label {
        font-size: 15px;
        margin-left: 5px;
        width: 50px;
      }
    }
  }
  .main {
    .information,
    .indicator,
    .disease,
    .complication,
    .inspectionreport {
      margin-bottom: 10px;
      background-color: #fff;
      padding: 30px 20px 0;
      .ty {
        margin: 5px;
      }
    }
    .complication {
      .other {
        margin: 20px 5px 0;
        font-size: 15px;
      }
      .textarea {
        margin-left: 5px;
      }
    }
    .indicator {
      .van-field__label {
        font-size: 15px;
        width: 50px;
        margin-left: 5px;
      }
    }
    .inspectionreport {
      padding-bottom: 20px;
      .van-uploader {
        margin-top: 20px;
        margin-bottom: 27px;
      }
      .van-uploader__preview {
        width: 100%;
        .van-image {
          height: 100%;
          width: 100%;
        }
      }
      .van-uploader__input-wrapper {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .van-button {
        height: 50px;
        font-size: 16px;
      }
    }
    .van-divider {
      margin: 20px 0 0;
    }
    .van-row {
      border-bottom: 1px solid #f5f5f5;
    }
    h1 {
      font-size: 18px;
      font-weight: bold;
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
      }
    }
  }
}
</style>

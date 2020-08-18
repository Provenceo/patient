<template>
  <div id="newNutritionPrescription">
    <van-nav-bar title="饮食营养" left-arrow @click-left="onClickLeft" />
    <div class="main">
      <div class="dietprescription">
        <h1>膳食处方</h1>
        <div class="breakfast">
          <!-- <img src="@/assets/images/Dietzc.png" alt="" /> -->
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="form.zaocan_date"
            label="早餐时间"
            right-icon="arrow"
            placeholder="请选择早餐时间"
            @click="showzc = true"
            :rules="[{ required: true, message: '请选择早餐时间！' }]"
          />
          <van-popup v-model="showzc" position="bottom">
            <van-datetime-picker
              type="time"
              @confirm="ondateConfirm"
              @cancel="showzc = false"
            />
          </van-popup>
          <van-field
            readonly
            clickable
            name="picker"
            v-model="form.breakfast"
            label="食品套餐"
            placeholder="请选择食品套餐"
            right-icon="arrow"
            @click="onChange('breakfast')"
            :rules="[{ required: true, message: '请选择食品套餐！' }]"
          />
          <div class="foodMain" v-if="form.zaocan_list">
            <div class="food" v-for="list in form.zaocan_list" :key="list.id">
              <van-row type="flex" align="center">
                <van-col span="4">
                  <div class="num">{{ list.id }}</div>
                </van-col>
                <van-col span="15" :offset="6">
                  <div class="content">
                    <div>
                      {{ list.title }}
                    </div>
                    <div>
                      {{ list.nengliang }}能量 {{ list.danbaizhi }}蛋白质
                    </div>
                  </div>
                </van-col>
                <van-col span="5">
                  <div class="content">x {{ list.nums }}</div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
        <div class="lunch">
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="form.wucan_date"
            label="午餐时间"
            right-icon="arrow"
            placeholder="请选择午餐时间"
            @click="showwc = true"
            :rules="[{ required: true, message: '请选择午餐时间！' }]"
          />
          <van-popup v-model="showwc" position="bottom">
            <van-datetime-picker
              type="time"
              @confirm="onwcConfirm"
              @cancel="showwc = false"
            />
          </van-popup>
          <van-field
            readonly
            clickable
            name="picker"
            v-model="form.lunch"
            label="食品套餐"
            placeholder="请选择食品套餐"
            right-icon="arrow"
            @click="onChange('lunch')"
            :rules="[{ required: true, message: '请选择食品套餐！' }]"
          />
          <div class="foodMain" v-if="form.wucan_list.length">
            <div class="food" v-for="list in form.wucan_list" :key="list.id">
              <van-row type="flex" align="center">
                <van-col span="4">
                  <div class="num">{{ list.id }}</div>
                </van-col>
                <van-col span="15" :offset="6">
                  <div class="content">
                    <div>
                      {{ list.title }}
                    </div>
                    <div>
                      {{ list.nengliang }}能量 {{ list.danbaizhi }}蛋白质
                    </div>
                  </div>
                </van-col>
                <van-col span="5">
                  <div class="content">x {{ list.nums }}</div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
        <div class="dinner">
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="form.wancan_date"
            label="晚餐时间"
            right-icon="arrow"
            placeholder="请选择晚餐时间"
            @click="showPicker_wancan = true"
            :rules="[{ required: true, message: '请选择晚餐时间！' }]"
          />
          <van-popup v-model="showPicker_wancan" position="bottom">
            <van-datetime-picker
              type="time"
              @confirm="onwancanConfirm"
              @cancel="showPicker_wancan = false"
            />
          </van-popup>
          <van-field
            readonly
            clickable
            name="picker"
            v-model="form.dinner"
            label="食品套餐"
            placeholder="请选择食品套餐"
            right-icon="arrow"
            @click="onChange('dinner')"
            :rules="[{ required: true, message: '请选择食品套餐' }]"
          />
          <div class="foodMain" v-if="form.wancan_list.length">
            <div class="food" v-for="list in form.wancan_list" :key="list.id">
              <van-row type="flex" align="center">
                <van-col span="4">
                  <div class="num">{{ list.id }}</div>
                </van-col>
                <van-col span="15" :offset="6">
                  <div class="content">
                    <div>
                      {{ list.title }}
                    </div>
                    <div>
                      {{ list.nengliang }}能量 {{ list.danbaizhi }}蛋白质
                    </div>
                  </div>
                </van-col>
                <van-col span="5">
                  <div class="content">x {{ list.nums }}</div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
      </div>
      <div class="extrameals">
        <van-popup v-model="showjcPicker" position="bottom">
          <van-datetime-picker
            type="time"
            @confirm="onjcConfirm"
            @cancel="showjcPicker = false"
          />
        </van-popup>
        <h1>加餐建议</h1>
        <div v-for="(item, index) in form.jiacan_list" :key="index">
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="item.date"
            label="加餐时间"
            right-icon="arrow"
            placeholder="请选择加餐时间"
            @click="showjc(index)"
            :rules="[{ required: true, message: '请选择加餐时间！' }]"
          />
          <van-field
            readonly
            clickable
            name="picker"
            :value="form.jibing"
            label="加餐食品"
            placeholder="请选择加餐食品"
            right-icon="arrow"
            @click="jcsp(index)"
            :rules="[{ required: true, message: '请选择加餐食品！' }]"
          />
          <div
            class="food"
            v-for="list in form.jiacan_list[index].list"
            :key="list.id"
          >
            <van-row type="flex" align="center">
              <van-col span="4">
                <div class="num">{{ list.id }}</div>
              </van-col>
              <van-col span="15" :offset="6">
                <div class="content">
                  <div>
                    {{ list.title }}
                  </div>
                  <div>{{ list.nengliang }}能量 {{ list.danbaizhi }}蛋白质</div>
                </div>
              </van-col>
              <van-col span="5">
                <div class="content">x {{ list.nums }}</div>
              </van-col>
            </van-row>
          </div>
        </div>
        <div class="add">
          <img
            v-show="form.jiacan_list.length > 1"
            src="@/assets/images/del_img.png"
            alt=""
            class="del_img"
            @click="pop"
          />
          <img src="@/assets/images/add.png" alt="" @click="add" />
        </div>
      </div>
      <div>
        <van-button type="info" @click="submit">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { addHealthLog } from "@/apis/patient";
export default {
  data() {
    return {
      showzc: false,
      showwc: false,
      showPicker_wancan: false,
      showzSptc: false,
      showPicker: false,
      showjcPicker: false,
      dateindex: "",
      Sptc: [],
      form: {
        part: 2,
        zaocan_date: "",
        wucan_date: "",
        wancan_date: "",
        zaocan_list: [],
        wucan_list: [],
        wancan_list: [],
        jiacan_list: [
          {
            date: "",
            list: []
          }
        ]
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    showjc(index) {
      this.dateindex = index;
      this.showjcPicker = true;
      console.log(index);
    },
    jcsp(index) {
      localStorage.setItem("form", JSON.stringify(this.form));
      this.$router.push(`/TreatmentPlan/${index}`);
    },
    ondateConfirm(time) {
      this.form.zaocan_date = time;
      this.showzc = false;
    },
    onwcConfirm(time) {
      console.log(time);
      this.form.wucan_date = time;
      this.showwc = false;
    },
    onwancanConfirm(time) {
      console.log(time);
      this.form.wancan_date = time;
      this.showPicker_wancan = false;
    },
    onjcConfirm(time) {
      this.form.jiacan_list[this.dateindex].date = time;
      this.showjcPicker = false;
    },
    onChange(item) {
      console.log(this.form);
      localStorage.setItem("form", JSON.stringify(this.form));
      this.$router.push(`/TreatmentPlan/${item}`);
    },
    onProduct() {
      console.log(this.form);
      localStorage.setItem("form", JSON.stringify(this.form));
      this.$router.push(`/TakingProducts`);
    },
    add() {
      this.form.jiacan_list.push({
        date: "",
        list: []
      });
    },
    pop() {
      this.form.jiacan_list.pop();
    },
    submit() {
      addHealthLog(this.form)
        .then(res => {
          this.$toast("添加成功");
          this.$router.go(-1);
          this.form.id = res.data.id;
          let expire = new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0);
          this.localStorageSet("food", this.form,expire);
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    }
    // TakingProducts
  },
  created() {},
  mounted() {
    let arr = localStorage.getItem("form");
    if (arr !== null) {
      this.form = JSON.parse(arr);
      console.log("123", this.form);
    }
    let detail = this.localStorageGet("food");
    if (detail)
      this.form = detail || {
        part: 2,
        zaocan_date: "",
        wucan_date: "",
        wancan_date: "",
        zaocan_list: [],
        wucan_list: [],
        wancan_list: [],
        jiacan_list: [
          {
            date: "",
            list: []
          }
        ]
      };
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
        // width: 18px;
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
    .exercise {
      padding: 20px 15px 0;
      border-radius: 8px;
      background-color: #fff;
      margin-bottom: 15px;
      .breakfast,
      .lunch,
      .dinner {
        padding-top: 20px;
        img {
          height: 24px;
        }
      }
      .add {
        text-align: right;
        .del_img {
          margin-right: 5px;
        }
        img {
          width: 39px;
          margin: 22px 0 24px;
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
  }
}
</style>

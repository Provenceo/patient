<template>
  <div id="TreatmentPlan">
    <van-nav-bar title="食物成份" left-arrow @click-left="onClickLeft" />
    <div class="main">
      <div v-for="val in list" :key="val.id">
        <van-row type="flex" justify="space-between" align="center">
          <van-col span="4">
            <img :src="val.img" alt="" class="leftImg" />
          </van-col>
          <van-col span="14" :offset="1">
            <div class="title">{{ val.title }}</div>
            <div class="info">
              <span v-show="val.nengliang">{{ val.nengliang }}能量</span
              ><span v-show="val.danbaizhi">{{ val.danbaizhi }}蛋白质</span>
            </div>
          </van-col>
          <van-col span="7">
            <van-stepper
              min="0"
              v-model.number="val.nums"
              :default-value="0"
              theme="round"
              button-size="22"
              disable-input
              async-change
              @change="onChange($event, val)"
            />
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getFood } from "@/apis/patient";
export default {
  data() {
    return {
      item: "",
      list: [],
      value: "0",
      form: {},
      id: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    food() {
      getFood()
        .then(res => {
          console.log(res);
          res.data.forEach(element => {
            element.nums = "0";
          });
          this.list = res.data;
          let arr = localStorage.getItem("form");
          if (arr !== null) {
            this.form = JSON.parse(arr);

            this.list.forEach(item => {
              if (this.item === "breakfast") {
                this.form.zaocan_list.forEach(el => {
                  if (el.id == item.id) {
                    item.nums = el.nums;
                  }
                });
              } else if (this.item === "lunch") {
                this.form.wucan_list.forEach(el => {
                  if (el.id == item.id) {
                    item.nums = el.nums;
                  }
                });
              } else if (this.item === "dinner") {
                this.form.wancan_list.forEach(el => {
                  if (el.id == item.id) {
                    item.nums = el.nums;
                  }
                });
              } else if (Number(this.item) !== NaN) {
                console.log(4444, this.form.jiacan_list[this.item]);
                this.form.jiacan_list[this.item].list.forEach(el => {
                  console.log(el);
                  if (el.id == item.id) {
                    item.nums = el.nums;
                  }
                });
              }
            });
            console.log("列表", this.list);
          }
        })
        .catch(err => {
          console.log(err);
          this.$toast(err.msg);
        });
    },
    onChange(value, el) {
      console.log(value);
      if (this.item === "breakfast") {
        let bool = this.form.zaocan_list.filter(tim => tim.id === el.id);
        console.log(1, bool);
        if (bool.length) {
          if (value > 0) bool[0].nums = value;
          else {
            bool[0].nums = value;
            console.log(bool);
            bool.pop();
          }
        } else {
          console.log(el);
          this.form.zaocan_list.push(el);
        }
      } else if (this.item === "lunch") {
        let bool = this.form.wucan_list.filter(tim => tim.id === el.id);
        console.log(2, bool);
        if (bool.length) {
          if (value > 0) bool[0].nums = value;
          else {
            bool[0].nums = value;
            bool.pop();
          }
        } else {
          this.form.wucan_list.push(el);
        }
      } else if (this.item === "dinner") {
        let bool = this.form.wancan_list.filter(tim => tim.id === el.id);
        console.log(3, bool);
        if (bool.length) {
          if (value > 0) bool[0].nums = value;
          else {
            bool[0].nums = value;
            bool.pop();
          }
        } else {
          this.form.wancan_list.push(el);
        }
      } else if (Number(this.item) != NaN) {
        let bool = this.form.jiacan_list[Number(this.item)].list.filter(
          tim => tim.id === el.id
        );
        console.log(4, bool);
        if (bool.length) {
          if (value > 0) bool[0].nums = value;
          else {
            bool[0].nums = value;
            bool.pop();
          }
        } else {
          this.form.jiacan_list[Number(this.item)].list.push(el);
        }
      }
      localStorage.setItem("form", JSON.stringify(this.form));
      if (this.id) {
        this.form.id = this.id;
      }
      let expire = new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).setHours(0, 0, 0, 0);
      this.localStorageSet("food", this.form, expire);
    }
  },
  mounted() {
    this.food();
  },
  created() {
    this.item = this.$route.params.item;
    let detail = localStorage.getItem("food");
    if (detail) {
      this.id = JSON.parse(detail).id;
    }
  }
};
</script>

<style lang="less">
#TreatmentPlan {
  text-align: left;
  .main {
    margin: 10px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    .van-row {
      border-bottom: 1px solid rgba(210, 210, 210, 0.5);
      .van-col {
        &:first-child {
          width: 58px;
          height: 55px;
        }
      }
      &:last-child {
        border: none;
      }
    }
    .leftImg {
      width: 58px;
      height: 55px;
    }
    .title {
      font-size: 15px;
      color: rgba(21, 21, 21, 1);
      font-weight: 500;
    }
    .info {
      width: 130px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        font-size: 13px;
        color: rgba(21, 21, 21, 1);
        opacity: 0.8;
        &:first-child {
          margin-right: 5px;
        }
        &:last-child {
        }
      }
    }
    .van-stepper--round .van-stepper__minus {
      color: #4e8af4;
      border-color: #4e8af4;
    }
    .van-stepper--round .van-stepper__plus {
      background-color: #4e8af4;
    }
  }
}
</style>

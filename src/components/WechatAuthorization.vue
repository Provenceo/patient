<template>
  <div></div>
</template>

<script>
import { oauth } from "@/apis/login";
export default {
  data() {
    return {
      parmas: {
        code: "",
        pid: "",
        ty: 0
      }
    };
  },
  methods: {
    getCode() {
      // 非静默授权，第一次有弹框
      this.parmas.code = "";
      var local = window.location.href; // 获取页面url
      var appid = "wx0c5fe766d97cd585";
      this.parmas.code = this.getUrlCode("code"); // 截取code
      if (this.getUrlCode("pid")) {
        localStorage.setItem("pid", this.getUrlCode("pid"));
      }
      if (this.parmas.code == null || this.parmas.code === "") {
        // 如果没有code，则去请求
        window.location.replace(
          `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(
            local
          )}&response_type=code&scope=snsapi_userinfo&state=${Math.random()}#wechat_redirect`
        );
      } else {
        this.parmas.code = this.getUrlCode("code");
        if (this.getUrlCode("pid")) {
          localStorage.setItem("pid", this.getUrlCode("pid"));
        }
        // this.parmas.pid = this.getUrlCode("pid");
      }
    },
    getUrlCode(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  },
  watch: {
    "parmas.code": {
      handler(newName, oldName) {
        // console.log( this.parmas.code, this.parmas.pid)
        if (newName) {
          oauth({ code: newName, pid: this.parmas.pid | localStorage.getItem('pid'), ty: 0 })
            .then(res => {
              sessionStorage.setItem("token", res.data.token);
              window.location.href =
                window.location.origin + window.location.pathname;
            })
            .catch(err => {
              this.$toast(err.msg);
            });
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.getCode();
  }
};
</script>

<style lang="less"></style>

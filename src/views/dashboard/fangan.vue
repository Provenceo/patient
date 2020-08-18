<template>
  <div id="fangan">
    <van-nav-bar title="治疗原则" left-arrow @click-left="onClickLeft" />
    <div class="main">
      <div class="info">
        {{ fanganList.zlyz_info }}
      </div>
      <div class="video">
        <video
          id="my-video"
          class="video-js vjs-default-skin "
          controls
          preload="none"
          x5-playsinline=""
          webkit-playsinline=""
          playsinline=""
          poster=""
          x-webkit-airplay="allow"
        >
          <source :src="fanganList.zlyz_video" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import { getTherapeutic } from "@/apis/home";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default {
  data() {
    return {
      detailId: "",
      fanganList: Object
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    initVideo() {
      //此处初始化的调用，我放在了获取数据之后的方法内，而不是放在钩子函数mounted
      //页面dom元素渲染完毕，执行回调里面的方法
      this.$nextTick(() => {
        let myPlayer = videojs(
          document.getElementById("my-video"),
          {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: false,
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            controlBar: {
              playToggle: true
            }
          },
          function() {
            let playbut = document.getElementsByClassName(
              "vjs-big-play-button"
            );
            playbut[0].style.display = "none";
            console.log(this)
            this.on("pause", function() {
              this.pause();
                playbut[0].style.display = "none";
            });
          }
        );
      });
    },
    Therapeutic() {
      getTherapeutic({ id: this.detailId })
        .then(res => {
          this.fanganList = res.data;
          console.log(res);
          this.initVideo();
        })
        .catch(err => {
          this.$toast(err.msg);
        });
    },
    
  },
  mounted() {
    this.Therapeutic();
    videojs.addLanguage("zh-CN", {
      "You aborted the media playback": "视频播放被终止",
      "A network error caused the media download to fail part-way.":
        "网络错误导致视频下载中途失败。",
      "The media could not be loaded, either because the server or network failed or because the format is not supported.":
        "视频因格式不支持或者服务器或网络的问题无法加载。",
      "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
        "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
      "No compatible source was found for this media.":
        "无法找到此视频兼容的源。"
    });
  },
  destroyde() {
    this.myPlayer.dispose();
  },
  created() {
    this.detailId = this.$route.params.id;
  }
};
</script>

<style lang="less">
#fangan {
  text-align: left;
  .main {
    margin: 10px 9px;
    .info {
      padding: 19px 20px;
      color: #959595;
      font-size: 12px;
      line-height: 19px;
    }

     .video-js {
        width: 100%;
        height: 150px;
        margin: 10px 0 0 0 ;
        .video-player{
          border-radius: 5px;
        }
        .vjs-big-play-button {
          font-size: 3em;
          line-height: 44px;
          height: 44px;
          width: 44px;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -22px;
          margin-left: -22px;
          padding: 0;
          cursor: pointer;
          opacity: 1;
          border: 0.06666em solid #fff;
          background-color: #2B333F;
          background-color: rgba(43, 51, 63, 0.7);
          border-radius: 50%;
          -webkit-transition: all 0.4s;
          transition: all 0.4s;
        }
      }
  }
}
</style>

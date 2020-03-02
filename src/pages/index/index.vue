<template>
  <div id="container">
    <m-header />
    <div id="main">
      <!-- banner -->
      <div class="banner-wrap">
        <!-- <div class="main-wrap">
          <div class="banner-title animated fadeInDown">
            <p class="banner-title-txt"></p>
          </div>
          <div class="banner-desc animated fadeInUp">
            <p class="banner-desc-txt"></p>
          </div>
        </div> -->
        <swiper :options="bannerSwiper" ref="myBannerSwiper" style="height: 100%;">
            <swiper-slide v-for="(banner, i) in bannerArrs" :key="'banner_' + i">
              <!-- <div class="slide-info" @click="playVideo(video)">
                <div class="video-img">
                  <img :src="video.imgUrl" alt="" class="slide-img">
                  <i class="icon iconfont icon-bofang"></i>
                </div>
                <div class="slide-desc">
                  <p class="item-name">{{video.title}}</p>
                </div>
              </div> -->
              <div :class="banner.clazz"></div>
            </swiper-slide>
          </swiper>
        <div class="banner-btn">
          <div class="main-wrap">
            <div class="banner-btn-desc animated fadeInLeft">
              <span class="banner-icon">
                <i class="icon iconfont icon-qiluhaopingtai"></i>
              </span>
              <div class="banner-desc-txt mobile-hide">
                <span class="txt-title">“齐鲁号”欧亚班列  信息化管理平台</span>
                <span class="txt-desc">省级运营信息平台系统</span>
              </div>
              <div class="banner-mobile-desc-txt mobile-show">
                <span class="txt-title">“齐鲁号”欧亚班列 <br/>信息化管理平台</span>
              </div>
            </div>
            <p class="btn-info animated fadeInRight" @click="gotoPT">进入信息平台 <i class="icon iconfont icon-gengduo"></i></p>
          </div>
        </div>
      </div>
      <!-- news -->
      <div class="news-wrap">
        <div class="main-wrap">
          <m-summary :title="'新闻动态'" class="mobile-hide">
            <a href="news.html" class="load-more" slot="more">
              更多<i class="icon iconfont icon-gengduo"></i>
            </a>
          </m-summary>
          <div class="news-info mobile-hide">
            <div class="flex-item" @click="goToNewsDetail(pushNews.id)">
              <div class="news-img"><img :src="pushNews.url"/></div>
              <div class="news-desc">
                <div class="news-title">
                  <i class="icon iconfont icon-top1"></i>
                  <span class="title-h2">{{pushNews.title}}</span>
                </div>
                <span class="news-detail">{{pushNews.newsAbstract  | substringStr(120)}}</span>
              </div>
            </div>
            <ul class="news-list">
              <li class="news-item" v-for="(news, i) in newsArrs" :key="'news_' + i" @click="linkToNewsDetail(news.id)">
                <div class="news-title">{{news.title}}</div>
                <span class="news-date">{{news.date | dataFormat('yyyy/MM/dd')}}<i class="icon iconfont icon-gengduo"></i></span>
              </li>
            </ul>
          </div>
          <div class="mobile-show">
            <div class="news-mobile" @click="goToNewsDetail(pushNews.id)">
              <div class="flex-item">
                <h2 class="news-title">{{pushNews.title}}</h2>
                <p class="news-desc">{{pushNews.newsAbstract}}</p>
              </div>
              <div class="flex-item">
                <img class="item-img" :src="pushNews.url"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- video -->
      <div class="video-wrap">
        <div class="main-wrap mobile-hide" @mouseenter="on_top_enter" @mouseleave="on_top_leave">
          <swiper :options="swiperOptions" ref="mySwiper" v-if="videoArrs.length > 0">
            <swiper-slide v-for="(video, i) in videoArrs" :key="'video_' + i">
              <div class="slide-info">
                <div class="video-img">
                  <img :src="video.imgUrl" alt="" class="slide-img">
                  <i class="icon iconfont icon-bofang"></i>
                </div>
                <div class="slide-desc">
                  <div class="item-name">{{video.title}}</div>
                  <div class="item-desc" :title="video.description">{{video.description | substringStr(90)}}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
        <div class="main-wrap mobile-show">
          <swiper :options="swiperOptions750" ref="mySwiper" v-if="videoArrs.length > 0">
            <swiper-slide v-for="(video, i) in videoArrs" :key="'video_' + i">
              <div class="slide-info" @click="playVideo(video)">
                <div class="video-img">
                  <img :src="video.imgUrl" alt="" class="slide-img">
                  <i class="icon iconfont icon-bofang"></i>
                </div>
                <div class="slide-desc">
                  <p class="item-name">{{video.title}}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- train -->
      <div style="position: relative;">
        <div class="train-desc-title mobile-show">
            <p class="title">
              <span class="title-txt">班列概况</span>
            </p>
          </div>
          <mTrain :class="'index-train'">
          <!-- <div slot="title"> -->
            <m-summary :title="'班列概况'" slot="title" :class="'train-summary mobile-hide'">
              <a href="train.html" class="load-more" slot="more">
                更多详情<i class="icon iconfont icon-gengduo"></i>
              </a>
            </m-summary>
        </mTrain>
      </div>
      <!-- contact -->
      <div class="main-wrap mobile-hide">
        <div class="contact-wrap animate">
          <m-summary :title="'联系我们'">
            <a href="contact.html" class="load-more" slot="more">
              更多详情<i class="icon iconfont icon-gengduo"></i>
            </a>
          </m-summary>
          <mContact :hasColor="true"/>
        </div>
      </div>
    </div>
    <m-footer />
    <div id="video-play-wrap" v-if="showOrHideVideo">
      <div class="video-model">
            <video id="myVideo" ref="myVideo" class="video-play" :src="videoUrl" controls="controls">
              your browser does not support the video tag
            </video>
            <div class="close-video" @click="closeVideo">
                <i class="icon iconfont icon-close"></i>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import '_s/common/index.scss';
import './index.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import mSummary from '_c/summary'
import mContact from '_c/contact'
import mTrain from '_c/train'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import handleScroll from '../../mixins/index'
import api from '@/fetch/api'

let vm = null;
const swiperOptions = {
  autoplay: true,
  loop: true,
  notNextTick: true,
  slidesPerView: 3,
  spaceBetween: 20,
  observe: true,
  observeParents: true,
  paginationClickable: true,
  observer: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active'
  },
  on: {
    click: function () {
      const slideIndex = this.clickedSlide.dataset.swiperSlideIndex;
      vm.handleClickSlide(slideIndex);
    }
  }
}
const swiperOptions750 = {
  autoplay: true,
  loop: true,
  notNextTick: true,
  slidesPerView: 1,
  spaceBetween: 20,
  observe: true,
  observeParents: true,
  paginationClickable: true,
  observer: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active'
  },
  on: {
    click: function () {
      const slideIndex = this.clickedSlide.dataset.swiperSlideIndex;
      vm.handleClickSlide(slideIndex);
    }
  }
}
const bannerSwiper = {
  autoplay: true,
  loop: true,
  notNextTick: true,
  slidesPerView: 1,
  spaceBetween: 0,
  observe: true,
  observeParents: true,
  paginationClickable: true,
  observer: true
};
// const bannerSwiper750 = {};
export default {
  name: 'index',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mSummary, mContact, mTrain, swiper, swiperSlide},
  computed: {
    mySwiper () {
      return this.$refs.mySwiper.swiper;
    },
    myBannerSwiper () {
      return this.$refs.bannerSwiper.swiper
    }
  },
  data () {
    return {
      swiperOptions,
      swiperOptions750,
      bannerSwiper,
      news: { src: require('../../assets/news-img.png'), title: '“齐鲁号”零散集结班列首发齐鲁号零散集结班列首发', desc: '2018年12月22日，“齐鲁号”欧亚班列烟台首发仪式在烟台港集装箱码头隆重举行，烟台市委、市政府、烟台海关、山东高速物流集团、烟台车务段、烟台港集团等单位相关烟台市委、市政府、烟台海关、山东高速物流集团、烟台车务段、烟台港集团等单位相关…'},
      newsArrs: [],
      videoArrs: [],
      pushNews: {},
      showOrHideVideo: false,
      videoUrl: '',
      bannerArrs: [
        { clazz: 'banner-bg-1' },
        { clazz: 'banner-bg-2' },
        { clazz: 'banner-bg-3' },
        { clazz: 'banner-bg-4' }
      ]
    }
  },
  methods: {
    linkToNewsDetail (id) {
      window.location.href = `news-detail.html?id=${id}`
    },
    gotoPT () {
      window.location.href="http://114.116.85.144:81"
    },
    goToNewsDetail (id) {
      window.location.href = `news-detail.html?id=${id}`
    },
    getPushNews () {
      api.getStickNews({pageSize: 1, pageNo: 1, type: 1, isPush: true}).then(res => {
        let {list} = res
        this.pushNews = (list && list[0]) || {}
      })
    },
    getNewsArrs () {
      api.getStickNews({pageSize: 4, pageNo: 1, type: 1, isPush: false}).then(res => {
        let {list} = res
        this.newsArrs = list
      })
    },
    getAllVideo () {
      api.getAllVideo({pageSize: 100, pageNo: 1}).then(res => {
        let {list} = res;
        this.$nextTick(function () {
          this.videoArrs = list
        });
      })
    },
    on_top_enter() {
      this.mySwiper.autoplay.stop();
    },
    on_top_leave() {
      this.mySwiper.autoplay.start();
    },
    watchScreenChange () {
      let docEl = document.documentElement
      let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

      this.swiperOptions = swiperOptions;
      let recalc = function() {
        let clientWidth = docEl.clientWidth
        let swiperOptions = null;
        if (clientWidth <= 750) {
          swiperOptions = {
            autoplay: true,
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              bulletClass: 'my-bullet',
              bulletActiveClass: 'my-bullet-active'
            }
          }
          this.swiperOptions = swiperOptions;
        }
      }
      if (document.addEventListener === undefined) return
      window.addEventListener(resizeEvt, recalc, false)
      document.addEventListener(resizeEvt, recalc, false)
    },
    closeVideo () {
      this.$refs.myVideo.pause();
      this.showOrHideVideo = !this.showOrHideVideo;
    },
    playVideo (index) {
      this.videoUrl = this.videoArrs[index].videoUrl || 'http://www.sdgswl.com/highway/video/sdgsxh.mp4';
      this.showOrHideVideo = !this.showOrHideVideo;
    },
    handleClickSlide (index) {
      this.playVideo(index)
    }
  },
  created () {
    vm = this;
  },
  mounted () {
    this.handleAnimate();
    addEventListener('scroll', this.handleAnimate, false)
    // 获取推送新闻
    this.getPushNews()
    this.getNewsArrs()
    // 获取视频
    this.getAllVideo()
    // this.watchScreenChange()
  },
  beforeDestroy () {
    removeEventListener('scroll', this.handleAnimate, false)
  }
}
</script>

<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'train-bg'" :txtName="'train-txt'" class="mobile-hide"/>
      <m-train :class="'train-train'">
        <m-summary class="mobile-hide" :title="'班列概况'" slot="title" :class="'train-summary'"/>
      </m-train>
      <!-- <div class="train-city">
        <div class="main-wrap">
          <div class="flex-common flex-left">
            <m-summary :title="'欧亚国际货运省内班列'" :class="'color-white'"/>
            <div class="city-numb-name">
              <div class="city-numb"><span class="numb">9</span>市</div>
              <div class="city-name">
                <span class="name" v-for="(name, n) in cityNames" :key="'name_' + n">{{name}}</span>
              </div>
            </div>
          </div>
          <div class="flex-common flex-right">
            <swiper :options="swiperOptions" ref="mySwiper">
              <swiper-slide v-for="(city, i) in cityArrs" :key="'city_' + i">
                <div class="slide-info">
                  <div class="city-img">
                    <img :src="city.src" alt="" class="slide-img">
                    <div class="city-desc-info">
                      <div class="city-name">{{city.name}}</div>
                      <div class="city-desc">{{city.desc}}</div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
            <div class="city-data-desc">*山东省发展改革委提供数据</div>
          </div>
        </div>
      </div> -->
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './train.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mBanner from '_c/banner'
import mTrain from '_c/train'
import mSummary from '_c/summary'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const swiperOptions = {
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active'
  }
}

export default {
  name: 'train',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner, mTrain, mSummary, swiper, swiperSlide},
  data () {
    return {
      curIndex: 1,
      swiperOptions,
      cityNames: ['青岛', '潍坊', '滨州', '临沂', '济南', '淄博', '威海', '日照', '济宁', '...'],
      cityArrs: [
        { src: require('../../assets/city-1.png'), name: '青岛', desc: '青岛中亚班列于2015年7月1日开行，每周2列，截止2017年10月底已开行32列' },
        { src: require('../../assets/city-2.png'), name: '潍坊', desc: '潍坊中亚班列于2015年9月28日开行，力争每月开行1列' },
        { src: require('../../assets/city-3.png'), name: '滨州', desc: '滨州中亚班列于2015年10月16日开行，力争每周开行1列' },
        { src: require('../../assets/city-4.png'), name: '临沂', desc: '临沂经满洲里至德国汉堡国际货运班列于10月20日开行，每2天1列' },
        { src: require('../../assets/city-5.png'), name: '济南', desc: '济南经满洲里至俄罗斯莫斯科国际货运班列于2017年8月4日开行，先期以每周一班开行' },
        { src: require('../../assets/city-6.png'), name: '淄博', desc: '淄博经阿拉山口至乌兹别克斯坦、哈萨克斯坦国际货运班列，于2017年8月16日开行' },
        { src: require('../../assets/city-7.png'), name: '威海', desc: '威海市，潍威韩（潍坊-文登-韩日）冷藏集装箱班列于2017年9月1日开通，威海-汉堡班列2017年9月2日开通' },
        { src: require('../../assets/city-8.png'), name: '日照', desc: '日照市“照蓉欧”班列于2017年4月15日开行，“中亚”班列于2017年9月12日开行' },
        { src: require('../../assets/city-9.png'), name: '济宁', desc: '' }
      ]
    }
  }
}
</script>


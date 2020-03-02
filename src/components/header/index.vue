<template>
  <div id="headerWrap" :class="{fixed: getFixed}">
    <div class="main-wrap">
      <div class="logo">
        <!-- <a class="logo-link" href="index.html"><i class="icon iconfont icon-qiluhaologo"></i></a>
        <a class="logo-link logo-sdwl" href="index.html"><img class="sdgswl-img" src="../../assets/sdwl-logo.png"></a> -->
        <a class="logo-link" href="index.html">
          <img class="sdgswl-img" src="../../assets/logo.png" />
        </a>
      </div>
      <div class="nav header-mobile-hide">
        <ul class="nav-list">
          <li class="nav-item"
            :class="{'active': activeIndex === index}"
            v-for="(nav, index) in navArrs" :key="'nav_' + index"
            @mouseenter="mouseEnter(index)"
            @mouseleave="mouseLeave">
            <a :href="nav.href" class="nav-link">{{nav.txt}}</a>
          </li>
        </ul>
        <div class="wx-info">
          <i class="icon iconfont icon-weixin"></i>
          <span class="wx-ercode">
            <img src="../../assets/index-wx-code.png" class="wx-img"/>
          </span>
        </div>
      </div>

      <!-- 移动端侧边栏导航 -->
      <div class="trigger-icon header-mobile-show" @click="showOrHideMenu" :class="{'trigger-icon-fixed': showOrHide}">
        <i class="icon iconfont" :class="[!showOrHide ? 'icon-caidan' : 'icon-close']"></i>
      </div>
      <transition name="fade" tag="div">
        <div class="header-mobile-show-style header-mobile-show" v-if="showOrHide">
          <div class="slide-nav">
            <img class="slide-logo" src="../../assets/logo-footer-750.png" />
            <nav class="nav-list">
              <a v-for="(nav, i) in navArrs"
                :key="'n_' + i" :href="nav.href"
                class="nav-link"
                :class="{'active': activeIndex === i}">{{nav.txt}}</a>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import './index.scss'
export default {
  name: 'mHeader',
  props: {
    curIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getFixed () {
      return this.$store.getters.getFixed
    }
  },
  data () {
    return {
      activeIndex: this.curIndex,
      showOrHide: false,
      navArrs: [
        { href: 'index.html', txt: '齐鲁号' },
        { href: 'train.html', txt: '班列概况'},
        { href: 'news.html', txt: '新闻动态'},
        { href: 'about.html', txt: '关于平台'},
        { href: 'contact.html', txt: '联系我们'}
      ]
    }
  },
  methods: {
    mouseEnter (index) {
      this.activeIndex = index
    },
    mouseLeave () {
      this.activeIndex = this.curIndex
    },
    showOrHideMenu () {
      this.showOrHide = !this.showOrHide
    }
  }
}
</script>

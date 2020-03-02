<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner class="mobile-hide" :bgName="'news-bg'" :txtName="'news-txt'"/>
      <div class="breadcrumb mobile-hide">
        <div class="main-wrap">
          <a class="crumb-link crumb-arrow" href="news.html">新闻动态</a>
          <span class="crumb-text">新闻详情</span>
        </div>
      </div>
      <div class="main-wrap">
        <div class="news-info-wrap">
          <!-- <div class="mobile-show mobile-img" v-if="news.url">
            <img :src="news.url"/>
          </div> -->
          <h2 class="news-title">{{news.title}}</h2>
          <div class="news-info mobile-hide">
            <span class="publish">发布者: {{ news.publisher || '物流集团'}}</span>
            <span class="count">浏览次数: {{ news.count || 0}}</span>
            <span class="date">{{news.date | dataFormat('yyyy/MM/dd')}}</span>
          </div>
          <div class="news-desc" v-html="news.content"></div>
        </div>
        <div class="news-ad mobile-hide"><img src="../../assets/wx-gzh.png"/></div>
      </div>

      <div class="breadcrumb main-wrap mobile-banner mobile-show">
        <div class="main-wrap">
          <a class="crumb-link crumb-arrow" href="news.html">新闻动态</a>
          <span class="crumb-text" style="color: #177fff;">新闻详情</span>
        </div>
      </div>
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './news-detail.scss'
import api from '@/fetch/api'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mBanner from '_c/banner'
import qs from 'qs'
import myFilter from '@/mixins/filter'
export default {
  name: 'news-detail',
  mixins: [ handleScroll, myFilter ],
  components: {mHeader, mFooter, mBanner},
  data () {
    return {
      curIndex: 2,
      news: {}
    }
  },
  methods: {
    getNewsDetail (id) {
      // debugger
      api.getNewsDetail(id).then(res => {
        // console.log(res)
        this.news = res;
      })
    }
  },
  mounted () {
    const querys = window.location.search
    const {id} = qs.parse(querys.replace('?', ''))
    // console.log(qs.parse(querys.replace('?', '')))
    this.getNewsDetail(id)
  }
}
</script>


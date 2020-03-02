<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner class="mobile-hide" :bgName="'news-bg'" :txtName="'news-txt'"/>
      <div class="breadcrumb mobile-hide">
        <div class="main-wrap">
          <span class="crumb-text crumb-arrow">新闻动态</span>
        </div>
      </div>
      <div class="main-wrap">
        <div class="news-info-wrap">
          <ul class="news-list">
            <li class="news-item" :class="{'news-mobile': !news.isPush}" @click="goToDetail(news.id)"
              v-for="(news, index) in newsArrs" :key="'news_' + index">
              <div class="news-push" v-if="news.isPush">
                <img :src="news.url" class="news-img"/>
                <div class="news-info">
                  <div class="news-date mobile-hide">{{ news.date | dataFormat('yyyy/MM/dd') }}</div>
                  <div class="news-title">{{news.title}}</div>
                  <div class="news-desc mobile-hide">{{news.newsAbstract}}</div>
                </div>
              </div>
              <div class="news-default" v-else>
                <div class="news-title">{{news.title}}</div>
                <div class="news-info mobile-hide">
                  <span class="publish">发布者: {{news.publisher}}</span>
                  <span class="count">浏览次数: {{news.count || 0}}</span>
                  <span class="date">{{ news.date | dataFormat('yyyy/MM/dd') }}</span>
                </div>
                <div class="news-desc mobile-hide">{{news.newsAbstract}}</div>
              </div>
            </li>
          </ul>
          <div class="news-pages">
            <pager
              :total-page="totalPage"
              :init-page="page"
              :show-items="showItems"
              @go-page="goPage"></pager>
          </div>
        </div>
        <!-- 广告 -->
        <div class="news-ad mobile-hide"><img src="../../assets/wx-gzh.png"/></div>
      </div>
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './news.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mBanner from '_c/banner'
import pager from 'vue-simple-pager'
import api from '@/fetch/api'
import myFilter from '@/mixins/filter'
export default {
  name: 'news',
  mixins: [ handleScroll, myFilter ],
  components: {mHeader, mFooter, mBanner, pager},
  data () {
    return {
      curIndex: 2,
      totalPage: 1,
      pageSize: 10,
      page: 1,
      newsArrs: [],
      showItems: 5
    }
  },
  methods: {
    getAllNews () {
      api.getAllNews({pageSize: this.pageSize, pageNo: this.page, type: 1}).then(res => {
        let isPush = false;
        let {list, pages, pageNum} = res
        this.page = pageNum
        this.totalPage = pages
        if (this.page === 1) {
          list.forEach(item => {
            if (!isPush && item.isPush) {
              isPush = true;
            } else {
              Object.assign(item, {isPush: false})
            }
          })

          this.newsArrs = list
        } else {
          this.newsArrs = list
        }
      })
    },
    goPage (data) {
      this.page = data.page
      // console.log(this.page)
      this.getAllNews()
    },
    goToDetail (id) {
      window.location.href = `news-detail.html?id=${id}`
    }
  },
  mounted () {
    this.getAllNews()
    const clientWidth = document.documentElement.clientWidth
    this.showItems = clientWidth > 750 ? 5 : 3;
  }
}
</script>


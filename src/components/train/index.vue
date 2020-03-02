<template>
  <div class="train-wrap" :class="clazzWrap">
    <div class="main-wrap">
      <slot name="title"></slot>
      <div class="flex-list">
        <div class="flex-map"></div>
        <div class="flex-item" v-for="(item, i) in trainArrs" :key="'train_' + i">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">
            <div class="item-info" v-for="(desc, d) in item.desc" :key="'desc_' + d">
              <div class="desc-icon">
                <i class="icon iconfont" :class="[desc.icon.name]"></i></div>
              <div class="desc-numb">
                <countTo :startVal='desc.numb.start' :endVal='desc.numb.end' :duration='desc.numb.duration'></countTo>
              </div>
              <div class="desc-info">
                <span class="info-txt" :class="[info.clazz]" v-for="(info, o) in desc.info" :key="'info_' + o">{{info.txt}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './index.scss'
import countTo from 'vue-count-to'
export default {
  name: 'mTrain',
  components: {countTo},
  props: {
    className: {
      type: String
    }
  },
  computed: {
    clazzWrap () {
      return this.className
    }
  },
  data () {
    return {
      trainArrs: [
        {
          title: '中欧铁路东中西三条国际联运通道',
          desc: [
            {
              icon: { name: 'icon-shuniu'},
              numb: { start: 0, end: 41, duration: 3000},
              info: [
                { txt: '个枢纽节点', clazz: 'txt-color' },
                { txt: '干支结合  |  枢纽集散'}
              ]
            },
            {
              icon: { name: 'icon-yxlx' },
              numb: { start: 0, end: 30, duration: 4000},
              info: [
                { txt: '条运行线路', clazz: 'txt-color' },
                { txt: '主要货源地  |  主要铁路枢纽' },
                { txt: '沿海重要港口  |  沿边陆路口岸' },
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>


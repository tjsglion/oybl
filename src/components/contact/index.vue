<template>
  <ul class="contact-list" :class="{'contact-color': hasColor}">
    <li class="contact-item animated" :class="[i % 2 === 0 ? 'fadeInLeft' : 'fadeInRight']" v-for="(item, i) in itemArr" :key="'item_' + i">
      <div class="item-icon">
        <i class="icon iconfont" :class="[item.icon]"></i>
      </div>
      <div class="item-title">
        <span class="title-txt">{{item.title}}</span>
      </div>
      <div class="item-desc">
        <span class="desc-info" :class="{'desc-wx': desc.wx}" v-for="(desc, c) in item.desc" :key="'desc_' + c">
          {{desc.txt}}
          <span v-if="desc.phone" class="phone mobile-hide">18561361267</span>
          <a v-if="desc.phone" href="tel: 18561361267" class="mobile-phone mobile-show">18561361267</a>
          <img v-if="desc.wx" class="wx-code" src="../../assets/index-wx-code.png"/>
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
import './index.scss'
export default {
  name: 'mContact',
  props: {
    hasColor: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      itemArr: [
        { icon: 'icon-lianxidizhi', title: '联系地址', desc: [
          { txt: '山东省济南市历下区龙奥北路8号' },
          { txt: '山东高速大厦' }
        ]},
        { icon: 'icon-dianhua', title: '业务联系电话', desc: [
          { txt: '业务联系人' , phone: '18561361267'},
          { txt: '马春波' }
        ]},
        { icon: 'icon-E-mail', title: 'E-mail', desc: [{ txt: 'machunbo@sdhsg.com' }] },
        { icon: 'icon-weixin', title: '微信公众号', desc: [{ txt: '齐鲁号欧亚班列'}, {wx: require('../../assets/index-wx-code.png')}] }
      ]
    }
  }
}
</script>

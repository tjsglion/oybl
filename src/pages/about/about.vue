<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <m-banner :bgName="'about-bg'" :txtName="'about-txt'"/>
      <div class="main-wrap">
        <m-summary :title="'平台概况'" />
        <div class="pt-title">一带一路 “齐鲁号”欧亚班列综合物流品牌</div>
        <div class="pt-icon-wrap">
          <div class="pt-icon">
            <i class="animated icon iconfont" v-for="(icon, i) in icons" :key="'icon_' + i" :class="[icon, i % 2 === 0 ? 'fadeInRight' : 'fadeInLeft']"></i>
          </div>
          <div class="icon-txt">
            <span class="txt">五统一</span>
          </div>
          <div class="pt-desc">
            <div class="desc-txt">
              山东省政府为进一步响应国家“一带一路”倡议，打造我省对外开放新高地，建设国际物流大通道，构建山东省全方位开放新格局，实现我省欧亚班列“五统一”高效能运营，拟由山东高速集团负责、山东高速物流集团具体承接山东省欧亚班列统筹运营工作。统筹后的山东省欧亚班列，将由省级运营平台统筹运营，与省内各地市班列平台通过合作、合资实现资源共享、协同共建。省内欧亚班列将 “统一齐鲁号品牌、统一班列班次、统一运营平台、统一政策、统一对外营销”，形成“多点连通、覆盖全省、辐射东亚”布局，采取“零散集结、整列始发”的方式，提升整体物流效能，创新“欧亚班列+”商业模式，全面培育“齐鲁号”欧亚班列综合物流品牌，促进班列运营可持续发展，服务我省外向型经济。
            </div>
            <div class="desc-txt">
              山东高速物流集团有限公司（以下简称“山东高速物流集团”）成立于2011年8月，是由山东高速集团出资设立的国有大型物流企业，注册资本50亿元，首期到位资本金20亿元，注册规模居全省同行业第一、全国前列。经营范围和主营业务主要包括综合物流的组织、投资与管理，物流基础设施的投资、建设与运营，以及商贸物流、供应链服务、物流相关信息咨询等。作为山东省物流行业的领航者，公司充分发挥山东高速公路、铁路、港航等大交通基础网络体系和品牌资信优势，积极整合省内相关物流资源，在物流基础设施建设、实体物流运输、商贸物流、物流信息化等领域高起点规划，高标准运作，并将逐步建立覆盖全省、延伸全国、联通世界的物流网络。2014年，经中国物流与采购联合会信用专家委员会评审，山东高速物流集团被列为第十四批中国物流AAA级信用企业。
            </div>
          </div>
        </div>
      </div>
      <div class="event-wrap">
        <div class="main-wrap">
          <m-summary :title="'大事件'" />
          <div class="event-flex">
            <div class="flex-item">
              <div class="item-title">里程碑  砥砺前行</div>
              <div class="item-desc">从项目调研、与各地市货源组织单位对接， 到省级平台统筹运营准备、技术创新</div>
            </div>
            <div class="flex-item event-items">
              <div class="item-txt" v-for="(item, i) in eventItems" :key="'event_' + i">{{item}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './about.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mBanner from '_c/banner'
import mSummary from '_c/summary'
export default {
  name: 'about',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mBanner, mSummary},
  data () {
    return {
      curIndex: 3,
      icons: ['icon-pinpai', 'icon-banlie', 'icon-pingtai', 'icon-zhengce', 'icon-yingxiao'],
      eventItems: [
        '2018年10月31日，“齐鲁号”欧亚班列在济南、青岛、淄博、临沂四地同步举行首发仪式。',
        '2019年1月18日，“齐鲁号”欧亚班列发运满100列。',
        '2019年3月，设立韩国营销中心。',
        '2019年10月，设立德国办事处。',
        '2019年12月，设立日本营销中心。',
        '2019年12月20日，“齐鲁号”欧亚班列发运满1000列。',
        '...'
      ]
    }
  }
}
</script>


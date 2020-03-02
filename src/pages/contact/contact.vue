<template>
  <div id="container">
    <m-header :curIndex="curIndex"/>
    <div id="main">
      <div class="address-wrap">
        <div class="dot">
          <div class="dot-el"></div>
          <div class="prefix"></div>
          <div class="suffix"></div>
          <div class="sdgs-txt"></div>
        </div>
      </div>
      <div class="title-wrap main-wrap">
        <div class="txt">
          <div class="txt-info">业务联系  合作共赢</div>
        </div>
      </div>
      <div class="contact-wrap">
        <div class="main-wrap">
          <mContact />
        </div>
      </div>
    </div>
    <m-footer />
  </div>
</template>

<script>
import '_s/common/index.scss'
import './contact.scss'
import mHeader from '_c/header'
import mFooter from '_c/footer'
import handleScroll from '../../mixins/index'
import mContact from '_c/contact'
export default {
  name: 'contact',
  mixins: [ handleScroll ],
  components: {mHeader, mFooter, mContact},
  data () {
    return {
      curIndex: 4
    }
  }
}
</script>

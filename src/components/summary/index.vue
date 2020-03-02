<template>
  <div class="summary-warp" :class="getClass">
    <div class="title">
      <span class="title-txt">{{title}}</span>
    </div>
    <div class="summary-more">
      <slot name="more"></slot>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {
  name: 'mSummary',
  props: {
    title: {
      type: String,
      default: '更多'
    },
    className: {
      type: String
    }
  },
  computed: {
    getClass () {
      return this.className
    }
  }
}
</script>

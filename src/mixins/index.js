export default {
  methods: {
    handleScroll () {
      let width = document.documentElement.clientWidth
      if (width <= 750) return false
      let top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 250) {
        this.$store.commit('setFixed', 1)
      } else {
        this.$store.commit('setFixed', 0)
      }
    },
    handleAnimate () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      let ch = document.documentElement.clientHeight
      let dom = document.querySelectorAll(".animate")
      Array.prototype.slice.call(dom).forEach(v => {
        if(top + ch > v.offsetTop){
          var delay = v.dataset.delay;
          if(delay){
            setTimeout(() => {
              v.style.opacity = 1;
              v.classList.add(v.dataset.ani)
            }, delay)
          }else{
            v.style.opacity = 1;
            v.classList.add(v.dataset.ani)
          }
        }else{
          v.classList.remove(v.dataset.ani)
          v.style.opacity = 0;
        }
      })
    },
    setFontSize() { // 设置html字体大小
      let oHtml = document.querySelector('html')
      let rect = oHtml.getBoundingClientRect()
      let width = rect.width
      oHtml.style.fontSize = width / 15 + 'px'
    },
    changeScreen() { // 改变窗口大小时,修改html字体大小
      let docEl = document.documentElement
      let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
      let recalc = function() {
        let clientWidth = docEl.clientWidth
        if (clientWidth > 750) return
        if (clientWidth === undefined) return
        docEl.style.fontSize = 50 * (clientWidth / 750) + 'px'
      }

      if (document.addEventListener === undefined) return
      window.addEventListener(resizeEvt, recalc, false)
      document.addEventListener(resizeEvt, recalc, false)
    }
  },
  mounted () {
    this.setFontSize()
    this.changeScreen()
    addEventListener('scroll', this.handleScroll, false)
  },
  beforeDestroy () {
    removeEventListener('scroll', this.handleScroll, false)
  }
}

export default {
  lock() {
    const top = window.scrollY
    if (!document.body.style.top && !document.body.style.position) {
      document.body.style.top = `-${top}px`
      document.body.style.position = 'fixed'
    }
  },
  unlock() {
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}

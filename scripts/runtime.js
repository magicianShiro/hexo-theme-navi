/**
  * Runtime Helper
  * @description Get the runtime for HTML footer
  * @example
  * 
*/

// /* global hexo */
hexo.extend.helper.register('runtime', function () {
  return function runTimeLoop (time) {
    let unixDeff = Math.abs(new Date(time).getTime() - Date.now())
    let day = Math.floor(unixDeff / 86400000)
    let hoursUnix = unixDeff % 86400000
    let hours = Math.floor(hoursUnix / 3600000)
    let miuntesUnix = hoursUnix % 3600000
    let miuntes = Math.floor(miuntesUnix / 60000)
    let secondsUnix = miuntesUnix % 60000
    let seconds = Math.floor(secondsUnix / 1000)
    this.innerHTML = `博客已萌萌哒运行${day}天${hours}小时${miuntes}分${seconds}秒`
    setTimeout(runTimeLoop.bind(this, time), 1000)
  }
})

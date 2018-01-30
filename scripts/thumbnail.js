/**
  * Thumbnail Helper
  * @description Get the thumbnail url from a post
  * @example
  * <%- thumbnail(post) %>
*/
const path = require('path')
/* global hexo */
hexo.extend.helper.register('thumbnail', function (post) {
  target = post.thumbnail || post.banner || ''
  if (post.banner) {
    let rootPath = this.url_for(post.path).split('.')[0]
    let lostChar = rootPath.slice(-1)
    banner = lostChar === '/' ? rootPath + target : rootPath + '/' +target
    if (target.indexOf('http') > 0 || /^\/\//.test(target)) {
      banner = target
    }
    return banner
  }
  return target
})

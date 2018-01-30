/* global jQuery */

(function ($) {
  var toTop = ($('#sidebar').height() - $(window).height()) + 60
  var scrollHeight = $(document).height() - $(window).height()
  var toButtom = scrollHeight - toTop
  // Caption
  $('.article-entry').each(function (i) {
    $(this).find('img').each(function () {
      if (this.alt && !(!!$.prototype.justifiedGallery && $(this).parent('.justified-gallery').length)) {
        $(this).after('<span class="caption">' + this.alt + '</span>')
      }

      // 对于已经包含在链接内的图片不适用lightGallery
      if ($(this).parent().prop('tagName') !== 'A') {
        $(this).wrap('<a href="' + ($(this).attr('data-imgbig') ? $(this).attr('data-imgbig') : this.src) + '" title="' + this.alt + '" class="gallery-item"></a>')
      }
    })
  })
  if (typeof jQuery.prototype.lightGallery !== 'undefined') {
    var options = {
      selector: '.gallery-item'
    }
    $('.article-entry').lightGallery(options)
    $($('.article-gallery')[0]).lightGallery(options)
  }
  if ($.prototype.justifiedGallery) { // if justifiedGallery method is defined
    /* eslint-disable */
    var options = {
      rowHeight: 140,
      margins: 4,
      lastRow: 'justify'
    }
    $('.justified-gallery').justifiedGallery(options)
    /* eslint-enable */
  }

  // Profile card
  $(document).on('click', function () {
    $('#profile').removeClass('card')
  }).on('click', '#profile-anchor', function (e) {
    e.stopPropagation()
    $('#profile').toggleClass('card')
  }).on('click', '.profile-inner', function (e) {
    e.stopPropagation()
  })

  if ($('#sidebar').length) {
    $(document).on('scroll', function () {
      if ($(document).width() >= 800) {
        // to Top
        if (($(this).scrollTop() > toTop) && ($(this).scrollTop() > 0)) {
          $('#toTop').fadeIn()
        } else {
          $('#toTop').fadeOut()
        }
        // to Buttom
        if (($(this).scrollTop() < toButtom)) {
          $('#toButtom').fadeIn()
        } else {
          $('#toButtom').fadeOut()
        }
      } else {
        $('#toTop').fadeIn()
        $('#toButtom').fadeIn()
      }
    }).on('click', '#toTop', function () {
      $('body, html').animate({ scrollTop: 0 }, 600)
    }).on('click', '#toButtom', function () {
      $('body, html').animate({ scrollTop: scrollHeight }, 600)
    })
  }

  $('#header').headroom({
    offset : toTop,
    classes: {
        initial: "", 
        pinned: "",
        unpinned: "hide"
    }
  })

  // to Top Image
  $('#toTop').on('mouseover', 'img', function () {
    $(this).attr('src', $(this).attr('src').replace('c.png', 'd.png'))
    $(this).parent().stop().animate({ bottom: 0, right: 0 }, 300)
  }).on('mouseout', 'img', function () {
    $(this).attr('src', $(this).attr('src').replace('d.png', 'c.png'))
    $(this).parent().stop().animate({ bottom: -7, right: -7 }, 300)
  })
  // to Bottom Image
  $('#toButtom').on('mouseover', 'img', function () {
    $(this).attr('src', $(this).attr('src').replace('a.png', 'b.png'))
    $(this).parent().stop().animate({ bottom: 0, left: 0 }, 300)
  }).on('mouseout', 'img', function () {
    $(this).attr('src', $(this).attr('src').replace('b.png', 'a.png'))
    $(this).parent().stop().animate({ bottom: -7, left: -7 }, 300)
  })

  // visibilitychange
  var link = $('link[rel="icon"]')
  var title = document.title
  var map = {
    0: { icon: link.attr('href'), title: '(/≧▽≦/)咦！又好了！' + title },
    1: { icon: '//diygod.me/images/failure.ico', title: '(●—●)喔哟，崩溃啦！' }
  }
  $(window).on('visibilitychange', function () {
    var data = map[+document.hidden]
    link.attr('href', data.icon)
    document.title = data.title
    setTimeout(function () {
      if (document.hidden) return
      document.title = title
    }, 2000)
  })
})(jQuery)

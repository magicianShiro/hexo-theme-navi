# hexo-theme-navi

> hexo theme

[![Build Status](https://travis-ci.org/magicianShiro/hexo-theme-navi.svg?branch=master)](https://travis-ci.org/magicianShiro/hexo-theme-navi)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Preview

![preview](https://raw.githubusercontent.com/magicianShiro/hexo-theme-navi/master/preview.png)

## Demo

[Live Example](http://movom.cc)

## New features
* When you scroll header will be hidden
* Added レム to slide the bottom
* Added ラム to slide the top
* Added banner and you can configure it hidden or visbility
* Added the prompt when comment is loading 
* Added the time for the blog running
* article banner can be used location image

## Usage

Clone this project into your hexo blog theme directory: 

``` shell
git clone git@github.com:magicianShiro/hexo-theme-navi.git </path/to/themes/navi>
```

Edit the site `_config.yml` file:

```yaml
theme: navi
```

Merge the _source folder in the theme and the _source folder in the root directory

## Configuration

**Fillet avatar**

eidt `source/css/_variables.styl`

```ini
use-radius-avatar = true
```

**Fixed navigation**

eidt `source/css/_variables.styl`

```ini
use-fixed-nav = true
```

**Add bio**

Edit the theme `_config.yml` file:

```yaml
customize:
  profile:
    bio: I maybe bad,but i feel good.
```

**Enable busuanzi statistics plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  busuanzi_analytics: true # optionis true, false
```

**Enable or Disable chuncai plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  chuncai: true # optionis true, false
```

**Enable or Disable APlayer plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  aplayer:
    enable: true # optionis true, false
    options: { # see doc: https://aplayer.js.org/docs/#/?id=options
      autoplay: true,
      theme: '#ffdfe6',
      music: {
        title: '静かな夜に、君と話そう',
        author: '坂本昌一郎',
        pic: '//avatars1.githubusercontent.com/u/29977599?v=4&s=200',
        url: '//quq.cat/resources/music/坂本昌一郎 - 静かな夜に、君と話そう.mp3'
      }
    }
```

**Enable or Disable Do-you-like-me plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  do_you_like_me: true # optionis true, false
```

## ChangeLog

**2018-01-30**
* Modify from u3u's theme [Hexo-Theme-MoeIcarus](https://github.com/MoeFE/Hexo-Theme-MoeIcarus)
* Fixed some bug
* Added レム ラム



## About

- Give a star if you like , fork or just clone to use , and also you can help me fix bugs and add new feature :)
- If you have any problem or requirement , just open an issue here and i will help you.
- Thanks to [@u3u](https://github.com/u3u)[/Hexo-Theme-MoeIcarus](https://github.com/MoeFE/Hexo-Theme-MoeIcarus)、[@ppoffice](https://github.com/ppoffice)[/hexo-theme-icarus](https://github.com/ppoffice/hexo-theme-icarus) and [@Hexo](https://hexo.io).

## LICENSE

[MIT](https://github.com/magicianShiro/hexo-theme-navi/blob/master/LICENSE)


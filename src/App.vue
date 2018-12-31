<template>
  <div id="app" v-if="appDisplay">
    <audio id="music" src="http://m.chint.com/minisite/c-world/2019Newyear/music.mp3">
      您的浏览器不支持 audio 标签。
    </audio>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      appDisplay: false
    }
  },
  created() {
    document.body.removeChild(document.getElementById('Loading'))
    this.appDisplay = true
  },
  mounted () {
    let music = document.getElementById('music')
    let ua = navigator.userAgent
    console.log(music)

    document.addEventListener("WeixinJSBridgeReady", function () {
      if (ua.indexOf("iPhone") > 0) {
        music.play()
      } else {
        music.play()
      }
    }, false);

    music.addEventListener("loaded", function(){
      if (ua.indexOf("iPhone") > 0) {
        music.play()
      } else {
        music.play()
      }
    }, false);
  }
}
</script>

<style>
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
  }
	#app {
		width: 100%;
    height: 100%;
	}
</style>

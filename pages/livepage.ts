const { I } = inject();
export = {

    videoplayeriframe : "//iframe[contains(@class,'video-js')]",
    videoStream: "//video[contains(@class,'video-stream')]",

  switchToVideoPlayerIframe(){
    I.switchTo(this.videoplayeriframe)
  },

  isVideoPlayerVisible(){
    I.seeElement(this.videoStream)
  }
}


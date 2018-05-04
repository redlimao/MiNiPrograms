//录音
const recorderManager = wx.getRecorderManager()
const options = {
    sampleRate: 44100,
    numberOfChannels: 1,
    encodeBitRate: 192000,
    format: 'mp3',
    frameSize: 50
}
//播放录音
const backgroundAudioManager = wx.getBackgroundAudioManager();
function num(a,b){
    return a +b;
}
module.exports = {
  recorderManager: recorderManager,
  options: options,
  backgroundAudioManager: backgroundAudioManager,
  num: num
}

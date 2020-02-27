# WebRTC学习代码

## WebRTC简介
WebRTC（Web Real-Time Communication）项目的最终目的主要是让Web开发者能够基于浏览器轻易快捷开发出丰富的实时多媒体应用，而无需下载安装任何插件，Web开发者也无需关注多媒体的数字信号处理过程，只需编写简单的Javascript程序即可实现，W3C等组织正在制定Javascript 标准API，目前是WebRTC 1.0版本，Draft状态；另外WebRTC还希望能够建立一个多互联网浏览器间健壮的实时通信的平台，形成开发者与浏览器厂商良好的生态环境。

WebRTC提供了视频会议的核心技术，包括音视频的采集、编解码、网络传输、显示等功能，并且还支持跨平台：windows，linux，mac，android。

WebRTC于2011年6月1日开源并在Google、Mozilla、Opera支持下被纳入万维网联盟的W3C推荐标准。

![](https://raw.githubusercontent.com/JelinYao/WebRTCStudy/master/img/webrtc.png)

## 代码目录
### 1、枚举音视频设备列表
使用navigator.mediaDevices.enumerateDevices()接口枚举设备列表，页面加载完毕后展示。

![](https://raw.githubusercontent.com/JelinYao/WebRTCStudy/master/enumDevice/screen.png)

### 2、桌面、应用程序捕获
使用navigator.mediaDevices.getDisplayMedia()接口实时捕获，展示在页面上

![](https://raw.githubusercontent.com/JelinYao/WebRTCStudy/master/screenCapture/screen.png)
为什么会有窗口不听在内部无线展示？因为当前窗口实时绘制到当前屏幕中，屏幕一直在动，就会不听绘制。

## 一些网址
官网：https://www.webrtc.org/ （被墙了，很无奈...）

国内官网：https://webrtc.org.cn/

github：https://github.com/RTC-Developer/WebRTC-Documentation-in-Chinese

系统API文档：https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API


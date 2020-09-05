## 安装

地址： [http://www.ffmpeg.org/download.html](http://www.ffmpeg.org/download.html)

安装完毕以后，需要 **设置环境变量**

- [ffmpeg文档](http://www.ffmpeg.org/ffmpeg.html)
- [node版本的ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)

## 常用功能

### 转为H.264编码格式

```cmd
ffmpeg -i 2.mp4 -vcodec libx264 4.mp4
```
### 查看视频编码信息

```cmd
ffprobe -of json -show_streams -show_format 1.mp4
```

## 参数含义

- -r 设置FPS
- -i 输入文件
- -vf 视频
- -af 音频

### 流选择
- -vn 跳过视频
- -an 跳过音频
- -sn 跳过字幕
- -dn 跳过数据流
## 使用 FFmpeg 合并 音频与视频
使用 [哔哩哔哩下载助手 ](https://chromewebstore.google.com/detail/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B/djinnjdnedmcilpnboifdhfgbbhgieee?hl=en-US&utm_source=ext_sidebar) 下载一些视频时发现想要更高清的只有单独的音频/视频

懒得使用视频格式的软件

于是便使用了[ FFmpeg](https://ffmpeg.org/download.html)

# 下载 FFmpeg
根据自己的系统下载[ FFmpeg](https://ffmpeg.org/download.html) 


![Screen Shot 2024-01-12 at 20.48.19.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dcb59d91d4d4c2eb6847ecc205600e2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1647&h=1023&s=340974&e=png&a=1&b=282828)
下载完成后解压此 zip

![downloads.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d228bfee979b44be92551fb91173795f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=815&h=414&s=103549&e=png&a=1&b=f6f5f4)
然后将其移动到本机的环境变量路径所在文件夹里面，这样就能在任何位置使用[ FFmpeg](https://ffmpeg.org/download.html) 命令了.




![home.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f39bab5ebbd48e5926ce383394231cf~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=763&h=468&s=95340&e=png&a=1&b=f6f4f4)
打开终端，查看[ FFmpeg](https://ffmpeg.org/download.html) 版本

```sh
ffmpeg -version
```
![Screen Shot 2024-01-12 at 20.55.35.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6a269ff1e324805820ff237e6c45910~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=732&h=587&s=143352&e=png&a=1&b=070707)
# 合并音频与视频
现在 我们有一个 音频 audio.m4s  和一个 纯视频 video.m4s
![Screen Shot 2024-01-12 at 21.13.56.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c42dd1c554f439091ce15c41b811089~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=895&h=392&s=109497&e=png&a=1&b=f4f2f1)
在所在位置打开终端，输入合并 为视频的命令.

```sh
ffmpeg -i video.m4s -i audio.m4s -c:v copy -c:a aac -strict experimental out.mp4
```

![Screen Shot 2024-01-12 at 21.19.42.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2c647e833b24d8394cbca9f85957944~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1062&h=808&s=217735&e=png&a=1&b=040404)
出现 这一行表示合并完成✅

![Screen Shot 2024-01-12 at 21.21.36.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/579a52d43b13445ba8acdc6ae6c3b0be~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1521&h=563&s=173839&e=png&a=1&b=050505)

![Screen Shot 2024-01-12 at 21.22.43.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b13bd34288a545a78eff5dd82db25c2d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=895&h=392&s=112993&e=png&a=1&b=f2f0ef)
# 相关文档
更多 FFmpeg 使用方法请看[ 电子书FFmpeg 教程](https://wklchris.github.io/blog/FFmpeg/Intro.html#id1)
# 用 Codex 写了一个 Noctalia 插件 Process Reporter

> 作者把主力机换成 Arch+Niri+Noctalia 后，用 GPT 5.3-Codex 的 Agent 能力开发了一个 Noctalia 插件 Process Reporter，用于把当前聚焦窗口信息和媒体播放状态合并上报到博客云函数。插件放在个人插件库 PaloMiku/noctalia-plugins 中，可通过自定义插件源安装更新，上报 JSON 包含窗口 appId、应用名、曲目标题、艺术家、封面与播放状态，并带 token 鉴权和限流防止滥用。经云函数处理后数据呈现在博客组件栏，实现实时在线状态展示。作者认为即使不熟悉 QT/QML 也能借 AI 配合文档写出功能完整的插件。

## 前言

最近主力机从 Fedora+KDE 换到了 Arch+Niri+Noctalia，还是相当好用的，尤其是 Noctalia 的插件系统，功能强大又易用，社区里也有很多现成的插件可以直接使用。

然后最近想试试下新玩具 GPT 5.3-Codex 的 Agent 能力怎么样，于是灵机一动拿它开发一个之前的想法：博客云函数个人状态（视奸）上报插件试试，结果还是挺让人惊喜的。

## 插件功能

插件位于我个人的插件库 https://github.com/PaloMiku/noctalia-plugins 内，可以在 Noctalia 插件商店里添加自定义插件源来安装和更新。

插件功能就是实时获取当前用户正在聚焦的窗口信息，并监听媒体播放状态后合并上报到同一个云函数。

### 上报格式示例

```json
{
  "timestamp": 1775024322885,
  "event": "panel-preview",
  "window": {
    "windowId": "16",
    "appId": "code",
    "appName": "Code"
  },
  "media": {
    "playerIdentity": "EchoMusic",
    "trackTitle": "Mass Destruction -P3fes Reload-",
    "trackArtist": "Lotus Juice, 高橋あず美, アトラスサウンドチーム",
    "trackAlbum": "ペルソナ3 リロード: Episode Aegis オリジナル・サウンドトラック",
    "trackArtUrl": "http://imge.kugou.com/stdmusic/400/20251023/20251023044541872517.jpg",
    "isPlaying": true
  }
}
```

有 token 鉴权和限流防止滥用上传，然后云函数就能处理再呈现在博客上了。

你在本博客的组件栏看到的我的在线状态就是通过它实现的，当然也有对应的云函数实现，不过搞的挺粗糙就是了，后续有机会再优化一下。

## 后记

<ProjectGroup title="框架" items={[{"title":"QT","description":"Cross-platform Application Framework","icon":"devicon:qt","link":"https://www.qt.io/"},{"title":"Rust","description":"Systems Programming Language","icon":"devicon:rust","link":"https://www.rust-lang.org/"}]} />

现在的 AI 真的很强大了，稍微配合文档就能让我这个不怎么懂 QT（QML）的开发者也能写出功能完整的插件来，感觉这次旅程扩展了我的知识树，也和 Agent 做好了配合，后续有机会还想试试其他类型的插件开发。

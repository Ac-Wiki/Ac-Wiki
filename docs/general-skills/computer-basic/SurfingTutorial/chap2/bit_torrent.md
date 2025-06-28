# BitTorrent

点击互联网的链接，多数情况下会采用 HTTP 的方式进行下载，部分老旧的服务器会通过 FTP 协议进行提供，相较于另外两种下载方式，BitTorrent 具有学习资源丰富，用户间下载的特点

本文目标：1. 认识与了解 BitTorrent 2. 学会使用 BitTorrent 下载 3. 了解一些规则
...
n. 使用 BitTorrent 获取你需要的资源（~~让你像 gc 一样 bt~~

## 协议

BitTorrent 协议是架构于 TCP/IP 协议之上的一个 P2P 文件传输通信协议，处于 TCP/IP 结构的应用层。

从表现上来看，BitTorrent 协议是一个以资源互换的方式来获取完整文件的下载方式。

- 客户端连接到 Tracker 服务器获取 peer 列表
- 同时通过 DHT(分布式哈希表) 网络发现更多 peer
- 与获取到的其他 peer 建立连接
- 通过分块交换机制获取文件的不同部分
- 下载同时也会为其他 peer 上传已获得的数据块

<!-- 原文档的原文，没找到出处，暂时保留 -->

> BitTorrent 是一个文件分发协议，是一种多点共享协议。它对比 HTTP/FTP 协议和 MMS/RTSP 流媒体协议等下载方式的优势在于，一个文件的下载者们下载的同时也在不断互相上传数据，使文件源（可以是服务器源也可以是个人源，一般特指第一个做种者或种子的第一发布者）可以在增加很有限的负载之情况下支持大量下载者同时下载，这种传输方式也有“下载的人越多，下载的速度越快”这种说法。

## 软件

有一些时候，BitTorrent 也指以 MIT 协议开源的软件，这是一个 BitTorrent 协议的客户端，详见参考资料

## 关键词

      种子，tracker，做种，DHT 等

---

## 学会使用 BitTorrent 下载

认识种子，下载方式，资源获取等

### 认识种子

种子文件 (.torrent) 包含 Tracker 服务器地址和文件元数据 (文件名、大小、分块校验等)

种子链接主要形式

- 磁力链接 (Magnet URI)：`magnet:?xt=urn:btih:` (无需中心服务器，通过 DHT 网络即可下载)
- ED2K 链接：`ed2k://`，主要用于 eDonkey 网络

注意：

- 迅雷、快车等专用链接不是标准种子链接
- 可以使用工具在不同格式间转换

### 链接转换工具

这里仅列举几个作为范例，请以“迅雷链接转换工具”等关键词进行搜索，以获取更多站点

- [下载地址链接转换工具 - 在线工具栏](https://www.usetoolbar.com/convert/download_link_convert.html)
- [链接转换\_下载地址转换-ME2 在线工具](https://www.metools.info/other/o134.html)
- [迅雷下载链接转换器 - Allen Zou](https://www.allenzou.com/aztools/Commonly012.html)

### 下载方式

- 使用下载器：常见有 IDM，uTorrent，qBittorrent，比特彗星等，见文档末尾的参考链接

- 在线方式：
  各大网盘的离线下载 (违规资源不建议使用)
  微云，百度盘，夸克盘等

### 资源获取

1. 使用适合的关键词进行常规搜索。bing，百度，谷歌等
2. 种子搜索引擎。如[Torrent-finder](https://www.aiosearch.com)|[torrentkitty](https://www.torrentkitty.tv/search/)等，见文档末尾的参考链接
3. 其他论坛或社区。这里不做推荐
4. pt 下载站 (进阶选择，基本是会员制，有考核要求)
5. 待补充

## 了解一些规则

BitTorrent 下载网络是由人驱动的，人人为我，我为人人

希望屏幕前的你能在 BitTorrent 的路上越走越远

如果发现下载的 TB 没有任何速度`0 KM/s`那么该 TB 已经生效了

## 参考

- [BitTorrent\_百度百科](https://baike.baidu.com/item/BitTorrent)
- [BitTorrent 下载、磁力链接、电驴？—— 老司机需要了解的常用下载方式\_简书](https://www.jianshu.com/p/72b7a64e5be1)
- [种子下载器推荐\_知乎](https://zhuanlan.zhihu.com/p/263662087)
- [种子搜索引擎推荐\_微博](https://card.weibo.com/article/m/show/id/2309404378747447939659)
- [BitTorrent | 全球最受欢迎的 Torrent 客户端](https://www.bittorrent.com/zh-cn/)

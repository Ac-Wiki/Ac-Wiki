# 密码管理软件

本节内容主要介绍了什么是密码管理器、常见密码管理软件等相关信息

## 什么是密码管理器

**你是否在为各个网站都要设置密码而烦恼？**全部设置同一个，密码强度太低；全部设置不一样的又记不住；只在最后几位变一变又总是记混……

密码管理器可以帮助你自动生成复杂密码、自动填充（填写）密码，让你的各个网站密码都不一样！并且，在它的帮助下你也不必分别记忆每个网站的不同密码究竟是什么，只需要记住密码管理器自己的密码，剩下的都由它搞定！

## 常见的密码管理软件

_按推荐顺序排序_

| 软件名称                                                           | 是否收费     | 在线/离线 | 跨平台情况 | 备注                           |
| ------------------------------------------------------------------ | ------------ | --------- | ---------- | ------------------------------ |
| [**Bitwarden**](https://bitwarden.com/)                            | 常用功能免费 | 仅在线    | 全平台     | **懒得折腾直接选**             |
| [**Keepass**](https://keepass.info/)                               | 完全免费     | 离线/在线 | Win        | 衍生品众多，可看作全平台       |
| [**Keepass2Android**](https://github.com/PhilippC/keepass2android) | 完全免费     | 离线/在线 | Android    | Keepass 衍生                   |
| [KeePassXC](https://keepassxc.org/)                                | 完全免费     | 仅离线    | Mac+Win    | Keepass 衍生，就是同步麻烦     |
| [KeepassDX](https://www.keepassdx.com/)                            | 完全免费     | 仅离线    | Android    | Keepass 衍生，同步也麻烦       |
| 密码（iOS 自带）                                                   | 完全免费     | 离线/在线 | iOS        | 只能在苹果生态里使用           |
| [KeePassium](https://keepassium.com/)                              | 常用功能免费 | 离线/在线 | iOS        | Keepass 衍生，同步要付费       |
| [1Password](https://1password.com/zh-cn)                           | 14 天试用期  | 仅在线    | 全平台     | 收费负担不起                   |
| [KeeWeb](https://keeweb.info/)                                     | 完全免费     | 仅在线    | 全平台     | Keepass 衍生，稳定性差，需备份 |
| [Enpass](https://www.enpass.io/)                                   | 基本功能免费 | 仅在线    | 全平台     |                                |
| [LastPass](https://www.lastpass.com/)                              | 基本功能免费 | 仅在线    | 全平台     | **安全问题显著**               |
| 浏览器自带                                                         | 完全免费     | 离线      | 全平台     | 建议**立即放弃**，极不安全     |

> **Warning**
>
> 警告！切勿使用浏览器保存你的密码！！！浏览器是明文储存的，密码可以非常简单地被其他人盗取！

## 密码管理器的简单使用

### 创建你自己的数据库

1. 从上文中选择一个适合你的密码管理器
2. 点击“创建”（或者其他近义词）来创建你的密码管理器
3. 使用一个安全的密码（通常 16 位以上，含大小写、数字、特殊符号）来保护你的数据库
4. 如果可能，创建一个密钥文件并妥善保存它（就像保险箱是密码 + 钥匙一个道理）
5. 开始创建你的密码条目，向其中增加网站名称、登录用户名、密码，并填写网址等信息
6. 保存数据库
7. 开启自动填充权限
8. 根据需要开启指纹/面容验证

### 打开自动填充的相关设置

1. 在手机系统中搜索“自动填充”或者“密码”
2. 将密码管理软件更换为你选择的软件
3. 打开一个软件，点击用户名，稍等片刻，密码管理器就会自动弹出一个提示，让你选择对应的条目
4. 初次设置以后，密码管理器就能帮助你自动填充账号和密码了！

## 密码管理器进阶

### 自动填充（Keepass）

1. 在网站（[https://keepass.info/plugins.html#keepasshttp](https://keepass.info/plugins.html#keepasshttp)）或[此处](https://github.com/pfn/keepasshttp/releases)下载插件
2. 将其放到 KeePass 的插件目录中，并重启软件
3. 在浏览器中下载搜索“Keepass http”，并下载相关插件，[Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/keepasshttp-connector/)｜[Edge](https://microsoftedge.microsoft.com/addons/detail/jnhjknbfnclancjpknceboifoegiompf)｜[Chrome](https://chrome.google.com/webstore/detail/chromeipass/ompiailgknfdndiefoaoiligalphfdae?hl=en)
4. 浏览器会提出配对请求，允许次请求即可
5. 打开一个网页，现在已经可以自动填充了！

### 数据同步

> 设想一个场景
> 我在手机的数据库中保存了教务系统的密码，但是现在我需要在电脑上登录
> 我肯定不希望通过 QQ 之类的传送密码（~~这样我不是白加密保存密码了吗~~），也不希望自己手动将数据库拷贝到电脑上再使用，所以该怎么办呢？

这时候就需要用到数据同步软件与 WebDAV 了（例如[坚果云](https://www.jianguoyun.com/)、[InfiniCLOUD](https://infini-cloud.net/en/)等），它们可以在各个设备之间自动同步你指定的文件，详情可查看[此网页的简单介绍](https://help.jianguoyun.com/?p=3348)和[此处的相关教程](https://help.jianguoyun.com/?p=2064)等。

### OTP/TOTP/二次验证

#### KeePass

1. 在网站（[https://keepass.info/plugins.html#keeotp](https://keepass.info/plugins.html#keeotp)）或[此处](https://github.com/tiuub/KeeOtp2/releases)下载 KeeOtp2 插件
2. 将其放到 KeePass 的扩展目录下
3. 重启软件
4. 新建一个条目，将除了 OTP 以外的信息都填写完毕
5. 右键该条目，点击“KeeOTP2 -> Configure TOTP”，在弹出的对话框中填写相关信息，或者点击“Scan QR Code”以扫描二维码添加 TOTP 二次验证
6. 完成后，你可以使用 `Ctrl T` 快捷键复制 TOTP 信息

#### KeePass2Android

1. 使用微信扫描网页上的二维码，并复制扫描出来的信息
2. 创建一个条目，并填写除了 TOTP 以外的所有信息
3. 点击“添加额外的字符串”，`字段名` 填写 `otp`，`字段值` 填写刚刚复制的字符串
4. 保存即可

## 其他工具

### OTP/TOTP/二次验证工具

如果你不像用上面的密码管理软件加上一堆插件来管理你的 OTP，你也可以直接使用以下软件统一管理你的 OTPs

#### Aegis Authenticator

- [GitHub](https://github.com/beemdevelopment/Aegis)
- F-Droid（请先使用 [此链接](https://mirror.nju.edu.cn/fdroid/repo/?fingerprint=43238D512C1E5EB2D6569F4A3AFBF5523418B82E0A3ED1552770ABB9A9C9CCAB) 将 F-Droid 的南京大学中国镜像添加到你的软件，再搜索 `com.beemdevelopment.aegis`
- **特点**: 免费开源，支持本地加密备份（如将备份导出至 Google Drive、Dropbox 等实现手动同步）。
- **优点**: 强大的加密备份功能，无广告，开源透明性高，隐私友好。
- **缺点**: 不支持自动云同步，需要手动导入导出备份文件。

#### 其他 OTP

敬请参考网络攻略以及应用商店下载量和评价，不在此过多推荐

此外，**请勿使用** Microsoft Authenticator，因其功能缺失、更新维护不稳定。

### 密码泄露检测工具

- [Have I Been Pwned](https://haveibeenpwned.com/)
- [Mozilla Moniter](https://monitor.mozilla.org/)

### 在线复杂密码生成工具

- [1password](https://1password.com/zh-cn/password-generator)
- [avast](https://www.avast.com/zh-cn/random-password-generator#pc)

## 参考资料

1. 小众论坛
    - [#45039](https://meta.appinn.net/t/topic/45039)
    - [#28971](https://meta.appinn.net/t/topic/28971)
    - [#33276](https://meta.appinn.net/t/topic/33276)
    - [#36314](https://meta.appinn.net/t/topic/36314)
    - [#39146](https://meta.appinn.net/t/topic/39146)
    - [#52588](https://meta.appinn.net/t/topic/52588)
    - [#12159](https://meta.appinn.net/t/topic/12159)
2. [坚果云](https://www.jianguoyun.com/)

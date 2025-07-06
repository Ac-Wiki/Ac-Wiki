# 浏览器插件推荐

安装好的浏览器强大且精简，通过安装**浏览器插件**（也称为**扩展**或**Add-on**），可以为其添加各种功能，提升效率、安全性和浏览体验。

如果通过文件的方式安装插件，基于 Chromium 核心的一众浏览器基本需要启用开发者选项

## 插件获取渠道

正常情况下，推荐去官方站点下载这些组件或者 GitHub 安装开源组件，比如

- Chrome/Edge：[Chrome 网上应用店](https://chrome.google.com/webstore/category/extensions)
- Firefox：[Firefox 附加组件](https://addons.mozilla.org)
- 插件官网（如 uBlock Origin 的 [GitHub 页面](https://github.com/gorhill/uBlock)）

如果因为一些原因无法访问官方站点，也可以考虑第三方下载站，但这里的插件需要谨慎对待，例如：

- Crx4Chrome:<https://www.crx4chrome.com/>

直接在官网安装，一般只需要确认安装提示就好，上面有插件需要的权限

如果通过第三方插件文件分发站点下载（含 Github），请参考后续的安装教程。

### Chromium 系安装插件

1. 获取 `.crx` 文件
2. 地址栏输入 `chrome://extensions/`
3. **开启开发者模式**（右上角开关）
4. 将插件文件拖拽到页面空白区域
5. 确认安装提示
   ![安装浏览器插件](../img/chap2_add_plugins.png)

### Firefox 系安装插件

1. 获取 `.xpi` 文件
2. 地址栏输入 `about:addons`
3. 点击左上角 `扩展`
4. 点击右上角齿轮，选择“从文件安装附加组件”
5. 确认安装提示

## 优秀插件

### uBlock Origin

分发站点：

- Chrome:<https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm>
- Firefox:<https://addons.mozilla.org/zh-CN/firefox/addon/ublock-origin>
  高效广告拦截插件，比 AdBlock Plus 节省 40% 内存

### 暴力猴

- Chrome:<https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag>
- Firefox:<https://addons.mozilla.org/firefox/addon/violentmonkey>
- Edge:<https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao>

开源的用户脚本管理器，嗯……开源。

### Tampermonkey

分发站点：[官网](https://www.tampermonkey.net/)

用户脚本管理器，支持自动更新脚本

### Infinity 新标签页

分发站点：

- Chrome:<https://chrome.google.com/webstore/detail/infinity-new-tab-pro/nnnkddnnlpamobajfibfdgfnbcnkgngh>
- Firefox:<https://addons.mozilla.org/zh-CN/firefox/addon/infinity-new-tab-pro/>

自定义起始页工具，支持云同步配置

### Dark Reader

分发站点：

- Chrome:<https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh>
- Firefox:<https://addons.mozilla.org/zh-CN/firefox/addon/darkreader/>

全局深色模式插件，保护眼睛利器

### SingleFile

分发站点：

- Chrome:<https://chrome.google.com/webstore/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle>
- Firefox:<https://addons.mozilla.org/zh-CN/firefox/addon/single-file/>

可将网页保存为单文件，学术研究必备

### 集装箱

分发站点：[官网](https://aikefu.run/t/)

谷歌镜像/网盘加速工具，国内用户福音

## 用户脚本管理器

用户脚本管理器有多个项目（比如油猴（Tampermonkey）和开源的暴力猴），下方暂时使用 Tampermonkey 作为范例

### 什么是油猴？

用户脚本管理器允许你安装脚本修改网页行为，实现这些事情：

- 去除广告元素和复制限制
- 增强网站功能
- 自定义界面样式
- 自动化操作

简而言之，用户脚本管理器允许在网页中插入 JavaScript

### 脚本安装全流程

1. 点击油猴图标 > "获取新脚本"
   ![获取新脚本](../img/chap2_tampermonkey_add_new_plugins.png)
2. 选择脚本源：
    - [Greasy Fork](https://greasyfork.org/)（中文友好）
    - [OpenUserJS](https://openuserjs.org/)
    - [GitHub Gist](https://gist.github.com/)
3. 搜索所需功能（如"CSDN 去广告"）
   ![搜索脚本 GF](../img/chap2_tampermonkey_find_new_plugins_from_GF.png)
4. 点击"安装此脚本"
   ![安装脚本](../img/chap2_tampermonkey_install_new_plugins.png)
5. 查看安装详情并确认

### 精品脚本推荐

| 脚本名称             | 功能              | 了解更多信息                                  | 使用场景      |
| -------------------- | ----------------- | --------------------------------------------- | ------------- |
| **Bilibili Evolved** | B 站功能增强      | <https://github.com/the1812/Bilibili-Evolved> | 视频学习/娱乐 |
| **CSDN 净化器**      | 去广告/免登录复制 | <https://greasyfork.org/scripts/378351>       | 技术文档查阅  |
| **AC-baidu**         | 搜索引擎优化      | <https://greasyfork.org/scripts/14178>        | 高效信息检索  |
| **网页限制解除**     | 解除复制/右键限制 | <https://greasyfork.org/scripts/28497>        | 文献资料收集  |
| **知乎增强**         | 去广告/优化阅读   | <https://greasyfork.org/scripts/419081>       | 知识获取      |
| **网盘直链助手**     | 百度网盘直链提取  | <https://greasyfork.org/scripts/418182>       | 文件下载加速  |

### 脚本管理高级技巧

1. **脚本冲突解决**：
    - 在油猴仪表盘中调整脚本执行顺序
    - 使用`@exclude`排除特定网站

2. **自定义脚本**：

    ```javascript
    // ==UserScript==
    // @name         My Custom Script
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  自定义示例脚本
    // @author       You
    // @match        *://*.example.com/*
    // @grant        none
    // ==/UserScript==

    (function () {
        "use strict";
        // 在此添加你的代码
        document.body.style.backgroundColor = "#f0f0f0";
    })();
    ```

3. **脚本自动更新**：
    - 在脚本设置中启用"自动更新"
    - 定期检查脚本的 GitHub 页面

### 安全使用指南

1. **来源审查**：
    - 优先选择 Greasy Fork 验证脚本
    - 检查脚本最后更新时间
    - 查看用户评价和安装量

2. **权限警惕**：
    - 警惕请求`*://*/*`权限的脚本
    - 使用浏览器开发者工具监控脚本行为

3. **沙盒测试**：
    - 新脚本先在虚拟机中测试
    - 使用浏览器隐身模式测试

## 插件与脚本的进阶应用

### 效率组合方案

1. **学术研究套件**：
    - Zotero Connector（文献管理）
    - Kami（PDF 标注）

    - 油猴脚本：Google Scholar 增强

2. **媒体下载方案**：
    - Video DownloadHelper

    - 油猴脚本：B 站/YouTube 下载增强

3. **隐私保护组合**：
    - Privacy Badger
    - Decentraleyes
    - 油猴脚本：防追踪增强

### 常见问题解决

1. **插件冲突**：
    - 逐个禁用插件排查
    - 使用浏览器的"安全模式"测试

2. **脚本失效**：
    - 检查网站 DOM 结构变化
    - 查看脚本的 GitHub Issues
    - 临时使用开发者工具调试

3. **性能优化**：
    - 限制广告拦截插件的过滤规则数量
    - 禁用非活动标签页的插件运行

> **重要提示**：浏览器插件虽强大，但应保持精简。建议安装不超过 15 个扩展，定期审查插件权限和必要性。

通过合理配置浏览器插件和油猴脚本，你可以打造高效、安全、个性化的浏览环境，大幅提升网络使用体验。

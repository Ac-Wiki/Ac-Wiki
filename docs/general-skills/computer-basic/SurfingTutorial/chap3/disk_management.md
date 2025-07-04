# 管理硬盘空间

随着使用时间增长，硬盘空间会逐渐被占用。合理管理硬盘空间可以保持系统运行流畅，并且在项目维护时有更快的效率。

## 日常使用的注意事项

### 通用建议

- 安装第三方工具查看各文件夹占用硬盘的空间
- 备份重要文件后，及时清理不再使用的浏览器下载文件

### Windows 系统建议

部分建议适用于多分区的硬盘，有些 Windows 系统只有一个系统盘作为硬盘的分区

- 安装系统后，将个人目录中的数个文件夹（文档、视频、图片、下载等）指向非系统盘
- 将微信的用户数据目录放到非系统盘

## 查看硬盘使用情况

- Windows: 打开"此电脑"（部分版本被称为“我的电脑”），查看各磁盘的剩余空间
- macOS: 关于本机 → 存储
- Linux: 使用 `df -h` 命令

## 分析磁盘工具

### Filelight (多平台)

- 详细信息：<https://apps.kde.org/zh-cn/filelight/>
- 开源可视化工具，使用环形图展示磁盘占用（GPL-2.0+ 协议）

### WinDirStat (Windows)

- 详细信息：<https://windirstat.net/>
- 经典的三窗格布局工具，支持文件类型着色显示（GPL 协议）

### TreeSize Free (Windows)

- 详细信息：<https://www.jam-software.com/treesize_free>
- 可快速扫描 NTFS 分区，支持右键菜单集成（免费版）

### OmniDiskSweeper (macOS)

- 详细信息：<https://www.omnigroup.com/more>
- 轻量级工具，支持按大小排序删除文件（免费）

### GrandPerspective (macOS)

- 详细信息：<https://grandperspectiv.sourceforge.net/>
- 使用矩形树状图可视化空间占用（GPL 协议）

### ncdu (Linux)

- 详细信息：<https://dev.yorhel.nl/ncdu>
- 终端交互式工具，支持远程 SSH 分析（MIT 协议）

### baobab (Linux)

- 详细信息：<https://wiki.gnome.org/Apps/DiskUsageAnalyzer>
- GNOME 官方工具，提供环形图/树状图双视图（GPL 协议）

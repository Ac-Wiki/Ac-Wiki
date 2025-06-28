# 软件卸载

## Windows

### 标准卸载方法

1. 通过控制面板 → 程序和功能 → 卸载程序
2. 右键点击开始菜单 → 应用和功能 → 选择要卸载的应用

### 高级卸载方法

- 使用第三方卸载工具 (如 Revo Uninstaller) 彻底清除残留
- 手动删除注册表项和安装目录

注意：Windows 控制面板的卸载功能实际上是调用软件自带的卸载程序

## Linux

Linux 发行版根据包管理器有不同的卸载指令：

### Debian 系发行版

例如：Ubuntu

```bash
sudo apt remove <package_name>      # 移除软件包但保留配置文件
sudo apt purge <package_name>       # 完全移除软件包和配置文件
sudo apt autoremove                 # 移除不再需要的依赖包
```

### ArchLinux 系发行版

例如：Manjaro

```bash
sudo pacman -R <package_name>       # 移除软件包
sudo pacman -Rns <package_name>     # 完全移除软件包及其依赖
```

### 通用方法

- 使用`which <command>`查找软件安装位置
- 检查`/usr/local/bin`等目录是否有手动安装的软件

## 参考资料

### 第三方卸载工具推荐

#### Windows 平台

- [Revo Uninstaller](https://www.revouninstaller.com/) - 强大的卸载工具，可深度清理注册表和文件残留
- [IObit Uninstaller](https://www.iobit.com/en/advanceduninstaller.php) - 免费工具，支持批量卸载和强制卸载
- [Geek Uninstaller](https://geekuninstaller.com/) - 轻量级工具，支持便携版

#### Linux 平台

- [Stacer](https://github.com/oguzhaninan/Stacer) - Linux 系统优化和软件管理工具
- [Synaptic](https://www.nongnu.org/synaptic/) - 图形化包管理工具 (Debian 系)
- [BleachBit](https://www.bleachbit.org/) - 系统清理工具，可删除软件残留

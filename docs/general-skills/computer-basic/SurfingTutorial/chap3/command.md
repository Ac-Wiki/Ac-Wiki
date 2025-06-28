# 命令行与命令

## Windows

Windows 的命令行自 Windows 10 之后更换为了 PowerShell，但仍然可以通过修改注册表的方式将其修改为 cmd

可以通过多种方式启动，比如 Super+R 打开 运行 对话框，然后输入 cmd 后按下回车，就可以启动命令行窗口（换成 PowerShell 同理）

在 cmd 下，命令大小写不敏感，PowerShell 中大小写敏感

## Linux

Linux 根据发行版不同，默认的命令行解释器软件有差异，例如：

- Manjaro 默认命令行解释器是 zsh
- ArchLinux 需要用户自行安装，ArchLinux install ISO（ArchLinux 安装镜像）默认是 zsh
- Debian 与 Ubuntu 上的默认终端软件是 bash

但无论哪个发行版，Linux 的命令行解释器对大小写敏感

## 通用规范

在桌面上双击某个软件图标，可以视为在底层运行了一个指向这个图标的命令，比如 `<前略>/Desktop/start_me.exe`

命令的结构是：

- 被执行的程序（或者终端软件内置指令）
- 参数或者开关

以 `git clone https://github.com/Ac-Wiki/Ac-Wiki/` 为例

<!-- TODO 环境变量 -->

- 完成命令输入后按下回车，操作系统会寻找 git（寻找方式见环境变量章节）
- 找到了就将后面的所有内容传递给程序
- 程序在执行的过程中，将程序的输出写入控制台
- 程序结束后，将输入字符的能力还给用户

对于一些在命令行运行的工具，可以在后面添加 `--help` 或者 `-h` 来查看完整的帮助

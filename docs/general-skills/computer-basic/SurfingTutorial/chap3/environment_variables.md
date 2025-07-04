# 环境变量

环境变量是操作系统用来存储系统配置信息和用户设置的一种机制。它们可以被系统和应用程序访问，用于确定程序运行时的行为。

## Windows 环境变量

### 在命令提示符 (cmd) 中查看环境变量

```cmd
set
```

### 在 PowerShell 中查看环境变量

```pwsh
Get-ChildItem Env:
```

### 设置临时环境变量

```pwsh
set VARIABLE_NAME=value
```

### 设置永久环境变量

1. 打开"系统属性" → "高级" → "环境变量"
2. 在用户变量或系统变量中添加/修改

### 查看常用环境变量

- `PATH`: 系统查找可执行文件的路径
- `TEMP`: 临时文件目录
- `USERPROFILE`: 用户主目录

## Linux 环境变量

### 查看环境变量

```bash
printenv
```

或

```bash
env
```

### Linux 设置临时环境变量

```bash
export VARIABLE_NAME=value
```

### Linux 设置永久环境变量

将 `export VARIABLE_NAME=value` 添加到以下文件之一：

- `~/.bashrc` (bash 用户)
- `~/.zshrc` (zsh 用户)
- `/etc/environment` (系统全局)

注意：~/.bashrs 和 ~/.zshrc 是 Shell 配置文件，终端启动前会执行一次，但对于 `/etc/environment`，只支持简单的 `VAR=VAL` 格式

### 常用环境变量

- `PATH`: 可执行文件搜索路径
- `HOME`: 用户主目录
- `USER`: 当前用户名

## 环境变量的作用

1. 配置程序运行环境
2. 存储系统路径信息
3. 在不同程序间共享配置
4. 控制程序行为

## PATH 环境变量详解

PATH 是最重要的环境变量之一，它决定了系统在哪些目录中查找可执行文件。

当你在命令行输入一个命令时：

1. 系统会在 PATH 列出的所有目录中查找该命令
2. 如果找到则执行，对于 Windows cmd，会在当前目录继续查找
3. 如果没有找到，否则报"命令未找到"错误

PowerShell 有一个特殊脚本，在步骤 2 没有找到指令，但是在当前目录找到指令是仍然会报错，但报错后脚本会告知用户，当前目录应该使用 ./a.out 类似的方式执行

### 添加目录到 PATH

Windows:

```pwsh
setx PATH "%PATH%;C:\new\path"
```

Linux:

```bash
export PATH=$PATH:/new/path
```

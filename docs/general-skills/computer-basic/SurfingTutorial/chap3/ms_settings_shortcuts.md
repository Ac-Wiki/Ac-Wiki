# ms-settings 快捷方式指令大全

在 Windows 10 和 Windows 11 中，微软逐渐用新版的“设置”应用取代了传统的“控制面板”。如果你经常需要更改某个特定的系统设置（比如蓝牙、网络、更新等），每次都要点开开始菜单一层层去找，会非常繁琐。

Windows 为此提供了一套名为 **ms-settings** 的 URI（统一资源标识符）快捷指令。通过它，你可以一键直达“设置”中的任何深层子页面。

## 1. 如何使用 ms-settings 指令？

有三种极其高效的使用方式：

### 方式一：通过“运行”窗口 (最推荐)
1. 按下快捷键 \Win + R\ 打开运行框。
2. 输入对应的指令（例如 \ms-settings:bluetooth\）并回车，即可瞬间打开蓝牙设置页面。

### 方式二：在浏览器或文件资源管理器的地址栏
直接在浏览器地址栏（如 Edge / Chrome）或是任意文件夹路径栏中输入指令并回车。系统会提示并自动拉起设置应用。

### 方式三：创建桌面快捷方式
如果你想要在桌面上放一个“直达 Windows 更新”的图标：
1. 在桌面空白处右键 -> **新建 -> 快捷方式**。
2. 在“请键入对象的位置”框中输入指令：\explorer.exe ms-settings:windowsupdate\。
3. 点击下一步，命名为“Windows 更新”，完成。

## 2. 常用的神级快捷指令

这里整理出几十个最常用、最能提升效率的跳转指令：

### 💻 系统与设备
- **系统主页**：\ms-settings:\ （仅输入前缀即可回到设置首页）
- **关于电脑（系统信息）**：\ms-settings:about\ （查看 CPU、内存配置和 Windows 版本）
- **显示设置（修改分辨率、极简模式）**：\ms-settings:display\
- **蓝牙及其他设备**：\ms-settings:bluetooth\ （连接耳机鼠标必备）
- **鼠标设置**：\ms-settings:mousetouchpad\
- **打印机与扫描仪**：\ms-settings:printers\
- **电源与睡眠**：\ms-settings:powersleep\ （阻止电脑自动息屏）
- **存储管理**：\ms-settings:storagesense\ （清理系统垃圾必备）

### 🌐 网络与互联网
- **网络状态与诊断**：\ms-settings:network-status\
- **Wi-Fi 设置**：\ms-settings:network-wifi\
- **以太网（有线网）**：\ms-settings:network-ethernet\
- **移动热点（给手机开热点）**：\ms-settings:network-mobilehotspot\
- **VPN / 代理配置**：\ms-settings:network-vpn\ / \ms-settings:network-proxy\

### ⚙️ 个性化与外观
- **个性化主页（背景、颜色）**：\ms-settings:personalization\
- **修改锁屏壁纸**：\ms-settings:lockscreen\
- **调整任务栏**：\ms-settings:taskbar\

### 🧑‍💻 账户与安全安全
- **账户信息主页**：\ms-settings:emailandaccounts\
- **登录选项（配置指纹、PIN 码）**：\ms-settings:signinoptions\
- **Windows 安全中心（杀毒防御）**：\ms-settings:windowsdefender\

### 📦 应用与更新
- **应用和功能（卸载软件专属）**：\ms-settings:appsfeatures\
- **默认应用设置**：\ms-settings:defaultapps\ （把默认浏览器从 Edge 改成 Chrome）
- **开机启动项**：\ms-settings:startupapps\ （极其重要！关掉不需要的软件可大幅加快开机速度）
- **Windows 更新**：\ms-settings:windowsupdate\ （检查系统更新，或暂停烦人的自动更新）
- **时间和语言（修改时区）**：\ms-settings:dateandtime\

---

## 3. 为什么极客热爱这种方式？

除了能够快速手动跳转，\ms-settings\ 真正的威力在于**脚本自动化与效率工具的结合**。
例如，使用开源应用 **uTools** 或是 **PowerToys** 时，你可以直接将这些指令绑定成搜索关键词词词，实现极简的系统全键盘流控制。

如果你正在学习或者已经接触编程，这也可以帮助你在写批处理脚本（.bat）或者 Python GUI 时，方便地调用特定的系统设置界面供用户交互。

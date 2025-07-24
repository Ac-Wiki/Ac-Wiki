---
sidebar_position: 12.09
---

# Authenticator

## 前言

### 什么是 2FA? 为什么要使用它？

2FA（Two-Factor Authentication，双重身份验证）是一种额外的身份验证步骤，和**『密码 + 验证码』登录中的“验证码”类似**，可以在你登录账户时提高安全性。

相比短信验证码，Authenticator 应用程序（例如 Google Authenticator 等）生成的动态验证码更加安全可靠，因为它们不依赖于手机网络且更难被拦截。

### 为什么选择支持同步的 Authenticator 应用？

通常情况下，大部分 2FA 应用程序不会将账号同步到云端，以确保安全性。然而，这种方式也存在风险——如果你丢失了手机，可能会面临无法访问所有启用了 2FA 的账户的问题。为了解决这个问题，越来越多的 Authenticator 应用开始支持账号备份和同步功能，让用户在多个设备间安全地恢复 2FA 数据。

## 推荐的 Authenticator 应用程序

### [Keepass2Android](https://github.com/PhilippC/keepass2android)

- [GitHub](https://github.com/PhilippC/keepass2android)
- **优点**：
    - 密码管理
    - 自动填充
    - 密码生成
    - OTP 等
- **缺点**：
    - 初次使用可能不太会用，OTP 功能藏的有点深
- **其他**：OTP 功能只是它的冰山一角，密码填充、密码管理、密码生成等等他都能做到，基本上可以说是安卓系统功能最全面的密码管理软件了

### Aegis Authenticator

- [GitHub](https://github.com/beemdevelopment/Aegis)
- F-Droid（请先使用 [此链接](https://mirror.nju.edu.cn/fdroid/repo/?fingerprint=43238D512C1E5EB2D6569F4A3AFBF5523418B82E0A3ED1552770ABB9A9C9CCAB) 将 F-Droid 的南京大学中国镜像添加到你的软件，再搜索 `com.beemdevelopment.aegis`
- **特点**: 免费开源，支持本地加密备份（如将备份导出至 Google Drive、Dropbox 等实现手动同步）。
- **优点**: 强大的加密备份功能，无广告，开源透明性高，隐私友好。
- **缺点**: 不支持自动云同步，需要手动导入导出备份文件。

### [Authy](https://play.google.com/store/apps/details?id=com.authy.authy&hl=zh&gl=US)

- [Google Play](https://play.google.com/store/apps/details?id=com.authy.authy)
- **特点**: 支持云备份和多设备同步，易于跨设备恢复 2FA 数据，支持 PIN 码和指纹保护。
- **优点**: 界面简洁，使用方便，支持所有常见的 2FA 账户。
- **缺点**: 需要使用手机号进行注册，且云端备份有潜在的隐私风险。

### [Raivo OTP](https://github.com/raivo-otp/)

- [GitHub](https://github.com/raivo-otp/raivo-otp-android)
- [App Store](https://apps.apple.com/us/app/raivo-authenticator/id1459042137)
- **特点**: 开源，专注于简单实用。支持加密备份（可选择备份到 iCloud 或 Google Drive），适合希望轻量化的用户。
- **优点**: 界面简洁；开源透明；备份文件加密；使用便捷。
- **缺点**: 功能相对简单；不支持自动同步；只有 iOS 版本

### [Microsoft Authenticator](https://play.google.com/store/apps/details?id=com.azure.authenticator)

微软已逐步开始移除常用功能，鉴于其功能的缺失以及后续更新可能存在的对软件功能的破坏性而不再推荐

### [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)

- [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
- **特点**: 支持双重验证（TOTP），目前已推出了账户同步功能。
- **优点**:
    - **简单便捷**: 界面简洁，操作非常简单，适合初学者。
    - **最近更新的同步功能**: 现在支持账户同步，用户可以选择将 2FA 数据备份到 Google 账号中，以便在新设备上恢复。
- **缺点**:
    - **隐私担忧**: 账户同步功能需要依赖 Google 账户，如果对隐私有高要求的用户可能会有顾虑。
    - **功能简单**: 没有太多高级功能，如密码锁定等安全增强功能。

### [KeeOtp2](https://github.com/tiuub/KeeOtp2)

- **特点**: KeeOtp2 是一个 KeePass 插件，支持生成基于时间的一次性密码（TOTP），适用于需要在 KeePass 中直接管理 2FA 密钥的用户。
- **优点**:
    - 集成到 KeePass 中，方便管理密码和 2FA 密钥。
    - 开源透明，适合注重隐私的用户。
- **缺点**:
    - 依赖于 KeePass，适用范围有限。
    - 功能相对单一，仅支持 TOTP。

## 总结

- **Google Authenticator** 非常稳定和可靠，适合与它们自家产品和服务生态圈配合使用。
- 如果你注重隐私和开源，可能更偏好像 **Aegis** 这样的开源应用。如果你需要同步功能且不介意使用大公司的服务，**Google Authenticator** 是更为便捷的选择。
  使用这些工具时要谨慎备份密钥，以防在设备丢失或损坏时无法恢复 2FA 账户。

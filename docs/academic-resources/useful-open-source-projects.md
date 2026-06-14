> 本文使用了 AI 进行润色

### free-for-dev

free-for-dev 是一份由社区维护的**开发者免费服务清单**，收录提供永久免费层（Free Tier）的 SaaS、PaaS、IaaS 等托管服务，适合希望降低开发成本的个人开发者、初创团队、学生及开源维护者。

#### 收录标准

- 必须提供**永久免费层**（仅免费试用的不收）
- 免费层至少持续**一年**
- 仅限**托管服务**（不收自托管软件）
- 不接受将 TLS 限制为付费层级的服务

---

#### 主要分类

| 分类       | 代表服务                                                 |
| :--------- | :------------------------------------------------------- |
| 代码托管   | GitHub、GitLab、Bitbucket                                |
| CI/CD      | GitHub Actions、Azure Pipelines、CircleCI                |
| 云基础设施 | AWS Free Tier、Oracle Cloud（永久免费 Arm 实例）、Fly.io |
| 数据库     | MongoDB Atlas、Supabase、PlanetScale、Neon               |
| 监控       | Datadog、Sentry、UptimeRobot                             |
| 消息队列   | CloudAMQP、Pusher、NATS.io                               |
| 搜索       | Algolia、Bonsai.io                                       |
| 项目管理   | Jira（10 用户免费）、Trello、Notion                      |
| 安全       | Snyk、Let's Encrypt、Cloudflare                          |
| 静态托管   | Vercel、Netlify、Cloudflare Pages                        |
| 域名/DNS   | Cloudflare、DuckDNS                                      |
| 设计       | Figma、unDraw、Unsplash                                  |

#### 访问地址

- GitHub: <https://github.com/ripienaar/free-for-dev>

---

### Awesome Public Datasets

**Awesome Public Datasets** 是一个由社区维护的精选公开数据集列表，为数据科学家、研究者、开发者及学生提供高质量开放数据资源的集中导航。

该项目涵盖从农业到天文学、从金融到社交网络等数十个领域，收录约 **650+** 个经过筛选的数据集链接，所有数据均遵循开放许可或可免费获取。

#### 核心特点

| 特性       | 说明                                                          |
| :--------- | :------------------------------------------------------------ |
| 主题分类   | 按应用领域（生物学、GIS、金融、机器学习等）组织，便于快速定位 |
| 质量筛选   | 仅收录高质量、可访问的数据集，每个链接都经过验证              |
| 持续更新   | 社区驱动，定期审查和更新失效链接，添加新资源                  |
| 开放许可   | 优先收录 CC0、CC-BY 等开放许可的数据，降低使用门槛            |
| 结构化数据 | 使用 Markdown 与 YAML 管理数据集元数据，便于程序化访问        |

#### 涵盖领域

- **农业** — 作物产量、土壤数据、气候与农业统计
- **生物学** — 基因组数据、蛋白质数据库、癌症基因组图谱（TCGA）
- **气候与天气** — 全球气象观测、卫星遥感数据、海平面变化
- **计算机科学** — 算法基准、网络安全、软件工程数据集
- **经济学** — 世界宏观经济指标、股票市场、加密货币
- **教育** — 学术评估、在线教育行为数据
- **能源** — 电力消耗、可再生能源、碳排放
- **金融** — 银行交易、信用评级、保险理赔
- **GIS** — 地理空间数据、OpenStreetMap、行政区划边界
- **政府开放数据** — 全球各国政府数据门户（美国 data.gov、欧盟 Open Data 等）
- **医疗保健** — 疾病统计、药物数据库、医学影像
- **图像处理** — MNIST、ImageNet（需申请）、COCO、视觉基因组等经典数据集
- **机器学习** — UCI 仓库、Kaggle 竞赛数据、YouTube 8M
- **神经科学** — 脑成像、连接组学、功能磁共振数据
- **物理学** — CERN 开放数据、天文观测（SDSS、NASA 系外行星档案）
- **心理学与认知** — 行为实验数据、认知模型基准
- **社会科学** — 人口普查、调查数据、社交媒体
- **体育** — 赛事统计、运动员表现数据
- **交通运输** — 航班准点率、共享单车、交通事故
- **社交网络** — Twitter、Reddit、Wikipedia 图谱数据

#### 访问地址

- GitHub: <https://github.com/awesomedata/awesome-public-datasets>

---

### Build Your Own X

Build Your Own X 是一个由社区维护、CodeCrafters 赞助支持的开源知识库，核心理念源自理查德·费曼的名言："What I cannot create, I do not understand"（我不能创造的，我就不理解）。

该项目通过收集和整理全球开发者的分步教程，帮助程序员**从零开始亲手实现**各类技术，从而深入理解底层原理。覆盖数据库、操作系统、编程语言、区块链等近 30 个技术方向，部分示例如下：

| 技术方向            | 示例教程                                                 |
| :------------------ | :------------------------------------------------------- |
| 3D 渲染器           | 用 C++ 实现光线追踪、用 JavaScript 从零构建软件渲染器    |
| AI 模型             | 用 Python 构建大语言模型（LLM）、扩散模型、RAG 文档搜索  |
| 数据库              | 用 C 写简单数据库、用 Go 实现 B+Tree + SQL 引擎          |
| Docker              | 用 Go 在 100 行代码内实现容器、用 C 写 500 行 Linux 容器 |
| 操作系统            | 从零写内核、用 Rust 构建操作系统                         |
| 编程语言            | 用任意语言实现 Lisp 解释器、用 C 写编译器                |
| Git                 | 用 Python 实现 Git 客户端、用 JavaScript 重建 Git        |
| Web 浏览器          | 用 Rust 构建浏览器引擎、用 Python 实现浏览器工程         |
| 神经网络            | 用 Python 写神经网络、从零实现 PyTorch                   |
| 区块链              | 用 Go 写区块链、用 JavaScript 实现加密货币               |
| 游戏引擎 / 物理引擎 | 从零构建 2D/3D 游戏、碰撞检测系统                        |
| Shell / 文本编辑器  | 用 C 写 Unix Shell、用 Rust 构建文本编辑器               |

#### 项目特点

- **多语言支持**：教程涵盖 C、C++、Python、JavaScript、Go、Rust、Java 等数十种语言
- **由浅入深**：从"Hello World"级别的最小实现到完整的生产级系统
- **社区驱动**：任何人都可以通过提交 PR 贡献教程
- **完全开源**：采用 CC0 协议，无版权限制，可自由使用和分发

#### 访问地址

- GitHub: <https://github.com/codecrafters-io/build-your-own-x>
- 官方网站：<https://codecrafters.io>（提供交互式学习模式）

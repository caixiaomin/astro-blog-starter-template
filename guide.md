# Astro 产品主页搭建指南

## 最终文件结构

```
src/
├── consts.ts                    ← 🔧 改网站名、导航菜单
├── layouts/
│   └── BaseLayout.astro         ← 🏗️ 所有页面共享的 HTML 框架
├── components/
│   ├── BaseHead.astro           ← SEO meta、字体（一般不需要改）
│   ├── Header.astro             ← 顶部导航栏
│   └── Footer.astro             ← 底部版权信息
├── pages/
│   ├── index.astro              ← 📄 第 1 页：产品落地页
│   ├── guide.astro              ← 📄 第 2 页：使用手册
│   └── about/
│       ├── index.astro          ← 📄 第 3 页：关于我们
│       └── privacy.astro        ← 📄 第 3 页子页：隐私政策
└── styles/
    └── global.css               ← 全局样式
```

---

## 你需要做的事情：按表格填内容

### 1. `src/consts.ts` — 改基本信息

- `SITE_TITLE`: 改成你的产品名称
- `SITE_DESCRIPTION`: 改成一句产品描述（SEO 用）
- `NAV_ITEMS`: 导航菜单项（已配好，不需要改）

### 2. `src/pages/index.astro` — 产品落地页

页面中有 **5 个区域**，搜索 `👇` 找到所有需要改的位置：

| 区域 | 需要你提供的内容 |
|---|---|
| Hero 区域 | 产品名称、一句话核心卖点 |
| 核心亮点 | 4 个功能亮点的标题 + 描述 + emoji 图标 |
| 应用场景 | 3 个场景的名称、描述、产品截图（放在 `public/` 下） |
| 产品演示 | YouTube/B站 视频嵌入链接 |
| CTA | 行动号召文字（已配好，可微调） |

### 3. `src/pages/guide.astro` — 使用手册

页面有 **4 个功能区块**，每个区块包含：

| 内容 | 说明 |
|---|---|
| 功能名称 | 标题 |
| 概述 | 一句话说明功能是干什么的 |
| 操作步骤 | 分步操作说明 |
| 界面示意 | 替换截图路径 |
| 小贴士 | 注意事项 |

需要增加功能 → 复制一个 `<section id="feature-X">` 整段，同时更新顶部目录。

### 4. `src/pages/about/index.astro` — 关于页

| 内容 | 说明 |
|---|---|
| 产品简介 | 1-2 段文字介绍 |
| 团队信息 | 团队/公司介绍 |
| 联系方式 | 邮箱、GitHub、Twitter 等 |

### 5. `src/pages/about/privacy.astro` — 隐私政策

已写好通用模板，包含 10 个章节（信息收集、使用、存储、共享、用户权利……）。你需要**根据实际产品修改第 2 节（收集哪些数据）和联系方式**。

---

## 截图和视频怎么放？

- **截图**：直接放到 `public/` 目录下，在页面中引用 `/你的文件名.png`
- **视频**：用 YouTube/B站的「嵌入」链接，替换 `<iframe src="...">` 的 `src`

---

## 本地预览和部署

```bash
npm run dev          # 本地预览 http://localhost:4321
npm run build        # 构建
npm run deploy       # 部署到 Cloudflare
```

部署前记得在 `astro.config.mjs` 中把 `site` 改成你的实际域名。GitHub 部署到 Cloudflare 只需在 Cloudflare Dashboard 中连接你的 GitHub 仓库即可自动部署。

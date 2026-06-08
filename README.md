<p align="center">
  <a href="#简体中文">简体中文</a> &nbsp;|&nbsp;
  <a href="#繁體中文">繁體中文</a> &nbsp;|&nbsp;
  <a href="#english">English</a>
</p>

---

<a id="简体中文"></a>

# GlassFlow UI

<p align="center">
  <img src="https://img.shields.io/badge/version-v1.0.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
  <img src="https://img.shields.io/badge/zero_dependencies-✓-success" alt="Zero Dependencies" />
  <img src="https://img.shields.io/badge/framework_agnostic-React%20%7C%20Vue%20%7C%20Svelte%20%7C%20Vanilla-orange" alt="Framework Agnostic" />
</p>

<p align="center">
  <strong>框架无关的 Apple Liquid Glass 风格 UI 组件库</strong><br/>
  纯 CSS + Web Components + Vanilla JavaScript，零框架依赖
</p>

---

## 🎉 项目介绍

**GlassFlow UI** 是一款精心打造的 **Apple Liquid Glass（液态玻璃）** 风格 UI 组件库，面向追求极致视觉体验的前端开发者。我们以 Apple 在 WWDC 2025 上展示的全新 Liquid Glass 设计语言为灵感来源，将那种通透、灵动、层次分明的玻璃质感带到了 Web 端。

### 解决的用户痛点

- **现有玻璃态组件库质量参差不齐**：多数 glassmorphism 库只是简单堆叠 `backdrop-filter`，缺乏对光影、折射、弹性动画等细节的打磨，视觉效果生硬。
- **框架绑定过深**：市面上的 UI 库几乎都绑定了特定框架（React / Vue），跨框架项目需要重复造轮子。
- **主题系统薄弱**：大多数库只提供亮色/暗色两套方案，缺乏灵活的主题定制能力。
- **动画体验粗糙**：缺乏物理感的弹性动画、涟漪反馈和滚动揭示效果，交互体验平淡。

### 自研差异化亮点

- 🧊 **真实液态玻璃质感**：不是简单的毛玻璃，而是融合了折射模拟、焦散光影、边缘高光等多层光学效果的液态玻璃。
- 🎨 **6 套精心调色的预设主题**：Ocean、Aurora、Sunset、Rose、Midnight、Forest，每套主题都经过精心配色，开箱即用。
- 🫧 **7 种液态动画效果**：shimmer（微光）、ripple（涟漪）、breathe（呼吸）、refract（折射）、elastic-press（弹性按压）、float（悬浮）、glow（辉光），让界面真正"活"起来。
- 🧩 **Web Components 封装**：基于 Custom Elements + Shadow DOM，天然样式隔离，可在任何框架中使用。
- 📦 **零依赖，极致轻量**：纯 CSS + Vanilla JS，无需任何构建工具，直接引入即用。

---

## ✨ 核心特性

- 🎨 **10 个精美 UI 组件** — Card、Button、Nav、Modal、Input、Badge、Tooltip、Divider、Avatar、Alert，覆盖常见 UI 场景
- 🫧 **7 种液态动画效果** — shimmer、ripple、breathe、refract、elastic-press、float、glow，**物理级弹性动画引擎**
- 🌈 **6 套预设主题** — Ocean、Aurora、Sunset、Rose、Midnight、Forest，**一键切换，全局生效**
- 🧩 **Web Components 封装** — Custom Elements + Shadow DOM，**天然样式隔离，零冲突**
- 🌓 **暗色/亮色模式自动切换** — 支持 `prefers-color-scheme` 媒体查询，**自动跟随系统主题**
- 📐 **完整工具类系统** — 间距、排版、布局、颜色等实用工具类，**快速搭建页面**
- 🔌 **零框架依赖** — 纯 CSS + Vanilla JS，**完美支持 React / Vue / Svelte / 原生 HTML**
- 📱 **响应式设计** — 自适应各种屏幕尺寸，**移动端友好**
- ♿ **无障碍友好** — 支持 `prefers-reduced-motion`，**尊重用户的动画偏好设置**
- 🖱️ **鼠标追踪光影** — 玻璃表面跟随鼠标的实时高光效果，**增强空间感**
- 🎯 **滚动揭示动画** — 基于 IntersectionObserver 的滚动驱动动画，**支持多种方向和交错延迟**

---

## 🚀 快速开始

### 环境要求

- **Node.js** >= 16.0.0（仅用于 npm 安装和本地开发服务器）
- **现代浏览器**：Chrome 80+、Firefox 80+、Safari 14+、Edge 80+

### 安装方式

#### 方式一：npm 安装（推荐）

```bash
npm install glassflow-ui
```

#### 方式二：CDN 引入

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-core.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-components.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-animations.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-themes.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-utilities.css" />

<!-- JavaScript（核心库 + Web Components） -->
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow.js"></script>
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow-components.js"></script>
```

#### 方式三：Git Clone

```bash
git clone https://github.com/gitstq/glassflow-ui.git
cd glassflow-ui
npm install
```

### 本地启动

```bash
# 启动本地开发服务器（默认端口 3000）
npm run dev

# 或者直接在浏览器中打开 demo/index.html
open demo/index.html
```

> 💡 **提示**：直接打开 `demo/index.html` 即可查看完整的在线演示，无需任何构建步骤。

---

## 📖 详细使用指南

### CSS 引入方式

在 HTML 文件的 `<head>` 中按顺序引入 CSS 文件：

```html
<!-- 1. 核心样式（设计令牌 + 玻璃基础效果） -->
<link rel="stylesheet" href="src/css/glassflow-core.css" />

<!-- 2. 组件样式 -->
<link rel="stylesheet" href="src/css/glassflow-components.css" />

<!-- 3. 动画效果 -->
<link rel="stylesheet" href="src/css/glassflow-animations.css" />

<!-- 4. 主题系统 -->
<link rel="stylesheet" href="src/css/glassflow-themes.css" />

<!-- 5. 工具类 -->
<link rel="stylesheet" href="src/css/glassflow-utilities.css" />
```

### 组件使用示例

#### Button 按钮

```html
<!-- 默认玻璃按钮 -->
<button class="gf-btn gf-btn-default">默认按钮</button>

<!-- 填充按钮 -->
<button class="gf-btn gf-btn-filled">填充按钮</button>

<!-- 轮廓按钮 -->
<button class="gf-btn gf-btn-outline">轮廓按钮</button>

<!-- 幽灵按钮 -->
<button class="gf-btn gf-btn-ghost">幽灵按钮</button>

<!-- 不同尺寸 -->
<button class="gf-btn gf-btn-filled gf-btn-sm">小按钮</button>
<button class="gf-btn gf-btn-filled gf-btn-lg">大按钮</button>

<!-- 带涟漪效果 -->
<button class="gf-btn gf-btn-filled" data-gf-ripple>点击有涟漪</button>
```

#### Card 卡片

```html
<!-- 基础卡片 -->
<div class="gf-card">
  <h3>玻璃卡片</h3>
  <p>这是一个带有液态玻璃效果的卡片组件。</p>
</div>

<!-- 可悬浮卡片 -->
<div class="gf-card gf-card-hoverable">
  <h3>悬浮卡片</h3>
  <p>鼠标悬停时会有浮起效果。</p>
</div>

<!-- 带主题的卡片 -->
<div class="gf-card gf-theme-ocean">
  <h3>海洋主题卡片</h3>
  <p>应用了 Ocean 主题配色。</p>
</div>
```

#### Modal 弹窗

```html
<!-- 触发按钮 -->
<button class="gf-btn gf-btn-filled" onclick="document.getElementById('my-modal').open()">
  打开弹窗
</button>

<!-- 弹窗 -->
<glass-modal id="my-modal" closable width="480px">
  <h2>液态玻璃弹窗</h2>
  <p>这是一个使用 Web Components 封装的玻璃弹窗组件。</p>
  <p>点击遮罩层、关闭按钮或按 Esc 键即可关闭。</p>
</glass-modal>
```

#### Input 输入框

```html
<!-- 使用 Web Component -->
<glass-input label="用户名" placeholder="请输入用户名"></glass-input>

<glass-input label="密码" type="password" placeholder="请输入密码"></glass-input>
```

#### Badge 徽章

```html
<glass-badge>默认</glass-badge>
<glass-badge variant="filled">填充</glass-badge>
<glass-badge variant="dot"></glass-badge>
<glass-badge size="small">小号</glass-badge>
<glass-badge size="large">大号</glass-badge>
```

#### Tooltip 提示

```html
<glass-tooltip content="这是一条提示信息" position="top">
  <button class="gf-btn gf-btn-outline">悬停查看</button>
</glass-tooltip>
```

### Web Components 使用方式

GlassFlow UI 提供了基于 Custom Elements 的 Web Components 封装，所有组件都使用 Shadow DOM 实现样式隔离：

```html
<!-- 玻璃卡片 -->
<glass-card theme="ocean" blur="20" frost="0.6" hoverable>
  <h3>Web Component 卡片</h3>
  <p>使用 Shadow DOM 实现样式隔离。</p>
</glass-card>

<!-- 玻璃按钮 -->
<glass-button theme="aurora" variant="filled" size="large" full>
  确认提交
</glass-button>

<!-- 玻璃输入框 -->
<glass-input label="邮箱" type="email" placeholder="your@email.com"></glass-input>

<!-- 玻璃弹窗 -->
<glass-modal theme="rose" closable width="520px">
  <h2>提示</h2>
  <p>操作已完成！</p>
</glass-modal>
```

### React 集成示例

```jsx
import { useEffect, useRef } from 'react'
import 'glassflow-ui/src/css/glassflow-core.css'
import 'glassflow-ui/src/css/glassflow-components.css'
import 'glassflow-ui/src/css/glassflow-animations.css'
import 'glassflow-ui/src/css/glassflow-themes.css'
import 'glassflow-ui/src/css/glassflow-utilities.css'
import 'glassflow-ui/src/js/glassflow-components.js'

function App() {
  const gfRef = useRef(null)

  useEffect(() => {
    // 初始化 GlassFlow 核心
    if (window.GlassFlow) {
      window.GlassFlow.init({ theme: 'auto' })
    }
  }, [])

  return (
    <div ref={gfRef}>
      <glass-card theme="ocean" hoverable>
        <h2>React + GlassFlow</h2>
        <p>在 React 项目中无缝使用液态玻璃组件。</p>
      </glass-card>

      <glass-button variant="filled" size="large">
        开始使用
      </glass-button>
    </div>
  )
}

export default App
```

### Vue 集成示例

```vue
<template>
  <div>
    <glass-card theme="aurora" hoverable>
      <h2>Vue + GlassFlow</h2>
      <p>在 Vue 项目中无缝使用液态玻璃组件。</p>
    </glass-card>

    <glass-button variant="filled" @click="handleClick">
      点击我
    </glass-button>
  </div>
</template>

<script setup>
import 'glassflow-ui/src/css/glassflow-core.css'
import 'glassflow-ui/src/css/glassflow-components.css'
import 'glassflow-ui/src/css/glassflow-animations.css'
import 'glassflow-ui/src/css/glassflow-themes.css'
import 'glassflow-ui/src/css/glassflow-utilities.css'
import 'glassflow-ui/src/js/glassflow-components.js'

// 初始化 GlassFlow
if (window.GlassFlow) {
  window.GlassFlow.init({ theme: 'auto' })
}

function handleClick() {
  console.log('按钮被点击了！')
}
</script>
```

### 主题切换方法

```javascript
// 方法一：通过 JavaScript API 切换
GlassFlow.setTheme('ocean')    // 切换到 Ocean 主题
GlassFlow.setTheme('aurora')   // 切换到 Aurora 主题
GlassFlow.setTheme('dark')     // 切换到暗色模式
GlassFlow.setTheme('light')    // 切换到亮色模式
GlassFlow.setTheme('auto')     // 跟随系统自动切换

// 方法二：通过 CSS 类名切换（适用于 CSS 方式）
<div class="gf-theme-ocean">  ...  </div>
<div class="gf-theme-aurora">  ...  </div>
<div class="gf-theme-sunset">  ...  </div>
<div class="gf-theme-rose">    ...  </div>
<div class="gf-theme-midnight"> ... </div>
<div class="gf-theme-forest">  ...  </div>

// 方法三：通过 Web Component 属性
<glass-card theme="ocean">  ...  </glass-card>
<glass-button theme="aurora">  ...  </glass-button>
```

### 暗色/亮色模式

GlassFlow UI 内置了对 `prefers-color-scheme` 的完整支持：

```javascript
// 自动模式（默认）：跟随系统主题
GlassFlow.init({ theme: 'auto' })

// 强制亮色模式
GlassFlow.init({ theme: 'light' })

// 强制暗色模式
GlassFlow.init({ theme: 'dark' })

// 运行时切换
GlassFlow.setTheme('dark')   // 切换到暗色
GlassFlow.setTheme('light')  // 切换到亮色
GlassFlow.setTheme('auto')   // 恢复自动跟随

// 监听主题变化事件
GlassFlow.on('themechange', (detail) => {
  console.log('当前主题:', detail.theme)
  console.log('是否自动模式:', detail.auto)
})
```

### 组件总览

| 组件 | CSS 类名 / Web Component | 说明 |
|------|--------------------------|------|
| Card | `.gf-card` / `<glass-card>` | 玻璃卡片容器 |
| Button | `.gf-btn` / `<glass-button>` | 多变体按钮（default / filled / outline / ghost） |
| Nav | `.gf-nav` | 玻璃导航栏 |
| Modal | `<glass-modal>` | 模态弹窗（支持遮罩关闭、Esc 关闭） |
| Input | `.gf-input` / `<glass-input>` | 输入框（支持 label、多种 type） |
| Badge | `.gf-badge` / `<glass-badge>` | 徽章标签（default / filled / dot） |
| Tooltip | `<glass-tooltip>` | 文字提示（top / bottom / left / right） |
| Divider | `.gf-divider` | 分隔线 |
| Avatar | `.gf-avatar` | 头像 |
| Alert | `.gf-alert` | 提示信息 |

### 动画效果总览

| 动画 | CSS 类名 | 说明 |
|------|----------|------|
| Shimmer | `.gf-anim-shimmer` | 微光扫过效果 |
| Ripple | `data-gf-ripple` | 点击涟漪效果 |
| Breathe | `.gf-anim-breathe` | 呼吸脉动效果 |
| Refract | `.gf-anim-refract` | 折射扭曲效果 |
| Elastic Press | `.gf-anim-elastic-press` | 弹性按压效果 |
| Float | `.gf-anim-float` | 悬浮漂浮效果 |
| Glow | `.gf-anim-glow` | 辉光闪烁效果 |

### 主题总览

| 主题 | CSS 类名 | 风格描述 |
|------|----------|----------|
| Ocean | `.gf-theme-ocean` | 深海蓝，沉稳专业 |
| Aurora | `.gf-theme-aurora` | 极光紫，梦幻神秘 |
| Sunset | `.gf-theme-sunset` | 日落橙，温暖活力 |
| Rose | `.gf-theme-rose` | 玫瑰粉，优雅浪漫 |
| Midnight | `.gf-theme-midnight` | 午夜黑，深邃沉稳 |
| Forest | `.gf-theme-forest` | 森林绿，自然清新 |

---

## 💡 设计思路与迭代规划

### 设计理念

GlassFlow UI 的设计理念源于 Apple 在 WWDC 2025 上展示的 **Liquid Glass** 设计语言。我们认为，真正的玻璃质感不仅仅是模糊背景那么简单——它需要模拟真实世界中光线穿过玻璃时的物理行为：折射、反射、焦散、色散。因此，我们在 CSS 层面精心模拟了这些光学效果，并通过 JavaScript 增强了鼠标追踪光影、弹性动画等交互体验。

### 技术选型原因

| 技术选择 | 原因 |
|----------|------|
| **纯 CSS + Web Components** | 实现框架无关，任何前端项目都能直接使用，无需适配层 |
| **Custom Elements + Shadow DOM** | 天然样式隔离，不会与宿主页面的 CSS 产生冲突 |
| **Vanilla JavaScript** | 零依赖，极致轻量，避免引入框架运行时开销 |
| **CSS Custom Properties** | 实现灵活的主题系统，支持运行时动态切换 |
| **IntersectionObserver** | 高性能的滚动驱动动画，无需手动计算滚动位置 |
| **UMD 模块格式** | 兼容 CommonJS、AMD 和全局变量，覆盖所有使用场景 |

### 后续迭代计划

- [ ] **更多组件**：Table、Tabs、Dropdown、Toast、Drawer、Accordion、Progress 等
- [ ] **主题编辑器**：可视化主题定制工具，实时预览效果
- [ ] **Figma 插件**：一键导出设计稿为 GlassFlow 组件代码
- [ ] **SSR 支持**：完善服务端渲染场景下的兼容性
- [ ] **TypeScript 类型增强**：更完善的类型定义和智能提示
- [ ] **动画编排系统**：支持多步骤、多元素协同动画编排
- [ ] **无障碍增强**：完整的 ARIA 属性支持和键盘导航
- [ ] **性能优化**：CSS 容器查询、`@layer` 分层、更精细的按需加载

---

## 📦 打包与部署指南

### 文件结构说明

```
glassflow-ui/
├── src/
│   ├── css/
│   │   ├── glassflow-core.css        # 核心样式（设计令牌 + 玻璃基础效果）
│   │   ├── glassflow-components.css  # 组件样式
│   │   ├── glassflow-animations.css  # 动画效果
│   │   ├── glassflow-themes.css      # 主题系统
│   │   └── glassflow-utilities.css   # 工具类
│   └── js/
│       ├── glassflow.js              # 核心库（主题管理、涟漪、滚动揭示、鼠标光影）
│       └── glassflow-components.js   # Web Components 封装
├── demo/
│   └── index.html                    # 在线演示页面
└── package.json
```

### CDN 引入方式

```html
<!-- 完整引入（所有 CSS + JS） -->
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-core.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-components.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-animations.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-themes.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-utilities.css" />
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow.js"></script>
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow-components.js"></script>
```

### 按需引入与 Tree-shaking

GlassFlow UI 的 CSS 文件是模块化设计的，你可以根据需要只引入特定文件：

```html
<!-- 只需要核心样式 + 组件样式（不含动画和主题） -->
<link rel="stylesheet" href="src/css/glassflow-core.css" />
<link rel="stylesheet" href="src/css/glassflow-components.css" />

<!-- 按需添加动画 -->
<link rel="stylesheet" href="src/css/glassflow-animations.css" />

<!-- 按需添加主题 -->
<link rel="stylesheet" href="src/css/glassflow-themes.css" />
```

> 💡 **提示**：`package.json` 中已设置 `"sideEffects": false`，配合支持 Tree-shaking 的打包工具（Webpack、Vite、Rollup）可以自动移除未使用的 JS 模块。

---

## 🤝 贡献指南

我们欢迎任何形式的贡献！无论是提交 Bug 报告、改进文档还是提交代码 PR。

### PR 提交规范

1. **Fork** 本仓库并创建你的分支：`git checkout -b feature/your-feature`
2. **提交** 你的更改：`git commit -m 'feat: 添加新组件 XXX'`
3. **推送** 到远程分支：`git push origin feature/your-feature`
4. **创建 Pull Request**，详细描述你的改动内容

**Commit Message 格式**（遵循 Conventional Commits）：

| 类型 | 说明 |
|------|------|
| `feat:` | 新功能 |
| `fix:` | Bug 修复 |
| `docs:` | 文档更新 |
| `style:` | 代码格式调整（不影响功能） |
| `refactor:` | 代码重构 |
| `perf:` | 性能优化 |
| `test:` | 测试相关 |
| `chore:` | 构建/工具链相关 |

### Issue 反馈规则

- 提交 Bug 时，请附上**复现步骤、期望行为、实际行为、浏览器版本和截图**。
- 功能建议请详细描述**使用场景和期望的 API 设计**。
- 提交前请先搜索是否已有相同 Issue。

---

## 📄 开源协议

本项目基于 **MIT License** 开源。

```
MIT License

Copyright (c) 2025 GlassFlow Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">
  Made with 💎 by <a href="https://github.com/gitstq/glassflow-ui">GlassFlow Team</a>
</p>

---
---

<a id="繁體中文"></a>

# GlassFlow UI

<p align="center">
  <img src="https://img.shields.io/badge/version-v1.0.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
  <img src="https://img.shields.io/badge/zero_dependencies-✓-success" alt="Zero Dependencies" />
  <img src="https://img.shields.io/badge/framework_agnostic-React%20%7C%20Vue%20%7C%20Svelte%20%7C%20Vanilla-orange" alt="Framework Agnostic" />
</p>

<p align="center">
  <strong>框架無關的 Apple Liquid Glass 風格 UI 元件庫</strong><br/>
  純 CSS + Web Components + Vanilla JavaScript，零框架依賴
</p>

---

## 🎉 專案介紹

**GlassFlow UI** 是一款精心打造的 **Apple Liquid Glass（液態玻璃）** 風格 UI 元件庫，面向追求極致視覺體驗的前端開發者。我們以 Apple 在 WWDC 2025 上展示的全新 Liquid Glass 設計語言為靈感來源，將那種通透、靈動、層次分明的玻璃質感帶到了 Web 端。

### 解決的用戶痛點

- **現有玻璃態元件庫品質參差不齊**：多數 glassmorphism 庫只是簡單堆疊 `backdrop-filter`，缺乏對光影、折射、彈性動畫等細節的打磨，視覺效果生硬。
- **框架綁定過深**：市面上的 UI 庫幾乎都綁定了特定框架（React / Vue），跨框架專案需要重複造輪子。
- **主題系統薄弱**：大多數庫只提供亮色/暗色兩套方案，缺乏彈性的主題客製化能力。
- **動畫體驗粗糙**：缺乏物理感的彈性動畫、漣漪回饋和捲動揭示效果，互動體驗平淡。

### 自研差異化亮點

- 🧊 **真實液態玻璃質感**：不是簡單的毛玻璃，而是融合了折射模擬、焦散光影、邊緣高光等多層光學效果的液態玻璃。
- 🎨 **6 套精心調色的預設主題**：Ocean、Aurora、Sunset、Rose、Midnight、Forest，每套主題都經過精心配色，開箱即用。
- 🫧 **7 種液態動畫效果**：shimmer（微光）、ripple（漣漪）、breathe（呼吸）、refract（折射）、elastic-press（彈性按壓）、float（懸浮）、glow（輝光），讓介面真正「活」起來。
- 🧩 **Web Components 封裝**：基於 Custom Elements + Shadow DOM，天然樣式隔離，可在任何框架中使用。
- 📦 **零依賴，極致輕量**：純 CSS + Vanilla JS，無需任何建置工具，直接引入即用。

---

## ✨ 核心特性

- 🎨 **10 個精美 UI 元件** — Card、Button、Nav、Modal、Input、Badge、Tooltip、Divider、Avatar、Alert，涵蓋常見 UI 場景
- 🫧 **7 種液態動畫效果** — shimmer、ripple、breathe、refract、elastic-press、float、glow，**物理級彈性動畫引擎**
- 🌈 **6 套預設主題** — Ocean、Aurora、Sunset、Rose、Midnight、Forest，**一鍵切換，全域生效**
- 🧩 **Web Components 封裝** — Custom Elements + Shadow DOM，**天然樣式隔離，零衝突**
- 🌓 **暗色/亮色模式自動切換** — 支援 `prefers-color-scheme` 媒體查詢，**自動跟隨系統主題**
- 📐 **完整工具類系統** — 間距、排版、佈局、顏色等實用工具類，**快速搭建頁面**
- 🔌 **零框架依賴** — 純 CSS + Vanilla JS，**完美支援 React / Vue / Svelte / 原生 HTML**
- 📱 **響應式設計** — 自適應各種螢幕尺寸，**行動裝置友善**
- ♿ **無障礙友善** — 支援 `prefers-reduced-motion`，**尊重使用者的動畫偏好設定**
- 🖱️ **滑鼠追蹤光影** — 玻璃表面跟隨滑鼠的即時高光效果，**增強空間感**
- 🎯 **捲動揭示動畫** — 基於 IntersectionObserver 的捲動驅動動畫，**支援多種方向和交錯延遲**

---

## 🚀 快速開始

### 環境需求

- **Node.js** >= 16.0.0（僅用於 npm 安裝和本地開發伺服器）
- **現代瀏覽器**：Chrome 80+、Firefox 80+、Safari 14+、Edge 80+

### 安裝方式

#### 方式一：npm 安裝（推薦）

```bash
npm install glassflow-ui
```

#### 方式二：CDN 引入

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-core.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-components.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-animations.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-themes.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-utilities.css" />

<!-- JavaScript（核心函式庫 + Web Components） -->
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow.js"></script>
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow-components.js"></script>
```

#### 方式三：Git Clone

```bash
git clone https://github.com/gitstq/glassflow-ui.git
cd glassflow-ui
npm install
```

### 本地啟動

```bash
# 啟動本地開發伺服器（預設連接埠 3000）
npm run dev

# 或者直接在瀏覽器中開啟 demo/index.html
open demo/index.html
```

> 💡 **提示**：直接開啟 `demo/index.html` 即可查看完整的線上 Demo，無需任何建置步驟。

---

## 📖 詳細使用指南

### CSS 引入方式

在 HTML 檔案的 `<head>` 中依序引入 CSS 檔案：

```html
<!-- 1. 核心樣式（設計 Token + 玻璃基礎效果） -->
<link rel="stylesheet" href="src/css/glassflow-core.css" />

<!-- 2. 元件樣式 -->
<link rel="stylesheet" href="src/css/glassflow-components.css" />

<!-- 3. 動畫效果 -->
<link rel="stylesheet" href="src/css/glassflow-animations.css" />

<!-- 4. 主題系統 -->
<link rel="stylesheet" href="src/css/glassflow-themes.css" />

<!-- 5. 工具類 -->
<link rel="stylesheet" href="src/css/glassflow-utilities.css" />
```

### 元件使用範例

#### Button 按鈕

```html
<!-- 預設玻璃按鈕 -->
<button class="gf-btn gf-btn-default">預設按鈕</button>

<!-- 填充按鈕 -->
<button class="gf-btn gf-btn-filled">填充按鈕</button>

<!-- 輪廓按鈕 -->
<button class="gf-btn gf-btn-outline">輪廓按鈕</button>

<!-- 幽靈按鈕 -->
<button class="gf-btn gf-btn-ghost">幽靈按鈕</button>

<!-- 不同尺寸 -->
<button class="gf-btn gf-btn-filled gf-btn-sm">小按鈕</button>
<button class="gf-btn gf-btn-filled gf-btn-lg">大按鈕</button>

<!-- 帶漣漪效果 -->
<button class="gf-btn gf-btn-filled" data-gf-ripple>點擊有漣漪</button>
```

#### Card 卡片

```html
<!-- 基礎卡片 -->
<div class="gf-card">
  <h3>玻璃卡片</h3>
  <p>這是一個帶有液態玻璃效果的卡片元件。</p>
</div>

<!-- 可懸浮卡片 -->
<div class="gf-card gf-card-hoverable">
  <h3>懸浮卡片</h3>
  <p>滑鼠懸停時會有浮起效果。</p>
</div>

<!-- 帶主題的卡片 -->
<div class="gf-card gf-theme-ocean">
  <h3>海洋主題卡片</h3>
  <p>應用了 Ocean 主題配色。</p>
</div>
```

#### Modal 彈窗

```html
<!-- 觸發按鈕 -->
<button class="gf-btn gf-btn-filled" onclick="document.getElementById('my-modal').open()">
  開啟彈窗
</button>

<!-- 彈窗 -->
<glass-modal id="my-modal" closable width="480px">
  <h2>液態玻璃彈窗</h2>
  <p>這是一個使用 Web Components 封裝的玻璃彈窗元件。</p>
  <p>點擊遮罩層、關閉按鈕或按 Esc 鍵即可關閉。</p>
</glass-modal>
```

#### Input 輸入框

```html
<!-- 使用 Web Component -->
<glass-input label="使用者名稱" placeholder="請輸入使用者名稱"></glass-input>

<glass-input label="密碼" type="password" placeholder="請輸入密碼"></glass-input>
```

#### Badge 徽章

```html
<glass-badge>預設</glass-badge>
<glass-badge variant="filled">填充</glass-badge>
<glass-badge variant="dot"></glass-badge>
<glass-badge size="small">小號</glass-badge>
<glass-badge size="large">大號</glass-badge>
```

#### Tooltip 提示

```html
<glass-tooltip content="這是一條提示資訊" position="top">
  <button class="gf-btn gf-btn-outline">懸停查看</button>
</glass-tooltip>
```

### Web Components 使用方式

GlassFlow UI 提供了基於 Custom Elements 的 Web Components 封裝，所有元件都使用 Shadow DOM 實現樣式隔離：

```html
<!-- 玻璃卡片 -->
<glass-card theme="ocean" blur="20" frost="0.6" hoverable>
  <h3>Web Component 卡片</h3>
  <p>使用 Shadow DOM 實現樣式隔離。</p>
</glass-card>

<!-- 玻璃按鈕 -->
<glass-button theme="aurora" variant="filled" size="large" full>
  確認送出
</glass-button>

<!-- 玻璃輸入框 -->
<glass-input label="信箱" type="email" placeholder="your@email.com"></glass-input>

<!-- 玻璃彈窗 -->
<glass-modal theme="rose" closable width="520px">
  <h2>提示</h2>
  <p>操作已完成！</p>
</glass-modal>
```

### React 整合範例

```jsx
import { useEffect, useRef } from 'react'
import 'glassflow-ui/src/css/glassflow-core.css'
import 'glassflow-ui/src/css/glassflow-components.css'
import 'glassflow-ui/src/css/glassflow-animations.css'
import 'glassflow-ui/src/css/glassflow-themes.css'
import 'glassflow-ui/src/css/glassflow-utilities.css'
import 'glassflow-ui/src/js/glassflow-components.js'

function App() {
  const gfRef = useRef(null)

  useEffect(() => {
    // 初始化 GlassFlow 核心
    if (window.GlassFlow) {
      window.GlassFlow.init({ theme: 'auto' })
    }
  }, [])

  return (
    <div ref={gfRef}>
      <glass-card theme="ocean" hoverable>
        <h2>React + GlassFlow</h2>
        <p>在 React 專案中無縫使用液態玻璃元件。</p>
      </glass-card>

      <glass-button variant="filled" size="large">
        開始使用
      </glass-button>
    </div>
  )
}

export default App
```

### Vue 整合範例

```vue
<template>
  <div>
    <glass-card theme="aurora" hoverable>
      <h2>Vue + GlassFlow</h2>
      <p>在 Vue 專案中無縫使用液態玻璃元件。</p>
    </glass-card>

    <glass-button variant="filled" @click="handleClick">
      點擊我
    </glass-button>
  </div>
</template>

<script setup>
import 'glassflow-ui/src/css/glassflow-core.css'
import 'glassflow-ui/src/css/glassflow-components.css'
import 'glassflow-ui/src/css/glassflow-animations.css'
import 'glassflow-ui/src/css/glassflow-themes.css'
import 'glassflow-ui/src/css/glassflow-utilities.css'
import 'glassflow-ui/src/js/glassflow-components.js'

// 初始化 GlassFlow
if (window.GlassFlow) {
  window.GlassFlow.init({ theme: 'auto' })
}

function handleClick() {
  console.log('按鈕被點擊了！')
}
</script>
```

### 主題切換方法

```javascript
// 方法一：透過 JavaScript API 切換
GlassFlow.setTheme('ocean')    // 切換到 Ocean 主題
GlassFlow.setTheme('aurora')   // 切換到 Aurora 主題
GlassFlow.setTheme('dark')     // 切換到暗色模式
GlassFlow.setTheme('light')    // 切換到亮色模式
GlassFlow.setTheme('auto')     // 跟隨系統自動切換

// 方法二：透過 CSS 類名切換（適用於 CSS 方式）
<div class="gf-theme-ocean">  ...  </div>
<div class="gf-theme-aurora">  ...  </div>
<div class="gf-theme-sunset">  ...  </div>
<div class="gf-theme-rose">    ...  </div>
<div class="gf-theme-midnight"> ... </div>
<div class="gf-theme-forest">  ...  </div>

// 方法三：透過 Web Component 屬性
<glass-card theme="ocean">  ...  </glass-card>
<glass-button theme="aurora">  ...  </glass-button>
```

### 暗色/亮色模式

GlassFlow UI 內建了對 `prefers-color-scheme` 的完整支援：

```javascript
// 自動模式（預設）：跟隨系統主題
GlassFlow.init({ theme: 'auto' })

// 強制亮色模式
GlassFlow.init({ theme: 'light' })

// 強制暗色模式
GlassFlow.init({ theme: 'dark' })

// 執行期切換
GlassFlow.setTheme('dark')   // 切換到暗色
GlassFlow.setTheme('light')  // 切換到亮色
GlassFlow.setTheme('auto')   // 恢復自動跟隨

// 監聽主題變更事件
GlassFlow.on('themechange', (detail) => {
  console.log('目前主題:', detail.theme)
  console.log('是否自動模式:', detail.auto)
})
```

### 元件總覽

| 元件 | CSS 類名 / Web Component | 說明 |
|------|--------------------------|------|
| Card | `.gf-card` / `<glass-card>` | 玻璃卡片容器 |
| Button | `.gf-btn` / `<glass-button>` | 多變體按鈕（default / filled / outline / ghost） |
| Nav | `.gf-nav` | 玻璃導覽列 |
| Modal | `<glass-modal>` | 模態彈窗（支援遮罩關閉、Esc 關閉） |
| Input | `.gf-input` / `<glass-input>` | 輸入框（支援 label、多種 type） |
| Badge | `.gf-badge` / `<glass-badge>` | 徽章標籤（default / filled / dot） |
| Tooltip | `<glass-tooltip>` | 文字提示（top / bottom / left / right） |
| Divider | `.gf-divider` | 分隔線 |
| Avatar | `.gf-avatar` | 頭像 |
| Alert | `.gf-alert` | 提示資訊 |

### 動畫效果總覽

| 動畫 | CSS 類名 | 說明 |
|------|----------|------|
| Shimmer | `.gf-anim-shimmer` | 微光掃過效果 |
| Ripple | `data-gf-ripple` | 點擊漣漪效果 |
| Breathe | `.gf-anim-breathe` | 呼吸脈動效果 |
| Refract | `.gf-anim-refract` | 折射扭曲效果 |
| Elastic Press | `.gf-anim-elastic-press` | 彈性按壓效果 |
| Float | `.gf-anim-float` | 懸浮漂浮效果 |
| Glow | `.gf-anim-glow` | 輝光閃爍效果 |

### 主題總覽

| 主題 | CSS 類名 | 風格描述 |
|------|----------|----------|
| Ocean | `.gf-theme-ocean` | 深海藍，沉穩專業 |
| Aurora | `.gf-theme-aurora` | 極光紫，夢幻神秘 |
| Sunset | `.gf-theme-sunset` | 日落橙，溫暖活力 |
| Rose | `.gf-theme-rose` | 玫瑰粉，優雅浪漫 |
| Midnight | `.gf-theme-midnight` | 午夜黑，深邃沉穩 |
| Forest | `.gf-theme-forest` | 森林綠，自然清新 |

---

## 💡 設計思路與迭代規劃

### 設計理念

GlassFlow UI 的設計理念源於 Apple 在 WWDC 2025 上展示的 **Liquid Glass** 設計語言。我們認為，真正的玻璃質感不僅僅是模糊背景那麼簡單——它需要模擬真實世界中光線穿過玻璃時的物理行為：折射、反射、焦散、色散。因此，我們在 CSS 層面精心模擬了這些光學效果，並透過 JavaScript 增強了滑鼠追蹤光影、彈性動畫等互動體驗。

### 技術選型原因

| 技術選擇 | 原因 |
|----------|------|
| **純 CSS + Web Components** | 實現框架無關，任何前端專案都能直接使用，無需適配層 |
| **Custom Elements + Shadow DOM** | 天然樣式隔離，不會與宿主頁面的 CSS 產生衝突 |
| **Vanilla JavaScript** | 零依賴，極致輕量，避免引入框架執行期開銷 |
| **CSS Custom Properties** | 實現彈性的主題系統，支援執行期動態切換 |
| **IntersectionObserver** | 高效能的捲動驅動動畫，無需手動計算捲動位置 |
| **UMD 模組格式** | 相容 CommonJS、AMD 和全域變數，涵蓋所有使用場景 |

### 後續迭代計畫

- [ ] **更多元件**：Table、Tabs、Dropdown、Toast、Drawer、Accordion、Progress 等
- [ ] **主題編輯器**：視覺化主題客製化工具，即時預覽效果
- [ ] **Figma 外掛**：一鍵匯出設計稿為 GlassFlow 元件程式碼
- [ ] **SSR 支援**：完善伺服器端渲染場景下的相容性
- [ ] **TypeScript 型別增強**：更完善的型別定義和智慧提示
- [ ] **動畫編排系統**：支援多步驟、多元件協同動畫編排
- [ ] **無障礙增強**：完整的 ARIA 屬性支援和鍵盤導覽
- [ ] **效能最佳化**：CSS 容器查詢、`@layer` 分層、更精細的按需載入

---

## 📦 打包與部署指南

### 檔案結構說明

```
glassflow-ui/
├── src/
│   ├── css/
│   │   ├── glassflow-core.css        # 核心樣式（設計 Token + 玻璃基礎效果）
│   │   ├── glassflow-components.css  # 元件樣式
│   │   ├── glassflow-animations.css  # 動畫效果
│   │   ├── glassflow-themes.css      # 主題系統
│   │   └── glassflow-utilities.css   # 工具類
│   └── js/
│       ├── glassflow.js              # 核心函式庫（主題管理、漣漪、捲動揭示、滑鼠光影）
│       └── glassflow-components.js   # Web Components 封裝
├── demo/
│   └── index.html                    # 線上 Demo 頁面
└── package.json
```

### CDN 引入方式

```html
<!-- 完整引入（所有 CSS + JS） -->
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-core.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-components.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-animations.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-themes.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-utilities.css" />
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow.js"></script>
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow-components.js"></script>
```

### 按需引入與 Tree-shaking

GlassFlow UI 的 CSS 檔案是模組化設計的，你可以根據需要只引入特定檔案：

```html
<!-- 只需要核心樣式 + 元件樣式（不含動畫和主題） -->
<link rel="stylesheet" href="src/css/glassflow-core.css" />
<link rel="stylesheet" href="src/css/glassflow-components.css" />

<!-- 按需加入動畫 -->
<link rel="stylesheet" href="src/css/glassflow-animations.css" />

<!-- 按需加入主題 -->
<link rel="stylesheet" href="src/css/glassflow-themes.css" />
```

> 💡 **提示**：`package.json` 中已設定 `"sideEffects": false`，配合支援 Tree-shaking 的打包工具（Webpack、Vite、Rollup）可以自動移除未使用的 JS 模組。

---

## 🤝 貢獻指南

我們歡迎任何形式的貢獻！無論是提交 Bug 回報、改進文件還是提交程式碼 PR。

### PR 提交規範

1. **Fork** 本儲存庫並建立你的分支：`git checkout -b feature/your-feature`
2. **提交** 你的變更：`git commit -m 'feat: 新增元件 XXX'`
3. **推送** 到遠端分支：`git push origin feature/your-feature`
4. **建立 Pull Request**，詳細描述你的變更內容

**Commit Message 格式**（遵循 Conventional Commits）：

| 類型 | 說明 |
|------|------|
| `feat:` | 新功能 |
| `fix:` | Bug 修復 |
| `docs:` | 文件更新 |
| `style:` | 程式碼格式調整（不影響功能） |
| `refactor:` | 程式碼重構 |
| `perf:` | 效能最佳化 |
| `test:` | 測試相關 |
| `chore:` | 建置/工具鏈相關 |

### Issue 回饋規則

- 提交 Bug 時，請附上**重現步驟、期望行為、實際行為、瀏覽器版本和截圖**。
- 功能建議請詳細描述**使用場景和期望的 API 設計**。
- 提交前請先搜尋是否已有相同 Issue。

---

## 📄 開源授權

本專案基於 **MIT License** 開源。

```
MIT License

Copyright (c) 2025 GlassFlow Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">
  Made with 💎 by <a href="https://github.com/gitstq/glassflow-ui">GlassFlow Team</a>
</p>

---
---

<a id="english"></a>

# GlassFlow UI

<p align="center">
  <img src="https://img.shields.io/badge/version-v1.0.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
  <img src="https://img.shields.io/badge/zero_dependencies-✓-success" alt="Zero Dependencies" />
  <img src="https://img.shields.io/badge/framework_agnostic-React%20%7C%20Vue%20%7C%20Svelte%20%7C%20Vanilla-orange" alt="Framework Agnostic" />
</p>

<p align="center">
  <strong>Framework-Agnostic Apple Liquid Glass UI Component Library</strong><br/>
  Pure CSS + Web Components + Vanilla JavaScript, Zero Framework Dependencies
</p>

---

## 🎉 Introduction

**GlassFlow UI** is a meticulously crafted **Apple Liquid Glass**-style UI component library built for frontend developers who demand exceptional visual experiences. Inspired by the groundbreaking Liquid Glass design language unveiled by Apple at WWDC 2025, we bring that translucent, dynamic, and layered glass aesthetic to the web.

### Problems We Solve

- **Inconsistent quality among existing glassmorphism libraries**: Most glassmorphism libraries simply stack `backdrop-filter` calls without refining details like light refraction, edge highlights, and elastic animations, resulting in stiff and unconvincing visuals.
- **Deep framework coupling**: Nearly all mainstream UI libraries are tightly bound to a specific framework (React / Vue), forcing teams working across multiple frameworks to rebuild the same components from scratch.
- **Weak theming systems**: Most libraries offer only light and dark modes with no flexible customization capabilities for creating unique visual identities.
- **Coarse animation experiences**: A lack of physics-driven elastic animations, ripple feedback, and scroll-driven reveal effects leaves interactions feeling flat and lifeless.

### What Sets Us Apart

- 🧊 **Authentic liquid glass texture**: Not just frosted glass -- we simulate multi-layered optical effects including refraction, caustics, edge highlights, and chromatic dispersion.
- 🎨 **6 meticulously tuned preset themes**: Ocean, Aurora, Sunset, Rose, Midnight, and Forest -- each carefully color-graded and ready to use out of the box.
- 🫧 **7 liquid animation effects**: shimmer, ripple, breathe, refract, elastic-press, float, and glow -- bringing your interfaces to life with physics-driven motion.
- 🧩 **Web Components encapsulation**: Built on Custom Elements + Shadow DOM for natural style isolation that works seamlessly with any framework.
- 📦 **Zero dependencies, ultra-lightweight**: Pure CSS + Vanilla JS with no build tools required -- just drop it in and go.

---

## ✨ Core Features

- 🎨 **10 beautifully crafted UI components** -- Card, Button, Nav, Modal, Input, Badge, Tooltip, Divider, Avatar, and Alert, covering common UI scenarios
- 🫧 **7 liquid animation effects** -- shimmer, ripple, breathe, refract, elastic-press, float, and glow, powered by a **physics-grade elastic animation engine**
- 🌈 **6 preset themes** -- Ocean, Aurora, Sunset, Rose, Midnight, and Forest, with **one-click switching and global application**
- 🧩 **Web Components encapsulation** -- Custom Elements + Shadow DOM for **natural style isolation with zero conflicts**
- 🌓 **Automatic dark/light mode switching** -- Supports `prefers-color-scheme` media queries to **automatically follow the system theme**
- 📐 **Complete utility class system** -- Spacing, typography, layout, and color utilities for **rapid page construction**
- 🔌 **Zero framework dependencies** -- Pure CSS + Vanilla JS, **fully compatible with React / Vue / Svelte / vanilla HTML**
- 📱 **Responsive design** -- Adapts to all screen sizes, **mobile-friendly**
- ♿ **Accessibility-friendly** -- Supports `prefers-reduced-motion` to **respect user animation preferences**
- 🖱️ **Mouse-tracking light effect** -- Real-time highlight that follows the cursor across glass surfaces, **enhancing spatial depth**
- 🎯 **Scroll-reveal animations** -- IntersectionObserver-powered scroll-driven animations with **multi-directional support and staggered delays**

---

## 🚀 Quick Start

### Requirements

- **Node.js** >= 16.0.0 (only needed for npm installation and local dev server)
- **Modern browsers**: Chrome 80+, Firefox 80+, Safari 14+, Edge 80+

### Installation

#### Option 1: npm (Recommended)

```bash
npm install glassflow-ui
```

#### Option 2: CDN

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-core.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-components.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-animations.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-themes.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-utilities.css" />

<!-- JavaScript (Core library + Web Components) -->
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow.js"></script>
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow-components.js"></script>
```

#### Option 3: Git Clone

```bash
git clone https://github.com/gitstq/glassflow-ui.git
cd glassflow-ui
npm install
```

### Local Development

```bash
# Start the local dev server (default port 3000)
npm run dev

# Or simply open demo/index.html in your browser
open demo/index.html
```

> 💡 **Tip**: You can open `demo/index.html` directly in your browser to view the full interactive demo -- no build step required.

---

## 📖 Detailed Usage Guide

### Importing CSS

Add the CSS files to the `<head>` of your HTML document in the following order:

```html
<!-- 1. Core styles (design tokens + glass base effects) -->
<link rel="stylesheet" href="src/css/glassflow-core.css" />

<!-- 2. Component styles -->
<link rel="stylesheet" href="src/css/glassflow-components.css" />

<!-- 3. Animation effects -->
<link rel="stylesheet" href="src/css/glassflow-animations.css" />

<!-- 4. Theme system -->
<link rel="stylesheet" href="src/css/glassflow-themes.css" />

<!-- 5. Utility classes -->
<link rel="stylesheet" href="src/css/glassflow-utilities.css" />
```

### Component Examples

#### Button

```html
<!-- Default glass button -->
<button class="gf-btn gf-btn-default">Default</button>

<!-- Filled button -->
<button class="gf-btn gf-btn-filled">Filled</button>

<!-- Outline button -->
<button class="gf-btn gf-btn-outline">Outline</button>

<!-- Ghost button -->
<button class="gf-btn gf-btn-ghost">Ghost</button>

<!-- Different sizes -->
<button class="gf-btn gf-btn-filled gf-btn-sm">Small</button>
<button class="gf-btn gf-btn-filled gf-btn-lg">Large</button>

<!-- With ripple effect -->
<button class="gf-btn gf-btn-filled" data-gf-ripple">Click for Ripple</button>
```

#### Card

```html
<!-- Basic card -->
<div class="gf-card">
  <h3>Glass Card</h3>
  <p>A card component with liquid glass effects.</p>
</div>

<!-- Hoverable card -->
<div class="gf-card gf-card-hoverable">
  <h3>Hoverable Card</h3>
  <p>Floats up on mouse hover.</p>
</div>

<!-- Themed card -->
<div class="gf-card gf-theme-ocean">
  <h3>Ocean Theme Card</h3>
  <p>Styled with the Ocean theme palette.</p>
</div>
```

#### Modal

```html
<!-- Trigger button -->
<button class="gf-btn gf-btn-filled" onclick="document.getElementById('my-modal').open()">
  Open Modal
</button>

<!-- Modal -->
<glass-modal id="my-modal" closable width="480px">
  <h2>Liquid Glass Modal</h2>
  <p>A glass modal component wrapped as a Web Component.</p>
  <p>Close by clicking the overlay, the close button, or pressing Esc.</p>
</glass-modal>
```

#### Input

```html
<!-- Using Web Component -->
<glass-input label="Username" placeholder="Enter your username"></glass-input>

<glass-input label="Password" type="password" placeholder="Enter your password"></glass-input>
```

#### Badge

```html
<glass-badge>Default</glass-badge>
<glass-badge variant="filled">Filled</glass-badge>
<glass-badge variant="dot"></glass-badge>
<glass-badge size="small">Small</glass-badge>
<glass-badge size="large">Large</glass-badge>
```

#### Tooltip

```html
<glass-tooltip content="This is a tooltip" position="top">
  <button class="gf-btn gf-btn-outline">Hover Me</button>
</glass-tooltip>
```

### Web Components Usage

GlassFlow UI provides Custom Elements-based Web Components with Shadow DOM for complete style isolation:

```html
<!-- Glass Card -->
<glass-card theme="ocean" blur="20" frost="0.6" hoverable>
  <h3>Web Component Card</h3>
  <p>Style isolation via Shadow DOM.</p>
</glass-card>

<!-- Glass Button -->
<glass-button theme="aurora" variant="filled" size="large" full>
  Confirm
</glass-button>

<!-- Glass Input -->
<glass-input label="Email" type="email" placeholder="your@email.com"></glass-input>

<!-- Glass Modal -->
<glass-modal theme="rose" closable width="520px">
  <h2>Notice</h2>
  <p>Action completed!</p>
</glass-modal>
```

### React Integration

```jsx
import { useEffect, useRef } from 'react'
import 'glassflow-ui/src/css/glassflow-core.css'
import 'glassflow-ui/src/css/glassflow-components.css'
import 'glassflow-ui/src/css/glassflow-animations.css'
import 'glassflow-ui/src/css/glassflow-themes.css'
import 'glassflow-ui/src/css/glassflow-utilities.css'
import 'glassflow-ui/src/js/glassflow-components.js'

function App() {
  const gfRef = useRef(null)

  useEffect(() => {
    // Initialize GlassFlow core
    if (window.GlassFlow) {
      window.GlassFlow.init({ theme: 'auto' })
    }
  }, [])

  return (
    <div ref={gfRef}>
      <glass-card theme="ocean" hoverable>
        <h2>React + GlassFlow</h2>
        <p>Seamlessly use liquid glass components in React projects.</p>
      </glass-card>

      <glass-button variant="filled" size="large">
        Get Started
      </glass-button>
    </div>
  )
}

export default App
```

### Vue Integration

```vue
<template>
  <div>
    <glass-card theme="aurora" hoverable>
      <h2>Vue + GlassFlow</h2>
      <p>Seamlessly use liquid glass components in Vue projects.</p>
    </glass-card>

    <glass-button variant="filled" @click="handleClick">
      Click Me
    </glass-button>
  </div>
</template>

<script setup>
import 'glassflow-ui/src/css/glassflow-core.css'
import 'glassflow-ui/src/css/glassflow-components.css'
import 'glassflow-ui/src/css/glassflow-animations.css'
import 'glassflow-ui/src/css/glassflow-themes.css'
import 'glassflow-ui/src/css/glassflow-utilities.css'
import 'glassflow-ui/src/js/glassflow-components.js'

// Initialize GlassFlow
if (window.GlassFlow) {
  window.GlassFlow.init({ theme: 'auto' })
}

function handleClick() {
  console.log('Button clicked!')
}
</script>
```

### Theme Switching

```javascript
// Method 1: JavaScript API
GlassFlow.setTheme('ocean')    // Switch to Ocean theme
GlassFlow.setTheme('aurora')   // Switch to Aurora theme
GlassFlow.setTheme('dark')     // Switch to dark mode
GlassFlow.setTheme('light')    // Switch to light mode
GlassFlow.setTheme('auto')     // Follow system preference

// Method 2: CSS class names (for CSS-based usage)
<div class="gf-theme-ocean">  ...  </div>
<div class="gf-theme-aurora">  ...  </div>
<div class="gf-theme-sunset">  ...  </div>
<div class="gf-theme-rose">    ...  </div>
<div class="gf-theme-midnight"> ... </div>
<div class="gf-theme-forest">  ...  </div>

// Method 3: Web Component attributes
<glass-card theme="ocean">  ...  </glass-card>
<glass-button theme="aurora">  ...  </glass-button>
```

### Dark / Light Mode

GlassFlow UI has full built-in support for `prefers-color-scheme`:

```javascript
// Auto mode (default): follows system theme
GlassFlow.init({ theme: 'auto' })

// Force light mode
GlassFlow.init({ theme: 'light' })

// Force dark mode
GlassFlow.init({ theme: 'dark' })

// Runtime switching
GlassFlow.setTheme('dark')   // Switch to dark
GlassFlow.setTheme('light')  // Switch to light
GlassFlow.setTheme('auto')   // Resume auto-following

// Listen for theme changes
GlassFlow.on('themechange', (detail) => {
  console.log('Current theme:', detail.theme)
  console.log('Auto mode:', detail.auto)
})
```

### Component Overview

| Component | CSS Class / Web Component | Description |
|-----------|--------------------------|-------------|
| Card | `.gf-card` / `<glass-card>` | Glass card container |
| Button | `.gf-btn` / `<glass-button>` | Multi-variant button (default / filled / outline / ghost) |
| Nav | `.gf-nav` | Glass navigation bar |
| Modal | `<glass-modal>` | Modal dialog (supports overlay close, Esc close) |
| Input | `.gf-input` / `<glass-input>` | Input field (supports label, multiple types) |
| Badge | `.gf-badge` / `<glass-badge>` | Badge label (default / filled / dot) |
| Tooltip | `<glass-tooltip>` | Text tooltip (top / bottom / left / right) |
| Divider | `.gf-divider` | Divider line |
| Avatar | `.gf-avatar` | User avatar |
| Alert | `.gf-alert` | Alert message |

### Animation Overview

| Animation | CSS Class | Description |
|-----------|-----------|-------------|
| Shimmer | `.gf-anim-shimmer` | Shimmer sweep effect |
| Ripple | `data-gf-ripple` | Click ripple effect |
| Breathe | `.gf-anim-breathe` | Breathing pulse effect |
| Refract | `.gf-anim-refract` | Refraction distortion effect |
| Elastic Press | `.gf-anim-elastic-press` | Elastic press effect |
| Float | `.gf-anim-float` | Floating hover effect |
| Glow | `.gf-anim-glow` | Glow pulse effect |

### Theme Overview

| Theme | CSS Class | Style Description |
|-------|-----------|-------------------|
| Ocean | `.gf-theme-ocean` | Deep blue, professional and calm |
| Aurora | `.gf-theme-aurora` | Northern lights purple, dreamy and mystical |
| Sunset | `.gf-theme-sunset` | Sunset orange, warm and vibrant |
| Rose | `.gf-theme-rose` | Rose pink, elegant and romantic |
| Midnight | `.gf-theme-midnight` | Midnight black, deep and composed |
| Forest | `.gf-theme-forest` | Forest green, natural and fresh |

---

## 💡 Design Philosophy & Roadmap

### Design Philosophy

GlassFlow UI's design philosophy is rooted in the **Liquid Glass** design language unveiled by Apple at WWDC 2025. We believe that authentic glass texture goes far beyond simply blurring a background -- it requires simulating the physical behavior of light passing through glass: refraction, reflection, caustics, and chromatic dispersion. We meticulously replicate these optical effects at the CSS level and enhance the interactive experience through JavaScript-powered mouse-tracking highlights and physics-driven elastic animations.

### Technology Choices

| Choice | Rationale |
|--------|-----------|
| **Pure CSS + Web Components** | Framework-agnostic by design -- works in any frontend project without an adapter layer |
| **Custom Elements + Shadow DOM** | Natural style isolation that prevents CSS conflicts with the host page |
| **Vanilla JavaScript** | Zero dependencies and minimal footprint -- no framework runtime overhead |
| **CSS Custom Properties** | Enables a flexible theming system with runtime dynamic switching |
| **IntersectionObserver** | High-performance scroll-driven animations without manual scroll position calculations |
| **UMD module format** | Compatible with CommonJS, AMD, and global variables, covering all usage scenarios |

### Roadmap

- [ ] **More components**: Table, Tabs, Dropdown, Toast, Drawer, Accordion, Progress, and more
- [ ] **Theme editor**: Visual theme customization tool with live preview
- [ ] **Figma plugin**: One-click export from design files to GlassFlow component code
- [ ] **SSR support**: Improved compatibility in server-side rendering environments
- [ ] **Enhanced TypeScript types**: More comprehensive type definitions and IntelliSense support
- [ ] **Animation orchestration**: Multi-step, multi-element coordinated animation sequencing
- [ ] **Accessibility enhancements**: Full ARIA attribute support and keyboard navigation
- [ ] **Performance optimization**: CSS container queries, `@layer` cascading, and finer-grained on-demand loading

---

## 📦 Bundling & Deployment Guide

### File Structure

```
glassflow-ui/
├── src/
│   ├── css/
│   │   ├── glassflow-core.css        # Core styles (design tokens + glass base effects)
│   │   ├── glassflow-components.css  # Component styles
│   │   ├── glassflow-animations.css  # Animation effects
│   │   ├── glassflow-themes.css      # Theme system
│   │   └── glassflow-utilities.css   # Utility classes
│   └── js/
│       ├── glassflow.js              # Core library (theme management, ripple, scroll reveal, mouse light)
│       └── glassflow-components.js   # Web Components wrappers
├── demo/
│   └── index.html                    # Interactive demo page
└── package.json
```

### CDN Usage

```html
<!-- Full import (all CSS + JS) -->
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-core.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-components.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-animations.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-themes.css" />
<link rel="stylesheet" href="https://unpkg.com/glassflow-ui/src/css/glassflow-utilities.css" />
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow.js"></script>
<script src="https://unpkg.com/glassflow-ui/src/js/glassflow-components.js"></script>
```

### On-Demand Import & Tree-shaking

GlassFlow UI's CSS files are modular -- import only what you need:

```html
<!-- Only core + component styles (no animations or themes) -->
<link rel="stylesheet" href="src/css/glassflow-core.css" />
<link rel="stylesheet" href="src/css/glassflow-components.css" />

<!-- Add animations on demand -->
<link rel="stylesheet" href="src/css/glassflow-animations.css" />

<!-- Add themes on demand -->
<link rel="stylesheet" href="src/css/glassflow-themes.css" />
```

> 💡 **Tip**: The `package.json` declares `"sideEffects": false`, so bundlers that support tree-shaking (Webpack, Vite, Rollup) will automatically eliminate unused JS modules.

---

## 🤝 Contributing

We welcome contributions of all kinds -- whether it's filing bug reports, improving documentation, or submitting code PRs.

### PR Submission Guidelines

1. **Fork** this repository and create your branch: `git checkout -b feature/your-feature`
2. **Commit** your changes: `git commit -m 'feat: add XXX component'`
3. **Push** to the remote branch: `git push origin feature/your-feature`
4. **Create a Pull Request** with a detailed description of your changes

**Commit Message Format** (following Conventional Commits):

| Type | Description |
|------|-------------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation update |
| `style:` | Code formatting (no functional changes) |
| `refactor:` | Code refactoring |
| `perf:` | Performance optimization |
| `test:` | Test-related changes |
| `chore:` | Build/tooling changes |

### Issue Reporting Guidelines

- When filing a bug, please include **reproduction steps, expected behavior, actual behavior, browser version, and screenshots**.
- For feature requests, please describe the **use case and your desired API design** in detail.
- Please search for existing issues before submitting a new one.

---

## 📄 License

This project is released under the **MIT License**.

```
MIT License

Copyright (c) 2025 GlassFlow Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">
  Made with 💎 by <a href="https://github.com/gitstq/glassflow-ui">GlassFlow Team</a>
</p>

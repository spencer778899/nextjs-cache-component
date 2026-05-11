# Next.js 16 Cache Component 教學專案

💡💡建議搭配 [docs/article.md](./docs/article.md) 閱讀，文章涵蓋 Cache Component 的原理、實作方式與新舊版本比較。

## 專案目的

展示 Next.js 快取機制的演變,從舊版的 full router cache 到新版的 cache component 功能,幫助理解不同層級的快取控制。

## Quick Start

### 1. 安裝依賴

```bash
npm install
```

### 2. 切換 Branch

根據想觀察的快取機制，切換到對應的 branch：

- **`feature/demo-full-route-cache`**：觀察 Next.js v13-15 的 full route cache 行為
  - `old-full-cache/page.tsx` — 預設的 full route cache
  - `old-cache-broken/page.tsx` — 使用動態 API 導致快取失效
- **`feature/demo-use-cache`**：觀察 Next.js v16 的 `"use cache"` 行為
  - `new-file-cache/page.tsx` — file 層級的快取
  - `new-function-cache/page.tsx` — function 層級的快取
  - `new-component-cache/page.tsx` — component 層級的快取

```bash
git checkout feature/demo-full-route-cache
# 或
git checkout feature/demo-use-cache
```

### 3. 建置並啟動正式環境

Cache component 的快取行為需要在 production build 下才能觀察，請直接使用：

```bash
npm run start
```

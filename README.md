# Next.js 16 Cache Component 教學專案

這是一個用於展示 Next.js 16.1.1 中 cache component 機制的教學專案。

## 專案目的

展示 Next.js 快取機制的演變,從舊版的 full router cache 到新版的 cache component 功能,幫助理解不同層級的快取控制。

## 四個情境說明

### 1. 舊版 Full Router Cache (`/old-full-cache`)
- 展示 Next.js 預設的 full router cache 行為
- 當 `cacheComponents: false` 時的快取機制
- 頁面會被完整快取

### 2. Cookies API 破壞快取 (`/old-cache-broken`)
- 展示使用動態 API (如 `cookies()`) 會破壞 full router cache
- 即使在舊版模式下,頁面也會變成動態渲染
- 無法使用 full router cache

### 3. 新版 Page 層級 Cache (`/new-page-cache`)
- 使用 `"use cache"` directive 在 page 層級
- 展示 Next.js 16 的新快取機制
- 需要 `cacheComponents: true` 配置

### 4. Component & Function 層級 Cache (`/new-component-cache`)
- 展示如何在 component 層級使用 `"use cache"`
- 展示如何在 function 層級使用 `"use cache"`
- 提供更細緻的快取控制

## 如何運行專案

### 1. 設定環境變數

複製 `.env.example` 為 `.env`:
```bash
cp .env.example .env
```

編輯 `.env` 檔案,設定 `USE_CACHE_COMPONENT`:

```bash
# 使用舊版 full router cache (預設,會呼叫 cookies)
USE_CACHE_COMPONENT=false

# 或使用新版 cache component (不呼叫 cookies)
USE_CACHE_COMPONENT=true
```

**重要**: 修改環境變數後需要重新啟動開發伺服器。

### 2. 安裝依賴
```bash
npm install
```

### 3. 啟動開發伺服器
```bash
npm run dev
```

專案會在 `http://localhost:3000` 啟動。

## 兩種模式說明

### 舊版模式 (`USE_CACHE_COMPONENT=false`)
- 使用 Next.js 舊版的 full router cache
- 在 "Cache 被破壞" 頁面會呼叫 `cookies()` API
- 顯示兩個頁面:
  - 舊版 Full Cache
  - Cache 被破壞

### 新版模式 (`USE_CACHE_COMPONENT=true`)
- 使用 Next.js 16 的新版 cache component
- 不呼叫 `cookies()` API (避免 build 錯誤)
- 顯示兩個頁面:
  - Page 層級 Cache
  - Component/Function Cache

## 如何觀察快取行為

每個頁面都會顯示**渲染時間戳記**,透過重新整理頁面觀察時間是否更新,即可判斷是否使用了快取:

- **時間沒有更新** = 使用了快取
- **時間有更新** = 沒有使用快取,重新渲染了頁面

### 觀察重點

1. **情境1 (舊版 Full Cache)**: 重新整理時,時間應該不會更新
2. **情境2 (Cache 被破壞)**: 重新整理時,時間應該會更新
3. **情境3 (Page 層級 Cache)**: 重新整理時,時間應該不會更新
4. **情境4 (Component/Function Cache)**: 注意三個不同層級的時間變化
   - 頁面本身的時間會更新
   - Component 和 Function 的時間可能被快取

### 切換快取模式

在 `next.config.ts` 中修改 `cacheComponents` 設定:

```typescript
// 啟用新版 cache component
const nextConfig: NextConfig = {
  cacheComponents: true,
};

// 使用舊版 full router cache
const nextConfig: NextConfig = {
  cacheComponents: false,
};
```

修改後需要重新啟動開發伺服器。

## 技術棧

- **Next.js**: 16.1.1
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.4.1

## 專案結構

```
nextjs-cache-component/
├── app/
│   ├── layout.tsx              # 根 layout,包含導航列
│   ├── NavLink.tsx             # 導航連結 (client component)
│   ├── page.tsx                # 首頁 (重導向)
│   ├── globals.css             # 全域樣式
│   ├── old-full-cache/         # 情境1
│   ├── old-cache-broken/       # 情境2
│   ├── new-page-cache/         # 情境3
│   └── new-component-cache/    # 情境4
│       ├── page.tsx
│       ├── CachedComponent.tsx # Component 層級快取
│       └── utils.ts            # Function 層級快取
├── next.config.ts              # Next.js 配置
└── package.json
```

## 參考資料

- [Next.js Cache Components 官方文件](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents)

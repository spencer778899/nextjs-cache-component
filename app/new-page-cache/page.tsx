process.env.USE_CACHE_COMPONENT === "true" &&  "use cache";

import { getCurrentTime } from "@/lib/time";

export default async function NewPageCachePage() {
  const renderTime = await fetch(
      'http://api.timezonedb.com/v2.1/get-time-zone?key=EBEDQK7ETGZK&format=json&by=zone&zone=Asia/Taipei',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    );


  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">情境3: 新版 Page 層級 Cache</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">說明</h2>
        <p className="text-gray-700 mb-2">
          這個頁面在檔案開頭使用 <code className="bg-gray-100 px-2 py-1 rounded">"use cache"</code> directive,
          展示 Next.js 16 新版的 page 層級快取機制。
        </p>
        <p className="text-gray-700 mb-2">
          需要在 <code className="bg-gray-100 px-2 py-1 rounded">next.config.ts</code> 中設定{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">cacheComponents: true</code> 才能啟用此功能。
        </p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-4">
        <h3 className="font-semibold mb-2">頁面渲染時間</h3>
        {/* <p className="text-2xl font-mono text-green-900">{renderTime}</p> */}
        <p className="text-sm text-gray-600 mt-2">
          重新整理頁面,如果時間沒有更新,表示使用了新版快取
        </p>
      </div>
    </div>
  );
}

process.env.USE_CACHE_COMPONENT === "true" &&  "use cache";

import { getCurrentTime } from "@/lib/time";

export async function CachedComponent() {
  const renderTime = await getCurrentTime();

  return (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
      <h3 className="font-semibold text-purple-900 mb-2">
        快取的 Component
      </h3>
      <p className="text-purple-700 mb-2">
        這個 component 在檔案開頭使用了 <code className="bg-purple-100 px-2 py-1 rounded">"use cache"</code>,
        展示 component 層級的快取。
      </p>
      <p className="text-sm text-purple-600">
        Component 渲染時間: <span className="font-mono font-bold">{renderTime}</span>
      </p>
    </div>
  );
}

import { CachedComponent } from "./CachedComponent";
import { getCachedData } from "./utils";
import { getCurrentTime } from "@/lib/time";

export default async function NewComponentCachePage() {
  const data = await getCachedData();
  const pageRenderTime = await getCurrentTime();

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">情境4: Component & Function 層級 Cache</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">說明</h2>
        <p className="text-gray-700 mb-2">
          這個頁面展示如何在 component 和 function 層級使用{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">"use cache"</code> directive。
        </p>
        <p className="text-gray-700 mb-2">
          相比於 page 層級的快取,這種方式提供了更細緻的快取控制。
        </p>
        <p className="text-sm text-gray-600 mt-2">
          頁面本身渲染時間: <span className="font-mono font-bold">{pageRenderTime}</span>
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <CachedComponent />
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <h3 className="font-semibold text-indigo-900 mb-2">
            快取的 Function
          </h3>
          <p className="text-indigo-700 mb-2">
            這個函數使用了 <code className="bg-indigo-100 px-2 py-1 rounded">"use cache"</code>,
            展示 function 層級的快取。
          </p>
          <p className="text-sm text-indigo-600">
            Function 執行時間: <span className="font-mono font-bold">{data}</span>
          </p>
        </div>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
        <h3 className="font-semibold mb-2">觀察重點</h3>
        <p className="text-gray-700">
          重新整理頁面時,注意三個時間的變化:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
          <li>頁面本身的渲染時間會更新</li>
          <li>Component 的渲染時間可能被快取</li>
          <li>Function 的執行時間可能被快取</li>
        </ul>
      </div>
    </div>
  );
}

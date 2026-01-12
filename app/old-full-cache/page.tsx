import CurrentTime from "@/lib/CurrentTime";
import { cookies } from "next/headers";

export default async function OldFullCachePage() {
  await cookies();
  const renderTime = new Date().toLocaleString();

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">情境1: 舊版 Full Router Cache</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">說明</h2>
        <p className="text-gray-700 mb-2">觀察渲染時間差異</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <h3 className="font-semibold mb-2">頁面渲染時間</h3>
          <p className="text-2xl font-mono text-blue-900">{renderTime}</p>
      </div>
      <CurrentTime />
    </div>
  );
}

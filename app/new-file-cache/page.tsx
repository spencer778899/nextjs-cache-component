import CurrentTime from "@/lib/CurrentTime";
import { cookies } from "next/headers";
import ComponentRenderTime from "./ComponentRenderTime";

export default async function NewFileCachePage() {
  const useCacheComponent = true;

  if(useCacheComponent){
    await cookies();
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">情境3: 新版 file 層級 Cache</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">說明</h2>
        <p className="text-gray-700 mb-2">觀察渲染時間差異</p>
      </div>

      <ComponentRenderTime />
      <CurrentTime />
    </div>
  );
}

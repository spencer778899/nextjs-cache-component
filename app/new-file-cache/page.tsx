import CurrentTime from "@/lib/CurrentTime";
import { connection } from "next/server";
import CacheComponent from "./CacheComponent";

export default async function NewFileCachePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">情境3: 新版 file 層級 Cache</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">說明</h2>
        <p className="text-gray-700 mb-2">觀察渲染時間差異</p>
      </div>
      <CacheComponent
        title="Cache Component 在 Static Rendering Scope 內的渲染時間"
        color="blue"
      />
      <DynamicApiComponent />
      <hr className="my-4" />
      <CurrentTime />
    </div>
  );
}

async function DynamicApiComponent() {
  await connection();
  return (
    <CacheComponent
      title="Cache Component 在 Dynamic Rendering Scope 內的渲染時間"
      color="orange"
    />
  );
}

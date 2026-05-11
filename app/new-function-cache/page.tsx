import CurrentTime from "@/lib/CurrentTime";

export default async function NewFunctionCachePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">情境5: Function 層級 Cache</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">說明</h2>
        <p className="text-gray-700 mb-2">觀察渲染時間差異</p>
      </div>
      <CacheComponent />
      <hr className="my-4" />
      <CurrentTime />
    </div>
  );
}

async function getTime() {
  "use cache";
  return new Date().toLocaleString();
}

async function CacheComponent() {
  const renderTime = await getTime();
  return (
    <div className={"bg-blue-50 border-blue-900 text-blue-900 border-l-4 p-4"}>
      <h3 className="font-semibold mb-2">{"Cache Component 的渲染時間"}</h3>
      <p className="text-2xl font-mono">{renderTime}</p>
    </div>
  );
}

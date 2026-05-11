import CurrentTime from "@/lib/CurrentTime";
import { connection } from "next/server";

export default async function NewComponentCachePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">情境4: Component 層級 Cache</h1>

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

const colorMap = {
  blue: "bg-blue-50 border-blue-900 text-blue-900",
  orange: "bg-orange-50 border-orange-500 text-orange-900",
};

async function CacheComponent({
  title,
  color,
}: {
  title: string;
  color: "blue" | "orange";
}) {
  "use cache";
  const renderTime = new Date().toLocaleString();
  return (
    <div className={`${colorMap[color]} border-l-4 p-4`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-mono">{renderTime}</p>
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

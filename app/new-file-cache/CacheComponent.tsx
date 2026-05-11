"use cache";

const colorMap = {
  blue: "bg-blue-50 border-blue-900 text-blue-900",
  orange: "bg-orange-50 border-orange-500 text-orange-900",
};

export default async function CacheComponent({
  title,
  color,
}: {
  title: string;
  color: "blue" | "orange";
}) {
  const renderTime = new Date().toLocaleString();
  return (
    <div className={`${colorMap[color]} border-l-4 p-4`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-mono">{renderTime}</p>
    </div>
  );
}

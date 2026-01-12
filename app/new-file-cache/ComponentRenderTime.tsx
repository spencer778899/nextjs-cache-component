'use cache'

export default async function ComponentRenderTime() {
    const renderTime = new Date().toLocaleString();
    return (
        <div className="bg-blue-50 border-l-4 border-blue-900 p-4">
            <h3 className="font-semibold mb-2">頁面渲染時間</h3>
            <p className="text-2xl font-mono text-blue-900">{renderTime}</p>
        </div>
    )
}


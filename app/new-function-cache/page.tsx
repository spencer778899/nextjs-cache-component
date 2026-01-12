import CurrentTime from "@/lib/CurrentTime";

export default async function NewFunctionCachePage() {
  const renderTime = await getTime();

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">情境5: Function 層級 Cache</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">說明</h2>
        <p className="text-gray-700 mb-2">觀察渲染時間差異</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-900 p-4">
        <h3 className="font-semibold mb-2">頁面渲染時間</h3>
        <p className="text-2xl font-mono text-blue-900">{renderTime}</p>
      </div>
      <CurrentTime />
    </div>
  );
}

async function getTime(): Promise<string> {
    // make sure to enable cacheComponents in next.config.js
    // 'use cache'
    try {
    const response = await fetch(
      'https://api.timezonedb.com/v2.1/get-time-zone?key=EBEDQK7ETGZK&format=json&by=zone&zone=Asia/Taipei',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch time');
    }

    const data = await response.json();
    
    const timestamp = (data.timestamp - data.gmtOffset) * 1000; 
    const date = new Date(timestamp);
    
    return date.toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  } catch (error) {
    console.error('Error fetching time:', error);
    return '無法獲取時間';
  }
}

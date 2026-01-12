export async function getCurrentTime(): Promise<string> {
  try {
    const response = await fetch(
      'https://api.timezonedb.com/v2.1/get-time-zone?key=EBEDQK7ETGZK&format=json&by=zone&zone=Asia/Taipei',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
      
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

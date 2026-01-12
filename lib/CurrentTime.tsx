'use client'

export default function CurrentTime(){
  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-4">
      <h3 className="font-semibold mb-2">現在時間</h3>
      <p className="text-2xl font-mono text-green-900">{new Date().toLocaleString('en-US')}</p>
    </div>
 )
}
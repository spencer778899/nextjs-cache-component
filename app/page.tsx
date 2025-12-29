import { redirect } from "next/navigation";

export default function Home() {
  // 根據環境變數決定重導向至哪個頁面
  const useCacheComponent = process.env.USE_CACHE_COMPONENT === 'true';
  const targetPage = useCacheComponent ? "/new-page-cache" : "/old-full-cache";
  
  redirect(targetPage);
  return null;
}

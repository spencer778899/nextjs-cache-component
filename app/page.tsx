import { redirect } from "next/navigation";

export default function Home() {
  const useCacheComponent = true;
  const targetPage = useCacheComponent ? "/new-file-cache" : "/old-full-cache";
  
  redirect(targetPage);
}

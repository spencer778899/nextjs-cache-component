process.env.USE_CACHE_COMPONENT === "true" &&  "use cache";

import { getCurrentTime } from "@/lib/time";

export async function getCachedData() {
  return await getCurrentTime();
}

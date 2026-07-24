import rateLimit from "next-rate-limit";
import { NextRequest } from "next/server";

const limiter = rateLimit({
  interval: 60 * 60 * 2 * 1000, // 2 hour
  uniqueTokenPerInterval: 500
});

export async function isRateLimited(
  request: NextRequest,
  limit = 3
): Promise<boolean> {
  try {
    limiter.checkNext(request, limit);
    return false;
  } catch {
    return true;
  }
}

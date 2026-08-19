import { cookies } from "next/headers";
import { verifyToken, TokenPayload } from "./auth";
import { prisma } from "./prisma";

export async function getSessionUser(request?: Request): Promise<(TokenPayload & { id: number }) | null> {
  try {
    let token: string | undefined;

    // 1. Try Next.js cookies API
    try {
      const cookieStore = await cookies();
      token = cookieStore.get("token")?.value;
    } catch {
      // Ignore if outside cookie context
    }

    // 2. Fallback to request headers
    if (!token && request) {
      const authHeader = request.headers.get("authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7).trim();
      } else {
        const rawCookie = request.headers.get("cookie");
        if (rawCookie) {
          const match = rawCookie.match(/(?:^|;\s*)token=([^;]+)/);
          if (match) {
            token = decodeURIComponent(match[1]);
          }
        }
      }
    }

    if (!token) return null;

    const payload = verifyToken(token);
    if (!payload || !payload.id) return null;

    return payload as TokenPayload & { id: number };
  } catch {
    return null;
  }
}

export async function getEffectiveUserId(request?: Request): Promise<number | null> {
  const session = await getSessionUser(request);
  if (!session) return null;

  // If admin, allow query param override (?userId=X)
  if (session.role === "admin" && request) {
    const { searchParams } = new URL(request.url);
    const queryUserId = searchParams.get("userId");
    if (queryUserId) {
      const parsed = parseInt(queryUserId, 10);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }
  }

  return session.id;
}

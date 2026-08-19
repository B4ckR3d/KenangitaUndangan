import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const dbUrl = process.env.DATABASE_URL || "file:./dev.db";
  const adapter = new PrismaBetterSqlite3({ url: dbUrl });
  return new PrismaClient({ adapter });
}

export const prisma: PrismaClient = (() => {
  const existing = globalForPrisma.prisma;
  if (!existing || !(existing as any).transaction) {
    const created = createPrismaClient();
    globalForPrisma.prisma = created;
    return created;
  }
  return existing;
})();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

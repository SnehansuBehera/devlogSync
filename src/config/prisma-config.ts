import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

const client = new PrismaClient({
  ...( {
    __internal: {
      engine: {
        statementCacheSize: 0
      }
    }
  } as any )
}).$extends(withAccelerate())

const prisma = globalForPrisma.prisma || client

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma

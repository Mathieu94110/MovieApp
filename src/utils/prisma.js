import { PrismaClient } from '@prisma/client'

const globalPrisma = global;
export const prisma = globalPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
    globalPrisma.prisma = prisma;
}

export default prisma
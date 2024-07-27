import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUserService = async (data: {
  name: string;
  email: string;
}) => {
  return prisma.user.create({ data });
};

export const getUsersService = async () => {
  return prisma.user.findMany();
};

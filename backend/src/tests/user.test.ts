import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('User', () => {
  it('should create a new user', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
  });
});

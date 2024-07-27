import { Request, Response } from 'express';
import { createUserService, getUsersService } from '../services/userService';

export const createUser = async (req: Request, res: Response) => {
  const user = await createUserService(req.body);
  res.status(201).json(user);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersService();
  res.status(200).json(users);
};

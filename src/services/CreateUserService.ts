import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/Users';

interface Request {
  name: string;
  email: string;
  telephone: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    telephone,
    password,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExistsByEmail = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExistsByEmail) {
      throw new AppError('Email address already used.');
    }

    const checkUserExistsByTelephone = await usersRepository.findOne({
      where: { telephone },
    });

    if (checkUserExistsByTelephone) {
      throw new AppError('Telephone number already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      telephone,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;

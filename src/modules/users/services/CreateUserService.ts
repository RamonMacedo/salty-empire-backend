import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/Users';

interface IRequest {
  name: string;
  email: string;
  telephone: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    telephone,
    password,
  }: IRequest): Promise<User> {
    const checkUserEmailExists = await this.usersRepository.findByEmail(email);

    if (checkUserEmailExists) {
      throw new AppError('Email address already used.');
    }

    const checkUserTelephoneExists = await this.usersRepository.findByTelephone(
      telephone,
    );

    if (checkUserTelephoneExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      telephone,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;

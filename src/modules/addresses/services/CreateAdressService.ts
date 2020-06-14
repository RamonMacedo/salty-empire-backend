import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import AppError from 'shared/errors/AppError';

import IUsersRepository from 'modules/users/repositories/IUsersRepository';

import Address from '../infra/typeorm/entities/Addresses';

interface Request {
  user_id: string;
  description: string;
  address: string;
  address_number: string;
  complement: string;
}

class CreateAdressService {

  @injectable()
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ){}

  public async execute({
    user_id,
    description,
    address,
    address_number,
    complement,
  }: Request): Promise<Address> {
    const adressRepository = getRepository(address);
    const checkUserExistsByAdress = await adressRepository.findOne(user_id);

    if (checkUserExistsByAdress) {
      throw new AppError('address already used.');
    }

    const adress = adressRepository.create({
      user_id,
      description,
      address,
      address_number,
      complement,
    });

    await adressRepository.save(address);

   return Address;
  }

}
export default CreateAdressService;



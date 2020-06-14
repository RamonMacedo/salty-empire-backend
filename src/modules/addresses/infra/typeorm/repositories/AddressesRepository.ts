import { getRepository, Repository } from 'typeorm';
import AppError from '@shared/errors/AppError';

import IAddressesRepository from '@modules/addresses/repositories/IAddressesRepository';
import ICreateAddressDTO from '@modules/addresses/dtos/ICreateAddressDTO';

import Address from '../entities/Addresses';

class AddressesRepository implements IAddressesRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async findById(user_id: string): Promise<Address[] | undefined> {
    const addresses = await this.ormRepository.find({ where: { user_id } });

    if (!addresses) {
      throw new AppError('Addresses not found');
    }

    const findAddress = addresses.map((address: Address) => {
      // eslint no-param-reassign
      delete address.user.password;
      return address;
    });

    return findAddress;
  }

  public async create(addressData: ICreateAddressDTO): Promise<Address> {
    const address = this.ormRepository.create(addressData);

    await this.ormRepository.save(address);

    delete address.user;

    return address;
  }

  public async save(address: Address): Promise<Address> {
    return this.ormRepository.save(address);
  }
}

export default AddressesRepository;

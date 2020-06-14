import { inject, injectable } from 'tsyringe';

import IAddressesRepository from '@modules/addresses/repositories/IAddressesRepository';

import Address from '../infra/typeorm/entities/Addresses';

interface IRequest {
  user_id: string;
  description: string;
  address: string;
  address_number: string;
  complement?: string;
}

@injectable()
class CreateAddressService {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository,
  ) {}

  public async execute({
    user_id,
    description,
    address,
    address_number,
    complement,
  }: IRequest): Promise<Address> {
    const addressC = await this.addressesRepository.create({
      user_id,
      description,
      address,
      address_number,
      complement,
    });

    await this.addressesRepository.save(addressC);

    return addressC;
  }
}
export default CreateAddressService;

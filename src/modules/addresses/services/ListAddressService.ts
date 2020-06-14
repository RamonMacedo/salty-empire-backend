import { inject, injectable } from 'tsyringe';

import IAddressesRepository from '@modules/addresses/repositories/IAddressesRepository';

import Address from '../infra/typeorm/entities/Addresses';

interface IRequest {
  id: string;
}

@injectable()
class ListAddressesService {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Address[] | undefined> {
    const addresses = await this.addressesRepository.findById(id);

    return addresses;
  }
}

export default ListAddressesService;

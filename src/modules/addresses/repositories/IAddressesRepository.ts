import Address from '../infra/typeorm/entities/Addresses';
import ICreateAddressDTO from '../dtos/ICreateAddressDTO';

export default interface IAddressesRepository {
  findById(id: string): Promise<Address[] | undefined>;
  create(date: ICreateAddressDTO): Promise<Address>;
  save(address: Address): Promise<Address>;
}

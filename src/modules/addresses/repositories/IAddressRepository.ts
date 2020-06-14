import Addresses from '../infra/typeorm/entities/Addresses';
import User from 'modules/users/infra/typeorm/entities/Users';
import ICreateAddressDTO from '../dtos/ICreateAddressDTO';


export default interface IAddressRepository{
  findById(user_id:string):Promise<User|undefined>;
}

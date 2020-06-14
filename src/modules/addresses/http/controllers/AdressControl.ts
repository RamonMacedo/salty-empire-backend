import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAddressService from '@modules/addresses/services/CreateAdressService';

export default class AddressController{
  public async create(request: Request, response: Response): Promise<Response> {
    const { description,address,address_number,complement } = request.body
    const user_id= request.user.id;

    const createaddress = container.resolve(CreateAddressService);

    const adress = await createaddress.execute({
      user_id,
      description,
      address,
      address_number,
      complement
    });

    return response.json(adress);
  }
}

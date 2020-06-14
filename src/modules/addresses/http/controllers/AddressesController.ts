import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAddressService from '@modules/addresses/services/CreateAddressService';
import ListAddressService from '@modules/addresses/services/ListAddressService';

export default class AddressController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description, address, address_number, complement } = request.body;
    const user_id = request.user.id;

    const createaddress = container.resolve(CreateAddressService);

    const addressC = await createaddress.execute({
      user_id,
      description,
      address,
      address_number,
      complement,
    });

    return response.json(addressC);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const findaddress = container.resolve(ListAddressService);

    const address = await findaddress.execute({ id });

    return response.json(address);
  }
}

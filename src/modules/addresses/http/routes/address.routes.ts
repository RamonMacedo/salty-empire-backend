import { Router } from 'express';

import ensureAuthenticated from '@modules/users/http/middlewares/ensureAuthenticated';

import AddressesController from '../controllers/AddressesController';

const addressRouter = Router();
const addressesController = new AddressesController();

addressRouter.post('/', ensureAuthenticated, addressesController.create);
addressRouter.get('/', ensureAuthenticated, addressesController.list);

export default addressRouter;

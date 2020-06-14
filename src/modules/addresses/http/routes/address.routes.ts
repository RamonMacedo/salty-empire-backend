import { Router } from 'express';
import AddressController from '../controllers/AdressControl';

import ensureAuthenticated from 'modules/addresses/http/middlewares/ensureAuthenticated';

const adressSession = Router();
const adressController = new AddressController();

adressSession.post('/',ensureAuthenticated, adressController.create);

export default adressSession;

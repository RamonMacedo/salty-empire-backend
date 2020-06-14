import { Router } from 'express';

import usersRouter from '@modules/users/http/routes/users.routes';
import sessionsRouter from '@modules/users/http/routes/sessions.routes';
import categoriesRouter from '@modules/categories/http/routes/categories.routes';
import addressRouter from '@modules/addresses/http/routes/address.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/categories', categoriesRouter);
routes.use('/address', addressRouter);

export default routes;

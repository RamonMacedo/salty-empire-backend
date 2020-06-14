import { Router } from 'express';

import usersRouter from '@modules/users/http/routes/users.routes';
import sessionsRouter from '@modules/users/http/routes/sessions.routes';
import categoriesRouter from '@modules/categories/http/routes/categories.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/categories', categoriesRouter);

export default routes;

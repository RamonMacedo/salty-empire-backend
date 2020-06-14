import { Router } from 'express';
// import multer from 'multer';

// import uploadConfig from '@config/upload';

import CategoriesController from '../controllers/CategoriesController';
// import UserAvatarController from '../controllers/UserAvatarController';

// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const categoriesRouter = Router();
const categoriesController = new CategoriesController();
// const userAvatarController = new UserAvatarController();
// const upload = multer(uploadConfig);

categoriesRouter.post('/', categoriesController.create);

// usersRouter.patch(
//   '/avatar',
//   ensureAuthenticated,
//   upload.single('avatar'),
//   userAvatarController.update,
// );

export default categoriesRouter;

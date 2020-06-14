import { Router } from 'express';
// import multer from 'multer';

// import uploadConfig from '@config/upload';
import ensureAuthenticated from '@modules/users/http/middlewares/ensureAuthenticated';
import CategoriesController from '../controllers/CategoriesController';
// import UserAvatarController from '../controllers/UserAvatarController';

// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const categoriesRouter = Router();
const categoriesController = new CategoriesController();
// const userAvatarController = new UserAvatarController();
// const upload = multer(uploadConfig);

categoriesRouter.post('/', ensureAuthenticated, categoriesController.create);

// usersRouter.patch(
//   '/avatar',
//   ensureAuthenticated,
//   upload.single('avatar'),
//   userAvatarController.update,
// );

export default categoriesRouter;

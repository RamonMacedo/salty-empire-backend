import { inject, injectable } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

import Category from '../infra/typeorm/entities/Categories';

interface IRequest {
  name: string;
  icon_svg: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({ name, icon_svg }: IRequest): Promise<Category> {
    const category = await this.categoriesRepository.create({
      name,
      icon_svg,
    });

    return category;
  }
}

export default CreateCategoryService;

import Category from '../infra/typeorm/entities/Categories';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

export default interface ICategoriesRepository {
  findById(id: string): Promise<Category | undefined>;
  create(date: ICreateCategoryDTO): Promise<Category>;
  save(category: Category): Promise<Category>;
}

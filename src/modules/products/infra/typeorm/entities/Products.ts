import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Categories from '@modules/categories/infra/typeorm/entities/Categories';

@Entity('products')
class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category_id: string;

  // Relaciona o id da categoria
  // Essa linha serve pra quando fizermos uma consulta no banco
  // pela categoria, ela nos retorne todos os products dela!
  @ManyToOne(() => Categories, categories => categories.id, { eager: true })
  @JoinColumn({ name: 'categories_id' })
  categories: Categories;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  value: number;

  @Column()
  product_image: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Products;

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
}

export type Category = 'burfi' | 'ladoo' | 'all-season' | 'winter-delicacy';

export interface CategoryItem {
  id: Category;
  label: string;
  image: string;
}

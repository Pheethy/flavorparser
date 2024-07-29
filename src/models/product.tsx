export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
  categories_id: number;
  categories: Categories;
  images: Image[];
}
export interface Image {
  id: string;
  filename: string;
  url: string;
  product_id: string;
  created_at: string;
  updated_at: string;
}
export interface Categories {
  id: number;
  title: string;
}

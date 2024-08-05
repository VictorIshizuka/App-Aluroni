import { ICategory } from "./Category";

export interface IPrato {
  id: number;
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  category: ICategory;
}

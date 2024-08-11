import { ImageModel } from "./ImageModel";

export interface Product {
  id: number;
  quantity: number,
  name: string;
  category: string;
  price: number;
  imgUrl:  ImageModel
}

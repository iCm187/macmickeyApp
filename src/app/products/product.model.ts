export interface Product {
  productID: number;
  name: string;
  productType: ProductType;
  unitPrice: number;
  description?: string;
  stockpiled: number;
}

export enum ProductType {
  Burger = 'burger',
  Side = 'side',
  Beverage = 'beverage',
  Dessert = 'dessert',
}

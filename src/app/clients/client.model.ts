export interface Client {
  clientID: string;
  email: string;
  addresses: Address[];
}

export interface Address {
  addressID: string;
  streetLine1: string;
  streetLine2?: string;
  zipCode: string;
  city: string;
  phone: string;
  countryID: number;
  clientID: string;
}

export interface Country {
  countryID: number;
  name: string;
  shortName: string;
}

export enum OrderState {
  WaitingConfirmation = 'En attente de confirmation',
  Confirmed = 'Confirmée',
  InProgress = 'En cours',
  Completed = 'Terminée',
  Cancelled = 'Annulée',
}

export interface OrderDetail {
  orderDetailID: number;
  quantity: number;
  unitPrice: number;
  productID: number;
  orderID: number;
}

export interface Order {
  orderID: number;
  orderDetails: OrderDetail[];
  orderState: OrderState;
  creationDateTime: string;
  lastModifiedDateTime: string;
  clientID: string;
}

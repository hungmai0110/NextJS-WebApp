export interface CartItem {
  id: number;
  name: string;
  images: string[];
  price: number;
  promo_price: number;
  discount: string;
  type: string;
  gender: string;
  quantity?: number;
}

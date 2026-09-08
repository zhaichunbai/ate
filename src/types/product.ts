export interface Product {
  id: string;
  title: string;
  price?: number;
  currency?: string;
  supplierId?: string;
  imageUrl?: string;
  url?: string;
}

export interface ProductSku {
  id: string;
  productId: string;
  name: string;
  price?: number;
  stock?: number;
  attributes?: Record<string, string>;
}

export interface Supplier {
  id: string;
  name: string;
  location?: string;
  yearsInBusiness?: number;
}

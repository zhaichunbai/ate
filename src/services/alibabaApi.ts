import type { Product, ProductSku, Supplier } from "../types/product.js";

export class AlibabaApiService {
  async searchProducts(query: string): Promise<Product[]> {
    void query;
    throw new Error("Alibaba API adapter is not connected yet. Configure an authorized 1688/Alibaba API integration.");
  }

  async getProductDetail(productId: string): Promise<Product> {
    void productId;
    throw new Error("Alibaba API adapter is not connected yet.");
  }

  async getProductSkus(productId: string): Promise<ProductSku[]> {
    void productId;
    throw new Error("Alibaba API adapter is not connected yet.");
  }

  async getSupplier(supplierId: string): Promise<Supplier> {
    void supplierId;
    throw new Error("Alibaba API adapter is not connected yet.");
  }
}

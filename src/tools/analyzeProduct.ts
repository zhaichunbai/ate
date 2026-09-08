import type { Product, ProductSku } from "../types/product.js";

export function analyzeProduct(product: Product, skus: ProductSku[]) {
  const prices = skus.map((sku) => sku.price).filter((price): price is number => typeof price === "number");
  return {
    productId: product.id,
    title: product.title,
    skuCount: skus.length,
    minSkuPrice: prices.length ? Math.min(...prices) : null,
    maxSkuPrice: prices.length ? Math.max(...prices) : null,
    status: "analysis-ready"
  };
}

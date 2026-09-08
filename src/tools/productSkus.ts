import { AlibabaApiService } from "../services/alibabaApi.js";
export const getProductSkus = async (productId: string) => new AlibabaApiService().getProductSkus(productId);

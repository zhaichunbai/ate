import { AlibabaApiService } from "../services/alibabaApi.js";
export const getProductDetail = async (productId: string) => new AlibabaApiService().getProductDetail(productId);

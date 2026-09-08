import { AlibabaApiService } from "../services/alibabaApi.js";
export const searchProducts = async (query: string) => new AlibabaApiService().searchProducts(query);

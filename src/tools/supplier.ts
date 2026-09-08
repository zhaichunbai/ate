import { AlibabaApiService } from "../services/alibabaApi.js";
export const getSupplier = async (supplierId: string) => new AlibabaApiService().getSupplier(supplierId);

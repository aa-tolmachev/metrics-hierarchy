import {
	Configuration,
	Product,
	ProductApi,
} from "../../../../../hierarchy-metric-client";
import { configuration } from "../../../../frontend/configuration";
import { useGetRequest } from "../../useGetRequest";

/**
 * Gets products list.
 * @param {Configuration} options - API's configuration
 */
export const useGetProducts = (options?: Configuration | undefined) => {
	const api = new ProductApi(configuration);
	const request = useGetRequest<Product[]>(() => api.productsGet(options));
	return request;
};

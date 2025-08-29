import axios, { type AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[];
}
const apiInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	headers: {
		"Content-Type": "application/json",
	},
	params: {
		key: "410d8b3d615e4fa6ae6ac9dffcab79d2",
	},
});

export default class ApiClient<T> {
	endpoint: string;
	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
	get(config: AxiosRequestConfig) {
		return apiInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	}
}

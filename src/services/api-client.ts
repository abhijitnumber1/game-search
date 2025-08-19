import axios from "axios";

export const apiClient = axios.create({
	baseURL: "https://api.rawg.io/api",
	headers: {
		"Content-Type": "application/json",
	},
	params: {
		key: "410d8b3d615e4fa6ae6ac9dffcab79d2",
	},
});

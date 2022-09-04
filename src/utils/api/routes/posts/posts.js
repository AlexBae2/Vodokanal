import { instance as $api } from "../../index.js";
import endpoints from "../endpoints.js";

export const getPosts = () => {
	return $api.get(endpoints.posts.root, {
		params: {
			limit: 10,
		},
	});
};

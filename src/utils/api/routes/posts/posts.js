import { instance as $api } from "../../index.js";
import endpoints from "../endpoints.js";

export const getPosts = (currentPage = 1) => {
  return $api.get(endpoints.posts.root, {
    params: {
      _limit: 10,
      _page: currentPage,
    },
  });
};

export const getAllPosts = () => {
  return $api.get(endpoints.posts.root);
};

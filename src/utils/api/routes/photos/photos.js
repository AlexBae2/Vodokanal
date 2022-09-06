import { instance as $api } from "../../index.js";
import endpoints from "../endpoints.js";

export const getAllPhotos = () => {
  return $api.get(endpoints.photos.root);
};

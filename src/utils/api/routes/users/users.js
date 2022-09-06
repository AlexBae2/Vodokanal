import { instance as $api } from "../../index.js";
import endpoints from "../endpoints.js";

export const getAllUsers = () => {
  return $api.get(endpoints.users.root);
};

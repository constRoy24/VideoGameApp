import axios from "axios";

export type FetchResponse<T> = {
  count: number;
  results: T[];
};

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1a9ec1e73264dc8a7954f742b8d83ee",
  },
});

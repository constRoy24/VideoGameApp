import axios, { AxiosRequestConfig } from "axios";

export type FetchResponse<T> = {
  count: number;
  results: T[];
};
const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1a9ec1e73264dc8a7954f742b8d83ee",
  },
});

class APIclient <T> {
  endpoint: string

  constructor(endpoint : string) {
    this.endpoint = endpoint

  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data)
  } 
}

export default APIclient
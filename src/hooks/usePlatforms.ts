import { useQuery } from "@tanstack/react-query";
// import useData, { FetchResponse } from "./useData";

import { FetchResponse } from "../services/api-client";
import APIclient from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APIclient<Platform>('/platforms/lists/parents')

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

// const usePLatforms = () => useData<Platform>("/platforms/lists/parents");

const usePLatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, //24hrs
  initialData: {count: platforms.length, results: platforms}
})

export default usePLatforms;



// const useGenres = () => useQuery({
//   queryKey: ['genres'],
//   queryFn: () =>
//      apiClient
//   .get<FetchResponse<Genre>>(`/genres`)
//   .then(res => res.data),
//   staleTime: 24 * 60 * 60 * 1000, //24hrs
//   initialData: {count : genres.length, results: genres}
// })
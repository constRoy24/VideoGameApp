import { useQuery } from "@tanstack/react-query";
// import useData, { FetchResponse } from "./useData";

import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

// const usePLatforms = () => useData<Platform>("/platforms/lists/parents");

const usePLatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () =>
    apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
  .then(res => res.data),
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
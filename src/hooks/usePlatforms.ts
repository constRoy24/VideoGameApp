import { useQuery } from "@tanstack/react-query";
// import useData, { FetchResponse } from "./useData";

import ms from "ms";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIclient from "../services/api-client";

const apiClient = new APIclient<Platform>('/platforms/lists/parents')

// const usePLatforms = () => useData<Platform>("/platforms/lists/parents");

const usePLatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: platforms
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
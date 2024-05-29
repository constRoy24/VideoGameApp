import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import genres from "../data/genres";
import apiClient from "../services/api-client";


export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () =>
     apiClient
  .get<FetchResponse<Genre>>(`/genres`)
  .then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, //24hrs
  initialData: {count : genres.length, results: genres}
})

export default useGenres;

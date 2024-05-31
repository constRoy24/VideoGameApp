import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";

import ms from 'ms'

import genres from "../data/genres";
import APIclient from "../services/api-client";

const apiClient = new APIclient<Genre>('/genres')

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData:genres
})

export default useGenres;

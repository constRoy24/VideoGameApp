import {  useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIclient, { FetchResponse } from "../services/api-client";

import { Platform } from "./usePlatforms";

const apiClient = new APIclient<Game>('/games')

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

const useGames = (gameQuery: GameQuery) => useInfiniteQuery
<FetchResponse<Game>, Error>
({ 
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => 
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        },
      }),
      getNextPageParam: (lastpage, allpages) => {
        return lastpage.next ?  allpages.length + 1 : undefined
      }
  
  })
  

  

export default useGames;

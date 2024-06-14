import { useInfiniteQuery } from "@tanstack/react-query";
// import { GameQuery } from "../App";
import APIclient, { FetchResponse } from "../services/api-client";

import ms from "ms";
import Game from "../entities/Game";
import useGameQueryStore from "../store";

const apiClient = new APIclient<Game>('/games')

const useGames = () => 
  {
    const gameQuery = useGameQueryStore((s=> s.gameQuery))

   return useInfiniteQuery
  <FetchResponse<Game>, Error>
  ({ 
      queryKey: ['games', gameQuery],
      queryFn: ({pageParam = 1}) => 
        apiClient.getAll({
          params: {
            genres: gameQuery.genreId,
            platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
          },
        }),
        getNextPageParam: (lastpage, allpages) => {
          return lastpage.next ?  allpages.length + 1 : undefined
        },
    staleTime: ms('24h')
    })
  }
  

  

export default useGames;

import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import  Screenshot  from "../entities/Screenshot";



const useScreenshot = (gameId : number) => 
    
    {
        const apiClient = new APIclient<Screenshot>(`/games/${gameId}/screenshots`)
        
      return  useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
    })

    }
    export default useScreenshot
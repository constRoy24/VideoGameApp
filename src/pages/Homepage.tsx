import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import GameGrid from "../components/GameGrid";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Homepage = () => {
    return(
        <Grid
        templateAreas={{
          base: ` "main"`,
          lg: ` "aside main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
       
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              // selectedGenreId={gameQuery.genreId}
              // onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <GameHeading  />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                // selectedPlatformId={gameQuery.platformId}
                // onSelecPlatform={(platform) =>
                //   setGameQuery({ ...gameQuery, platformId: platform.id })
                // }
              />
              <SortSelector
                // sortOrder={gameQuery.sortOrder}
                // onSelectSortOrder={(sortOrder) =>
                //   setGameQuery({ ...gameQuery, sortOrder })
                // }
              />
            </HStack>
          </Box>
          <GameGrid 
          // gameQuery={gameQuery}
           />
        </GridItem>
      </Grid>
    )
}

export default Homepage
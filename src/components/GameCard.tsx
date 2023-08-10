import { HStack, Image, Text, Card, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconlist from "./PlatformIconlist";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <PlatformIconlist
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
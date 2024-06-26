import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePLatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";



const PlatformSelector = () => {
  const { data, error } = usePLatforms();

  const setSelectedPlatformId = useGameQueryStore((s=> s.setPlatformId))
  const selectedPlatformId = useGameQueryStore((s=> s.gameQuery.platformId))

  const selectedPlatform = usePlatform(selectedPlatformId)
 


  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              onClick={() => setSelectedPlatformId(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;

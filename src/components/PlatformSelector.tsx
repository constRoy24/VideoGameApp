import {

  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePLatforms, {Platform} from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";


type Props = {
  onSelecPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
};
const PlatformSelector = ({ onSelecPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePLatforms();
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
              onClick={() => onSelecPlatform(platform)}
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

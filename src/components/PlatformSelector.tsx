import {

  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePLatforms, {Platform} from "../hooks/usePlatforms";


type Props = {
  onSelecPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
};
const PlatformSelector = ({ onSelecPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePLatforms();

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

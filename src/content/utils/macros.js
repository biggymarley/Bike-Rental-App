import { PedalBikeOutlined } from "@mui/icons-material";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
export const ROLES = {
  USER: "user",
  MANAGER: "manager",
};

export const BIKESCOLORS = [
  "#5FAD56",
  "#009D90",
  "#F56D1D",
  "#F2C14E",
  "#9DACFF",
  "#FFC09F",
];

export const SEARCHOPTIONS = [
  {
    id: "modal",
    type: "text",
    icon: <PedalBikeOutlined sx={{ zIndex: -1 }} />,
  },
  {
    id: "location",
    type: "text",
    icon: <LocationOnRoundedIcon sx={{ zIndex: -1 }} />,
  },
  {
    id: "color",
    type: "menu",
    menuItems: BIKESCOLORS,
    icon: <ColorLensRoundedIcon sx={{ zIndex: -1 }} />,
  },
  {
    id: "rating",
    type: "menu",
    icon: <StarRoundedIcon sx={{ zIndex: -1 }} />,
  },
];

import { AppBar as MuiAppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DRAWER_WIDTH } from "../utils/appConstants";

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const styles = {
  root: {
    display: "flex",
  },
  navButtons: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
  },
  button: {
    margin: "0 0.5rem !important",
  },
};

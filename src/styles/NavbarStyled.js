import sizes from "./mediaQueries";
import { styled } from "@mui/material/styles";

export const NavbarStyled = styled("header")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flexStart",
  height: "6vh",
  "& .logo": {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  "& .slider": {
    width: "340px",
    margin: "0 20px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":
      {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none !important",
        width: "13px",
        height: "13px",
        marginLeft: "-7px",
        marginTop: "-3px",
      },
    [sizes.down("sm")]: {
      width: "150px",
    },
  },
  "& .select-container": {
    marginLeft: "auto",
    marginRight: "1rem",
  },
});

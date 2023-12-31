import { styled } from "@mui/material/styles";
import sizes from "./mediaQueries";
import bg from "./svg/bg.svg";

export const PaletteListStyled = styled("div")({
  "@global": {
    ".fade-exit": {
      opacity: "1",
    },
    ".fade-exit-active": {
      opacity: "0",
      transition: "opacity 5000ms ease-out",
    },
  },
  height: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  /* background by SVGBackgrounds.com */
  backgroundImage: `url(${bg})`,
  overflow: "scroll",
  "& .container": {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  "& .nav": {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
      fontWeight: 600,
    },
    "& h1": {
      fontSize: "2rem",
    },
  },
  "& .palettes": {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
    },
  },
});

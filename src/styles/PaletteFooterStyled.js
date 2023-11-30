/* eslint-disable import/no-anonymous-default-export */
import { styled } from "@mui/material/styles";

export const PaletteFooterStyled = styled("footer")({
  backgroundColor: "#fff",
  height: "5vh",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  fontWeight: "bold",
  "& .emoji": {
    fontSize: "1.5rem",
    margin: "0 1rem",
  },
});

export default {
  PaletteFooter: {
    backgroundColor: "#fff",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "0 1rem",
  },
};

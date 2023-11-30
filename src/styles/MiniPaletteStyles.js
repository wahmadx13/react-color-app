import { styled } from "@mui/material/styles";

export const MiniPaletteStyled = styled("div")({
  backgroundColor: "white",
  borderRadius: "5px",
  border: "1px solid black",
  padding: "0.5rem",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover svg": {
    opacity: "1",
  },
  "& .colors": {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  "& .title": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  "& .emoji": {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  "& .mini-color": {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
  "& .delete-icon": {
    color: "#ffffff",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0",
    top: "0",
    padding: "10px",
    zIndex: "10",
    opacity: "0",
    transition: "all 0.3s ease-in-out !important",
  },
});

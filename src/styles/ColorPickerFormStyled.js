import { styled } from "@mui/system";

export const ColorPickerFormStyled = styled("div")({
  "& .picker": {
    width: "100% !important",
    marginTop: "2rem",
  },
  "& .add-color": {
    width: "100%",
    padding: "1rem !important",
    marginTop: "1rem !important",
    fontSize: "1rem !important",
  },
  "& color-name-input": {
    width: "100%",
    height: "70px",
  },
});

const styles = {
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColor: {
    width: "100%",
    padding: "1rem !important",
    marginTop: "1rem !important",
    fontSize: "1rem !important",
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
  },
};

export default styles;

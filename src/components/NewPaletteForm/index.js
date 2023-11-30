import React, { Component } from "react";
import {
  Box,
  Button,
  Drawer,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { arrayMoveImmutable } from "array-move";
import DraggableColorList from "../DraggableColorList";
import PaletteFormNav from "../PaletteFormNav";
import ColorPickerForm from "../ColorPickerForm";
import {
  Main,
  DrawerHeader,
  NewPaletteFormStyled,
} from "../../styles/NewPaletteFormStyled";
import seedColors from "../../utils/seedColors";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: seedColors[0].colors,
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleAddNewColor = this.handleAddNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSavePalette = this.handleSavePalette.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleAddNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSavePalette(newPalette) {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  deleteColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ colors }) => ({
      colors: arrayMoveImmutable(colors, oldIndex, newIndex),
    }));
  }

  clearColors() {
    this.setState({ colors: [] });
  }

  addRandomColor() {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicate = true;
    while (isDuplicate) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicate = this.state.colors.some(
        // eslint-disable-next-line no-loop-func
        (color) => color.name === randomColor.name
      );
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  }

  render() {
    const { open, colors } = this.state;
    const { maxColors, palettes } = this.props;
    const paletteIsFull = colors.length >= maxColors;
    return (
      <Box sx={{ display: "flex" }}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSavePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <NewPaletteFormStyled>
          <Drawer
            className='drawer-paper'
            variant='persistent'
            anchor='left'
            open={open}>
            <DrawerHeader>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <div className='container'>
              <Typography variant='h4' gutterBottom>
                Design Your Palette
              </Typography>
              <div className='buttons'>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={this.clearColors}
                  className='button'>
                  Clear Palette
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={paletteIsFull}
                  onClick={this.addRandomColor}
                  className='button'>
                  Random Color
                </Button>
              </div>
              <ColorPickerForm
                paletteIsFull={paletteIsFull}
                addNewColor={this.handleAddNewColor}
                colors={colors}
              />
            </div>
          </Drawer>
        </NewPaletteFormStyled>
        <Main open={open}>
          <DrawerHeader />
          <DraggableColorList
            colors={colors}
            deleteColor={this.deleteColor}
            axis='xy'
            onSortEnd={this.onSortEnd}
            distance={20}
          />
        </Main>
      </Box>
    );
  }
}

export default NewPaletteForm;

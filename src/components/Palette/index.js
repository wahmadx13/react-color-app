import React, { Component } from "react";
import Navbar from "../Navbar";
import ColorBox from "../ColorBox";
import PaletteFooter from "../PaletteFooter";
import { PaletteStyled } from "../../styles/PaletteStyled";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(value) {
    this.setState({ format: value });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    return (
      <PaletteStyled>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors={true}
        />
        <div className='colors'>
          {colors[level].map((color) => (
            <ColorBox
              key={color.id}
              background={color[format]}
              name={color.name}
              moreUrl={`/palette/${id}/${color.id}`}
              showingFullPalette
            />
          ))}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </PaletteStyled>
    );
  }
}

export default Palette;

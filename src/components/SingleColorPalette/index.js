import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import ColorBox from "../ColorBox";
import PaletteFooter from "../PaletteFooter";
import { PaletteStyled } from "../../styles/PaletteStyled";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorFilterBy) {
    let shades = [];
    const allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorFilterBy)
      );
    }
    return shades.slice(1);
  }

  changeFormat(value) {
    this.setState({ format: value });
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    return (
      <PaletteStyled>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className='colors'>
          {this._shades.map((color) => (
            <ColorBox
              key={color.name}
              name={color.name}
              background={color[format]}
              showingFullPalette={false}
            />
          ))}
          <div className='go-back'>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </PaletteStyled>
    );
  }
}

export default SingleColorPalette;

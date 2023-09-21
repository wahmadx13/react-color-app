import React, { Component } from "react";
import ColorBox from "../ColorBox";
import "../../styles/Palette.css";

class Palette extends Component {
  render() {
    return (
      <div className='Palette'>
        <div className='Palette-colors'>
          {this.props.colors.map((color) => (
            <ColorBox background={color.color} name={color.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Palette;

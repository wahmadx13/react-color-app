import React, { Component } from "react";
import Navbar from "../Navbar";
import ColorBox from "../ColorBox";
import "../../styles/Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    return (
      <div className='Palette'>
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className='Palette-colors'>
          {colors[level].map((color) => (
            <ColorBox background={color.hex} name={color.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Palette;

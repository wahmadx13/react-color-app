import React, { Component } from "react";
import ColorBox from "../ColorBox";
import Slider from "rc-slider";
import "../../styles/Palette.css";
import "rc-slider/assets/index.css";

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
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={this.changeLevel}
        />
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

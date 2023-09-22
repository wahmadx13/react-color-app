import React, { Component } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../../styles/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ format: evt.target.value });
    this.props.handleChange(evt.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>Reactcolorpicker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <FormControl variant='standard' sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id='select-component-label'>
              Select Color Format
            </InputLabel>
            <Select
              labelId='select-component-label'
              id='select-component'
              onChange={this.handleChange}
              value={format}>
              <MenuItem value='hex'>HEX - #ffffff</MenuItem>
              <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
              <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 0.3)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </header>
    );
  }
}

export default Navbar;

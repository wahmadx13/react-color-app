import React, { Component } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "../../styles/NavbarStyles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(evt) {
    this.setState({ format: evt.target.value, open: true });
    this.props.handleChange(evt.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, showingAllColors, classes } = this.props;
    const { format, open } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to='/'>Reactcolorpicker</Link>
        </div>
        {showingAllColors && (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <FormControl variant='standard' sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id='select-component-label'>
              Select Color Format
            </InputLabel>
            <Select
              labelId='select-component-label'
              id='select-component'
              onChange={this.handleFormatChange}
              value={format}>
              <MenuItem value='hex'>HEX - #FFFFFF</MenuItem>
              <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
              <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 0.3)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id='message-id'>
              Format Changed To: {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'>
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);

import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Navbar from "../Navbar";
import ColorBox from "../ColorBox";
import "../../styles/Palette.css";

const styles = {
  Palette: {
    height: "100vh",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "87%",
  },
};

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
    const { classes } = this.props;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors={true}
        />
        <div className={classes.colors}>
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
        <footer className='Palette-footer'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Palette);

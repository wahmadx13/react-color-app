import React, { PureComponent } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { MiniPaletteStyled } from "../../styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  deletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  handleClick() {
    this.props.goToPalette(this.props.id);
  }

  render() {
    const { paletteName, emoji, colors } = this.props;
    return (
      <MiniPaletteStyled onClick={this.handleClick}>
        <DeleteIcon className='delete-icon' onClick={this.deletePalette} />
        <div className='colors'>
          {colors.map((color) => (
            <div
              className='mini-color'
              style={{ backgroundColor: color.color }}
              key={color.name}
            />
          ))}
        </div>
        <h5 className='title'>
          {paletteName} <span className='emoji'>{emoji}</span>
        </h5>
      </MiniPaletteStyled>
    );
  }
}

export default MiniPalette;

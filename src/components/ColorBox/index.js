import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { ColorBoxStyled } from "../../styles/ColorBoxStyled";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background, moreUrl, showingFullPalette } =
      this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <ColorBoxStyled
          showingFullPalette={showingFullPalette}
          background={background}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show-overlay"}`}
          />
          <div className={`copy-message ${copied && "show-message"}`}>
            <h1>Copied!</h1>
            <p className='copy-text'>{background}</p>
          </div>
          <div>
            <div className='box-content'>
              <span className='color-name'>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className='see-more'>MORE</span>
            </Link>
          )}
        </ColorBoxStyled>
      </CopyToClipboard>
    );
  }
}
// export default withStyles(styles)(ColorBox);
export default ColorBox;

import React from "react";
import { PaletteFooterStyled } from "../../styles/PaletteFooterStyles";

function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <PaletteFooterStyled>
      {paletteName}
      <span className='emoji'>{emoji}</span>
    </PaletteFooterStyled>
  );
}

export default PaletteFooter;

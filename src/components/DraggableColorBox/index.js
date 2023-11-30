import React from "react";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@mui/icons-material/Delete";
import { DraggableColorBoxStyled } from "../../styles/DraggableColorBoxStyled";

const DraggableColorBox = SortableElement((props) => {
  const { handleClick, name, color } = props;
  return (
    <DraggableColorBoxStyled background={color}>
      <div className='box-content'>
        <span>{name}</span>
        <span>
          <DeleteIcon className='delete-icon' onClick={handleClick} />
        </span>
      </div>
    </DraggableColorBoxStyled>
  );
});

export default DraggableColorBox;

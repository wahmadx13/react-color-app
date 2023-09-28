import React, { Component } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Dialog, DialogTitle } from "@mui/material";

class EmojiPicker extends Component {
  render() {
    const { open, emojiSelect, hideForm } = this.props;
    return (
      <div>
        <Dialog open={open} onClose={hideForm}>
          <DialogTitle>Pick a Palette Emoji</DialogTitle>
          <Picker theme='light' data={data} onEmojiSelect={emojiSelect} />
        </Dialog>
      </div>
    );
  }
}

export default EmojiPicker;

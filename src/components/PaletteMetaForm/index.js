import React, { Component } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import EmojiPicker from "../EmojiPicker";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: "",
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }

  savePalette(emoji) {
    this.props.handleSubmit({
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    });
    this.setState({ stage: "" });
  }

  render() {
    const { hideForm } = this.props;
    const { stage, newPaletteName } = this.state;
    return (
      <div>
        <EmojiPicker
          open={stage === "emoji"}
          emojiSelect={this.savePalette}
          hideForm={hideForm}
        />
        <Dialog open={stage === "form"} onClose={hideForm}>
          <DialogTitle>Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette. Pleas make
                sure it's unique
              </DialogContentText>
              <TextValidator
                label='Palette Name'
                name='newPaletteName'
                value={newPaletteName}
                onChange={this.handleChange}
                fullWidth
                variant='filled'
                margin='normal'
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Name already used"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm}>Cancel</Button>
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;

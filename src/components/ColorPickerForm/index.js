import React, { Component } from "react";
import { Button } from "@mui/material";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ColorPickerFormStyled } from "../../styles/ColorPickerFormStyled";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "teal", newColorName: "" };
    this.handleUpdateCurrentColor = this.handleUpdateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(({ name }) => {
        return name.toLowerCase() !== value.toLowerCase();
      })
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleUpdateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <ColorPickerFormStyled>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.handleUpdateCurrentColor}
          className='picker'
        />
        <ValidatorForm
          onSubmit={this.handleSubmit}
          ref='form'
          instantValidate={false}>
          <TextValidator
            className='color-name-input'
            label='Color Name'
            variant='filled'
            margin='normal'
            fullWidth
            value={newColorName}
            onChange={this.handleChange}
            name='newColorName'
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used!",
            ]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            disabled={paletteIsFull}
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor,
            }}
            className='add-color'>
            {paletteIsFull ? "Palette is full" : "Add Colors"}
          </Button>
        </ValidatorForm>
      </ColorPickerFormStyled>
    );
  }
}

export default ColorPickerForm;

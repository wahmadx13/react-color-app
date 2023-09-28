import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColor: {
    width: "100%",
    padding: "1rem !important",
    marginTop: "1rem !important",
    fontSize: "1rem !important",
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
  },
};

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
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.handleUpdateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
          <TextValidator
            className={classes.colorNameInput}
            variant='filled'
            margin='normal'
            placeholder='Color Name'
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
            className={classes.addColor}>
            {paletteIsFull ? "Palette is full" : "Add Colors"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
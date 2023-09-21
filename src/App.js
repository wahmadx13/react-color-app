import React, { Component } from "react";
import Palette from "./components/Palette";
import seedColors from "./utils/seedColors";
import { generatePalette } from "./utils/colorHelpers";

export default class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

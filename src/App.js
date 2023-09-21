import React, { Component } from "react";
import Palette from "./components/Palette";
import seedColors from "./utils/seedColors";

export default class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

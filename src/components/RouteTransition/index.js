import React from "react";
import "../../styles/RouteTransition.css";

function RouteTransition({ children }) {
  return <section className='page'>{children}</section>;
}

export default RouteTransition;

import React from "react";
import Checkbox from "./Checkbox";
import StarRating from "./StarRating";

function UseState() {
  return (
    <div>
      <h1>useState()</h1>
      <div className="bordered">
        <Checkbox />
      </div>
      <div className="bordered">
        <StarRating />
      </div>
    </div>
  );
}

export default UseState;

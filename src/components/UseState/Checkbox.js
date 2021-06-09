import React, { useState } from "react";

function UseState() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}

export default UseState;

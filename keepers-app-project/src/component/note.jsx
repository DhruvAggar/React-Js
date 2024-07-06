import React from "react";

function Note() {
  return (
    <div>
      <div className="note">
        <h1 contentEditable="true">This is the title</h1>
        <p contentEditable="true">this is paragraph</p>
      </div>
      <div className="note">
        <h1 contentEditable="true">This is the title</h1>
        <p contentEditable="true">this is paragraph</p>
      </div>
    </div>
  );
}

export default Note;

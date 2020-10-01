import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input name="title" type = "text" onChange = {props.handleOneNote} value = {props.oneNoteTitle} placeholder="Title"/>
        <textarea name="content" type="text" onChange = {props.handleOneNote} value = {props.oneNoteContent} placeholder="Take a note..." rows="3" />
        <button onClick={props.addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        
          <input
            type="text"
            placeholder="some awesome note"
            autoComplete="off"
            className="notes__title-input"
          />
          <textarea
            placeholder="what happened today"
            id=""
            cols="30"
            rows="10"
            className="notes__textarea"
          ></textarea>
          <div className="notes__images">
            <img
              src="https://i.pinimg.com/originals/85/54/8b/85548ba300845eec0254830d722413d8.png"
              alt="arbol"
            />
          </div>

        
      </div>
    </div>
  );
};

export default NoteScreen;

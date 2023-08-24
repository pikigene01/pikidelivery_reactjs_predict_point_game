import React from "react";
import "./Notes.css";
import { AppContext } from "../contexts/AppProvider";

export default function Notes() {
  const {
    isHide,
    setIsHide,
    formValues,
    setFormValues,
    handleFormChange,
    handleFormSubmit,
    notes
  } = React.useContext(AppContext);
  return (
    <div className="wrapper">
      <div className="note_app">
        <div className="note_header">
          <h1>ReactJS Youtube Notepad App</h1>
        </div>
        <div className="note_body">
          {notes?.map((note)=>(
          <div className="note">
            <h3>{note?.title}</h3>
            <p>{note?.description}</p>
          </div>
          ))}
          {notes?.length <= 0 && (
            <h1>Notes Not Found</h1>
          )}
        </div>
        <button className="add_note btn" onClick={(e) => setIsHide(!isHide)}>
          Add Note
        </button>
      </div>
      {!isHide && (
        <div className="add_note_modal">
          <div className="modal_wrapper">
            <div className="modal_header">
              <div>Add Note</div>
              <div className="hide_modal" onClick={(e) => setIsHide(!isHide)}>
                Hide
              </div>
            </div>
            <div className="modal_body">
              <form className="form" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="title"
                  value={formValues?.title}
                  onChange={handleFormChange}
                  className="input"
                  placeholder="Enter Note Title "
                />
                <textarea
                  rows="8"
                  value={formValues?.description}
                  onChange={handleFormChange}
                  name="description"
                  className="input"
                  placeholder="Enter Note Body"
                ></textarea>
                <button type="submit" className="btn">
                  Save Note
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

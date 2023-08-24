import React, { createContext, useState } from "react";
import useLocalStorage from "../services/useLocalStorage";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isHide, setIsHide] = useState(true);
  const [formValues, setFormValues] = useState({});
  const [notes, setNotes] = useLocalStorage("notes", []);

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formValues?.title.length < 4 || formValues?.description.length < 6)
      return;
    setNotes([
      ...notes,
      { title: formValues?.title, description: formValues?.description },
    ]);
    setFormValues({
      title: "",
      description: "",
    });
    setIsHide(true);
  };

  const values = {
    isHide,
    setIsHide,
    formValues,
    setFormValues,
    handleFormChange,
    handleFormSubmit,
    notes
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

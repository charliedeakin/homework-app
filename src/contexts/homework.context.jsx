import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const HomeworkContext = createContext({
  homework: [],
  addHomework: () => {},
  updateHomework: () => {},
  removeHomework: () => {},
});

export const HomeworkProvider = ({ children }) => {
  const [homework, setHomework] = useState([
    
  ]);

  const addHomework = (values) => {
    values._id = nanoid();
    setHomework([...homework, values]);
  };

  const updateHomework = (id, updates) => {
    // Get index
    const index = homework.findIndex((homework) => homework._id === id);
    // Get actual homework
    const oldHomework = homework[index];

    let newHomework = {
      ...oldHomework,
      ...updates,
    };

    // recreate the homework array
    const updatedHomework = [
      ...homework.slice(0, index),
      newHomework,
      ...homework.slice(index + 1),
    ];

    setHomework(updatedHomework);
  };

  const removeHomework = (id) => {
    // Get index
    const index = homework.findIndex((homework) => homework._id === id);

    // recreate the homework array
    const updatedHomework = [
      ...homework.slice(0, index),
      ...homework.slice(index + 1),
    ];

    setHomework(updatedHomework);
  };

  return (
    <HomeworkContext.Provider
      value={{
        homework,
        addHomework,
        updateHomework,
        removeHomework,
      }}
    >
      {children}
    </HomeworkContext.Provider>
  );
};

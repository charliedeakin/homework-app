import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const HomeworkContext = createContext({
  homeworks: [],
  addHomework: () => {},
  updateHomework: () => {},
  removeHomework: () => {},
});

export const HomeworkProvider = ({ children }) => {
  let [homeworks, setHomeworks] = useState([
    
  ]);

  const addHomework = (data) => {
    data._id = nanoid();
    setHomeworks = ([...homeworks, data]);
  };


  const updateHomework = (id, updates) => {
    const index = homeworks.findIndex((homework) => homework._id === id);

    const oldHomework = homeworks[index];

    let newHomework = {
        ...oldHomework,
        ...updates,
    };

    const updatedHomeworks = [
        ...homeworks.slice(0, index),
        newHomework,
        ...homeworks.slice(index +1),
    ];

    setHomeworks(updatedHomeworks);
  };


  const removeHomework = (id) => {
    const index = homeworks.findIndex((homework) => homework._id === id);
    
    const updatedHomeworks = [
        ...homeworks.slice(0, index),        
        ...homeworks.slice(index +1),
    ];

    setHomeworks(updatedHomeworks);
  };

  return (
    <HomeworkContext.Provider
      value={{
        homeworks,
        addHomework,
        updateHomework,
        removeHomework,
      }}
    >
      {children}
    </HomeworkContext.Provider>
  );
};

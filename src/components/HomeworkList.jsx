import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { HomeworkContext } from "./../contexts/homework.context";

function HomeworkList() {
  const { homework, removeHomework } = useContext(HomeworkContext);

  if (homework.length === 0) return <p>You don't have any homework! 🥳 </p>;

  return (
    <ul>
      {homework.map(({ subject, title, task, _id }) => (
        <li key={_id}>
          {subject}, 
          {title},
          {task}
          <IconButton aria-label="delete" onClick={() => removeHomework(_id)}>
            <DeleteIcon />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}

export default HomeworkList;
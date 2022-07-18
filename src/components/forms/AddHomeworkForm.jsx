import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HomeworkContext } from "../../contexts/homework.context";

const schema = yup.object().shape({
  subject: yup.string(),
  title: yup.string(),
  task: yup.string(),
});

const defaultValues = {
  subject: "",
  title: "",
  task: "",
};

export default function HomeworkForm() {
  let navigate = useNavigate();
  const { addHomework } = useContext(HomeworkContext);

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  const { isDirty, isValid, isSubmitting, errors } = formState;

  const submitFn = (data) => {
    console.log(data);
    addHomework(data);
    reset();
    navigate("/viewhomework");
  };

  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <div>
        <label htmlFor="subject">Subject: </label>
        <input
          type="text"
          subject="subject"
          id="subject"
          {...register("subject")}
        />
        {errors.subject && (
          <label htmlFor="subject" role="alert" className="error">
            {errors.subject?.message}
          </label>
        )}
      </div>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" title="title" id="title" {...register("title")} />
        {errors.title && (
          <label htmlFor="title" role="alert" className="error">
            {errors.title?.message}
          </label>
        )}
      </div>
      <div>
        <label htmlFor="task">Task: </label>
        <input type="text" name="task" id="task" {...register("task")} />
        {errors.task && (
          <label htmlFor="task" role="alert" className="error">
            {errors.task?.message}
          </label>
        )}
      </div>
      <div>
        <button type="reset" onClick={() => reset()}>
          Reset
        </button>
        <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
          Submit
        </button>
      </div>
    </form>
  );
}

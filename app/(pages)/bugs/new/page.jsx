"use client";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "@/app/components/ErrorMessage";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Spinner } from "@/app/components/Spinner";
import { useState } from "react";

const NewIssuePage = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    e.preventDefault;
    console.log("data changed");
  };

  const handleSubmit = async () => {
    await fetch("/api/issues", { method: "POST", body: data })
      .then((resp) => {
        setSubmitting(true), router.push("/issues");
      })
      .catch((err) => {
        setSubmitting(false),
          err && console.log("An unexpected error occured.");
      });
  };

  return (
    <article>
      <form
        className='flex flex-col mx-auto gap-3 max-w-[500px]'
        onSubmit={handleSubmit}
      >
        <input
          className='rounded-md p-2 border'
          id='title'
          name='title'
          type='text'
          placeholder='Title'
          onChange={handleChange}
        />
        <select
          className='rounded-md p-2 border bg-transparent'
          name='status'
          id='status'
          onChange={handleChange}
        >
          <option value='Open'>Open</option>
          <option value='In progress'>In progress</option>
          <option value='Resolves'>Resolved</option>
        </select>
        <div>
          <input
            type='radio'
            name='priority'
            id='priority'
            value={"Low"}
            onChange={handleChange}
            checked
          />
          Low
          <input
            type='radio'
            name='priority'
            id='priority'
            value={"Mediuem"}
            onChange={handleChange}
            checked
          />
          Medium
          <input
            type='radio'
            name='priority'
            id='priority'
            value={"High"}
            onChange={handleChange}
            checked
          />
          High
        </div>
        <SimpleMDE
          className='rounded-md p-2 border resize-y'
          id='issue'
          name='issue'
          placeholder='State the issue here'
          onChange={handleChange}
        />
        <button
          disabled={submitting}
          className='btn w-max flex gap-3 items-center disabled:bg-slate-500'
        >
          Create New Issue {submitting && <Spinner />}
        </button>
      </form>
    </article>
  );
};

export default NewIssuePage;

"use client"

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

function NewIssuePage() {
  const {register, control} = useForm<IssueForm>()
  const router = useRouter()

  const onSubmit = (data) => {
    fetch("/api/issues", data)
    .then((resp) => router.push("/issues"))
    .catch(err => console.error(err))
  }

  return (
    <form className="flex flex-col mx-auto gap-3 max-w-[500px]" onSubmit={onSubmit}>
      <input className="rounded-md p-2 border" type="text" placeholder='Title' {...register("title")} />
      <Controller name="description" control={control} render={({field}) => <SimpleMDE className="rounded-md p-2 border resize-y" placeholder='State the issue here' {...field} />} />
      
      <button className="btn w-max">Create New Issue</button>
    </form>
  )
}

export default NewIssuePage
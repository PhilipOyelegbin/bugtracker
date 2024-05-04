"use client"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function NewIssuePage() {
  return (
    <form className="flex flex-col mx-auto gap-3 max-w-[500px]">
      <input className="rounded-md p-2 border" type="text" placeholder='Title' />
      <SimpleMDE className="rounded-md p-2 border resize-y" name="" id="" cols={30} rows={10} placeholder='State the issue here' />
      <button className="btn w-max">Create New Issue</button>
    </form>
  )
}

export default NewIssuePage
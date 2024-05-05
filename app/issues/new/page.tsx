"use client"

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { issueSchema } from "../../validationSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { toast } from "react-toastify";

type IssueForm = yup.InferType<typeof issueSchema>;

function NewIssuePage() {
  const router = useRouter()
  const {register, control, handleSubmit, formState: {errors}} = useForm<IssueForm>({ resolver: yupResolver(issueSchema) })
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = handleSubmit((data) => {
    fetch("/api/issues")
    .then((resp) => {
      setSubmitting(true),
      router.push("/issues")
    })
    .catch(err => {
      setSubmitting(false),
      err && toast.error("An unexpected error occured.")
    })
  })

  return (
    <article>
      <form className="flex flex-col mx-auto gap-3 max-w-[500px]" onSubmit={onSubmit}>
        <input className="rounded-md p-2 border" type="text" placeholder='Title' {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller name="description" control={control} render={({field}) => <SimpleMDE className="rounded-md p-2 border resize-y" placeholder='State the issue here' {...field} />} />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <button disabled={submitting} className="btn w-max flex gap-3 items-center disabled:bg-slate-500">Create New Issue {submitting && <Spinner/>}</button>
      </form>
    </article>
  )
}

export default NewIssuePage
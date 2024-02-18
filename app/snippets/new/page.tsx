import { db } from '@/app/db'
import React from 'react'

export default function SnippetsCreatePage(formData:FormData) {
    
  async function createSnippets(){
     'use server'
     const title=formData.get("title") as string
     const code=formData.get("code") as string

     const snippets=await db.snippet.create({
      data:{
        title,
        code
      }
     })
  }

    return (
        <form action={createSnippets}>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full"
              id="title"
            />
          </div>
  
          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className="border rounded p-2 w-full"
              id="code"
            />
          </div>
  
          <button type="submit" className="rounded p-2 bg-blue-200">
            Create
          </button>
        </div>
      </form>
    )
}

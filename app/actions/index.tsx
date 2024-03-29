'use server'


import { redirect } from "next/navigation"
import { db } from "../db"
import { revalidatePath } from "next/cache"

export async function editSnippet(id:number,code:string){
  await db.snippet.update({
    where:{id},
    data:{code}
  })
  
  revalidatePath(`/snippets/${id}`)
  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id:number){
    await db.snippet.delete({
        where:{id}
    })

    revalidatePath("/")
    redirect("/")
}

export async function createSnippets(formState:{message:string},formData:FormData){

    const title=formData.get("title") 
    const code=formData.get("code") 
    
    if(typeof title !=='string' || title.length <3){
        return{
            message:'Title must be longer'
        }
    }

    if(typeof code !=='string'  || code.length<10){
        return{
            message:'Code must be longer'
        }
    }

    const snippets=await db.snippet.create({
     data:{
       title,
       code
     }
    })

    revalidatePath("/")
    redirect("/")
 }
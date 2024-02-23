import SnippetsEditFrom from "@/app/components/snippet-edit-form"
import { db } from "@/app/db"
import { notFound } from "next/navigation"

interface SnippetediptpageProps{
    params:{id:string}
}

export default async function SnippeteditPage(props:SnippetediptpageProps) {
    const id=+props.params.id
    const snippet=await db.snippet.findFirst({
        where:{id}
    })
    if(!snippet){
        return notFound()
    }
    return (
        <>
        <SnippetsEditFrom snippet={snippet} />

        </>
    )
}

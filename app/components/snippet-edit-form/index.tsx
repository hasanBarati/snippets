"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/app/actions";

interface SnippetsEditFormProps {
  snippet: Snippet;
}

export default function SnippetsEditFrom({ snippet }: SnippetsEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetActions = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />

      <form action={editSnippetActions}>
        <button className="p-2 border rounded">Save</button>
      </form>
      {snippet.title}
    </>
  );
}

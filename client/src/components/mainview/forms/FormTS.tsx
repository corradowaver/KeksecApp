import React, { useRef, useState } from "react";
import Editor from '@monaco-editor/react';
import "./FormTS.css"

interface PassedProps extends React.Props<string> {
  code: string
}

const FormTS: React.FC<PassedProps> = (props: any) => {
const [code, setCode] = useState<string>(props.code)
const [isEditorReady, setIsEditorReady] = useState(false);
const valueGetter = useRef();

function handleEditorDidMount(_valueGetter: any) {
  setIsEditorReady(true);
  valueGetter.current = _valueGetter;
}
console.log(code, props.code)
  return (
   <div className="FormTS">
      <Editor
        width="40vw"
        height="70vh"
        language="typescript"
        theme="dark"
        options={{readOnly: true}}
        value={code}
        editorDidMount={handleEditorDidMount}
      />
    </div>
  );
}

export default FormTS;

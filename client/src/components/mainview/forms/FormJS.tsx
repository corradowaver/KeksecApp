import React, { useRef, useState } from "react";
import Editor from '@monaco-editor/react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormJS: React.FC = (props: any) => {
const [isEditorReady, setIsEditorReady] = useState(false);
const valueGetter = useRef();
function handleEditorDidMount(_valueGetter: any) {
  setIsEditorReady(true);
  valueGetter.current = _valueGetter;
}

const [code, setCode] = useState<string>("console.log('kek(')")

function runCompilation(): void {
  alert(valueGetter.current());
}

  return (
    <div>
      <div className="FormJS">
        <Editor
          width="40vw"
          height="70vh"
          language="typescript"
          theme="dark"
          value={code}
          editorDidMount={handleEditorDidMount}
        />
      </div>
      <Button className="CompileButton" variant="outline-danger" onClick={runCompilation}>
        Compile
      </Button>
    </div>
  );
}

export default FormJS;

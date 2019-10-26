import React from "react";
import "./Mainview.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./forms/FormJS"
import Button from 'react-bootstrap/Button';
import FormJS from "./forms/FormJS";
import FormTS from "./forms/FormTS";
// import Compiler from "./compileform/Compiler"

const Mainview: React.FC = (props: any) => {
  const [text] = React.useState<string>("")

  function runCompilation(e: React.MouseEvent): void {
    console.log(text)
  }

  return (
    <div className="Mainview">
      <div className="InputForms">
        <FormJS propToPass={text}/>
        <FormTS/>
      </div>
      <Button className="CompileButton" variant="outline-danger" onClick={runCompilation}>
        Compile
      </Button>
      {/* <div className="compilerForm">
        <Compiler/>
      </div> */}
    </div>
  );
}

export default Mainview;
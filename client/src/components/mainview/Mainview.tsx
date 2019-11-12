import React from "react";
import "./forms/FormJS";
import FormJS from "./forms/FormJS";
import FormTS from "./forms/FormTS";
import "./Mainview.css";

const Mainview: React.FC = (props: any) => {
  const [JSCode, setJSCode] = React.useState<string>("default")
  const [TSCode, setTSCode] = React.useState<string>("some code")
  
  return (
    <div className="Mainview">
      <div className="InputForms">
        <FormJS/>
        <FormTS code={TSCode}/>
      </div>
    </div>
  );
}

export default Mainview;
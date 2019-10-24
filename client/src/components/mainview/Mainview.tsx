import React from "react";
import "./Mainview.css"
import "./forms/FormJS"
import FormJS from "./forms/FormJS";
import FormTS from "./forms/FormTS";

const Mainview: React.FC = () => {
  return (
    <div className="Mainview">
      <div className="InputForms">
        <FormJS/>
        <FormTS/>
      </div>
    </div>
  );
}

export default Mainview;
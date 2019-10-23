import React from "react";
import "./Mainview.scss"
import "./inputforms/FormJS"
import FormJS from "./inputforms/FormJS";
import FormTS from "./inputforms/FormTS";

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
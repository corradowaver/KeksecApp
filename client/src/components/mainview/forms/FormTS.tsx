import React from "react";
import Prism from 'prismjs';
import "./FormTS.css"
import "../../../prism.css"

Prism.highlightAll();

var code:string = 'console.log("kek")'

const FormTS: React.FC = () => {
  return (
   <div className="FormTS">
      <pre>
        <code className="language-javascript">
          {code}
        </code>
      </pre>
    </div>
  );
}

export default FormTS;

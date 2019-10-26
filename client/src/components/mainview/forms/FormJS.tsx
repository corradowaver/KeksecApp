import React from "react";
import "./FormJS.css"

interface PassedProps extends React.Props<string> {
  propToPass: string
}

const FormJS: React.FC<PassedProps> = (props: any) => {
 
  function handleInput(): void {
  }

  return (
    <div className="FormJS">
        <textarea id="mytextArea" className="InputForm" onInput={handleInput}>
          {props.propToPass}
        </textarea>
    </div>
  );
}

export default FormJS;

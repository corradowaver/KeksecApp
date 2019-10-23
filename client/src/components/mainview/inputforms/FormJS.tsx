import React from "react";
import "./FormJS.scss"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FormJS: React.FC = () => {
  return (
    <div className="FormJS">
       <SyntaxHighlighter language="js" style={okaidia}>
        console.log(kek)
        var kek = "lol"
      </SyntaxHighlighter>
    </div>
  );
}

export default FormJS;

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";

import { useEffect, useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
function Editor() {
  const [html, sethtml] = useState("");

  const HandleChange = (editor, data, value) => {
    sethtml(value);
  };

  const [srcDoc, SetsrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      SetsrcDoc(`<html>
      <body>${html}</body>
      </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html]);

  return (
    <>
      <div className="w-full h-auto flex justify-center  items-center p-20 ">
        <div className=" w-6/12 h-4/5 m-2 relative rounded-md bg-gray-300 flex-col items-center">
          <div className="h-12 w-full bg-black text-white flex items-center justify-between px-5">
            <div>HTML</div>
            <button className="bg-green-700 hover:bg-green-300 w-2/12 h-10 rounded-lg focus:outline-none text-bold">
              run
            </button>
          </div>
          <ControlledEditor
            value={html}
            onBeforeChange={HandleChange}
            options={{
              lineEditoring: true,
              lineNumbers: true,
              mode: "xml",
              theme: "material",
            }}
          />
        </div>
        <div className=" m-7 w-6/12  h-80">
          <div className="h-12 w-full bg-black text-white flex items-center justify-between px-5 -my-5 rounded-xl">
            OUTPUT:
          </div>
          <iframe
            srcDoc={srcDoc}
            title="ouput"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="mt-6"
          />
        </div>
      </div>
    </>
  );
}

export default Editor;

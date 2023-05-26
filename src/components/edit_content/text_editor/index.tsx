import "draft-js/dist/Draft.css";

import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";

import { Core } from "@/components";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
interface ITextEditorProps {}

const TextEditor: React.FunctionComponent<ITextEditorProps> = (_props) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  const [value, setValue] = useState<string>("");
  console.log("value", value);
  return (
    <>
      <QuillNoSSRWrapper
        className="editor"
        modules={modules}
        formats={formats}
        theme="snow"
        style={{ marginTop: "8px", borderBottom: "1px solid #aaa" }}
        value={value}
        onChange={setValue}
      />
      <Flex justifyContent={"flex-end"}>
        <Core.Button btnOrange button={"Submit"} className={"mt-[10px]"} />
      </Flex>
    </>
  );
};

export default TextEditor;

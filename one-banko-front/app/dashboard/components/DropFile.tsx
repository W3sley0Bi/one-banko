"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import { IconUpload } from "@tabler/icons-react";
import { Button } from "@nextui-org/react";
import axios from "axios";
import {getToken} from "../../auth/getToken"

export default function DropFile(props: any) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <>
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    </>
  ));

  const submit = async () => {
    const form = new FormData();
    console.log(acceptedFiles[0]);
    form.append("file", acceptedFiles[0]);

    let token = await getToken()

    let res = await axios.post(
      `${process.env.NEXT_PUBLIC_PYTHON_SERVER}/extractor`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization" : token,
        },
      }
    );
      
    console.log(res);
    console.log(res.data);
    console.log(JSON.parse(res.data.content))
  };

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div
          style={{
            border: "3px solid white",
            borderStyle: "dashed",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconUpload stroke={2} />
          <p>Drop your bank statement over here</p>
        </div>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      <Button onClick={submit}>Submit</Button>
    </section>
  );
}

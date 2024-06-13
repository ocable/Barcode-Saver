import { Outlet } from "react-router-dom";
import { useState } from "react";

import "./index.css";


export default function Root() {
    const [result, setResult] = useState({});
    //const {format, setFormat} = useState("");
  

  return (
    <>
      <main>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        <Outlet context={[result, setResult]}/>
      </main>
    </>
  );
}

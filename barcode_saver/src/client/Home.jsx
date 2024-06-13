import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Barcode from "react-barcode";

import "./index.css";

function Home() {
  const [result] = useOutletContext();
  

  return (
    <>
      <h1>Barcodes</h1>
      <Barcode value={result.code} format={result.format} height={100} />
    </>
  );
}

export default Home;

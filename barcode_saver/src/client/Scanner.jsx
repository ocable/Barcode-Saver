import { useState } from "react";
import { useZxing } from "react-zxing";
import { useNavigate, useOutletContext } from "react-router-dom";

import "./index.css";

function Scanner() {
  const formats = [
    /** Aztec 2D barcode format. */
    "AZTEC",
    /** CODABAR 1D format. */
    "CODABAR",
    /** Code 39 1D format. */
    "CODE39",
    /** Code 93 1D format. */
    "CODE93",
    /** Code 128 1D format. */
    "CODE128",
    /** Data Matrix 2D barcode format. */
    "DATAMATRIX",
    /** EAN-8 1D format. */
    "EAN8",
    /** EAN-13 1D format. */
    "EAN13",
    /** ITF (Interleaved Two of Five) 1D format. */
    "ITF",
    /** MaxiCode 2D barcode format. */
    "MAXICODE",
    /** PDF417 format. */
    "PDF417",
    /** QR Code 2D barcode format. */
    "QRCODE",
    /** RSS 14 */
    "RSS14",
    /** RSS EXPANDED */
    "RSSEXPANDED",
    /** UPC-A 1D format. */
    "UPC",
    /** UPC-E 1D format. */
    "UPC",
    /** UPC/EAN extension format. Not a stand-alone format. */
    "UPCEANEXTENSION",
  ];

  const [result, setResult] = useOutletContext();
  //const {format, setFormat} = useOutletContext();
  const navigate = useNavigate();

  const { ref } = useZxing({
    onDecodeResult(newResult) {
      const res = newResult.getText();
      const format = formats[newResult.getBarcodeFormat()];
      setResult({ code: res, format: format });

      navigate("/");
    },
  });

  return (
    <>
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result.code}</span>
      </p>
      <p>{result.format}</p>
    </>
  );
}

export default Scanner;

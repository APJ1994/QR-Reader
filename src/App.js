import React, { useState} from "react";
import QrReader from 'modern-react-qr-reader'
import "./style.css";

export default function App() {
  const [result, setResult] = useState("No result");
  let handleScan = data => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = err => {
    console.error(err);
    // alert(err);
  };
  return (
    <div>
      <QrReader
        delay={500}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        facingMode="environment"
      />
      <p>{result}</p>
    </div>
  );
}

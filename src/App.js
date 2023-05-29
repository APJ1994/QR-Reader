import React, { useState,useEffect} from "react";
import QrReader from 'modern-react-qr-reader'
// import "./style.css";
import axios from 'axios';
import {Button,Typography} from '@material-ui/core';

export default function App() {
  const [result, setResult] = useState(" ");
  const[errorMessage,setErrorMessage]=useState(" ");
  let handleScan =(data) => {
    if (data && result !==data) {
      setResult(data);
    }
  };

  let handleError = err => {
    setErrorMessage(err.message);
  };

  useEffect(()=>{
    const timeout=setTimeout(()=>setResult(''),5000);
    return ()=>clearTimeout(timeout);
  },[result]);

  const submitQRData=async()=>{
    try{
      const response= await axios.post('http://[::1]/training/API/QrRead',{data:result});
      console.log(response.data);
      setResult('');
      setErrorMessage('');
    
  }
  catch(error){
setErrorMessage('Failed to submit QR code data')
  }
}
  return (
    <div>
      <Typography variant="h4" align='center'>QR Code Scanner</Typography>
      <QrReader
        delay={500}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%",maxWidth:'400px',margin:'20px auto'}}
        facingMode="environment"
      />
      {result && (
        <div>
          <Typography variant="h5" align='center'>Result:</Typography>
          <Typography>{result}</Typography>
        </div>
      )}
      {!result && (
        <div>
          <Typography variant="h5" align='center'>Please Scan QR Code Using the Camera Above </Typography>
        </div>
      )}
      <Typography align='center'>
      <Button  
              variant="contained"
              color="primary"
       onClick={submitQRData}>Submit</Button>
       </Typography>
      {errorMessage && <p>{errorMessage}</p>}
      

    </div>
  );

  }
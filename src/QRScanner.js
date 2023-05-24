import React,{useState} from 'react'
import {QrReader} from 'react-qr-reader';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const QRScanner = () => {

    const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Container>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '300px', marginBottom: '20px' }}
      />
      <p>{result}</p>
    </Container>
  )
}

export default QRScanner
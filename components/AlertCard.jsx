import React, { isValidElement, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertCard({ isValidRef, error}) {
  const [show, setShow] = useState(true);
  function close(){
    // setShow(false)
    isValidRef.current = true;
  }

  if (show) {
    return (
      <Alert variant="danger" onClose={close} dismissible>
        <Alert.Heading>{error}</Alert.Heading>
      </Alert>
    );
  }
}
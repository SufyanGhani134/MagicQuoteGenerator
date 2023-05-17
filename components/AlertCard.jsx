import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertCard({ error}) {
  const [show, setShow] = useState(true);
  function close(){
    setShow(false)
  }

  if (show) {
    return (
      <Alert variant="danger" onClose={close} dismissible>
        <Alert.Heading>{error}</Alert.Heading>
      </Alert>
    );
  }
}
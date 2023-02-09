
import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import { useState } from 'react';
function Calculator() {
  const [show, setShow] = useState(true);
  return (<div>
    <AwesomeButton type="primary" onPress={() => setShow((s) => !s)}>Click Me!</AwesomeButton>
    <div className="calculator" style={{ visibility: show ? "visible" : "hidden" }}>
    
    </div>
  </div>
  );
}

export default Calculator;
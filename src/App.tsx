import React from "react";
import "./App.css";
import { Button, TextField } from "@navikt/ds-react";

function App() {
  return (
    <div className="App">
      <TextField
        className="hvordan-permittere"
        label="Hvorfor permitterer du ansatte?"
      />
      <Button
        onClick={() => {
          window.print();
        }}
      >
        Lagre som PDF
      </Button>
    </div>
  );
}

export default App;

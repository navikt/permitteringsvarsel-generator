import React, { useState } from "react";
import "./App.css";
import { Heading, Radio, RadioGroup, TextField } from "@navikt/ds-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PermitteringsvarselPDF from "./pdf/PermitteringsvarselPDF";

const App = () => {
  const [hvem, setHvem] = useState<string>();
  const [hvorfor, setHvorfor] = useState<string>();
  const [datoForVarsel, setDatForVarsel] = useState<string>();
  const [startdato, setStartdato] = useState<string>();
  const [sluttdato, setSluttdato] = useState<string>();
  const [permitteringsgrad, setPermitteringsgrad] = useState<number>();
  const [stillingsgrad, setStillingsgrad] = useState<number>();
  const [ansattdato, setAnsattdato] = useState<string>();
  const [enighet, setEnighet] = useState<boolean>();

  return (
    <div className="App">
      <Heading size="large" spacing>
        Lag permitteringsvarsel
      </Heading>

      <TextField
        label="Hvem skal permitteres?"
        value={hvem}
        onChange={(event) => {
          setHvem(event.target.value);
        }}
      />
      <TextField
        label="Hvorfor?"
        value={hvorfor}
        onChange={(event) => {
          setHvorfor(event.target.value);
        }}
      />
      <TextField
        label="Dato for varsel"
        value={datoForVarsel}
        onChange={(event) => {
          setDatForVarsel(event.target.value);
        }}
      />
      <TextField
        label="Dato for permitteringsstart"
        value={startdato}
        onChange={(event) => {
          setStartdato(event.target.value);
        }}
      />
      <TextField
        label="Dato for permitteringsslutt"
        value={sluttdato}
        onChange={(event) => {
          setSluttdato(event.target.value);
        }}
      />
      <TextField
        label="Stillingsgrad"
        value={stillingsgrad}
        onChange={(event) => {
          setStillingsgrad(parseInt(event.target.value));
        }}
      />
      <TextField
        label="PermitteringsGrad"
        value={permitteringsgrad}
        onChange={(event) => {
          setPermitteringsgrad(parseInt(event.target.value));
        }}
      />
      <TextField
        label="Ansattsdato"
        value={ansattdato}
        onChange={(event) => {
          setAnsattdato(event.target.value);
        }}
      />
      <RadioGroup legend="Er partene enige">
        <Radio value="ja" onClick={() => setEnighet(true)}>
          Ja
        </Radio>
        <Radio value="nei" onClick={() => setEnighet(false)}>
          Nei
        </Radio>
      </RadioGroup>

      <PDFDownloadLink
        className="navds-button navds-button--primary"
        document={
          <PermitteringsvarselPDF
            hvem={hvem}
            hvorfor={hvorfor}
            datoForVarsel={datoForVarsel}
            startDato={startdato}
            sluttDato={sluttdato}
            permitteringsGrad={permitteringsgrad}
            stillingsGrad={stillingsgrad}
            ansattDato={ansattdato}
            enighet={enighet}
          />
        }
        fileName="permitteringsvarsel.pdf"
      >
        {({ blob, url, loading, error }) => "Last ned"}
      </PDFDownloadLink>
    </div>
  );
};

export default App;

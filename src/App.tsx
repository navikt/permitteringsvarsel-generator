import React, { FunctionComponent, useState } from "react";
import "./App.css";
import { Radio, RadioGroup, TextField } from "@navikt/ds-react";
import {
  Page,
  View,
  Document,
  Text,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

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

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    margin: "10rem",
    padding: 10,
    flexGrow: 1,
  },
});

type Props = {
  hvem?: string;
  hvorfor?: string;
  datoForVarsel?: string;
  startDato?: string;
  sluttDato?: string;
  permitteringsGrad?: number;
  stillingsGrad?: number;
  ansattDato?: string;
  enighet?: boolean;
};

const PermitteringsvarselPDF: FunctionComponent<Props> = ({
  hvem,
  hvorfor,
  datoForVarsel,
  startDato,
  sluttDato,
  permitteringsGrad,
  stillingsGrad,
  ansattDato,
  enighet,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{hvem}</Text>
        <Text>{hvorfor}</Text>
        <Text>{datoForVarsel}</Text>
        <Text>{startDato}</Text>
        <Text>{sluttDato}</Text>
        <Text>{permitteringsGrad}</Text>
        <Text>{stillingsGrad}</Text>
        <Text>{ansattDato}</Text>
        <Text>{enighet}</Text>
      </View>
    </Page>
  </Document>
);

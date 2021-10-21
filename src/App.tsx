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
import { start } from "repl";

const App = () => {
  const [hvem, setHvem] = useState<string>("");
  const [hvorfor, setHvorfor] = useState<string>("");
  const [datoForVarsel, setDatForVarsel] = useState<Date>();
  const [startDato, setStartDato] = useState<Date>();
  const [sluttDato, setSluttDato] = useState<Date>();
  const [permitteringsGrad, setPermitteringsGrad] = useState<number>();
  const [stillingsGrad, setStillingsGrad] = useState<number>();
  const [ansattDato, setAnsattDato] = useState<Date>();
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
        value={hvem}
        onChange={(event) => {
          setHvorfor(event.target.value);
        }}
      />
      <TextField
        label="Dato for varsel"
        value={hvem}
        onChange={(event) => {
          setDatForVarsel(new Date(event.target.value));
        }}
      />
      <TextField
        label="Dato for permitteringsstart"
        value={hvem}
        onChange={(event) => {
          setStartDato(new Date(event.target.value));
        }}
      />
      <TextField
        label="Stillingsgrad"
        value={hvem}
        onChange={(event) => {
          setStillingsGrad(parseInt(event.target.value));
        }}
      />
      <TextField
        label="PermitteringsGrad"
        value={hvem}
        onChange={(event) => {
          setPermitteringsGrad(parseInt(event.target.value));
        }}
      />
      <TextField
        label="Ansattsdato"
        value={hvem}
        onChange={(event) => {
          setAnsattDato(new Date(event.target.value));
        }}
      />
      <RadioGroup legend="Er partene enige">
        <Radio value="ja">Ja</Radio>
        <Radio value="nei">Nei</Radio>
      </RadioGroup>

      <PDFDownloadLink
        className="navds-button navds-button--primary"
        document={
          <PermitteringsvarselPDF
            hvem={hvem}
            hvorfor={hvorfor}
            datoForVarsel={datoForVarsel}
            startDato={startDato}
            sluttDato={sluttDato}
            permitteringsGrad={permitteringsGrad}
            stillingsGrad={stillingsGrad}
            ansattDato={ansattDato}
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
  hvem: string;
  hvorfor: string
  datoForVarsel: Date;
  startDato: Date;
  sluttDato: Date;
  permitteringsGrad: number;
  stillingsGrad: number;
  ansattDato: Date;
  enighet: boolean;
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
        <Text>{hvem} skal permitteres! Lykke til videre.</Text>
        <Text>{hvorfor} skal permitteres! Lykke til videre.</Text>
        <Text>{datoForVarsel} skal permitteres! Lykke til videre.</Text>
        <Text>{startDato} skal permitteres! Lykke til videre.</Text>
        <Text>{sluttDato} skal permitteres! Lykke til videre.</Text>
        <Text>{permitteringsGrad} skal permitteres! Lykke til videre.</Text>
        <Text>{stillingsGrad} skal permitteres! Lykke til videre.</Text>
        <Text>{ansattDato} skal permitteres! Lykke til videre.</Text>
        <Text>{enighet} skal permitteres! Lykke til videre.</Text>
      </View>
    </Page>
  </Document>
);

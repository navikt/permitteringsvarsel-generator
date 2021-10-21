import React, { FunctionComponent, useState } from "react";
import "./App.css";
import { TextField } from "@navikt/ds-react";
import {
  Page,
  View,
  Document,
  Text,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const App = () => {
  const [hvemSkalPermitteres, setHvemSkalPermitteres] = useState<string>("");

  return (
    <div className="App">
      <TextField
        label="Hvem skal permitteres?"
        value={hvemSkalPermitteres}
        onChange={(event) => {
          setHvemSkalPermitteres(event.target.value);
        }}
      />

      <PDFDownloadLink
        className="navds-button navds-button--primary"
        document={
          <PermitteringsvarselPDF hvemSkalPermitteres={hvemSkalPermitteres} />
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
  hvemSkalPermitteres: string;
};

const PermitteringsvarselPDF: FunctionComponent<Props> = ({
  hvemSkalPermitteres,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{hvemSkalPermitteres} skal permitteres! Lykke til videre.</Text>
      </View>
    </Page>
  </Document>
);

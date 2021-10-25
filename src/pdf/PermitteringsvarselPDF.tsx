import React, { FunctionComponent } from "react";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// TODO: Hvilke felter er optional og ikke?
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

export default PermitteringsvarselPDF;

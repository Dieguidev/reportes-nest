import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { footerSection } from './sections/footer.section';

const logo: Content = {
  image: 'src/assets/tucan-banner.png',
  width: 100,
  height: 30,
  // alignment: 'center',
  margin: [10, 30],
};

const styles: StyleDictionary = {
  header: {
    fontSize: 20,
    bold: true,
    margin: [0, 30, 0, 0],
  },
  subHeader: {
    fontSize: 16,
    bold: true,
    margin: [0, 0, 0, 20],
  }
};

export const orderByIdReport = (): TDocumentDefinitions => {
  return {
    styles: styles,
    header: logo,
    pageMargins: [40, 60, 40, 60],
    footer: footerSection,
    content: [
      //Header
      {
        text: 'Dieguidev Code',
        style: 'header',
      },
      //Direccion y fechas
      {
        columns: [
          {
            text: `15 Montgomery Str, Suite 100,
                    Ottawa ON K2Y 9X1, CANADA
                    BN: 12783671823
                    https://devtalles.com`,
          },
          {
            text: [
              {
                text: `Recibo No#: 10255\n`,
                bold: true,
              },
              `Fecha del recibo: 11 de julio de 2021
                    Pagar antes de: 18 de mayo de 2024`,
            ],
            alignment: 'right',
          },
        ],
      },
      //QR Code
      {
        qr: 'https://gist.github.com/Klerith/57b69f3496abd9b82eae240eb1c8ce35',
        fit: 75,
        alignment: 'right',
      },
      //Direccion del cliente
      {
        text: [
          {
            text: `Cobrar a: \n`,
            style: 'subHeader'
          },
          `\nRazón Social: Richter Supermarkt
Michael Holz
Grenzacherweg 237`,
        ],
      },
    ],
  };
};

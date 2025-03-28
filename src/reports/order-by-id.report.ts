import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { footerSection } from './sections/footer.section';
import { CurrencyFormatter } from 'src/helpers/currency-formatter';
import { orders as Order } from '@prisma/client';

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
  },
};

export interface CompleteOrder {
  order_id: number;
  customer_id: number;
  order_date: Date;
  customers: Customers;
  order_details: OrderDetail[];
}

export interface Customers {
  customer_id: number;
  customer_name: string;
  contact_name: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface OrderDetail {
  order_detail_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  products: Products;
}

export interface Products {
  product_id: number;
  product_name: string;
  category_id: number;
  unit: string;
  price: string;
}

interface ReportValues {
  title?: string;
  subtitle?: string;
  data: CompleteOrder;
}

export const orderByIdReport = (value: ReportValues): TDocumentDefinitions => {
  const { data } = value;

  console.log(data);
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
            style: 'subHeader',
          },
          `\nRazón Social: Richter Supermarkt
            Michael Holz
            Grenzacherweg 237`,
        ],
      },
      //Tabla del detalle de la orden
      {
        layout: 'headerLineOnly',
        margin: [0, 20],
        table: {
          headerRows: 1,
          widths: ['auto', '*', 'auto', 'auto', 'auto'],
          body: [
            ['ID', 'Descripción', 'Cantidad', 'Precio', 'Total'],
            [
              '1',
              'Producto 1',
              '2',
              '10',
              {
                text: CurrencyFormatter.formatCurrency(20),
                alignment: 'right',
              },
            ],
          ],
        },
      },

      //Salto
      '\n',
      //totales
      {
        columns: [
          {
            width: '*',
            text: '',
          },
          {
            width: 'auto',
            layout: 'noBorders',
            table: {
              body: [
                [
                  'Subtotal',
                  {
                    text: CurrencyFormatter.formatCurrency(4000),
                    alignment: 'right',
                  },
                ],
                [
                  { text: 'Total', bold: true },
                  {
                    text: CurrencyFormatter.formatCurrency(4000),
                    alignment: 'right',
                    bold: true,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  };
};

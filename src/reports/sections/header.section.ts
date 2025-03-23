import { Content } from 'pdfmake/interfaces';
import { DateFormater } from 'src/helpers';

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

const currentDate: Content = {
  text: DateFormater.getDDMMMYYYY(new Date()),
  alignment: 'right',
}

interface HeaderOptions {
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, showDate = true, showLogo = true, subtitle } = options;

  const headerLogo: Content = showLogo ? logo : '';
  const headerDate: Content = showDate ? currentDate : '';

  const headerSubtitle: Content = subtitle
    ? {
        text: subtitle,
        alignment: 'center',
        margin: [0, 2, 0, 0],
        style: {
          fontSize: 16,
          bold: true,
        },
      }
    : '';

  const headerTitle: Content = title
    ? {
        stack: [
          {
            text: title,
            alignment: 'center',
            margin: [0, 15, 0, 0],
            style: {
              bold: true,
              fontSize: 22,
            },
          },
          headerSubtitle,
        ],
        alignment: 'center',
      }
    : '';
  return {
    columns: [
      { width: 100, stack: [headerLogo] },
      { width: '*', alignment: 'center', stack: [headerTitle] }, // Título en el centro con ancho adaptable
      {
        width: 150,
        stack: [{
          text: headerDate,
          alignment: 'right',
          margin: [0, 40, 20, 0] // Ajuste de margen para centrar verticalmente
        }]
      },
    ],
  };
};

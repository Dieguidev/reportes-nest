import { Content } from "pdfmake/interfaces";

export const footerSection = (currentPage: number, pageCount: number): Content => {
  return {
    text: currentPage.toString() + ' of ' + pageCount,
    alignment: 'right',
    margin: [0, 10, 20, 0]
  };
};

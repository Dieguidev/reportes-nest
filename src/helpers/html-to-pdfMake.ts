import htmlToPdfmake from 'html-to-pdfmake';
import { JSDOM } from 'jsdom';

interface ContentReplacement {
  [key: string]: string;
}

//Record<string, string> is a type that represents an object with string keys and string values.

export const getHtmlContent = (
  html: string,
  replacers: ContentReplacement = {},
) => {
  Object.entries(replacers).forEach(([key, value]) => {
    const key1 = `{{${key}}}`;
    const key2 = `{{${key}}}`;
    html = html.replaceAll(key1, value).replaceAll(key2, value);
  });

  const { window } = new JSDOM();
  return htmlToPdfmake(html, { window });
};

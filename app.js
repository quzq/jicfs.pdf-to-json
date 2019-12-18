import fs from 'fs';
import pdf from 'pdf-parse';
import * as _ from 'lodash';

const pdfPath = './input/jicfs.pdf'
export const parseRow = s => {
  const matches = s.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[ｦ-ﾟ]|,)+)\s*([^ -~｡-ﾟ]+)/)
  return _.drop(matches)
}

const main = async () => {
  let dataBuffer = fs.readFileSync(pdfPath);

  const data = await pdf(dataBuffer)

  // number of pages
  console.log(data.numpages);
  // number of rendered pages
  console.log(data.numrender);
  // PDF info
  console.log(data.info);
  // PDF metadata
  console.log(data.metadata);
  // PDF.js version
  // check https://mozilla.github.io/pdf.js/getting_started/
  console.log(data.version);
  // PDF text
  //console.log(data.text); 


}

main()
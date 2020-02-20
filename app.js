import fs from 'fs';
import pdf from 'pdf-parse';
import * as _ from 'lodash';

const pdfPath = './input/jicfs.pdf'
export const parseRow = s => {
  const matches = s.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[\-\(\)\s\.､･%ｦ-ﾟ0-9A-Z]|,)+)\s*([^ -~｡-ﾟ]+)/)
  return _.drop(matches)
}

const main = async () => {
  let dataBuffer = fs.readFileSync(pdfPath);

  const data = await pdf(dataBuffer)

  const jsonKeys = ['code', 'name', 'kana', 'shortName']
  fs.writeFileSync('./output/jicfs.txt', data.text, { mode: 0o755 });
  const lines = data.text.split(/\n/)
  const json = _.chain(lines)
    .map(l => l.startsWith('JICFS分類') ? '' : l)
    .map(l => parseRow(l))
    .filter(l => l.length > 0)
    .map(l => ({
      [jsonKeys[0]]: l[0],
      [jsonKeys[1]]: l[1],
      [jsonKeys[2]]: _.trim(l[2]),
      [jsonKeys[3]]: l[3],
    })).value()
  const jsonString = '[' + _.reduce(json, (lines, l) => lines + `${JSON.stringify(l)},\n`, '') + ']'
  fs.writeFileSync('./output/jicfs.json', jsonString);

}

main()
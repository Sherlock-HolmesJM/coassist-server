const ExcelJS = require('exceljs');

async function getWorkbook() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('template.xlsx');
  return await workbook.xlsx.writeBuffer();
}

module.exports = { getWorkbook };

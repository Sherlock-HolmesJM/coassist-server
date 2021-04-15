const ExcelJS = require('exceljs');
// const queryString = require('query-string');
const { rows, columns } = require('../breakdown');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

function updateSummary(workbook) {
  const sheet = workbook.getWorksheet('Summary');
  sheet.getColumn(3).values = [10, 10, 10, 10, 10, 10, 10, 10, 10];
  sheet.getRow(1).getCell(2).value = 'Summary';
}

async function updateBreakdown() {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('template.xlsx');

    updateSummary(workbook);

    const sheet = workbook.getWorksheet('Breakdown');

    const { table } = sheet.getTable('MyTable');
    sheet.removeTable('MyTable');
    sheet.addTable({
      ...table,
      ref: 'A1',
      name: 'MyTable',
      headerRow: true,
      columns,
      rows,
    });
    workbook.xlsx.writeFile('Ugochukwu.xlsx');
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  } catch (e) {
    console.log(e.message);
  }
}

// updateBreakdown();

//http://localhost:8888/.netlify/functions/index
//http://localhost:8888/api/index

exports.handler = async (event, context) => {
  try {
    // const buffer = await updateBreakdown();
    let { data } = JSON.parse(JSON.stringify(event.body));
    console.log({ data });
    console.log(event.body);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ body: 'body' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(error),
    };
  }
};

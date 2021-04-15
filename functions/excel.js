const { getWorkbook } = require('../report');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

// updateBreakdown();

//http://localhost:8888/.netlify/functions/index
//http://localhost:8888/api/excel

exports.handler = async (event, context) => {
  try {
    const buffer = await getWorkbook();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(buffer),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify(e),
    };
  }
};

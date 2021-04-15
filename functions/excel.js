const { getWorkbook } = require('../report');

const headers = {
  'Access-Control-Allow-Origin': '*',
};

// updateBreakdown();

//http://localhost:8888/.netlify/functions/index
//http://localhost:8888/api/excel

exports.handler = async (event, context) => {
  try {
    const buffer = await getWorkbook();
    return {
      headers,
      statusCode: 200,
      body: JSON.stringify(buffer),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ...e, m: 'm' }),
    };
  }
};

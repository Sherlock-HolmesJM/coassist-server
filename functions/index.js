const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

exports.handler = (event, context) => {
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(event),
  };
};

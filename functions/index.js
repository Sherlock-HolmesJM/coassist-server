const headers = {
  'Access-Control-Allow-Origin': '*',
};

exports.handler = (event, context) => {
  return {
    statusCode: 200,
    headers,
    body: 'Hello there.',
  };
};

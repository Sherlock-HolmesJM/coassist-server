// const express = require('express');
// const cors = require('cors');
// const { getWorkbook } = require('./report');

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

// app.get('/api/excel', async (req, res) => {
//   try {
//     const buffer = await getWorkbook();
//     res.json(buffer);
//   } catch (e) {
//     console.log(e);
//     res.send(e);
//   }
// });

const port = process.env.port || 5000;

// app.listen(port, () => console.log(`Listening on port ${port}...`));

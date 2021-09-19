const express = require("express");
const cors = require("cors");
const { getWorkbook } = require("./report");

const youtube = require("youtube-metadata-from-url");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/excel", async (req, res) => {
  try {
    const buffer = await getWorkbook();
    res.json(buffer);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

app.get("/api/metadata/:id", async (req, res) => {
  const url = `https://www.youtube.com/watch?v=${req.params.id}`;

  console.log(req.params.id);

  try {
    youtube.metadata(url).then(
      function (json) {
        res.send(json);
      },
      function (err) {
        res.send(err);
      }
    );
  } catch (e) {
    res.send(e);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

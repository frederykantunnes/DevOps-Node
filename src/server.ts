import express from 'express';
const app = express();

app.get("/", (req, resp) => {
  resp.json({hello:"world 2"})
});


app.listen(3000)
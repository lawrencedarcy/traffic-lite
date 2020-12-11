const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`)); //eslint-disable-line

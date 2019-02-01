import express from 'express';
import bodyParser from 'body-parser';

import catalog from './catalog';

let app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/api', catalog);
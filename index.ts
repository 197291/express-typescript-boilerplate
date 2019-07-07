import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

const app: express.Application = express();

app.use(cors());
app.use(bodyParser());

app.get('/', (req, res) => {
  res.send('Hello World with TypeScript!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

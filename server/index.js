const express = require('express');
const app = express();

// TODO: implement express static
// this is body parser
app.use(express.json());

// send on root
app.get('/', (req, res) => res.send('Hello World'));

// listen on 3000
app.listen(3000, () => console.log('on 3000'));

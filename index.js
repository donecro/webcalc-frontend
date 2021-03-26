const express = require ('express');
const dataRouter = require('./router');
const app = express();

const PORT = 8010;

app.use(express.static(__dirname + '/'  ));

app.use('/data', dataRouter);

app.all('*', (req, res, next) => {
    next();
});

app.listen (PORT, () => console.log(
    'webcalc frontend live on port ' + PORT +
    ', link: http://127.0.0.1:' + PORT))
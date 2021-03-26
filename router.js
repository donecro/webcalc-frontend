
const express = require('express');
const router = express.Router();

const file = './data/data.db';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(file);

const insert_one = (x, y, answer, handle) => {
    sql = "insert into record(x, y, answer, handle) values (" + x + ", " + y + ", " + answer + ", " + handle + ")";
    db.prepare(sql).run();
}

const get_all = () =>
    new Promise(resolve => db.all(
        "select * from record",(err,row) => resolve(JSON.stringify(row)))
        , reject => {})

router.get('/insert', (req, res, next) => {
    let x = req.param('x');
    let y = req.param('y');
    let answer = req.param('answer');
    let handle = req.param('handle');
    insert_one(x, y, answer, handle)
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    get_all().then(e => res.send(e))
});


router.get('/', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    get_all().then(e => res.send(e))
});


module.exports = router;
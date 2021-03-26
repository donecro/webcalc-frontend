let value = 0;
let x = 0;
let y = 0;
let operation = '';

function Display() {
    document.getElementById('display').value = value;
}

function Clear() {
    value = 0;
    x = 0;
    y = 0;
    operation = '';
    Display();
}

function NumClick(n) {
    if (value === 0)
        value = n;
    else {
        value *= 10;
        value += n;
    }
    Display();
}

function Plus()
{
    // if we have an outstanding operation resolve it
    if (operation !== '') Equals();
    x = value;
    value = 0;
    operation = '+';
    Display();
}

function Subtract()
{
    // if we have an outstanding operation resolve it
    if (operation !== '') Equals();
    x = value;
    value = 0;
    operation = '-';
    Display();
}

// multiple, divide, modulo, square
// ----------------------------------

function Multiple()
{
    if (operation !== '') Equals();
    x = value;
    value = 0;
    operation = '*';
    Display();
}

function Divide()
{
    if (operation !== '') Equals();
    x = value;
    value = 0;
    operation = '/';
    Display();
}

function Modulo()
{
    if (operation !== '') Equals();
    x = value;
    value = 0;
    operation = 'mod';
    Display();
}

function Square()
{
    if (operation !== '') Equals();
    x = value;
    value = 0;
    operation = '^';
    Display();
}

// ----------------------------------
function Equals() {
    if (operation === '') return;
    y = value;
    if (operation === '+') {
        //let ans = x+y; // nah - too easy :)
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (this.readyState === 4 && this.status === 200) {
                const j = JSON.parse(this.response);
                // 1 - Plus, 2 - Subtract, 3 - Multiple, 4 - Divide, 5 - Modulo, 6 - Square
                $.ajax({
                    url:"../data/insert",
                    type: "get",
                    data: {'x': x, 'y': y, 'answer': j.answer, 'handle': 1}
                })
                x=0;
                y=0;
                operation='';
                value = j.answer;
                Display();
            }
        };
        xhttp.open("GET",addURL + "?x=" + x + "&y=" + y);
        xhttp.send();
        return;
    } else if (operation === '-') {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (this.readyState === 4 && this.status === 200) {
                const j = JSON.parse(this.response);
                $.ajax({
                    url:"../data/insert",
                    type: "get",
                    data: {'x': x, 'y': y, 'answer': j.answer, 'handle': 2}
                })
                x=0;
                y=0;
                operation='';
                value = j.answer;
                Display();
            }
        };
        xhttp.open("GET",subtractURL + "?x=" + x + "&y=" + y);
        xhttp.send();
        return;
    } else if (operation === '*') {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (this.readyState === 4 && this.status === 200) {
                const j = JSON.parse(this.response);
                $.ajax({
                    url:"../data/insert",
                    type: "get",
                    data: {'x': x, 'y': y, 'answer': j.answer, 'handle': 3}
                })
                x=0;
                y=0;
                operation='';
                value = j.answer;
                Display();
            }
        };
        xhttp.open("GET",multipleURL + "?x=" + x + "&y=" + y);
        xhttp.send();
        return;
    } else if (operation === '/') {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (this.readyState === 4 && this.status === 200) {
                const j = JSON.parse(this.response);
                $.ajax({
                    url:"../data/insert",
                    type: "get",
                    data: {'x': x, 'y': y, 'answer': j.answer, 'handle': 4}
                })
                x=0;
                y=0;
                operation='';
                value = j.answer;
                Display();
            }
        };
        xhttp.open("GET",divideURL + "?x=" + x + "&y=" + y);
        xhttp.send();
        return;
    } else if (operation === 'mod') {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (this.readyState === 4 && this.status === 200) {
                const j = JSON.parse(this.response);
                $.ajax({
                    url:"../data/insert",
                    type: "get",
                    data: {'x': x, 'y': y, 'answer': j.answer, 'handle': 5}
                })
                x=0;
                y=0;
                operation='';
                value = j.answer;
                Display();
            } else {

            }
        };
        xhttp.open("GET",moduloURL + "?x=" + x + "&y=" + y);
        xhttp.send();
        return;
    } else if (operation === '^') {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (this.readyState === 4 && this.status === 200) {
                const j = JSON.parse(this.response);
                $.ajax({
                    url:"../data/insert",
                    type: "get",
                    data: {'x': x, 'y': y, 'answer': j.answer, 'handle': 6}
                })
                x=0;
                y=0;
                operation='';
                value = j.answer;
                Display();
            }
        };
        xhttp.open("GET",squareURL + "?x=" + x + "&y=" + y);
        xhttp.send();
        return;
    }
}
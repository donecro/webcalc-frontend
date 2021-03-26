let attribute_table = document.getElementById("record_table");
attribute_table.innerHTML ="";

let table = document.createElement("table");
table.className = 'record_table';
let header = document.createElement("tr");
table.appendChild(header);

let th_list = ['X', 'Y', 'ANSWER', 'CALC']
th_list.forEach(e => {
    let th = document.createElement("th");
    th.textContent = e;
    header.appendChild(th);
})

$.ajax({
    url:"../data",
    type: "get",
    success:  (data) => {
        console.log(data)
        if(data.length > 0)
            data.forEach(item => {
                let row = document.createElement("tr");
                table.appendChild(row);
                let x_col = document.createElement("td");
                x_col.style.textAlign = 'Center'
                x_col.textContent = item.x;
                row.appendChild(x_col);

                let y_col = document.createElement("td");
                y_col.style.textAlign = 'Center'
                y_col.textContent = item.y;
                row.appendChild(y_col);

                let ans_col = document.createElement("td");
                ans_col.style.textAlign = 'Center'
                ans_col.textContent = item.answer;
                row.appendChild(ans_col);

                let h_col = document.createElement("td");
                h_col.style.textAlign = 'Center'
                if (item.handle === 1)
                    h_col.textContent = 'Plus';
                else if (item.handle === 2)
                    h_col.textContent = 'Subtract';
                else if (item.handle === 3)
                    h_col.textContent = 'Multiple';
                else if (item.handle === 4)
                    h_col.textContent = 'Divide';
                else if (item.handle === 5)
                    h_col.textContent = 'Modulo';
                else if (item.handle === 6)
                    h_col.textContent = 'Square';
                row.appendChild(h_col);
                // let del_col = document.createElement("td");
                //
                // let del_btn = document.createElement("a");
                //
                // del_btn.className = 'del';
                // del_btn.addEventListener("click", () => {
                //     let x = confirm("Sure delete this record?");
                //
                //     if(x){
                //         $.ajax({
                //             url:"../data",
                //             type: "get",
                //             success:  (data) => {
                //
                //
                //             }
                //     })
                //     }
                // });
                // del_col.appendChild(del_btn);
                // row.appendChild(del_col);
            })
    },
    error: (e) => {
        alert(e);
    }
})



attribute_table.appendChild(table);
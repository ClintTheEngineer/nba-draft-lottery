export const table = document.createElement('table');
table.setAttribute('id', 'ranks')
    for (let i = 1; i <= 14; i++) {
      const td = document.createElement("td");
      td.setAttribute("id", "rank_" + i);
    
      
      const tr = document.createElement("tr");
      td.appendChild(tr);
    
     
      table.appendChild(td);
    }
   document.body.appendChild(table);
export const table2 = document.createElement('table');
for (let i = 1; i <= 14; i++) {
  const td = document.createElement("td");
  td.setAttribute("id", "pick_" + i);
  const tr = document.createElement("tr");
  td.appendChild(tr); 
  table2.appendChild(td);
}

document.body.appendChild(table2);

table2.setAttribute('id', 'picks');
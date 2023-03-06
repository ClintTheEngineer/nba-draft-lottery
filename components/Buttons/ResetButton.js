import {  finalDraft } from "../LotteryGenerator.js";
import { table2 } from "../Tables/LotteryTable.js"

const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset Draft Lottery';
resetButton.setAttribute('id', 'reset-btn');

document.body.appendChild(resetButton);


resetButton.addEventListener('click', ()=>{
    table2.style.display = 'none';
})



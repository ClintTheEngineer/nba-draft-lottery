import { finalDraft } from "../LotteryGenerator.js";
import { teamArray, teamColors } from "../../index.js";
import { table2 } from "../Tables/LotteryTable.js"

export const draftButton = document.createElement('button');
draftButton.innerHTML = 'Generate Draft Lottery';
draftButton.setAttribute('id', 'draft-btn');

document.body.appendChild(draftButton);


draftButton.addEventListener('click', ()=> {
    for (let i = 1; i < finalDraft.length + 1; i++) {
        const pick = finalDraft[i-1].innerText;
        const element = document.querySelector(`#pick_${i}`);
        element.textContent = pick;
      }
      table2.style.display = 'block';
    
      const picks = [pick_1, pick_2, pick_3, pick_4, pick_5, pick_6, pick_7, pick_8, pick_9, pick_10, pick_11, pick_12, pick_13, pick_14];
      for(let pick of picks){
          for(let team of teamArray){
              if (pick.textContent.includes(team)){
                  pick.style.backgroundColor = teamColors[team]
              }
          }
      }
});
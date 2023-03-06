import { table } from './components/Tables/OddsTable.js';
import { table2 } from './components/Tables/LotteryTable.js';


export let year = new Date().getFullYear();
export let title = document.querySelector("title");

export let nav = document.querySelector('nav');
nav.setAttribute('id', 'h1-hdr');

export let h1 = document.createElement('h1');

export const teamArray = ['Celtics', '76ers', 'Nets', 'Knicks', 'Raptors', 'Bucks', 'Cavaliers', 'Bulls', 'Pacers', 'Pistons', 'Heat', 'Hawks', 'Wizards', 'Magic', 'Hornets', 'Nuggets', 'Timberwolves', 'Thunder', 'Jazz', 'Trail Blazers', 'Kings', 'Clippers', 'Suns', 'Warriors', "Lakers", 'Grizzlies', 'Mavericks', 'Pelicans', 'Spurs', 'Rockets'];


  export const teamColors = {
    'Cavaliers' : '#6f263d',
    'Heat' : '#98002e',
    'Thunder' : '#007ac1',
    'Warriors' : '#006bb6',
    'Lakers' : '#fdb927',
    'Rockets' : '#ce1141',
    'Hawks' : '#e03a3e',
    'Nets' : '#000000',
    'Hornets' : '#00788c',
    'Bulls' : '#ce1141',
    'Nuggets' : '#0e2240',
    'Pistons' : '#1d428a',
    'Pacers' : '#002d62',
    'Bucks' : '#00471b',
    'Timberwolves' : '#0c2340',
    'Knicks' : '#006bb6',
    'Magic' : '#0077c0',
    '76ers' : '#006bb6',
    'Suns' : '#1d1160',
    'Trail Blazers' : '#e03a3e',
    'Raptors' : '#ce1141',
    'Jazz' : '#002b5c',
    'Spurs' : '#000000',
    'Pelicans' : '#002b5c',
    'Grizzlies' : '#5d76a9',
    'Kings' : '#5a2b81',
    'Mavericks' : '#0053bc',
    'Clippers' : '#c8102e',
    'Celtics' : '#008348',
    'Wizards' : '#002b5c'
  } 

const borderColorChanger =()=> {
    const picks = [pick_1, pick_2, pick_3, pick_4, pick_5, pick_6, pick_7, pick_8, pick_9, pick_10, pick_11, pick_12, pick_13, pick_14];
  
    for (let pick of picks){
        pick.addEventListener('mouseover', ()=> {
          for(let team of teamArray){
            if(pick.textContent.includes(team)){
              pick.style.borderColor = teamColors[team]
            }
          }
        })
        pick.addEventListener('mouseout', ()=> {
          for(let team of teamArray){
            if(pick.textContent.includes(team)){
              pick.style.borderColor = 'white';
            }
          }
        })   
    }
  }
  borderColorChanger()


export const probabilities = ['14%','14%','14%','12.5%','10.5%','9%','7.5%','6%','4.5%','3%','2%','1.5%','1%','0.5%'];

const titleGenerator =()=>{
  for (let i = 0; i < probabilities.length; i++) {
    const rank = i + 1;
    const probability = probabilities[i];
    const element = document.querySelector(`#rank_${rank}`);
    element.title = `Lottery probability: ${probability}`;
   }
  }
  titleGenerator()



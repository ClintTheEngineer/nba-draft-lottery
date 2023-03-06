import { teamArray, teamColors } from "../index.js";



async function getStandings(){
    let url = `https://api.sportsdata.io/v3/nba/scores/json/Standings/%7B2023%7D?key=909d0a691be3435fbfd4cb8e0780a40e`;
  
    const endpoint = new URL(url);
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  }

  let wins = [];

  let standings = await getStandings();    
  standings.map(e => 
  wins.push([e.Wins, e.Name]))
      
  let rankNames = document.querySelectorAll("td");
  rankNames.forEach(name => {
  name.style.fontWeight = "600";
  });

  wins = wins.sort();
  const rankings = [[1,14],[2,14],[3,14],[4,12.5], [5,10.5],[6, 9],[7, 7.5],[8,6],[9,4.5],[10,3],[11,2],[12,1.5], [13,1],[14,0.5]
  ];

  for (let i = 0; i < rankings.length; i++) {
    const [rank, probability] = rankings[i];
    const team = wins[rank - 1][1];
    const text = `${team} (lottery probability ${probability}%)`;
    const element = document.querySelector(`#rank_${rank}`); 
    element.textContent = text;
  }
  

export const ranks = [rank_1, rank_2, rank_3, rank_4, rank_5, rank_6, rank_7, rank_8, rank_9, rank_10, rank_11, rank_12, rank_13, rank_14];


for(let rank of ranks){
    for(let team of teamArray){
        if (rank.textContent.includes(team)){
                rank.style.backgroundColor = teamColors[team]
        }
    }
}
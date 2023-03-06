import { teamArray, teamColors } from "../index.js";
import { ranks } from "./Api.js";
import { table2 } from "../components/Tables/LotteryTable.js"

const randomNumber = () => {
    const weights = [14, 14, 14, 12.5, 10.5, 9, 7.5, 6, 4.5, 3, 2, 1.5, 1, 0.5];
    const totalWeight = weights.reduce((sum, weight) => sum + weight);
    const randomWeight = Math.random() * totalWeight;
    let weightSum = 0;
        for (let i = 0; i < weights.length; i++) {
          weightSum += weights[i];
          if (randomWeight < weightSum) {
            return i + 1; 
          }
        }
      }

const lotteryGenerator = () => {
    const lotteryOrder = [];
        while (lotteryOrder.length < ranks.length) {
           const number = randomNumber();
           if (!lotteryOrder.includes(number)) {
             lotteryOrder.push(number);
           }
         }
         return lotteryOrder;
       }


const order = lotteryGenerator();

export const finalDraft = [];
for (let o of order) {
  const index = o - 1;
  if (index >= 0 && index < ranks.length) {
    finalDraft.push(ranks[index]);
  }
}
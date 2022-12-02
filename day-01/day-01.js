const { getFile } = require('../helper');

const data = getFile(__dirname)
  .trim()
  .split('\n')
  .map((element) => Number(element));

function calculateWinnerElf(arr) {
  let winner = 0;
  let sum = 0;

  for (line of arr) {
    if (!line) {
      if (sum > winner) {
        winner = sum;
      }
      sum = 0;
      continue;
    }

    sum += line;
  }

  return winner;
}

function calculateTopThreeWinnersElves(arr) {
  let winners = [0, 0, 0];
  let sum = 0;
  let minValue;

  for (line of arr) {
    if (!line) {
      minValue = Math.min(...winners);

      for (i in winners) {
        if (sum > minValue) {
          winners[winners.indexOf(minValue)] = sum;
          break;
        }
      }

      sum = 0;
      continue;
    }

    sum += line;
  }

  return winners.reduce((adder, current) => adder + current, 0);
}

console.log(calculateWinnerElf(data));
console.log(calculateTopThreeWinnersElves(data));

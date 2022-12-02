const path = require('path');
const filename = path.join(__dirname, '/input.txt');
const file = require('fs').readFileSync(filename, 'utf-8').split('\n');

function calculateWinnerElf(file) {
  let winner = 0;
  let sum = 0;

  for (line of file) {
    if (!line) {
      if (sum > winner) {
        winner = sum;
      }
      sum = 0;
      continue;
    }

    sum += parseInt(line);
  }

  return winner;
}

function calculateTopThreeWinnersElves(file) {
  let winners = [0, 0, 0];
  let sum = 0;
  let minValue;

  for (line of file) {
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

    sum += parseInt(line);
  }

  return winners.reduce((adder, current) => adder + current, 0);
}

console.log(calculateWinnerElf(file));
console.log(calculateTopThreeWinnersElves(file));

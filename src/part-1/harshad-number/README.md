# Harshadtal

Harshadtal, eller Nivental, i en given talbas, i denna uppgift talbasen 10, är ett heltal som är jämt delbart med sin siffersumma.

Exmpel på tal som är Harshadtal:

- 10, då 1 + 0 = 1 och 10 är lika med 1 * 10
- 24, då 2 + 4 = 6 och 24 är lika med 6 * 4
- 198, då 1 + 9 + 8 = 18 och 198 är lika med 18 * 11

Exmpel på tal som inte är Harshadtal:

- 17, då 1 + 7 = 8 och 17 går inte att dividera utan rest med 8
- 349, då 3 + 4 + 9 = 16 och 349 går inte att dividera utan rest med 16
- 2197, 2 + 1 + 9 + 7 = 19 och 2197 går inte att dividera utan rest med 19

Din uppgift är att slutföra implementationen av det påbörjade Harshad-objektet, som har tre metoder.

- `isValid`, undersöker om ett tal är ett Harshadtal eller inte. `Harshad.isValid(24);` returnerar `true`.
- `getNext`, returnerar nästa Harshadtal. `Harshad.getNext(14);` returnerar `18`.
- `getSequence`, returnerar en array innehållande en sekvens av n Harshadtal, där startvärdet, som inte
behöver anges och har standardvärdet 0, inte är inkluderat.
	- `Harshad.getSequence(3, 160); ` returnerar `[162, 171, 180]`.
	- `Harshad.getSequence(15); ` returnerar `[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24 ]`.

## Tips

Funktioner, metoder, etc. som *kan* komma till användning beroende hur du väljer att lösa uppgiften.

- [Number.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
- [String.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement)
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

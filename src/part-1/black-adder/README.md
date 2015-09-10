# Laboration - Simple calculator

Denna uppgift går ut på att skapa en mycket enkel räknemodul.
Den ska klara av att addera att fritt antal parametrar i form av nummer (heltal som decimaltal)

```
var calc = require(......);
var sum = calc.add(2, 5, 19);
console.log(sum); // output 26

```
Dock ska modulen kunna avgöra att den verkligen anropas med riktiga tal/nummer
eller åtminstone tal i form av textsträngar typ "12"


```
var calc = require(......);
var sum = calc.add(2, "5", 19);
console.log(sum); // output 26

sum = calc.add(2.5, "5", "3,5", "1.2"); // obs både kommatecken(,) och punkt(.) ska fungera
console.log(sum); // output 12.2

```

För mer information se testfilen

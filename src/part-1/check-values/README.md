# Laboration - value checker part 1

Denna uppgift går ut på att undersöka vad för datatyp en given parameter/variabel har.
Uppgiften har en färdig funktion som tar en parameter(value) och beroende på vad man skickar in
ska en textsträng returneras med en text som beskriver vad det är för datatyp. Se exemplen nedan.

Skickas en primitiv datatyp in ska strängen "You send me a primitive" returneras
Skickas ett objekt, en array eller null in ska strängen "You send me an object" returneras
Skickas ingen parameter in ska strängen "You send me an undefined value" returneras
Skickas en funtion in som parameter ska strängen "Ypu send me a function" returneras

##Kodexempel
```
var vc = require(......);

console.log(vc.check("Detta är en sträng")); // outputs "You send me a primitive"
console.log(vc.check(true)); // outputs "You send me a primitive"
console.log(vc.check({})); // outputs "You send me an object"
console.log(vc.check([])); // outputs "You send me an object"
console.log(vc.check(function(){})); // outputs "You send me a function"
...
```
Se testerna för mer information om hur modulen ska fungera


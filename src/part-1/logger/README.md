# Laboration - Simple logger

Denna uppgift går ut på att fortsätta utveckla befintlig kod för att färdigställa en enklare
logg-modul, dvs. en applikationer som loggar olika typer av meddelandenobjekt i en array.
Modulen har en array (_log) där meddelandeobjekt kan sparas och läsas ifrån.

Modulen har tre publika metoder (se kod för mer kommentarer kring dess):
* write(message, typeNumber) - skriver meddelande till loggen
* read(typeNumber) - läser(returnerar) meddelanden
* clear() - Tömmer loggen


Dessa är från början tomma och tanken är att du ska fylla dessa med kod som får modulen  att
klara de tester som finns skrivna.

typeNumber är ett nummer som representerar en viss typ av meddelande (t.ex. 'info', 'debug' osv.)
Detta nummer används när man anropar modulen men i själva loggen sparas meddelandetypen

##Kodexempel
```
var simpleLogger = require(......);

simpleLogger.clear();
console.log(simpleLogger.read()); // outputs "[]"

simpleLogger.write("TestMessage", 0); //
console.log(simpleLogger.read()); // outputs  "[{info: "TestMessage"}]"
simpleLogger.clear();

simpleLogger.write("TestMessage2"); //
console.log(simpleLogger.read()); // outputs  "[{info: "TestMessage2"}]"
simpleLogger.clear();

simpleLogger.write("TestMessage", 1); //
console.log(simpleLogger.read()); // outputs  "[{warning: "TestMessage"}]"
simpleLogger.clear();

simpleLogger.write("TestMessage1", 0);
simpleLogger.write("TestMessage2", 1);
simpleLogger.write("TestMessage3", 4);
simpleLogger.write("TestMessage4", 0);
console.log(simpleLogger.read(0)); // outputs  "[{info: "TestMessage1"}, {info: "TestMessage4"}]"
simpleLogger.clear();

```


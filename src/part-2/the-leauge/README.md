##The leauge
Denna uppgift går ut på att skriva en applikation som simulerar någon form av liga/seriesystem med olika matcher.
En liga innehåller ett antal lag och varje lag möter vandra två gånger, en gång som hemmalag och en gång som bortalag.
En match kan ha tre utfall; hemmalaget vinner och får tre poäng, det blir oavgjort och båda lagen får en poäng eller
bortalaget vinner och får tre poäng.
När alla matcher har spelats har lagen fått olika (eller lika) poäng och en tabell kan generas.

För skapande av objekt ska designmönstret Constructor/Prototype användas

### Exempel

Vi har en liga med tre lag; lag1, lag2, lag3
Alla lag möter alla en gång som hemmalag och en gång som bortalag och följande matcher kommer spelas

* lag1 - lag2 blir 0 - 1
* lag1 - lag3 blir 1 - 1
* lag2 - lag1 blir 2 - 0
* lag2 - lag3 blir 5 - 4
* lag3 - lag1 blir 1 - 0
* lag3 - lag2 blir 0 - 1

Efter att alla matcher spelats kommer
* lag1 ha 1 poäng (tre förluster och en oavgjord)
* lag2 ha 12 poäng (fyra vinster)
* lag3 ha 4 poäng (en vinst, en oavgjord, två förluster)

Den sorterade tabellen som ska skrivas ut blir således:
```
lag2    12
lag3    4
lag1    1
```

##Din uppgift
Din uppgift blir att skriva en applikation som simulerar följande seriespel.
Du ska använda två objekt, Team och Leauge, för att lösa uppgiften (du blir hårt styrd av testerna).

###Team

####Konstruktor
Skapar ett Teamobjekt. Om name inte skickar med till konstruktorn ska ett fel av typen Error kastas
```
// När du skapar ett Team object
var team = new Team("lag1");
console.log(team.name); // "lag1"
console.log(team.points); // 0

```

####Metoden toTableRow(padding)
Används för att skapa en sträng som visar lagets namn och poäng
Padding är antal teckenpositioner från consolens vänsterkant till där poängen skrivs ut
Detta för att kunna skriva ut flera lag efter varandra i "snygg" tabell.
Defaultvärde på padding ska vara 25.

```
var team = new Team("lag1");
team.points = 12;
var team2 = new Team("lag2");
team2.points = 3;

console.log(team.toTableRow(10));
console.log(team2.toTableRow(10));
/*
lag1      12
lag2      3
*/
```

###Leauge
Detta objekt bör ha en egenskap "teams" som är en array där man kan spara flera Team-objekt

####Konstruktor
```
// När du skapar ett Leauge object
var leauge = new Leauge();
console.log(leauge.teams); // []
```
####addTeam
Lägger till ett Team-objekt i arrayen. Det ska vara en kopia av objektet (samma lag ska kunna spela i flera ligor) som kommer in som parameter. Kopian ska sedan returneras.
```
// Du lägger till lag i din liga genom att anropa addTeam och skicka in Team-objekt
var leauge = new Leauge();
var team = new Team("lag1");

// Metoden clonar Team-objektet den får in och lägger det i arrayen "teams"
// Metoden returnerar en (djup)kopia av Team-objektet
var copyOfTeam = leauge.addTeam(team);

```

####playMatch(maxHomeGoal, maxAwayGoal)
Simulerar en match genom att använda math.random() och slumpa fram hemmalagets respektive bortalagets mål
För att kunna styra resultatet lite kan man skicka in två parametrar som bestämmer max antal mål varje lag kan få i slumpen.
Defaultvärden för dessa parametrar är 6 respektive 4
Metoden ska returnera ett objekt i formen som framgår nedan
```
var result = leauge.playMatch(3, 3);
console.log(result); // {homeGoal: 1, awayGoal: 3}
// observera att resultatet ovan slumpasfram så homeGoal och awayGoal ska kunna få ett värde mellan 0 och 3
```

####registerResult(result, homeTeam, awayTeam)
Metodens uppgift är att tolka ett resultat ({homeGoal: 1, awayGoal: 3}) och uppdatera de båda lagens poäng.

* Om resultatet är lika får varje lag 1 poäng
* Om hemmalaget har flest mål får hemmalaget 3 poäng, bortalaget 0 poäng
* Om bortalaget gar flest mål får bortalaget 3 poäng, hemmalaget 0 poäng


####playMatches
Denna metod simulerar ALLA matcher i ligan. Varje lag mots två gånger. En gång som hemmalag och en gång som bortalag.
Metodens uppgift blir att simulera alla dessa matcher och genom att använda tidigare metoder skapa matchresultat samt uppdatera
poängställningen.

####getTableString(padding)
Metodens uppgift är att returnera en sträng som kan skrivas ut och presentera tabellen i två kolumner.
Lagen ska vara sorterade så den med mest poäng kommer överst. Padding bestämmer hur
många teckenpositioner från vänsterkanten som poängen ska skrivas ut

```
console.log(leauge.getTableString(20));
/*
Tottenham           9
Everton             6
Arsenal             3
*/
// Observera att det är 20 teckenposition från vänsterkanten till poängantalet så
// att vi simulerar kolumner
```
### Tips
Tänk på att vid kopiering/kloning av objekt så fungerar inte slice() utan vi måste göra en "deep-copy/shallowCopy".
Titta i dokumentationen för Object för att hitta ledtrådar för att lösa detta.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


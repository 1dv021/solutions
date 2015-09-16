## Laboration - getWinner
Nivå: C

I denna uppgift finns fyra stycken funktioner definierade varav du ska fylla på kod i tre av dem. Den fjärde
är tankt att i slutändan anropa de tre tidigare (som du skriver) för att få ett slutresultat.

Bland kursledarna finns en återkommande tävling där vinnarens namn i varje omgång läggs in i en array.


```
// Exempel
["mats", "John", "john", "Johan", "Jacob"]
```

Själva applikationen går ut på att utifrån en liknande array avgöra förekomst/fekvens av varje namn/deltagare,
sedan sortera dessa i storleksordning (den med flest förekomster först) avgöra vinnaren/vinnarna och presentera dessa
i en resultat-array där dessa har sorterats i bokstavsordning.

För att lösa detta problem används alltså fyra stycken olika funktioner.

### getFrequencyInArray
Funktionen analyserar en array och försöker avgöra förekomsten av namnen (case-insensitiv - dvs stor eller liten
bokstav i början av namnet ska inte spela roll). Resultatet ska vara på en viss form vilket framgår av kommentarerna
i koden. Uppbyggnaden av objekten kan vara lite konstig då namnen används som nyckel. Det är dock för att förenkla
programmeringen i uppgiften då det handlar om hantering av en frekvenstabell.


```
var obj = getFrequencyInArray(["mats", "John", "john", "Johan", "Jacob"]);

// obj should be
/*
{
    mats: 1,
    john: 2,
    johan:1,
    jacob: 1
}
*/
```

### getHighestValueInFrequency
Funktionen tar ett objekt i samma form som funktionen getFrequencyInArray returnerar. sorterar denna och
returnerar en Array med namn på den/de som har högst värde


```
var obj = {
    mats: 1,
    john: 2,
    johan: 1,
    jacob: 1
};

var arr = getHighestValueInFrequency(obj);
// arr should be ["john"]
```

### sortStringAscending
Tar en array med textsträngar och sorterar i stigande ordning

```
var arr = sortStringAscending(["john", "johan", "jacob"]);
// arr should be ["jacob", "johan", "john"]
```

### getWinner
Denna är färdigskriven och bör fungera och ge gröna tester när du väl implementerat
de tre funktionerna ovan.


###Tips
Naturligtvis kan uppgiften lösas på många sätt men följande kan vara värt att kolla upp:

String.toLowerCase() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Object.keys() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Array.sort - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Array.filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

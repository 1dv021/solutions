##Laborationsuppgiften "overmean"

Nivå: B

I denna uppgiften är det tänkt att du ska skriva kod som analyserar en array innehållandes javascriptobject
med namn och poäng, ex. {name: "Stina", points: 12}.
Analysen består att beräkna meddelpoängen (mean) av alla de objekt som kommer in och sedan returnera en ny
array som bara innehåller namnen på de som har ÖVER eller LIKA MED medelvärdet.

###Kod exempel
```
 var arr = [
    {name: "Stina", points: 1},
    {name: "Erik", points: 2},
    {name: "Maja", points: 3},
    {name: "Sven", points: 4}
];

var result = om.overmean(arr);
console.log(result); // ["Maja", "Erik"]
```
Som synes av exemplet ovan att en array med 4 objekt skickades in. poängerna 1, 2, 3, 4 ger ett medelvärde på
2.5 ( (1+2+3+4) / 4). De personer som har en poäng/points över/lika med detta är Maja och Sven därför returneras dessa två
(i samma ordning) i en ny array, ["Maja", "Sven"]

### Tips
Kolla gärna upp Array-metoderna filter, reduce och map för att lösa uppgiften även om man kan lösa den
utan dessa.

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


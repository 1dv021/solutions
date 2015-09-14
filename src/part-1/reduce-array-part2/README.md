## Laboration - reduce-array 2

Nivå: C

Detta är en fortsättning på reduce-array. Istället för att ta vanliga nummer i arrayen som
ska köras reduce på kommer arrayen innehålla objekt på formen {nr: <Number>}
Uppgiften är att slå ihop alla nr-värden till en slutsumma med hjälp av Array.reduce

```
var sum = reduceArray([{nr: 2}, {nr: 3}, {nr: 5}]);

// sum should be 10 (as 2 + 3 + 5 = 10)

```

### Tips
Kolla hur man kan initiera Array.reduce och tänk på hur beräkningen sker så att man inte får NaN som resultat.
Använd gärna debuggern.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

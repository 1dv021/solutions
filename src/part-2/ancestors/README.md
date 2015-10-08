##Ancestors
I denna uppgift ska du skriva en rekursiv funktion vilket kommer vara nödvändigt att få grepp om examinationsuppgift 2.
En rekursiv funktion är en funktion som anropar sig själv och med hjälp av denna typ av lösning kan vi
på ett elegant sätt gå igenom mer komplexa objekt som i sin tur innehåller andra objekt, likt en trädstruktur.

I exemplet nedan ser man att objektet "ancestors" innehåller ett objekt som har en egenskap, children, som
innehåller flera liknande objekt. Objekten på nivå två har bara tomma arrayer så nästlingen av objekt tar slut där.
```
 var ancestors = {
    name: "A1",
    children: [
        {
            name: "A11",
            children: []
        },
        {
            name: "A12",
            children: []
        }
    ]
};
```

Uppgiften kommer vara att presentera dessa objekt som en sträng i en trädstruktur med hjälp av radbryts- och tabb-tecken.
Koden som gör detta skriver du i den rekursiva funktionen "createAncestorTree" som anropas från kontruktorn.
DVS. radbrytstecken i en sträng är "\n" och tabb-tecken är "\t". När man skriver ut dessa typer av escapesekvenser så
ersätts dessa med just radbrytning och en intabbning.

```
var str = "A1\n\tA11\n\tA12";

console.log(str);
// Utskriften ska bli:
/*
A1
    A11
    A12
*/

```

Naturligtvis kan man lösa detta med loopar men som man inser blir det lite svårt att göra ifall vi har djupt nästlade
funktioner. Där är rekursiva funktioner en bra lösning.

Ett mer avancerat exempel är
```
var obj = {
    name: "A1",
    children: [
        {
            name: "A11",
            children: [
                {
                    name: "A111",
                    children: []
                }
            ]
        },
        {
            name: "A21",
            children: [
                {
                    name: "A211",
                    children: [
                        {
                            name: "A2111",
                            children: []
                        },
                        {
                            name: "A2112",
                            children: [
                                {
                                    name: "A21121",
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
```
Vilket bör resultera i:

```
"A1\n\tA11\n\t\tA111\n\tA21\n\t\tA211\n\t\t\tA2111\n\t\t\tA2112\n\t\t\t\tA21121"
```

###Tips
* Använd debuggern! Rekursiva funktioner blir lätt svåra att följa med i
* Tänk på att du kan anropa den rekursiva funktionen med ett argument "level". När man anropar
funktionen rekursivt kan man plussa på den i anropet för att få den att likna en räknare i en vanlig loop.



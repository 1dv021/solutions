## Laboration - Copy Array

Nivå: A

I denna uppgiften finns en funktion som tar två parametrar. Den första är en array och den andra är ett number.
Meningen är att du ska skapa en kopia av den inkommande arrayen och
lägga på numret i slutet av kopian. Kopian ska sedan returneras.

Du ska också göra viss felkontroll på de inkommande varaiblerna. Första variablen ska vara en Array och den andra av
datatypen Number. Är detta inte fallet ska ett TypeError exception kastas.
Är första parametern en tom Arrat ska ett vanligt Error kastas.

```
var arr = [1, 2, 3];
var newArray = addToCopy(arr, 4); // newArray should be [1, 2, 3, 4]
// arr should be the same as before so arr !== newArray
```

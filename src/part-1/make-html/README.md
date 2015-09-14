## Make HTML

Nivå: A

Denna uppgiften är en applikation som skapar HTML. Det är dock en enklare variant som
bara klarar av att skapa starttag, sluttag och textinnehåll däremellan. Den klarar alltså
inte av t.ex. tomma element eller attribut. Tanken är att vi i slutändan ska kunna skicka in
en array med objekt som instruerar applikationen att skriva HTML-kod i form av en textsträng.
Vi kommer inte ta hänsyn till så kallade whitespaces så som radbrytningar så HTML-strängen blir
i ett stycke.

Uppgiften är tänkt att lösas via fyra olika funktioner för att enklare bryta ner problemet:

* makeStartTag - Tar en textsträng som parameter och returnerar en textsträng i form av en starttagg

```
MakeHtml.makeStartTag("h1"); // returns "<h1>"
```

* makeEndTag - Tar en textsträng som parameter och returnerar en textsträng i form av en sluttagg

```
MakeHtml.makeEndTag("h1"); // returns "</h1>"
```

* makeElement - Tar två textsträngar som parameter och returnerar en textsträng av ett helt element.
Här bör man anropa de två tidigare funktionerna för att skapa slutresultatet

```
MakeHtml.makeElement("h1", "This is a headline"); // returns "<h1>This is a headline</h1>"
```

* makeSnippet - Tar en array med object som parameter och returnerar en textsträng i form av HTML

```
var arr = [{"h1"; "This is a headline"}, {"p": "...and this is a paragraph"}]
MakeHtml.makeSnippet(arr); // returns "<h1>This is a headline</h1><p>...and this is a paragraph</p>"
```

### Tips
För att lösa uppgiften bör man förstå hur man kan anropa funktioner och därmed dela upp
varje del av problemet som ska lösas. Varje funktion finns definierad från början i koden.

Saker som kan underlätta att titta på på MDN är:

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* Object.Keys() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
* Array.forEach - (går så klart också att använda en annan typ av loop t.ex. en vanlig for-loop

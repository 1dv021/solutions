##Bugsy
I denna uppgiften får du kod i form av dels en modul (helper) innehållande en del hjälpfunktioner
för uppgiften. Dessa fungerar och ska inte ändras.

Din uppgift blir att rätta koden i funktionen "getGangster". Denna funktion tar en sträng i form av initsialer
på en misstänkt gangster. Metoden getGangster har till uppgift att undersöka dessa initsialer och para ihop dessa
med rätt gangsternamn. Till sin hjälp kan funktionen använda två hjälpfunktioner som laddas in via modulen "helper".
Dessa beskrivs nedan.

### Funktionen getNext()
Denna funktion går igenom en lista med namn på kända gangsters. För varje gång man anropar getNext() får man ett nytt
namn tills det inte finns flera. Då returneras en tom sträng. Metoden passar bra att anropa i någon form av while-loop.

```
var helper = require("helper"); // laddar in modulen helper
var name = getNext(); // första namnet laddas in => "Bugsy Malone"

....

name = getNext(); // nu uppdateras variabeln "name" med nästa namn i listan => "Frank Nitti"

```

### Funktionen getInitials(name)
Funktionen tar ett namn som parameter och returnerar detta namns Initsialer (tittar på mellanslagen mellan namnen)

```
var helper = require("helper"); // laddar in modulen helper

var name = "Al Capone";

var initials = helper.getInitials(name); // Al Capone blir "AC" vilket nu är värdet på variabeln  "initials"

```

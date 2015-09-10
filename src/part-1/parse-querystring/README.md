# Laboration - parse querystring

Denna uppgift går ut på att parsa en så kallad querystring och plocka ut
värden från denna. En querystring används som påbyggnad på en vanlig URL för att
skicka med extra data till servern.
Exempelvis kan en URL se ut såhär: http://lnu.se?name=Stina&age=24

http://lnu.se - är själva URL:en till webbservern och den behöver vi
inte bry oss om i denna uppgift men det som kommer efter tecknet '?', det är själva querystringen
och den ska vi försöka bena ut i vår kod. En querystring består av ett eller flera värdepar.
Vi ser dem i exemplet som name=Stina och age=24, name och age är nyklar (liknande variabler)
och Stina och 24 är dess värden. Din uppgift blir att skriva en funktion
som tar in en URL och parsar/arbetar om dessa till JavaScript-objekt som sedan blir
enklare att hantera i kod.

##Kodexempel
```
qsParser.parse("http://lnu.se?key1=value1&key2=value2"); // returns { key1: "value1", key2: "value2" }
qsParser.parse("http://lnu.se"); // returns {}
qsParser.parse("http://lnu.se?key"); // returns {key: ""}
qsParser.parse("http://lnu.se?key1=value1&key2=") // returns  { key1: "value1", key2: "" }

```

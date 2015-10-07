# Simple Lego Builder
För att träna på att skapa objekt med hjälp av olika designmönster så ska du i tre steg skapa en enkel "legoapplikation".

- (file: lego-part1.js) Här skapar du objekt med Factory Pattern
- (file: lego-part2.js) Här skapar du objekt med Constructor Pattern
- (file: lego-part3.js) Här skapar du objekt med Constructor/Prototype Pattern

Objekten som ska skapas ska ha följande egenskaper:
- x (antal legopluppar i x-led) Om inget värde anges ska x = 2
- x (antal legopluppar i y-led) Om inget värde anges ska y = 4
- z (antal legopluppar i z-led) Om inget värde anges ska z = 2
- color (färg angiven som en sträng "red", "blue" etc.) Om inget värde anges ska color = "red"

Objekten som ska skapas ska ha följande metoder:
- toString (ger en strängrepresentation av legobiten "® ® ® ®\\n® ® ® ®" för en bit som är x=4 och y=2)
- render (skriver ut strängen som toString genererar i console.log)

Du genomför uppgiften genom att släcka testen i ordning. Först part1, sedan part2 etc. Observera att varje grupp av test hör till en javascript-fil. I denna uppgift ska du alltså skriva kod i tre filer.

### Tips
Titta på föreläsning 5 i kursen innan du genomför denna uppgift.

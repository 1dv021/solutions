#Skrotbilen

Din uppgift är att skriva kod som efterliknar en enkel bil. Bilen ska kunna starta, stanna, svänga till höger, svänga till vänster och accelerera. Det ska vara möjligt att ge bilen ett smeknamn och dessutom nåste bilen själv hålla ordning på dess hastighet.

##Typen CarA
Du ska komplettera filen CarA.js med kod som gör det möjligt att instansiera objekt av typen `CarA`, för att det ska vara möjligt att "köra" objekten utan problem på testbanan och tävlingsbanan App.

###Egenskaper
- `petName`, som håller ordning på smeknamnet. Standardvärdet ska vara __Skrotbilen__ om inget annat anges vid instansiering av nya objekt.

- `speed`, vars värde är bilens aktuella hastighet. Värdet ska vara __0__ för nya instanser.

###Metoder

Instansieras flera objekt av typen CarA ska samtliga objekt använda sig av exakt samma metoder.

__OBS!__ _Angivna strängar nedan förutsätter att ett objekt instansierats utan att något smeknamn angavs_.

- `accelerate`, ändrar bilens hastighet. Ska ha en parameter vars värde är förändringen av hastigheten. Ett positivt värde ökar hastigheten, ett negativ minskar hastigheten. Ökar hastigheten med 20 km/h ska metoden returnera strängen __"Skrotbilens hastighet ökar från 10 km/h till 30 km/h."__. Minskar hastigheten med 5 km/h ska metoden returnera strängen __"Skrotbilens hastighet minskar från 30 km/h till 25 km/h."__. Anropas metoden med ett argument som inte är ett tal eller värdet 0 ska strängen __"Skrotbilens hastighet är oförändrad!"__ returneras.

- `turnLeft`, ska returnera strängen __"Skrotbilen svänger vänster."__.

- `turnRight`, ska returnera strängen __"Skrotbilen svänger höger."__.

- `start`, ska returnera strängen __"Skrotbilen startar."__.

- `stop`, ska returnera strängen __"Skrotbilen stannar."__. (Bilens hastighet ska självklart dessutom sättas till 0!)

##Tips
Se föreläsning 5 och fokusera på designmönstret "Constructor/Prototype".

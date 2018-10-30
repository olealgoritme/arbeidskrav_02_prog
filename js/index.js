/**
* ARBEIDSKRAV 02
* -- kodet av Ole Algoritme (C) 2018
* 
* OBS! All kommentering og variabelnavngiving er (selvfølgelig) gjort på engelsk.
*/


/** 
* Dette er menyen til Pippis Pizza. De numeriske verdiene representerer menyvalgene som brukeren kan taste inn i prompt. 
* Implementer nå resten av funksjonaliteten basert på oppgaveteksten.
*/
var menu = [
    "0 = Calzone",
    "1 = Ost & Skinke",
    "2 = Margarita",
    "3 = BBQ Grill"
];


/**
* Oppgave:
* 
* 1. Ta i bruk prompt() for å spørre bruker om postnummer. Postnummeret for å kvalifisere til
* gratis pizza skal være mellom 1000 og 1999. Hvis denne betingelsen ikke oppfylles, må
* bruker få beskjed via alert() om at “Beklager, du er ikke i området hvor vi tilbyr gratis
* pizza.”
* 2. I den utdelte koden på Scrimba er det et array med pizzaer som utgjør Pippis Pizza sin meny.
* Hvis betingelsen fra punkt 1 oppfylles – med andre ord at bruker befinner seg innenfor
* postnumrene 1000 og 1999 – ta i bruk prompt() for å spørre bruker hvilket menyvalg
* (numerisk verdi) vedkommende ønsker å bestille.
* 3. Gi beskjed til bruker via alert() når pizza er bestilt. Meldingen til bruker skal inneholde:
* “Pizza <navn på pizza hentet fra meny-array> er på vei til postnummer <postnummer>”.
*/


/**
*
* Baseline for zipcodes
* - Customers within the zipcode range 1000-1999, gets a FREE Pizza 
*/
var zipcodeStart = Number(1000);
var zipcodeEnd   = Number(1999);


/** 
*
* function that checks if zipcode is within the hardcoded zipcode range (zipcodeStart/End)
*
* @param  String   zipcode 		Zip code that will be checked
* @return Boolean  	            Returns true if the parameter is within range
*/
function isWithinRange(zipcode) {
	Number(zipcode);
	if(zipcode >= zipcodeStart && zipcode <= zipcodeEnd) return true; 
	return false;
}


/**
* User input using prompt() functions
*/
var inputZipcode = prompt("Hvilket postnummer bor du på? (Bor du riktig sted får du GRATIS PIZZA!)");
var validZipcode = isWithinRange(inputZipcode);                           

if (!validZipcode) {
	alert("Beklager, du er ikke i området hvor vi tilbyr gratis pizza.");
} else {
	var inputMenuChoice = prompt("Velg et produkt fra menyen\n\n" + menu);
	console.log("%c" + "RESULTATER FRA ARBEIDSKRAV 02", "background: #255; color: #FFFFFF");
	console.log("%c" + "-- kodet av Ole Algoritme (C) 2018", "background: #255; color: #FFFFFF");
	console.log("%c" + "_________________________________________________________________________________" + "\n", "color: #000000;");
	console.log("Pizza - \"" + menu[inputMenuChoice].substring(4, menu[inputMenuChoice].length) + "\" er på vei til postnummer: " + inputZipcode);
}
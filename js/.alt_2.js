/**
 * ARBEIDSKRAV 02
 * -- kodet av Ole Algoritme (C) 2018
 * 
 * OBS! All kommentering og variabelnavngiving er (selvfølgelig) gjort på engelsk.
 *
 *
 *
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
 * Alternative #2
 * Simply procedural with
 * a couple of functions
 */


/**
 * Local variables
 */
var zipcode, product;
var zipcodeStart = 1000;
var zipcodeEnd = 1999;
var menu = [
    "0 = Calzone",
    "1 = Ost & Skinke",
    "2 = Margarita",
    "3 = BBQ Grill"
];


/**
 * Checks for zip code validity
 * @param  String   zipcode      Zip code string to be checked
 * @return Boolean  true/false   Returns true if the parameter is a Number and has length of 4
 */
function isValidZipcode() {
	if (!isNumber(zipcode) || zipcode.length !== 4) return false;
	return true; 
}


/** 
*
* Checks if zipcode is within the hardcoded zip code range
* 
* Does a simple check first
* Does a more thourough check if needed
* 
* @param  Number   zipcode      Zip code that will be checked
* @return Boolean  true/false   Returns true if the parameter is within range
*/
function isWithinRange() {
	if (zipcode >= zipcodeStart && zipcode <= zipcodeEnd) return true;
	return false;
}

/* Helper functions */
function isNumber(input) {
    return /^\d+$/.test(input);
}

function isValidProduct() {
	if (isNumber(product) && product !== null && (product == 0 || product < menu.length)) return true;
	return false;
}

function printConsole(product, zipcode) {
	console.log("%c" + "RESULTAT FRA ARBEIDSKRAV 02", "background: #255; color: #FFFFFF");
	console.log("%c" + "-- kodet av Ole Algoritme (C) 2018", "background: #255; color: #FFFFFF");
	console.log("%c" + "_________________________________________________________________________________" + "\n", "color: #000000;");
	console.log("Pizza - \"" + menu[product].substring(4, menu[product].length) + "\" er på vei til postnummer: " + zipcode);
}


/**
* Asks user for zip code using prompt() function.
* Does a validation check on the input and checks if zip code
* is within range to get the free pizza promotion.
*/

zipcode = prompt("Hvilket postnummer bor du på? (Bor du på riktig sted får du GRATIS PIZZA!)");

if (zipcode == null) {
	alert("Du glemte å taste inn noe!");
} else if (!isValidZipcode()) {
	alert("Du har ikke gitt oss et korrekt postnummer. Postnummer baseres på 4 tegn med tall fra 0-9");
} else if (!isWithinRange()) {
	alert("Beklager, du er ikke i området hvor vi tilbyr gratis pizza.");
} else {
	product = prompt("Velg et produkt fra menyen\n\n" + menu);
	if (product == null) {
		alert("Du glemte å taste inn noe!");
	} else if (isValidProduct(product)) {
		printConsole(product, zipcode);
	} else {
		alert("Beklager, dette produktet eksisterer ikke! Prøv på nytt");
	}
}

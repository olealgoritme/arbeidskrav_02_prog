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
 * Alternative #1
 * Using simple classes
 * and more thorough checking
 */


/**
 * Local variables
 */
var z, p;

const ALERT_MSG = {
	INVALID_ZIPCODE:    "Du har ikke gitt oss et korrekt postnummer. Postnummer baseres på 4 tegn med tall fra 0-9.",
	INVALID_RANGE:      "Beklager, du er ikke i området hvor vi tilbyr gratis pizza.",
	INVALID_PRODUCT:    "Beklager, produktnummeret du tastet inn er feil.",
	INVALID_MENU_ENTRY: "Beklager, produktnummeret du tastet inn er ikke på menyen.",
	NO_INPUT:           "Du glemte å oppgi noe!"
};


const PROMPT_MSG = {
	ZIPCODE: 			"Hvilket postnummer bor du på? (Bor du på riktig sted får du GRATIS PIZZA!",
	PRODUCT: 			"Velg et produkt fra menyen [0-3]"
};


/**
 * Menu array from assignment
 */
var menu = [
    "0 = Calzone",
    "1 = Ost & Skinke",
    "2 = Margarita",
    "3 = BBQ Grill"
];


/**
 * Simple Zipcode class
 */
class Zipcode {

    constructor(zipcode) {
        this.zipcode = zipcode;
        this.length = (zipcode == null) ? 0 : this.zipcode.toString().length;
        this.zipcodeStart = 1000;
        this.zipcodeEnd = 1999;
        this.zipLen = 4;
    }

    isValidZipcode() {
        return (isNumber(this.zipcode) && this.length === this.zipLen);
    }

    isWithinZipcodeRange() {
    	return (this.zipcode >= this.zipcodeStart && this.zipcode <= this.zipcodeEnd);
    }
}


/**
 * Simple Product class
 */
class Product {
    
	constructor(product) {
        this.product = product;
		this.menuItems = 4;
    }

    isValidProduct() {
        return (isNumber(this.product) && this.product < this.menuItems);
    }

    isOnMenu() {
    	return (this.product >= 0 && this.product < this.menuItems);
    }
}


/**
 * Number helper function
 * Checks input parameter for decimals 0-9 using regex pattern
 */
function isNumber(input) {
    return /^\d+$/.test(input);
}


/*
 *  Prompts for zip code. Moves on to Prompt for product selection
 *  if all cases are met
 */
function promptZipcode() {
	z = prompt(PROMPT_MSG.ZIPCODE);
	if(z == null) alert(ALERT_MSG.NO_INPUT);
	z = new Zipcode(z);

	switch(z !== null) {
		case ( !z.isValidZipcode() ) : alert(ALERT_MSG.INVALID_ZIPCODE); break;
		case ( !z.isWithinZipcodeRange() ) : alert(ALERT_MSG.INVALID_RANGE); break;
		case ( z.isValidZipcode() && z.isWithinZipcodeRange() ) : promptProduct(); break;
 	}
}


/*
 *  Prompts for zip code. Moves on to Prompt for product selection
 *  if all cases are met
 */
function promptProduct() {
	p = prompt(PROMPT_MSG.PRODUCT + "\n\n" + menu);
 	if(p == null) alert(ALERT_MSG.NO_INPUT);
 	p = new Product(p);

 	switch(p !== null) {
  	 	case ( !p.isValidProduct() ) : alert(ALERT_MSG.INVALID_PRODUCT); break;
		case ( !p.isOnMenu() ) : alert(ALERT_MSG.INVALID_MENU_ENTRY); break;
		case ( p.isValidProduct() && p.isOnMenu() ) : printConsole(); break;
 	}
}


/**
 * Console printer function
 */
function printConsole() {
	console.log("%c" + "RESULTAT FRA ARBEIDSKRAV 02", "background: #255; color: #FFFFFF");
	console.log("%c" + "-- kodet av Ole Algoritme (C) 2018", "background: #255; color: #FFFFFF");
	console.log("%c" + "_________________________________________________________________________________" + "\n", "color: #000000;");
	console.log("Pizza - \"" + menu[p.product].substring(4, menu[p.product].length) + "\" er på vei til postnummer: " + z.zipcode);
}


/**
 * Starts prompt functions to get user input of zip code and product selected.
 * Does a (lot of) validation checking on the inputs.
 */

promptZipcode();
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
	INVALID_PRODUCT:    "Beklager, produktnummeret du tastet inn eksisterer ikke.",
	NO_INPUT:           "Du glemte å oppgi noe!",
    SUCCESS:            "Pizza NAME er på vei til postnummer ZIPCODE" 
};


const PROMPT_MSG = {
	ZIPCODE:            "Hvilket postnummer bor du på? (Bor du på riktig sted får du GRATIS PIZZA!)",
    PRODUCT:            "Velg et produkt fra menyen [0-3]"
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
 * Simple Zipcode class with validation checks
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
 * Simple Product class with validation checks
 */
class Product {
    
    constructor(product) {
        this.product = product;
        this.menuItems = 4;
    }

    isValidProduct() {
        return (isNumber(this.product) && this.product >= 0 && this.product < this.menuItems);
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
 *  Prompts for zip code. Moves on to promptProduct() for product selection
 *  if all cases are met. Jumps to init() if cases are not met.
 */
function promptZipcode() {
    z = prompt(PROMPT_MSG.ZIPCODE);
    if(z === null || z === "") alert(ALERT_MSG.NO_INPUT); init();
    z = new Zipcode(z);

    switch(z !== null) {
        case ( !z.isValidZipcode() ) : alert(ALERT_MSG.INVALID_ZIPCODE); init(); break;
        case ( !z.isWithinZipcodeRange() ) : alert(ALERT_MSG.INVALID_RANGE); init(); break;
        case ( z.isValidZipcode() && z.isWithinZipcodeRange() ) : promptProduct(); break;
        default: init(); break;
    }
}


/*
 *  Prompts for product selection. Moves on to orderComplete()
 *  if all cases are met, Jumps to init() if cases are not met.
 */
function promptProduct() {
    p = prompt(PROMPT_MSG.PRODUCT + "\n\n" + menu);
    if(p === null || p === "") alert(ALERT_MSG.NO_INPUT); init();
    p = new Product(p);

    switch(p !== null) {
        case ( !p.isValidProduct() ) : alert(ALERT_MSG.INVALID_PRODUCT); init(); break;
        case ( p.isValidProduct() ) : orderComplete(); break;
        default: init(); break;
    }
}


/**
 * Function that prints to console and shows alert about order details
 */
function orderComplete() {
    var productName = menu[p.product].substring(4, menu[p.product].length);
    var message = ALERT_MSG.SUCCESS.replace("NAME", productName).replace("ZIPCODE", z.zipcode);
    console.log("%c" + "RESULTAT FRA ARBEIDSKRAV 02", "background: #255; color: #FFFFFF");
    console.log("%c" + "-- kodet av Ole Algoritme (C) 2018", "background: #255; color: #FFFFFF");
    console.log("%c" + "_________________________________________________________________________________" + "\n", "color: #000000;");
    console.log(message);
    alert(message);
}


/**
 * Resets variables (not really necessary, but showing for code clarity)
 * Initializes prompt functions to get user input of zip code and product selected.
 * Code does a (lot of) validation checking on the inputs.
 */
function init() {
    // Resets variables
    z = null;
    p = null;

    // Starts with zip code, and iterates through the functions
    // when all criterias are met
    promptZipcode();
}


// Starting point
init();
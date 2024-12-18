# Projsekt Unhealthiez

Dette prosjektet er en enkel nettside for en skolekantine. Prosjektet ble opprettet ved hjelp av HTML, CSS, JavaScript og Firebase, og det følger universelle designprinsipper for å sikre tilgjengelighet.


## Filer/programmer brukt

- HTML: Strukturerer innholdet på nettstedet.
- CSS: Styler nettstedet som gjør det visuelt tiltalende.
- JavaScript: Legger til interaktivitet og gjør brukerhandlinger.
- Firebase: Tilbyr backend-tjenester som autentisering og databaselagring.


## Funksjoner

- Brukerregistrering og pålogging: Brukere kan opprette en konto og logge på for å få tilgang til personlige funksjoner som å se på menyen.
- Matkategorimeny: Nettstedet viser kategorier på mat på hjemmesiden.
- Responsiv design: Nettstedet er designet for å fungere godt på både stasjonære og mobile enheter.


## Implementering av tilgjengelighet

Nettstedet følger universelle utformingsprinsipper for å sikre tilgjengelighet:

- Semantisk HTML: Brukte riktige HTML-koder for å formidle mening, og hjelpe skjermlesere.
- Tastaturnavigering: All interaktiv tekstboks kan nås via tastaturet.
- Kontrast og skriftstørrelse: Sikrer lesbar tekst med tilstrekkelig kontrast.
- Alt tekst for bilder: Gir beskrivende tekst for bilder for å hjelpe synshemmede brukere.


## Bilder

- Ulike illustrasjoner brukt som bakgrunn på sider.


## Innlogging/Logg ut funksjonalitet

- Pålogging: Brukere kan logge på med e-post og passord. Firebase Authentication styrer prosessen, og sikrer sikker tilgang.
- Logg ut: Brukere kan logge ut.


## Databasestruktur

Prosjektet bruker Firebase Firestore til å lagre data:

- Brukersamling: Lagrer brukerinformasjon som navn og e-post.
- Menysamling (utilgjengelig for øyeblikket): Lagrer detaljer om tilgjengelige matvarer, som navn, beskrivelse, pris og tilgjengelighet.


## Kjente problemer

- Administrasjonspanel for ukemeny: Administrasjonspanelet hadde til hensikt å plassere elementer på ukemenyen, men fungerer dessverre ikke på grunn av Firebase-problemer. Plassering av bestillinger eller sporing av ordrehistorikk er utilgjengelig.
- Matkategorimeny: Alle kategoriene er utilgjengelige bortsett fra "Ukemeny".
- Passordgjenoppretting: Gjenoppretting av passord er utilgjengelig.
- Påloggingsalternativer: Logging med Google, Microsoft eller Yahoo! er ikke tilgjengelig.


## Tilgang

- Klikk på lenken i beskrivelsen for tilgang til nettstedet.

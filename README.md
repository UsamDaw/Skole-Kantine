# README for Unhealthiez Prosjekt

## Om prosjektet
Dette prosjektet er en nettside om skolens kafeteria "Unhealthiez". Hele prosjektet har flere sider. Dessverre kunne ikke administrasjonspanelet fikses på grunn av mange problemer. Nettstedet bruker HTML, CSS og JavaScript for front-end og Firebase for backend.

## Planen min
- Ukens meny: Viser matvarer med navn, beskrivelse, pris og bilde hentet fra Firebase Firestore.
- Andre produkter: Viser flere varer tilgjengelig i kantinen.
- Administratorpanel: Lar administratorer legge til matvarer med navn, beskrivelse, pris og bilde. Data lagres i Firebase Firestore og bildene lastes opp til Firebase Storage.
- Påloggings/registreringsalternativer: Logg på eller registrering via Google, Microsoft eller Yahoo!
- Passordgjenoppretting: gjenopprett passordet ditt ved å skrive inn e-postadressen din.

## Funksjoner 
- Logg inn/registrer deg: Kan opprette eller logge på din egen konto.
- Brukernavngrense: Opprettingsgrensen for brukernavn er på 15 tegn.
- Logg ut: Logg av kontoen din
- 

## Hvordan bruke nettsiden
- Installer avhengigheter: Firebase brukes som backend, og du trenger en Firebase-prosjektkonfigurasjon.
- Konfigurer Firebase: Erstatt Firebase-konfigurasjonen i "adminPanel.js" og "weeklyMenu.js" med dine egne Firebase-detaljer.
- Gå til lenken i beskrivelsen for å skjekke nettsiden.

## Kjent problem
- Administratorpanelet fungerer ikke som forventet. Det oppdaterer ikke ukens meny på riktig måte, og data lagres ikke som planlagt i Firebase.

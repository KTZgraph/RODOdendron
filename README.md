# RODOdendron

- RODO rozporządzenie o ochronie danych osobowych

# ikonka
https://www.flaticon.com/free-icon/health-insurance_3729142
https://www.flaticon.com/free-icon/search_3729136
https://www.flaticon.com/free-icon/heart_8095781
https://www.flaticon.com/free-icon/dating-app_2513690
https://www.flaticon.com/free-icon/chat_6363695
https://www.flaticon.com/free-icon/love_3729178
https://www.flaticon.com/packs/love-152
https://www.flaticon.com/free-icon/life-protection_3307180
https://www.flaticon.com/free-icon/life-insurance_3307230
https://www.flaticon.com/packs/dating-app-32

## Cel aplikacji

- docelowa grupa użytkownicy do których dzwoni fotowoltaika, darmowe badania stawów, oferty bitcoina, podszywajacy się pod bank etc.
- wyszukiwanie informacji o numerach telefonów w jednym miejscu, które potencjalnie są wykorzystywane do scamu/spoofinu z serwisów:

```js
"https://www.ktoto.info/numer/412032503/",
  "https://www.odebractelefon.pl/numer-telefonu/412032503",
  "https://callfilter.app/48412032503",
  "https://www.nieznanynumer.pl/numer/412032503",
  "https://numerytelefonu.com/nrtel/625851881",
  "https://ktodzwonil.info.pl/412032503/",
  "https://www.nieznany-numer.pl/Numer/412031253",
  "https://numerytelefonu.com/nrtel/511810789",
  "https://infonumer.pl/numer-telefonu/632263172",
  "https://allans.pl/p/632263172-63-226-31-72-kto-dzwonil/",
  "https://enumery.pl/632263172,nr,kto,dzwonil",
  "https://www.telguarder.com/pl/number/632263172",
  "https://slick.ly/pl/632263172",
  "https://czyodebrac.pl/co-to-za-numer-dzwonil/123707000/",
  "https://who-called.eu/pl/825701210";
  https://www.tellows.pl/num/236883235
  https://tel-no.com/pl/236883235
  https://worldgsm.pl/numery/kto-dzwonil/236883239
```

- zebranie jak największej ilości screenów z atakami w formie przypominajacej serwis https://pinterest.com/
- dodanie tłumaczeń aplikacji, automatyznych tłumaczeń opinii z serwisów, by nie wykluczać użytkowników nie posługujacych się językiem polskim
- dla zalogowanych użytkowników możliowść dodawania infromacji o natrętnych telefonach z godziną, danymi jakimi przedstawił się atakujący, regionem Polski; zanonimizowane - celem jest tylko zebranie statystyk, właściciel danych jest potrzebny do ewentualnego edytowania i usuwania danych
- statystyki ataków ze względu na region
- powiadomienia email/ w aplikacji (bo smsmy są płatne) o nowych atakach/wyłudzeniach
- zebranie materiałów edukacyjnych takich jak https://www.youtube.com/watch?v=SbCcmLqmQSs które wcześniej sama przeanalizowałam
- powiadomienia o nowych materiałach edukacyjnych przez email/aplikację
- informacje o stronach policji ze względu na region - odniesienia do serwisów gdzie taki ataki można zgłaszać
- instrukcje jak sprawdzić np certyfikat strony banku
- informacje o potencjalnych miejscach wycieku danych osobowych np.: niezadowolony pracownik banku
- (planowane) NLP do analizy sentymentalnej opinii z serwisów
- (planowane) może forma z gier - punkty, statystyki z obejrzenia materiałów? Przygotowanie ręczne prostych testów do każdego materiału edukacyjnego
- (planowane) może uda sie stworzyć koło naukowe/jakąś społeczność; w tym momencie są aż dwie osoby

# Ogólne informacje

- pomysły, dane można dodawać przez issue, pull request, email połaczony z kontem github użytkownika @pawlaczyk lub @rafalwojaczek - staramy się co najmniej raz w tygodniu sprawdzać skrzynki/repozytoria
- (planowane) stworzenie ogólniejszej wersji programu, tak by osoby z Open Source innych krajów mogły zaadoptować aplikację na swój region
- Według statystyk JavaScript jest najpopularniejszym językiem, dlatego wybrano ten stack technologiczny, by potencjalnie najwięcej programistów mogło zaadoptować projekt na własne potrzeby
- RODO rozporządzenie o ochronie danych osobowych
- Windows, Mongodb, Express, React, Node.js
- ES6 - uwaga na importy (required('nazwa-biblioteki-js') nie zadziała)

# Struktura projektu

- design
  - CX/UX/UI design w darmowej wersji figmy
  - desktop i mobile
  - style bazują na Material Design
  - wireframy w tym momencie na kartkach nigdzie nie udostępnione
- src
  - kod aplikacji; MERN stack
- src\backend
  - aplikacja w Node.Js express + połączenie z MongoDB
- src\frontend
  - klient (frontend) React

# Uruchomienie

## backend

- wymagany jest plik ze zmiennymi środowiskowymi
  - src\backend\.env
- przykładowy plik src\backend\env_example

```sh
PORT=4000
```

## uruchomienie backendu

```sh
cd src\backend
npm i
npm start
```

### hot reload

`nodemon server.js` albo `npm start dev`

### gdy nie dewelopujemy

`node server.js` albo `npm start`

# Użyte biblioteki

## Backend

```sh
npm install express
npm install -g nodemon
npm install dotenv
```

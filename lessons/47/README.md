# 47. lecke - A `nodemon` használata a webpack-kel 
- Fejlesztés közben zavaró lehetett, hogy ha a `dev` vagy a `watch` szkript futott, és módosítottuk a webpack configot, akkor mindig meg kellett állítani a szkript futását, majd újraindítani
- Ha ezt el akarjuk kerülni, azaz el szeretnénk érni, hogy a `webpack.config.js` módosításakor ne kelljen manuálisan újraindítani mindig a szkriptet, akkor kössük elé a `nodemon`t
- Először is telepítsük: `npm i -D nodemon`
- Majd módosítsuk a `dev` és a `watch` szkriptet, kössük a webpack elé a `nodemon`t úgy, hogy csak egy fájlnak, a `webpack.config.json`-nek a módosulását figyelje:
  
  ```json
  "watch": "nodemon --watch webpack.config.js --exec webpack --node-env=production --watch",
  "dev": "nodemon --watch webpack.config.js --exec webpack serve --node-env=development",
  ```

- A build szkriptnél erre nincs szükség, hiszen az minden esetben csak egyszer fut le, nem figyeli a fájlszintű változásokat
- Most, ha akár a `dev`, akár a `watch` szkriptet futtatom, a `webpack.config.js` fájl módosítása után automatikusan újraindul a szkript futása

**Linkek** :
- [nodemon](https://www.npmjs.com/package/nodemon)

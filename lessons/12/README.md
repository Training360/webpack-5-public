# 12. lecke - A `devtool` konfiguráció, `source map` generálása
- A `devtool` opciónál megadhatjuk, hogy milyen formában generáljon `source map`-et a webpack
- Adjuk meg a webpack konfigurációs fájljában a következőt: `devtool: 'source-map'`
- Buildeljük újra az alkalmazást
- Ez debuggolásnál nagyon hasznos, hiszen mindegyik állományt külön tudjuk debuggolni
- Ha akarjuk, ki is kapcsolhatjuk az érték `false`-ra állításával

**Linkek** :
- [Devtool](https://webpack.js.org/configuration/devtool/#root)
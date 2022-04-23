# 14. lecke - A `contenthash` a fájlnévben, gyorsítótárazás
- A fájlok buildelésekor a kimeneti fájl nevéhez hozzá tudunk rendelni egy hash-t
- Ehhez adjuk meg az `output` opciónál a `filename` bejegyzést: 
  
  ```javascript
   filename: '[name].[contenthash].js',
  ```

- Amint újra buildeljük az alkalmazást, látható a fájlnévben a hash, és minden egyes buildnél, ha van tartalomváltozás, egy új egyedi hash generálódik
- Ez azért hasznos, mert a böngésző az adott verziót gyorsítótárazza mindig, és amint egy új verzió jön ki, azaz eltérő hash-sel rendelkező fájl jön létre, azt fogja betölteni, hiszen ilyenkor megváltozik a link
- Ilyen esetben az `index.html` fájlban mindig át kell írnunk manuálisan a linket

**Linkek** :
- [Output filename contenthash](https://webpack.js.org/concepts/under-the-hood/#output)
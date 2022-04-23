# 52. lecke - A `runtime` chunk
- Ha megnézzük a buildelt JS-fájlokat, akkor mindegyiknek az elején láthatjuk a webpack runtime kódját, azaz azt a JS-kódot, amely szükséges az alkalmazás működéséhez
- Ezen belül látható a manifest is, amely a moduljaink nyilvántartási jegyzéke
- A harmadik féltől származó és a saját kódunkat elválasztottuk már egymástól
- A webpack runtime kódját is szervezzük ki külön fájlba, a `splitChunks` után adjuk meg a következőt: ` runtimeChunk: 'single'`
- Ezzel a runtime kódot egy külön runtime chunkba, külön fájlba fogja a webpack kimenteni, ezzel pedig a kód három részre van bontva:
  - saját kód
  - harmadik féltől származó kód
  - runtime kód

**Linkek** :
- [optimization.runtimeChunk](https://webpack.js.org/configuration/optimization/#optimizationruntimechunk)


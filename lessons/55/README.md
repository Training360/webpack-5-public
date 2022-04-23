# 55. lecke - A `Stylelint` módosítása
- Mivel a CSS-t átírtuk SCSS-re, a `stylelint` konfigurációt is módosítanunk kell
- Telepítsünk két újabb csomagot: `npm i -D stylelint-scss stylelint-config-standard-scss`
- Majd módosítsuk a `stylelint.config.js` fájlt, adjunk hozzá a `stylelint-scss` plugint, és az `extends`-hez vegyük fel a `stylelint-config-standard-scss` konfigurációt:

  ```javascript
  module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-standard-scss'
    ],
    plugins: [
      'stylelint-order',
      'stylelint-scss'
    ],
    rules: {
      'order/properties-alphabetical-order': true,
      'selector-class-pattern': '^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+)?$'
    }
  }
  ```

**Linkek** :
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)
- [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
const monsterCardFactory = ({ name, strength, health, xp } = {}) => `
<div class="monster">
  <div class="monster__container">
    <div class="monster__header">
      <h2 class="monster__name">
        ${name}
      </h2>
    </div>
    <div class="monster__footer">
      <div class="monster__strength">
         ${strength}
      </div>
      <div class="monster__health">
         ${health}
      </div>
       <div class="monster__xp">
         ${xp}
      </div>
    </div>
  </div>
</div>
`

export default monsterCardFactory
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
         <strong>ST: </strong> ${strength}
      </div>
      <div class="monster__health">
        <strong>HP:</strong> ${health}
      </div>
       <div class="monster__xp">
        <strong>XP:</strong> ${xp}
      </div>
    </div>
  </div>
</div>
`

export default monsterCardFactory
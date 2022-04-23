import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell, faHeart, faGem } from '@fortawesome/free-solid-svg-icons'

library.add(faDumbbell, faHeart, faGem)
dom.watch()

const aboutPage = {
  selector: 'body',
  position: 'beforeend',
  template: `
  <div class="about">
    <h1 class="about__name">
      GOD
    </h1>
     <div class="about__footer">
      <div class="about__attribute">
         <span class="fas fa-dumbbell about__attribute-icon"></span>
         <span class="about__attribute-value">Infinity</span>
      </div>
      <div class="about__attribute">
         <span class="fas fa-heart about__attribute-icon"></span>
         <span class="about__attribute-value">Infinity</span>
      </div>
       <div class="about__attribute">
         <span class="fas fa-gem about__attribute-icon"></span>
         <span class="about__attribute-value">Infinity</span>
      </div>
    </div>
  </div>
  `
}

export default aboutPage

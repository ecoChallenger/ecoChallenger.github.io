import { html } from "../src/lib.js";
import { amazonView } from "./amazon.js";
import { antarcticaView } from "./antarctica.js";
import { arcticView } from "./arctic.js";
import { coralReefsView } from "./coralReefs.js";
import { greenlandView } from "./greenland.js";
import { mountainsView } from "./mountains.js";
import { permaFrostView } from "./permaFrost.js";
import { taigaView } from "./taiga.js";
import { wilkesView } from "./wilkes.js";

const guestsViewTemplate = (amazon,permafrost,arctic,antarctica,greenland,taiga,corals,mountains,wilkes) => html`
<div id="header">
  <div>
    <div id="logo"> <a href="/"><img src="images/maneco.jpg" alt=""></a> </div>
    <div id="navigation">
      <div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/companies">Companies</a></li>
          <li><a href="/guests">Guests</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div id="content">
<div class="section">
    <div> <a @click=${amazon} href="">Amazon</a> <a @click=${arctic} href="">Arctic</a> 
      <!-- <h4>The powers of the Earth are natural forces that create balance in the universe.</h4> -->
      <a @click=${antarctica} href="">Antarctic</a> <a @click=${corals} href="">Coral Reefs</a> <a @click=${greenland} href="">Greenland Glaciers</a> <a @click=${mountains} href="">Mountain Glaciers</a> <a @click=${taiga} href="">Taiga</a> <a @click=${permafrost} href="">PermaFrost</a> <a @click=${wilkes} href="">Wilkes</a>
    </div>
    
    <div class="figure"> <a href=""><img src="images/map-in-grass2.jpg" alt=""></a> <span></span> </div>
    
  </div>
  <div class="paragraph">
    <p>What It Means to Be Environmentally Friendly. Being eco friendly means living in a way that is not harmful to the environment. This way of life is becoming increasingly important, as we need to protect our planet from man-made damage.Be familiar.The world is changed by your example, not by your opinion.</p>
  </div>
</div>
</div>
<div id="footer">
  <div>
    <div class="first">
      <h3><a href="#">ManEco</a></h3>
      <div>
        <p>Telephone : <span>+359887575660</span></p>
        <p>Email : <span>manecofoundation@gmail.com</span></p>
      </div>
    </div>
    <div>
      <h3>Get Social with us!</h3>
      <div> <a href="https://www.facebook.com/ManEcoFoundation" class="facebook"></a> <a href="https://twitter.com/ManEco_Found" class="twitter"></a> <a href="https://www.linkedin.com/company/maneco-foundation/" class="linked-in"></a> </div>
    </div>
  </div>
</div>
`;

export function guestsView(ctx) {
 ctx.render(guestsViewTemplate(amazonView,permaFrostView,arcticView,antarcticaView,greenlandView,taigaView,coralReefsView,mountainsView,wilkesView));
 let array = document.querySelectorAll('#navigation>div>ul>li')
 array.forEach(element => {
  console.log(element.textContent);
  element.className = ""
  if(element.textContent == "Guests") {
    element.className = 'current'
  }
  
 });
};


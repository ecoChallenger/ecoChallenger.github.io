import { html } from "../src/lib.js";

const homeViewTemplate = () => html`
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
<div id="section">
    <div>
      <h1>Earth-friendly!</h1>
      <p>It is time for a new wave of young people for whom life in peace is the basis for development, and ecology - a mandatory basis for progress. It is time to rethink rapidly changing world. Our planet is in critical need of our help and a big time overhaul of our values as a society.I hope these move you, motivate you, and inspire you to live kinder to Earth.</p>
      <span> <a class="first" href="https://veskonik.github.io/CO2-calculator/">CO2 calculator</a> <a href="/guests">Be familiar</a> </span> </div>
    <div id="figure"> <a href=""><img src="images/little-girl-blowing-wind-mill.jpg" alt=""></a> <span></span> </div>
    <span class="background"></span> </div>
  <div id="featured">
    <ul>
      <li class="first"> <a href="https://veskonik.github.io/CO2-calculator/"><img src="images/carbon-footprint-image.jpg" alt=""></a> <span></span>
        <p>Calculate your environmental footprint with our calculator</p>
        <a class="link" href="https://veskonik.github.io/CO2-calculator/">Carbon Footprint Calculator</a> </li>
      <li> <a href="https://app.eraclimate.com/emissions-estimator?gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutknOjFw9fRornV8tUnGD6ennNsXE5bbRNLkcN-EDSjnkrIkBRj2e-gaAgaKEALw_wcB"><img src="images/little-girl-hugging-the-globe.jpg" alt=""></a> <span></span>
        <p>Estimate your emissions using our CHATGPT based AI</p>
        <a class="link" href="https://app.eraclimate.com/emissions-estimator?gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutknOjFw9fRornV8tUnGD6ennNsXE5bbRNLkcN-EDSjnkrIkBRj2e-gaAgaKEALw_wcB">Emissions Assistant</a> </li>
      <li> <a href="/guests"><img src="images/picture.png" alt=""></a> <span></span>
        <p>Learn more about what happened with the nature by the years.</p>
        <a class="link" href="/guests">Keep Learning</a> </li>
    </ul>
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
`

export function homeView(ctx) {
     ctx.render(homeViewTemplate());
     let array = document.querySelectorAll('#navigation>div>ul>li')
     array.forEach(element => {
      console.log(element.textContent);
      element.className = ""
      if(element.textContent == "Home") {
        element.className = 'current'
      }
      
     });
};
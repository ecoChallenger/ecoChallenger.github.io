import { html } from "../src/lib.js";
console.log('it works');
const companiesViewTemplate = () => html`
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
<div class="section" id="sectionTwo">
    <div> <a href="https://app.eraclimate.com/emissions-estimator?gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutknOjFw9fRornV8tUnGD6ennNsXE5bbRNLkcN-EDSjnkrIkBRj2e-gaAgaKEALw_wcB" target="_blank">Emissions Assistant</a> <a href="https://veskonik.github.io/CO2-calculator/" target="_blank">Carbon Footprint Calculator</a> <a href="">Energy Consumption</a> <a href="">Heating</a> <a href="">Water Management</a> <a href="">Waste Management</a>
      <h4>Main activities of “Ecological Manifesto – ManEco” are:</h4>
    </div>
    <div class="figure"> <a href=""><img src="images/girl-hugging-the-globe.jpg" alt=""></a> <span></span> </div>
  </div>
  <div>
    <p>- projects<br> – installation and management of recycling infrastructure; environmental education;<br>
- research on topics such as climate change, conflicts, ecological diplomacy, recycling, sustainability, circular and shared economy, youth;<br>
- raising awareness events such as movie screenings, photo exhibitions and discussions;<br>
- work with youth<br> – trainings, youth exchanges.<br>
​
ManEco Foundation is established upon the Ecological Manifesto where we state that people should re-think their global situation on Earth and prepare for new ways of living which are more generous, environmentally friendly, sustainable, noble and peaceful.<br>
​
The Ecological Manifesto is statement of the global youth through which we express our wish to live in a better world not for us but for the future generations. It is a symbol of unification among the most active young leaders and a bridge to the more experienced ones. It connects ages and places. The Ecological Manifesto is a realization that humanity cannot continue living as usual and immediately must take action to protect the natural resources and change the consumer habits of society. Peaceful living conditions are not enough anymore for our sustainable future. Even if we live peacefully we will be in war with the natural forces and people who don’t want to accept that there is real danger for the whole humanity. We don't want to see the efforts of the ones who had dedicated their lives working in this direction going in vain. We want a world where there is no poverty, but education for everyone, good living standards and healthy environment. We trust science and urge everyone to join us in avoiding the upcoming ecological catastrophe. Everyone can contribute!</p>
    <p>We strongly believe that humanity can change and deal with climate change. But if we want that to happen we should work in all possible ways to keep the global temperatures well below 1.5 degrees Celsius. The ideological framework of the Ecological Manifesto is much in line with the concept of the Deep Ecology Movement of Arne Naess. We appreciate technology and its potential but we prefer to change the morals of the people for the better so that technology can be managed properly and used only to ease our lives or solve problems.<br>
 
 With its activities the organization helps for increase of the participatory democracy, youth involvement and inclusion in civil society, the fight with climate change and the transparency of institutions. The organization is part of few international and global networks such as the Federation of Young European Green (FYEG), the Cooperation and Development Network (CDN), YOUNGO, the Balkan Agency for Sustainable Development, the Earth Charter, EOTO World, Global Thinkers Forum, Citizens Climate Lobby, the World Future Society and the U.S. Government International Exchange Alumni Community. The field of interest under which ManEco will work in the future falls under the UN Sustainable Development Goals 3. Good Health and Well-Being, 12. Responsible Consumption and Production, 13. Climate Action, 14. Life Below Water, 15. Life on Land, 16. Peace, Justice and Strong Institutions.</p>
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
`

export function companiesView(ctx) {
    ctx.render(companiesViewTemplate())
    let array = document.querySelectorAll('#navigation>div>ul>li')
    array.forEach(element => {
     console.log(element.textContent);
     element.className = ""
     if(element.textContent == "Companies") {
       element.className = 'current'
     }
     
    });
};
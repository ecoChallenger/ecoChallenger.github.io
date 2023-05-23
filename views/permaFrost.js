export function permaFrostView() {
    let divA = document.querySelectorAll('.section>div>a')
 
    divA.forEach(e => {
        e.className = ""
        if(e.textContent == "PermaFrost") {
            e.className = 'selected'
        }
    });
    let p = document.querySelector('.paragraph')
    p.textContent = `Permafrost (from perma- 'permanent', and frost) is soil or underwater sediment which continuously remains below 0 °C (32 °F) for two or more years. Land-based permafrost can include the surface layer of the soil, but if the surface is too warm, it may still occur within a few centimeters of the surface down to hundreds of meters. It usually consists of ice holding in place a combination of various types of soil, sand, and rock, though in ice-free ground, perennially frozen non-porous bedrock can serve the same role.

    Around 15% of the Northern Hemisphere or 11% of the global surface is underlain by permafrost, with the total area of around 18 million km2 (6.9 million sq mi). This includes substantial areas of Alaska, Greenland, Canada, and Siberia. It is also located in high mountain regions, with the Tibetan Plateau a prominent example. Only a minority of permafrost exists in the Southern Hemisphere, where it is consigned to mountain slopes like in the Andes or the Southern Alps of New Zealand, and beneath the massive ice sheets of the Antarctic.
    
    Permafrost contains large amounts of dead biomass that had accumulated throughout millennia without having had the chance to fully decompose and release its carbon, making tundra soil a carbon sink. As global warming heats the ecosystem, frozen soil thaws and becomes warm enough for decomposition to start anew, accelerating permafrost carbon cycle. Depending on conditions at the time of thaw, decomposition can either release carbon dioxide or methane, and these greenhouse gas emissions act as a climate change feedback.The emissions from thawing permafrost will have a sufficient impact on the climate to impact global carbon budgets. Exact estimates of permafrost emissions are hard to model because of the uncertainty about different thaw processes. There's a widespread agreement they will be smaller than human-caused emissions and not large enough to result in "runaway warming".`
    
    let a = document.querySelector('.figure>a');
    a.setAttribute('href', 'https://en.wikipedia.org/wiki/Permafrost');
    
    let img = document.querySelector('.figure>a>img');
    img.className = 'nature-image'
    img.setAttribute('src' , "./images/permafrost.png");
    
    };
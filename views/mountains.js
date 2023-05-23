export function mountainsView() {
    let divA = document.querySelectorAll('.section>div>a');
    divA.forEach(e => {
        e.className = ""
        if(e.textContent == "Mountain Glaciers") {
            e.className = 'selected'
        }
    });
    let p = document.querySelector('.paragraph')
    p.textContent = `A glacier (US: /ˈɡleɪʃər/; UK: /ˈɡlæsiər, ˈɡleɪsiər/) is a persistent body of dense ice that is constantly moving under its own weight. A glacier forms where the accumulation of snow exceeds its ablation over many years, often centuries. It acquires distinguishing features, such as crevasses and seracs, as it slowly flows and deforms under stresses induced by its weight. As it moves, it abrades rock and debris from its substrate to create landforms such as cirques, moraines, or fjords. Although a glacier may flow into a body of water, it forms only on land and is distinct from the much thinner sea ice and lake ice that form on the surface of bodies of water.

    On Earth, 99% of glacial ice is contained within vast ice sheets (also known as "continental glaciers") in the polar regions, but glaciers may be found in mountain ranges on every continent other than the Australian mainland, including Oceania's high-latitude oceanic island countries such as New Zealand. Between latitudes 35°N and 35°S, glaciers occur only in the Himalayas, Andes, and a few high mountains in East Africa, Mexico, New Guinea and on Zard-Kuh in Iran. With more than 7,000 known glaciers, Pakistan has more glacial ice than any other country outside the polar regions. Glaciers cover about 10% of Earth's land surface. Continental glaciers cover nearly 13 million km2 (5 million sq mi) or about 98% of Antarctica's 13.2 million km2 (5.1 million sq mi), with an average thickness of ice 2,100 m (7,000 ft). Greenland and Patagonia also have huge expanses of continental glaciers. The volume of glaciers, not including the ice sheets of Antarctica and Greenland, has been estimated at 170,000 km3.`;
    let a = document.querySelector('.figure>a');
    a.setAttribute('href' , 'https://en.wikipedia.org/wiki/Glacier');
    
    let img = document.querySelector('.figure>a>img');
    img.className = 'nature-image'
    img.setAttribute('src' , "./images/mountain-glaciers.jpeg");
    
    };
export function onClick(e){
    let event = e.target
    let target = event.textContent
    let p = document.querySelector('.paragraph');
    let a = document.querySelector('.figure>a');
    let img = document.querySelector('.figure>a>img');
    const divA = document.querySelectorAll('.section>div>a');
    divA.forEach(element => {
        element.className = ""
    });
    event.className = 'selected'
    if(target === "Amazon") {
        img.setAttribute('src',"./images/amazon.webp");
        a.setAttribute('href','https://bg.wikipedia.org/wiki/Амазонска_екваториална_гора');
        p.textContent = `The Amazon rainforest, also called Amazon jungle or Amazonia, is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 km2 (2,700,000 sq mi), of which 5,500,000 km2 (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations and 3,344 formally acknowledged indigenous territories.

        The majority of the forest, 60%, is in Brazil, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Bolivia, Ecuador, French Guiana, Guyana, Suriname, and Venezuela. Four nations have "Amazonas" as the name of one of their first-level administrative regions, and France uses the name "Guiana Amazonian Park" for French Guiana's protected rainforest area. The Amazon represents over half of Earth's remaining rainforests, and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees in about 16,000 species.
        
        More than 30 million people of 350 different ethnic groups live in the Amazon, which are subdivided into 9 different national political systems and 3,344 formally acknowledged indigenous territories. Indigenous peoples make up 9% of the total population, and 60 of the groups remain largely isolated.`    
    } else if (target === "Arctic") {
        p.textContent = `The Arctic (/ˈɑːrtɪk/ or /ˈɑːrktɪk/) is a polar region located at the northernmost part of Earth. The Arctic consists of the Arctic Ocean, adjacent seas, and parts of Canada (Yukon, Northwest Territories, Nunavut), Danish Realm (Greenland), northern Finland (Lapland), Iceland, northern Norway (Finnmark and Svalbard), Russia (Murmansk, Siberia, Nenets Okrug, Novaya Zemlya), northernmost Sweden and the United States (Alaska). Land within the Arctic region has seasonally varying snow and ice cover, with predominantly treeless permafrost (permanently frozen underground ice) containing tundra. Arctic seas contain seasonal sea ice in many places.

        The Arctic region is a unique area among Earth's ecosystems. The cultures in the region and the Arctic indigenous peoples have adapted to its cold and extreme conditions. Life in the Arctic includes zooplankton and phytoplankton, fish and marine mammals, birds, land animals, plants and human societies. Arctic land is bordered by the subarctic.`
        a.setAttribute('href', 'https://en.wikipedia.org/wiki/Arctic');
        img.setAttribute('src' , "./images/arctic.jpg");

    } else if (target === "Antarctic") {
    p.textContent = `Antarctica (/ænˈtɑːrktɪkə/ ) is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean (also known as the Antarctic Ocean), it contains the geographic South Pole. Antarctica is the fifth-largest continent, being about 40% larger than Europe, and has an area of 14,200,000 km2 (5,500,000 sq mi). Most of Antarctica is covered by the Antarctic ice sheet, with an average thickness of 1.9 km (1.2 mi).

    Antarctica is, on average, the coldest, driest, and windiest of the continents, and it has the highest average elevation. It is mainly a polar desert, with annual precipitation of over 200 mm (8 in) along the coast and far less inland. About 70% of the world's freshwater reserves are frozen in Antarctica, which, if melted, would raise global sea levels by almost 60 metres (200 ft). Antarctica holds the record for the lowest measured temperature on Earth, −89.2 °C (−128.6 °F). The coastal regions can reach temperatures over 10 °C (50 °F) in summer. Native species of animals include mites, nematodes, penguins, seals and tardigrades. Where vegetation occurs, it is mostly in the form of lichen or moss.
    
    The ice shelves of Antarctica were probably first seen in 1820, during a Russian expedition led by Fabian Gottlieb von Bellingshausen and Mikhail Lazarev. The decades that followed saw further exploration in French, American, and British expeditions. The first confirmed landing was by a Norwegian team in 1895. In the early 20th century, there were a few expeditions into the interior of the continent. British explorers were the first to reach the magnetic South Pole in 1909, and the geographic South Pole was first reached in 1911 by Norwegian explorers.`;
    let a = document.querySelector('.figure>a')
    a.setAttribute('href','https://en.wikipedia.org/wiki/Antarctica');
    img.setAttribute('src', "./images/antarctic.png");

    } else if (target === "Coral Reefs") {
    p.textContent = `A coral reef is an underwater ecosystem characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, whose polyps cluster in groups.

    Coral belongs to the class Anthozoa in the animal phylum Cnidaria, which includes sea anemones and jellyfish. Unlike sea anemones, corals secrete hard carbonate exoskeletons that support and protect the coral. Most reefs grow best in warm, shallow, clear, sunny and agitated water. Coral reefs first appeared 485 million years ago, at the dawn of the Early Ordovician, displacing the microbial and sponge reefs of the Cambrian.
    
    Sometimes called rainforests of the sea, shallow coral reefs form some of Earth's most diverse ecosystems. They occupy less than 0.1% of the world's ocean area, about half the area of France, yet they provide a home for at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates and other cnidarians. Coral reefs flourish in ocean waters that provide few nutrients. They are most commonly found at shallow depths in tropical waters, but deep water and cold water coral reefs exist on smaller scales in other areas.
    
    Coral reefs have declined by 50% since 1950, partly because they are sensitive to water conditions. They are under threat from excess nutrients (nitrogen and phosphorus), rising ocean heat content and acidification, overfishing (e.g., from blast fishing, cyanide fishing, spearfishing on scuba), sunscreen use, and harmful land-use practices, including runoff and seeps (e.g., from injection wells and cesspools).`;
    a.setAttribute('href' , 'https://en.wikipedia.org/wiki/Coral_reef');
    img.setAttribute( 'src', "./images/corals.jpg");

    } else if (target === "Greenland Glaciers") {
        p.textContent = `The Greenland ice sheet (Danish: Grønlands indlandsis, Greenlandic: Sermersuaq) is a vast body of ice covering 1,710,000 square kilometres (660,000 sq mi), roughly near 80% of the surface of Greenland. It is sometimes referred to as an ice cap, or under the term inland ice, or its Danish equivalent, indlandsis. An acronym, GIS, is frequently used in the scientific literature.

        It is the second largest ice body in the world, after the Antarctic ice sheet. The ice sheet is almost 2,900 kilometres (1,800 mi) long in a north–south direction, and its greatest width is 1,100 kilometres (680 mi) at a latitude of 77°N, near its northern margin. The average thickness is about 1.5 km (0.9 mi) and over 3 km (1.9 mi) at its thickest point. In addition to the large ice sheet, smaller ice caps (such as Maniitsoq and Flade Isblink) as well as glaciers, cover between 76,000 and 100,000 square kilometres (29,000 and 39,000 sq mi) around the periphery.
        
        The Greenland ice sheet is adversely affected by climate change. It is more vulnerable to climate change than the Antarctic ice sheet because of its position in the Arctic, where it is subject to the regional amplification of warming. While only a small fraction of the ice sheet is expected to melt during the 21st century, it is believed that most or even all of the ice sheet is committed to melting under the present or likely near-future climate unless the recent warming is reversed, making it an example of a climate tipping point. If the entire 2,850,000 cubic kilometres (684,000 cu mi) of ice were to melt, it would lead to a global sea level rise of 7.2 m (24 ft), although this is expected to take millennia to fully play out.`;
        a.setAttribute('href' , 'https://en.wikipedia.org/wiki/Greenland_ice_sheet');
        img.setAttribute('src' , "./images/greenland.jpeg");
    } else if (target === "Mountain Glaciers") {
        p.textContent = `A glacier (US: /ˈɡleɪʃər/; UK: /ˈɡlæsiər, ˈɡleɪsiər/) is a persistent body of dense ice that is constantly moving under its own weight. A glacier forms where the accumulation of snow exceeds its ablation over many years, often centuries. It acquires distinguishing features, such as crevasses and seracs, as it slowly flows and deforms under stresses induced by its weight. As it moves, it abrades rock and debris from its substrate to create landforms such as cirques, moraines, or fjords. Although a glacier may flow into a body of water, it forms only on land and is distinct from the much thinner sea ice and lake ice that form on the surface of bodies of water.

    On Earth, 99% of glacial ice is contained within vast ice sheets (also known as "continental glaciers") in the polar regions, but glaciers may be found in mountain ranges on every continent other than the Australian mainland, including Oceania's high-latitude oceanic island countries such as New Zealand. Between latitudes 35°N and 35°S, glaciers occur only in the Himalayas, Andes, and a few high mountains in East Africa, Mexico, New Guinea and on Zard-Kuh in Iran. With more than 7,000 known glaciers, Pakistan has more glacial ice than any other country outside the polar regions. Glaciers cover about 10% of Earth's land surface. Continental glaciers cover nearly 13 million km2 (5 million sq mi) or about 98% of Antarctica's 13.2 million km2 (5.1 million sq mi), with an average thickness of ice 2,100 m (7,000 ft). Greenland and Patagonia also have huge expanses of continental glaciers. The volume of glaciers, not including the ice sheets of Antarctica and Greenland, has been estimated at 170,000 km3.`;
    a.setAttribute('href' , 'https://en.wikipedia.org/wiki/Glacier');
    img.setAttribute('src' , "./images/mountain-glaciers.jpeg");
    } else if (target === "Taiga") {
        p.textContent = `Taiga (/ˈtaɪɡə/; Russian: тайга́; relates to Mongolic and Turkic languages), generally referred to in North America as a boreal forest or snow forest, is a biome characterized by coniferous forests consisting mostly of pines, spruces, and larches.

    The taiga or boreal forest has been called the world's largest land biome. In North America, it covers most of inland Canada, Alaska, and parts of the northern contiguous United States. In Eurasia, it covers most of Sweden, Finland, much of Russia from Karelia in the west to the Pacific Ocean (including much of Siberia), much of Norway and Estonia, some of the Scottish Highlands,[citation needed] some lowland/coastal areas of Iceland, and areas of northern Kazakhstan, northern Mongolia, and northern Japan (on the island of Hokkaidō).
    
    
    The Adirondack Mountains of Upstate New York form the southernmost part of the Eastern forest-boreal transition ecoregion, constituting part of the world’s taiga biome.
    The main tree species, depending on the length of the growing season and summer temperatures, varies across the world. The taiga of North America is mostly spruce, Scandinavian and Finnish taiga consists of a mix of spruce, pines and birch, Russian taiga has spruces, pines and larches depending on the region, while the Eastern Siberian taiga is a vast larch forest.
    
    Taiga in its current form is a relatively recent phenomenon, having only existed for the last 12,000 years since the beginning of the Holocene epoch, covering land that had been mammoth steppe or under the Scandinavian Ice Sheet in Eurasia and under the Laurentide Ice Sheet in North America during the Late Pleistocene.`
    a.setAttribute('href' , 'https://en.wikipedia.org/wiki/Taiga');
    img.setAttribute('src' ,"./images/taiga.jpeg");
    } else if (target === "PermaFrost") {
        p.textContent = `Permafrost (from perma- 'permanent', and frost) is soil or underwater sediment which continuously remains below 0 °C (32 °F) for two or more years. Land-based permafrost can include the surface layer of the soil, but if the surface is too warm, it may still occur within a few centimeters of the surface down to hundreds of meters. It usually consists of ice holding in place a combination of various types of soil, sand, and rock, though in ice-free ground, perennially frozen non-porous bedrock can serve the same role.

        Around 15% of the Northern Hemisphere or 11% of the global surface is underlain by permafrost, with the total area of around 18 million km2 (6.9 million sq mi). This includes substantial areas of Alaska, Greenland, Canada, and Siberia. It is also located in high mountain regions, with the Tibetan Plateau a prominent example. Only a minority of permafrost exists in the Southern Hemisphere, where it is consigned to mountain slopes like in the Andes or the Southern Alps of New Zealand, and beneath the massive ice sheets of the Antarctic.
        
        Permafrost contains large amounts of dead biomass that had accumulated throughout millennia without having had the chance to fully decompose and release its carbon, making tundra soil a carbon sink. As global warming heats the ecosystem, frozen soil thaws and becomes warm enough for decomposition to start anew, accelerating permafrost carbon cycle. Depending on conditions at the time of thaw, decomposition can either release carbon dioxide or methane, and these greenhouse gas emissions act as a climate change feedback.The emissions from thawing permafrost will have a sufficient impact on the climate to impact global carbon budgets. Exact estimates of permafrost emissions are hard to model because of the uncertainty about different thaw processes. There's a widespread agreement they will be smaller than human-caused emissions and not large enough to result in "runaway warming".`
        a.setAttribute('href', 'https://en.wikipedia.org/wiki/Permafrost');
        img.setAttribute('src' , "./images/permafrost.png");
        
    } else if (target === "Wilkes") {
        p.textContent = `Wilkes Land, region in Antarctica, bordering the Indian Ocean between Queen Mary and George V coasts (100°–142°20′ E). The region is almost entirely covered by the East Antarctic Ice Sheet (EAIS), averaging from 6,000 to 9,500 feet (1,800 to 2,900 metres) above sea level. First sighted (1838–42) by the U.S. naval commander Charles Wilkes, for whom the land is named, it was not explored until the late 1940s. Included in the region are the coasts of Clarie, Banzare, Sabrina, Budd, and Knox, which are all claimed by Australia; and Adélie Coast, which is claimed by France. Australia and France maintain stations along the Wilkes Land coasts. A local ice cap, the Law Dome, is partially attached to the ice sheet and has been heavily studied by Australian glaciologists`;
        a.setAttribute('href' ,'https://en.wikipedia.org/wiki/Wilkes_Land');
        img.setAttribute('src' , "./images/wilkes.jpg");
    } 
    img.className = 'nature-image';
};
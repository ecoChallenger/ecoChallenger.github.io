export function taigaView() {
    let divA = document.querySelectorAll('.section>div>a');
    divA.forEach(e => {
        e.className = ""
        if(e.textContent == "Taiga") {
            e.className = 'selected'
        }
    });
    let p = document.querySelector('.paragraph')
    p.textContent = `Taiga (/ˈtaɪɡə/; Russian: тайга́; relates to Mongolic and Turkic languages), generally referred to in North America as a boreal forest or snow forest, is a biome characterized by coniferous forests consisting mostly of pines, spruces, and larches.

    The taiga or boreal forest has been called the world's largest land biome. In North America, it covers most of inland Canada, Alaska, and parts of the northern contiguous United States. In Eurasia, it covers most of Sweden, Finland, much of Russia from Karelia in the west to the Pacific Ocean (including much of Siberia), much of Norway and Estonia, some of the Scottish Highlands,[citation needed] some lowland/coastal areas of Iceland, and areas of northern Kazakhstan, northern Mongolia, and northern Japan (on the island of Hokkaidō).
    
    
    The Adirondack Mountains of Upstate New York form the southernmost part of the Eastern forest-boreal transition ecoregion, constituting part of the world’s taiga biome.
    The main tree species, depending on the length of the growing season and summer temperatures, varies across the world. The taiga of North America is mostly spruce, Scandinavian and Finnish taiga consists of a mix of spruce, pines and birch, Russian taiga has spruces, pines and larches depending on the region, while the Eastern Siberian taiga is a vast larch forest.
    
    Taiga in its current form is a relatively recent phenomenon, having only existed for the last 12,000 years since the beginning of the Holocene epoch, covering land that had been mammoth steppe or under the Scandinavian Ice Sheet in Eurasia and under the Laurentide Ice Sheet in North America during the Late Pleistocene.
    `
    let a = document.querySelector('.figure>a');
    a.setAttribute('href' , 'https://en.wikipedia.org/wiki/Taiga');
    
    let img = document.querySelector('.figure>a>img');
    img.className = 'nature-image'
    img.setAttribute('src' ,"./images/taiga.jpeg");
    
    };
export function arcticView() {
    let divA = document.querySelectorAll('.section>div>a')
    
    divA.forEach(e => {
        e.className = ""
        if(e.textContent == "Arctic") {
            e.className = 'selected'
        }
    });
    let p = document.querySelector('.paragraph')
    p.textContent = `The Arctic (/ˈɑːrtɪk/ or /ˈɑːrktɪk/) is a polar region located at the northernmost part of Earth. The Arctic consists of the Arctic Ocean, adjacent seas, and parts of Canada (Yukon, Northwest Territories, Nunavut), Danish Realm (Greenland), northern Finland (Lapland), Iceland, northern Norway (Finnmark and Svalbard), Russia (Murmansk, Siberia, Nenets Okrug, Novaya Zemlya), northernmost Sweden and the United States (Alaska). Land within the Arctic region has seasonally varying snow and ice cover, with predominantly treeless permafrost (permanently frozen underground ice) containing tundra. Arctic seas contain seasonal sea ice in many places.

    The Arctic region is a unique area among Earth's ecosystems. The cultures in the region and the Arctic indigenous peoples have adapted to its cold and extreme conditions. Life in the Arctic includes zooplankton and phytoplankton, fish and marine mammals, birds, land animals, plants and human societies. Arctic land is bordered by the subarctic.`
    
    let a = document.querySelector('.figure>a');
    a.setAttribute('href', 'https://en.wikipedia.org/wiki/Arctic');
    
    let img = document.querySelector('.figure>a>img');
    img.className = 'nature-image'
    img.setAttribute('src' , "./images/arctic.jpg");
    
    };
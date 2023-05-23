export function wilkesView() {
    let divA = document.querySelectorAll('.section>div>a');
    divA.forEach(e => {
        e.className = ""
        if(e.textContent == "Wilkes") {
            e.className = 'selected'
        }
    });
    let p = document.querySelector('.paragraph')
    p.textContent = `Wilkes Land, region in Antarctica, bordering the Indian Ocean between Queen Mary and George V coasts (100°–142°20′ E). The region is almost entirely covered by the East Antarctic Ice Sheet (EAIS), averaging from 6,000 to 9,500 feet (1,800 to 2,900 metres) above sea level. First sighted (1838–42) by the U.S. naval commander Charles Wilkes, for whom the land is named, it was not explored until the late 1940s. Included in the region are the coasts of Clarie, Banzare, Sabrina, Budd, and Knox, which are all claimed by Australia; and Adélie Coast, which is claimed by France. Australia and France maintain stations along the Wilkes Land coasts. A local ice cap, the Law Dome, is partially attached to the ice sheet and has been heavily studied by Australian glaciologists`;
    let a = document.querySelector('.figure>a');
    a.setAttribute('href' ,'https://en.wikipedia.org/wiki/Wilkes_Land');
    
    let img = document.querySelector('.figure>a>img');
    img.className = 'nature-image'
    img.setAttribute('src' , "./images/wilkes.jpg");
    
    };
export function greenlandView() {
    let divA = document.querySelectorAll('.section>div>a');
    divA.forEach(e => {
        e.className = ""
        if(e.textContent == "Greenland Glaciers") {
            e.className = 'selected'
        }
    });
    let p = document.querySelector('.paragraph')
    p.textContent = `The Greenland ice sheet (Danish: Grønlands indlandsis, Greenlandic: Sermersuaq) is a vast body of ice covering 1,710,000 square kilometres (660,000 sq mi), roughly near 80% of the surface of Greenland. It is sometimes referred to as an ice cap, or under the term inland ice, or its Danish equivalent, indlandsis. An acronym, GIS, is frequently used in the scientific literature.

    It is the second largest ice body in the world, after the Antarctic ice sheet. The ice sheet is almost 2,900 kilometres (1,800 mi) long in a north–south direction, and its greatest width is 1,100 kilometres (680 mi) at a latitude of 77°N, near its northern margin. The average thickness is about 1.5 km (0.9 mi) and over 3 km (1.9 mi) at its thickest point. In addition to the large ice sheet, smaller ice caps (such as Maniitsoq and Flade Isblink) as well as glaciers, cover between 76,000 and 100,000 square kilometres (29,000 and 39,000 sq mi) around the periphery.
    
    The Greenland ice sheet is adversely affected by climate change. It is more vulnerable to climate change than the Antarctic ice sheet because of its position in the Arctic, where it is subject to the regional amplification of warming. While only a small fraction of the ice sheet is expected to melt during the 21st century, it is believed that most or even all of the ice sheet is committed to melting under the present or likely near-future climate unless the recent warming is reversed, making it an example of a climate tipping point. If the entire 2,850,000 cubic kilometres (684,000 cu mi) of ice were to melt, it would lead to a global sea level rise of 7.2 m (24 ft), although this is expected to take millennia to fully play out.`;
    let a = document.querySelector('.figure>a');
    a.setAttribute('href' , 'https://en.wikipedia.org/wiki/Greenland_ice_sheet');
    
    let img = document.querySelector('.figure>a>img');
    img.className = 'nature-image'
    img.setAttribute('src' , "./images/greenland.jpeg");
    
    };
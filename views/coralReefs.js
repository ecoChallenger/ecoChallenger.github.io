export function coralReefsView() {
    let divA = document.querySelectorAll('.section>div>a')
    
    divA.forEach(e => {
        e.className = ""
        if(e.textContent == "Coral Reefs") {
            e.className = 'selected'
        }
    });
    let p = document.querySelector('.paragraph')
    p.textContent = `A coral reef is an underwater ecosystem characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, whose polyps cluster in groups.

    Coral belongs to the class Anthozoa in the animal phylum Cnidaria, which includes sea anemones and jellyfish. Unlike sea anemones, corals secrete hard carbonate exoskeletons that support and protect the coral. Most reefs grow best in warm, shallow, clear, sunny and agitated water. Coral reefs first appeared 485 million years ago, at the dawn of the Early Ordovician, displacing the microbial and sponge reefs of the Cambrian.
    
    Sometimes called rainforests of the sea, shallow coral reefs form some of Earth's most diverse ecosystems. They occupy less than 0.1% of the world's ocean area, about half the area of France, yet they provide a home for at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates and other cnidarians. Coral reefs flourish in ocean waters that provide few nutrients. They are most commonly found at shallow depths in tropical waters, but deep water and cold water coral reefs exist on smaller scales in other areas.
    
    Coral reefs have declined by 50% since 1950, partly because they are sensitive to water conditions. They are under threat from excess nutrients (nitrogen and phosphorus), rising ocean heat content and acidification, overfishing (e.g., from blast fishing, cyanide fishing, spearfishing on scuba), sunscreen use, and harmful land-use practices, including runoff and seeps (e.g., from injection wells and cesspools).`;
    let a = document.querySelector('.figure>a');
    a.setAttribute('href' , 'https://en.wikipedia.org/wiki/Coral_reef');
    
    let img = document.querySelector('.figure>a>img');
    img.className = 'nature-image'
    img.setAttribute( 'src', "./images/corals.jpg");
    
    };
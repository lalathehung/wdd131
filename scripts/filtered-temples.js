document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const templeContainer = document.querySelector('#temple-container');
    const mainTitle = document.querySelector('main h2');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    // Temple data 
    const temples = [
        {
            name: "Salt Lake Utah Temple",
            location: "Salt Lake City, Utah, USA",
            dedicated: "1893-04-06",
            area: 253015,
            image: "images/saltlaketemple.jpg"
        },
        {
            name: "Hong Kong China Temple",
            location: "Kowloon Tong, Hong Kong",
            dedicated: "1996-05-26",
            area: 21744,
            image: "images/hongkongtemple.jpg"
        },
        {
            name: "Provo Utah Temple",
            location: "Provo, Utah, USA",
            dedicated: "1972-02-09",
            area: 130825,
            image: "images/provotemple.jpg"
        },
        {
            name: "Toronto Ontario Temple",
            location: "Brampton, Ontario, Canada",
            dedicated: "1990-08-25",
            area: 57982,
            image: "images/torontotemple.jpg"
        },
        {
            name: "Vancouver British Columbia Temple",
            location: "Langley, British Columbia, Canada",
            dedicated: "2010-05-02",
            area: 28591,
            image: "images/vancouvertemple.webp"
        },
        {
            name: "Halifax Nova Scotia Temple",
            location: "Dartmouth, Nova Scotia, Canada",
            dedicated: "1999-11-14",
            area: 10700,
            image: "images/halifaxtemple.webp"
        },
        {
            name: "Edmonton Alberta Temple",
            location: "Edmonton, Alberta, Canada",
            dedicated: "1999-12-11",
            area: 10700,
            image: "images/edmontontemple.jpg"
        },
        {
            name: "Calgary Alberta Temple",
            location: "Calgary, Alberta, Canada",
            dedicated: "2012-10-28",
            area: 33000,
            image: "images/calgarytemple.webp"
        },
        {
            name: "Winnipeg Manitoba Temple",
            location: "Winnipeg, Manitoba, Canada",
            dedicated: "2020-10-31",
            area: 16643,
            image: "images/winnipegtemple.jpg"
        },
        {
            name: "Taipei Taiwan Temple",
            location: "Taipei, Taiwan",
            dedicated: "1984-11-17",
            area: 9945,
            image: "images/taipeitemple.jpg"
        }
    ];

    // Function to display temples
    function displayTemples(templeList) {
        templeContainer.innerHTML = '';
        templeList.forEach(temple => {
            const figure = document.createElement('figure');
            figure.innerHTML = `
                <img src="${temple.image}" alt="${temple.name}" loading="lazy" width="200" height="133">
                <figcaption>
                    <h3>${temple.name}</h3>
                    <p>LOCATION: ${temple.location}</p>
                    <p>DEDICATED: ${new Date(temple.dedicated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p>SIZE: ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            `;
            templeContainer.appendChild(figure);
        });
    }

    // Filter functions
    function filterTemples(filterType) {
        let filteredTemples;
        switch(filterType) {
            case 'old':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                mainTitle.textContent = 'Old Temples';
                break;
            case 'new':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                mainTitle.textContent = 'New Temples';
                break;
            case 'large':
                filteredTemples = temples.filter(t => t.area > 90000);
                mainTitle.textContent = 'Large Temples';
                break;
            case 'small':
                filteredTemples = temples.filter(t => t.area < 10000);
                mainTitle.textContent = 'Small Temples';
                break;
            default:
                filteredTemples = temples;
                mainTitle.textContent = 'Home';
        }
        displayTemples(filteredTemples);
    }

    // Navigation event listeners
    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigation.querySelector('.active').classList.remove('active');
            link.classList.add('active');
            const filter = link.getAttribute('data-filter');
            filterTemples(filter);
        });
    });

    // Initial display
    displayTemples(temples);

    // Footer information
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last update: ${lastModified}`;
});
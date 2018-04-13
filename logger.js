
// Create an application that displays 10 cities you have visited from a database (stored in local storage)
// Details for each city
// a. City name
// b. Year you visited
// c. Image of city
// d. List of top 5 attractions

const citiesDatabase = {}

citiesDatabase.cities = []

citiesDatabase.cities.push(
    {
        name: "Nashville",
        image: "https://c1.staticflickr.com/8/7735/27492741871_b2ddc952f3_b.jpg",
        topFive: ["Music Row", "Nashville Parthenon", "Grand Ole Opry", "Country Music Hall of Fame", "Ryman Auditorium"],
        yearVisited: "2004",
        continent: "North America"
    },
    {
        name: "Belize City",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Bliss_and_Radisson_-_Belize_City.jpg",
        topFive: ["Ambergris Caye", "Lighthouse Reef", "Great Blue Hole", "Caye Caulker", "Turneffe Islands Atoll"],
        yearVisited: "2006",
        continent: "North America"
    },   
    {
        name: "Toronto",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Toronto_Ontario.jpg",
        topFive: ["Casa Loma", "Ripleys Aquarium", "CN Tower", "Royal Ontario Museum", "Toronto Zoo"],
        yearVisited: "2008",
        continent: "North America"
    },
    {
        name: "Snells Beach, NZ",
        image: "https://c1.staticflickr.com/8/7570/16097337850_9613da5c75_b.jpg",
        topFive: ["Scotts Landing", "Sheep World", "Snells Beach", "The Wharehouse", "Algies Bay"],
        yearVisited: "2010",
        continent: "Australaia"
    },
    {
        name: "Auckland, NZ",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Auckland_Skyline_as_seen_from_Devonport_20100128_3.jpg",
        topFive: ["Kelly Tarltons Aquariaum", "Sky Tower", "Howick Historical Village", "Skywalk", "Auckland War Memorial Museum"],
        yearVisited: "2010",
        continent: "Australaia"
    },
    {
        name: "Rotorua, NZ",
        image: "https://c1.staticflickr.com/3/2306/2280382074_cf9596c348_b.jpg",
        topFive: ["Te Puia", "Tamaki Maori Village", "Wai-o-Tapu", "Skyline Rotorua", "AgroDome"],
        yearVisited: "2010",
        continent: "Australaia"
    },
    {
        name: "Washington DC, US",
        image: "https://c1.staticflickr.com/9/8288/7662519762_b374d5dbc5_b.jpg",
        topFive: ["Lincoln Memorial", "Vietnam Veterans Memorial", "Thomas Jefferson Memorial", "National Mall", "Smithsonian Museum"],
        yearVisited: "2013",
        continent: "North America"
    },
    {
        name: "Charleston, US",
        image: "https://c1.staticflickr.com/8/7433/9306214120_e62ac8825c_b.jpg",
        topFive: ["Historic Charleston City Market", "Magnolia Plantation and Gardens", "Rainbow Row", "Morris Island Whitehouse", "Saint Michael's Church"],
        yearVisited: "2013",
        continent: "North America"
    },
    {
        name: "Jerusalem, Israel",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Temple_Mount_%28Jerusalem%2C_2008%29_02.jpg",
        topFive: ["City of David", "Jaffa Gate", "Garden Tomb", "Gethsemane", "Mount of Olives"],
        yearVisited: "2014",
        continent: "Asia"
    },
    {
        name: "Seattle, US",
        image: "https://c1.staticflickr.com/4/3209/3046028613_94696a5b90_b.jpg",
        topFive: ["Pike Place Fish Market", "Space Needle", "First Starbucks Store", "Seattle Center", "Waterfront Park"],
        yearVisited: "2014",
        continent: "North America"
    },


)

localStorage.setItem("citiesDatabase",
     JSON.stringify(citiesDatabase)
    )   
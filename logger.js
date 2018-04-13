
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
        name: "Nashville, US",
        image: "https://c1.staticflickr.com/8/7735/27492741871_b2ddc952f3_b.jpg",
        topFive: ["Music Row", "Nashville Parthenon", "Grand Ole Opry", "Country Music Hall of Fame", "Ryman Auditorium"],
        yearVisited: "2004"
    },
    {
        name: "Belize City, Belize",
        image: "https://cdn.pixabay.com/photo/2016/04/13/21/20/belize-city-1327716_960_720.jpg",
        topFive: ["Ambergris Caye", "Lighthouse Reef", "Great Blue Hole", "Caye Caulker", "Turneffe Islands Atoll"],
        yearVisited: "2006"
    },   
    {
        name: "Toronto, Canada",
        image: "https://cdn.pixabay.com/photo/2013/07/18/18/55/toronto-164813_960_720.jpg",
        topFive: ["Casa Loma", "Ripleys Aquarium", "CN Tower", "Royal Ontario Museum", "Toronto Zoo"],
        yearVisited: "2008"
    },
    {
        name: "Snells Beach, NZ",
        image: "https://c1.staticflickr.com/8/7570/16097337850_9613da5c75_b.jpg",
        topFive: ["Scotts Landing", "Sheep World", "Snells Beach", "The Wharehouse", "Algies Bay"],
        yearVisited: "2010"
    },
    {
        name: "Auckland, NZ",
        image: "https://cdn.pixabay.com/photo/2015/09/06/11/10/auckland-927242_960_720.jpg",
        topFive: ["Kelly Tarltons Aquariaum", "Sky Tower", "Howick Historical Village", "Skywalk", "Auckland War Memorial Museum"],
        yearVisited: "2010"
    },
    {
        name: "Rotorua, NZ",
        image: "https://c1.staticflickr.com/3/2306/2280382074_cf9596c348_b.jpg",
        topFive: ["Te Puia", "Tamaki Maori Village", "Wai-o-Tapu", "Skyline Rotorua", "AgroDome"],
        yearVisited: "2010"
    },
    {
        name: "Washington DC, US",
        image: "https://cdn.pixabay.com/photo/2013/02/09/01/31/washington-dc-79565_960_720.jpg",
        topFive: ["Lincoln Memorial", "Vietnam Veterans Memorial", "Thomas Jefferson Memorial", "National Mall", "Smithsonian Museum"],
        yearVisited: "2013"
    },
    {
        name: "Charleston, US",
        image: "",
        topFive: [],
        yearVisited: "2013"
    },
    {
        name: "Jerusalem, Israel",
        image: "",
        topFive: [],
        yearVisited: "2014"
    },
    {
        name: "Seattle, US",
        image: "",
        topFive: [],
        yearVisited: "2014"
    },


)
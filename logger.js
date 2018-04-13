
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
        yearVisited: "2004"
    },
    {
        name: "Belize City",
        image: "https://cdn.pixabay.com/photo/2016/04/13/21/20/belize-city-1327716_960_720.jpg",
        topFive: ["Ambergris Caye", "Lighthouse Reef", "Great Blue Hole", "Caye Caulker", "Turneffe Islands Atoll"],
        yearVisited: "2006"
    },   
    {
        name: "Toronto",
        image: "https://cdn.pixabay.com/photo/2013/07/18/18/55/toronto-164813_960_720.jpg",
        topFive: ["Casa Loma", "Ripleys Aquarium", "CN Tower", "Royal Ontario Museum", "Toronto Zoo"],
        yearVisited: "2008"
    },
    {
        name: "Snells Beach",
        image: "",
        topFive: [],
        yearVisited: "2010"
    },
    {
        name: "Auckland",
        image: "",
        topFive: [],
        yearVisited: "2010"
    },
    {
        name: "Rotorua",
        image: "",
        topFive: [],
        yearVisited: "2010"
    },
    {
        name: "Washington DC",
        image: "",
        topFive: [],
        yearVisited: "2013"
    },
    {
        name: "Charleston",
        image: "",
        topFive: [],
        yearVisited: "2013"
    },
    {
        name: "Jerusalem",
        image: "",
        topFive: [],
        yearVisited: "2014"
    },
    {
        name: "Seattle",
        image: "",
        topFive: [],
        yearVisited: "2014"
    },


)
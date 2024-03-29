// Import required libraries
const mongoose = require('mongoose');

// Connect to Mongoose Atlas
mongoose.connect('<MONGODB_URI>', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define the schema for the music event
const musicEventSchema = new mongoose.Schema({
  category: String,
  location: String,
  date: String,
  price: Number,
  eventName: String,
  image: String,
  city_id: String,
  time: String,
  tickets_total: String,
  tickets_remaining: String,
  description: String,
  category_id: String,



});
// Create a unique id for the events

const { v4: uuidv4 } = require('uuid');

// Create the MusicEvent model using the musicEventSchema
const MusicEvent = mongoose.model('MusicEvent', musicEventSchema);


 //category_ids:1 music, 2 cinema, 3 theatre, 4 sports

// City_Ids: 1(Thessaloniki), 2(Athens), 3(Patra), 4(Crete), 5(Larisa)

// Create a JSON object with events in Greece
const eventsInGreece = [
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "100",
    tickets_total: "150",
    time: "21:00",
    description: "This is a live pop concert",
    eventName: "coldplay",
    category: "Music",
    location: 'Athens, Αθήνα',
    date: '2023-04-01',
    price: 50,
    image: "",
    category_id: "1",
  },
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a live rock concert",
    eventName: "Megadeth",
    category: "Music",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-05-11',
    price: 80,
    image: "",
    category_id: "1",
  },
  {
    event_id: uuidv4(),
    city_id: "3",
    tickets_remaining: "70",
    tickets_total: "160",
    time: "22:00",
    description: "This is a live rock concert",
    eventName: "Scorpions",
    category: "Music",
    location: 'Patra, Patra',
    date: '2023-06-11',
    price: 30,
    image: "",
    category_id: "1",
  },
  // add
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "140",
    tickets_total: "200",
    time: "20:00",
    description: "This is a live rock concert",
    eventName: "The Black Keys",
    category: "Music",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-09-10',
    price: 100,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a live reggae concert",
    eventName: "Damian Marley",
    category: "Music",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-08-14',
    price: 60,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a live rock concert",
    eventName: "Megadeth",
    category: "Music",
    location: 'Athens, Αθήνα',
    date: '2023-06-26',
    price: 50,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "50",
    tickets_total: "200",
    time: "21:00",
    description: "This is a live rock concert",
    eventName: "Ozzy Osbourne",
    category: "Music",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-07-21',
    price: 60,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "200",
    tickets_total: "500",
    time: "23:00",
    description: "This is a live dj set",
    eventName: "Chinese Man",
    category: "Music",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-05-11',
    price: 20,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "4",
    tickets_remaining: "30",
    tickets_total: "160",
    time: "21:00",
    description: "This is a live soul concert",
    eventName: "Tribute to Aretha Franklin",
    category: "Music",
    location: 'Crete, Κρήτη',
    date: '2023-07-11',
    price: 15,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a live hip hop concert",
    eventName: "La coka Nostra",
    category: "Music",
    location: 'Athens, Αθήνα',
    date: '2023-06-10',
    price: 40,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "3",
    tickets_remaining: "30",
    tickets_total: "260",
    time: "21:00",
    description: "This is a live greek pop concert",
    eventName: "Sakis Rouvas",
    category: "Music",
    location: 'Patra, Πάτρα',
    date: '2023-06-11',
    price: 80,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "3",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a greek tranditional live concert",
    eventName: "Gogo Tsampa",
    category: "Music",
    location: 'Patra, Πάτρα',
    date: '2023-08-01',
    price: 10,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "4",
    tickets_remaining: "100",
    tickets_total: "200",
    time: "21:00",
    description: "This is a live rock concert",
    eventName: "Sting",
    category: "Music",
    location: 'Crete, Κρήτη',
    date: '2023-09-21',
    price: 80,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "5",
    tickets_remaining: "100",
    tickets_total: "200",
    time: "21:00",
    description: "This is a live rock concert",
    eventName: "Sting",
    category: "Music",
    location: 'Larisa, Λάρισα',
    date: '2023-09-21',
    price: 80,
    image: "",
    category_id: "1",
  }, 
  {
    event_id: uuidv4(),
    city_id: "5",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Asterix and Obelix",
    category: "Movie",
    location: 'Larisa, Λάρισα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {  event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "John Wick 4",
    category: "Movie",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Creed 3",
    category: "Movie",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Star Wars 3",
    category: "Movie",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Star Wars 3",
    category: "Movie",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Spiderman",
    category: "Movie",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Batman",
    category: "Movie",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Star Wars 3",
    category: "Movie",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Star Wars 3",
    category: "Movie",
    location: 'Athens, Αθήνα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Batman",
    category: "Movie",
    location: 'Athens, Αθήνα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Asterix and Obelix",
    category: "Movie",
    location: 'Athens, Αθήνα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Creed 3",
    category: "Movie",
    location: 'Athens, Αθήνα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "John Wick 4",
    category: "Movie",
    location: 'Athens, Αθήνα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Interstellar",
    category: "Movie",
    location: 'Athens, Αθήνα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  },  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Titanic",
    category: "Movie",
    location: 'Athens, Αθήνα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "5",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Creed 3",
    category: "Movie",
    location: 'Larisa, Λάρισα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 

  {
    event_id: uuidv4(),
    city_id: "5",
    tickets_remaining: "100",
    tickets_total: "250",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Titanic",
    category: "Movie",
    location: 'Larisa, Λάρισα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "4",
    tickets_remaining: "100",
    tickets_total: "200",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Titanic",
    category: "Movie",
    location: 'Crete, Κρήτη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "4",
    tickets_remaining: "100",
    tickets_total: "200",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Creed 3",
    category: "Movie",
    location: 'Crete, Κρήτη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "4",
    tickets_remaining: "100",
    tickets_total: "200",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "John Wick 4",
    category: "Movie",
    location: 'Crete, Κρήτη',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "2",
  }, 
  {
    event_id: uuidv4(),
    city_id: "3",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Creed 3",
    category: "Movie",
    location: 'Patra, Πάτρα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "1",
  }, 

  {
    event_id: uuidv4(),
    city_id: "3",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "John Wick 4",
    category: "Movie",
    location: 'Patra, Πάτρα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "1",
  }, 

  {
    event_id: uuidv4(),
    city_id: "3",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Titanic",
    category: "Movie",
    location: 'Patra, Πάτρα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "1",
  }, 

  {
    event_id: uuidv4(),
    city_id: "3",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a movie in the cinema",
    eventName: "Spiderman",
    category: "Movie",
    location: 'Patra, Πάτρα',
    date: '2023-10-21, 2023-10-22, 2023-10-23, 2023-10-24, 2023-10-25',
    price: 10,
    image: "",
    category_id: "1",
  }, 

  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a football match",
    eventName: "Paok vs Olympiacos",
    category: "Sports",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-06-11',
    price: 30,
    image: "",
    category_id: "4",
  },
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a football match",
    eventName: "Paok vs Panathinaikos",
    category: "Sports",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-06-18',
    price: 30,
    image: "",
    category_id: "4",
  },

  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a football match",
    eventName: "Paok vs Aek",
    category: "Sports",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-06-24',
    price: 30,
    image: "",
    category_id: "4",
  },
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a basketbal match",
    eventName: "Paok vs Olympiacos",
    category: "Sports",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-06-11',
    price: 30,
    image: "",
    category_id: "4",
  },
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a basketbal match",
    eventName: "Aris vs Paok",
    category: "Sports",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-06-01',
    price: 30,
    image: "",
    category_id: "4",
  },
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a basketbal match",
    eventName: "Aris vs Olympiacos",
    category: "Sports",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-06-22',
    price: 30,
    image: "",
    category_id: "4",
  },
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a basketbal match",
    eventName: "Panathinaikos vs Olympiacos",
    category: "Sports",
    location: 'Athens, Αθήνα',
    date: '2023-06-28',
    price: 30,
    image: "",
    category_id: "4",
  },


  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a football match",
    eventName: "Panathinaikos vs Olympiacos",
    category: "Sports",
    location: 'Athens, Αθήνα',
    date: '2023-06-22',
    price: 30,
    image: "",
    category_id: "4",
  },
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a basketbal match",
    eventName: "Aek vs Olympiacos",
    category: "Sports",
    location: 'Athens, Αθήνα',
    date: '2023-06-20',
    price: 30,
    image: "",
    category_id: "4",
  },
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a basketbal match",
    eventName: "Panathinaikos vs Aek",
    category: "Sports",
    location: 'Athens, Αθήνα',
    date: '2023-07-08',
    price: 30,
    image: "",
    category_id: "4",
  },
  {
    event_id: uuidv4(),
    city_id: "2",
    tickets_remaining: "2000",
    tickets_total: "15000",
    time: "21:00",
    description: "This is a basketbal match",
    eventName: "Aek vs Olympiacos",
    category: "Sports",
    location: 'Athens, Αθήνα',
    date: '2023-07-28',
    price: 30,
    image: "",
    category_id: "4",
  },
  {
    event_id: uuidv4(),
    city_id: "4",
    tickets_remaining: "7000",
    tickets_total: "10000",
    time: "21:00",
    description: "This is a basketbal match",
    eventName: "Ofi vs Rethimno",
    category: "Sports",
    location: 'Crete, Κρήτη',
    date: '2023-07-11',
    price: 15,
    image: "",
    category_id: "4",
  }, 
  {
    event_id: uuidv4(),
    city_id: "4",
    tickets_remaining: "7000",
    tickets_total: "10000",
    time: "21:00",
    description: "This is a football match",
    eventName: "Ofi vs Ergotelis",
    category: "Sports",
    location: 'Crete, Κρήτη',
    date: '2023-06-11',
    price: 15,
    image: "",
    category_id: "4",
  }, 
  {
    event_id: uuidv4(),
    city_id: "3",
    tickets_remaining: "5000",
    tickets_total: "10000",
    time: "21:00",
    description: "This is a football match",
    eventName: "Panachaiki vs Kalamata",
    category: "Sports",
    location: 'Patra, Πάτρα',
    date: '2023-10-21',
    price: 10,
    image: "",
    category_id: "4",
  }, 
  {
    event_id: uuidv4(),
    city_id: "3",
    tickets_remaining: "5000",
    tickets_total: "10000",
    time: "21:00",
    description: "This is a football match",
    eventName: "Panachaiki vs Kalamata",
    category: "Sports",
    location: 'Patra, Πάτρα',
    date: '2023-10-21',
    price: 10,
    image: "",
    category_id: "4",
  }, 
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a theatre musical",
    eventName: "Phantom of the Opera",
    category: "Theatre",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-06-11',
    price: 50,
    image: "",
    category_id: "3",
  },
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a theatre musical",
    eventName: "Phantom of the Opera",
    category: "Theatre",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-06-11',
    price: 50,
    image: "",
    category_id: "3",
  },
  {
    event_id: uuidv4(),
    city_id: "1",
    tickets_remaining: "80",
    tickets_total: "160",
    time: "21:00",
    description: "This is a theatre musical",
    eventName: "Phantom of the Opera",
    category: "Theatre",
    location: 'Thessaloniki, Θεσσαλονίκη',
    date: '2023-06-11',
    price: 50,
    image: "",
    category_id: "3",
  },



];

// Insert the events into the database
MusicEvent.insertMany(eventsInGreece)
  .then(() => console.log('Events Created'))
  .catch(err => console.log(err));

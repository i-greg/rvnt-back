const mongoose = require('mongoose');
const Event = require('../models/event');
const City = require('../models/city');
const Category = require('../models/category');
const dummyData = require('./data');

//dropCollections();


//insertCitytoDb(dummyData.cities)
//insertCategorytoDb(dummyData.categories)
//insertEventtoDb(dummyData.events)

//Function to insert city to db
async function insertCitytoDb(data) {

  //Loop through the city list and insert each city into the database
  for (let i = 0; i < data.length; i++) {
    //Create a new City object
    const city = new City({
      city: data[i],
      _id: new mongoose.Types.ObjectId()
    });
    //Save the City object to the database
    await city.save();
    console.log(`Inserted city "${city.city}" to the database.`);

  }
}

//Function to insert categoryy to db
async function insertCategorytoDb(data) {

  //Loop through the category list and insert each category into the database
  for (let i = 0; i < data.length; i++) {
    //Create a new Category object
    const category = new Category({
      category: data[i].name,
      category_img: data[i].img,
      _id: new mongoose.Types.ObjectId()
    });
    //Save the Category object to the database
    await category.save();
    console.log(`Inserted category "${category.category}" to the database.`);

  }
}

async function insertEventtoDb(data) {
  for (let i = 0; i < data.length; i++) {
    //fetch the corresponding city document
    const city = await City.findOne({ city: data[i].city });
    if (!city) {
      console.error(`City "${data[i].city}" not found.`);
      continue;
    }

    //fetch the corresponding category document
    const category = await Category.findOne({ category: data[i].category });
    if (!category) {
      console.error(`Category "${data[i].category}" not found.`);
      continue;
    }

    const event = new Event({
      name: data[i].name,
      time: data[i].time,
      price: data[i].price,
      date: data[i].date,
      location: data[i].location,
      image: data[i].image,
      tickets_total: data[i].tickets_total,
      tickets_remaining: data[i].tickets_remaining,
      times_clicked: data[i].times_clicked,
      description: data[i].description,
      category_id: category._id,
      city_id: city._id,
      _id: new mongoose.Types.ObjectId(),
    });

    await event.save();
    console.log(`Inserted event "${event.name}" to the database.`);
  }
}

async function dropCollections() {
  await Promise.all([
    Event.deleteMany({}),
    City.deleteMany({}),
    Category.deleteMany({})
  ])
  .then(results => {
    console.log('All collections dropped successfully');
  })
  .catch(err => {
    console.error('Error dropping collections:', err);
  });
};

  


  
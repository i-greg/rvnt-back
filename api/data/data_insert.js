const mongoose = require('mongoose');
const Event = require('../models/event');
const City = require('../models/city');
const Category = require('../models/category');
const dummyData = require('./data');

/* await dropCollections(); */

for (let i = 0; i < dummyData.length; i++) {
  const obj = dummyData[i];
  console.log(obj);
  insertDataToDb(obj); 
};


async function insertDataToDb(data) {

  const eventData = {
      name: data.name,
      time: data.time, 
      price: data.price, 
      date: data.date, 
      location: data.location,
      image: data.image, 
      tickets_total: data.tickets_total, 
      tickets_remaining: data.tickets_remaining, 
      times_clicked: data.times_clicked, 
      description: data.description, 
      category_id: null, 
      city_id: null ,
      _id: new mongoose.Types.ObjectId()
      };


  const cityData = 
    { city: data.city, _id: new mongoose.Types.ObjectId() }
  ;

  const categoryData = 
    { category: data.category, category_img: data.category_img, _id: new mongoose.Types.ObjectId() }
  ;

  Promise.all([
    City.findOne({ city: cityData.city }).exec(),
    Category.findOne({ category: categoryData.category }).exec()
  ])
    .then(([city, category]) => {
      if (!city) {
        city = new City(cityData);
        return city.save();
      }
      return city;
    })
    .then(city => {
      eventData.city_id = city._id;
      return Category.findOne({ category: categoryData.category }).exec();
    })
    .then(category => {
      if (!category) {
        category = new Category(categoryData);
        return category.save();
      }
      return category;
    })
    .then(category => {
      eventData.category_id = category._id;
      return Event.create(eventData);
    })
    .then(() => console.log('Data for', data.name, 'inserted successfully!'))
    .catch(err => console.error(err));
};

/* async function dropCollections() {
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
 */
  


  
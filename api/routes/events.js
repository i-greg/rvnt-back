const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require('../models/event');
const City = require('../models/city');
const Category = require('../models/category');
//const Data = require('../data/data_insert');
 


//Get All Categories
router.get('/categories', async (req, res, next) => {

    try {
      const results = await Category
      .find()
      .select('_id category category_img');
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error retrieving categories from database' });
    }
  });
  


//Get All Events for TypeOfEvent
router.get('/categories/:category_id', async (req, res, next) => {
    const eventType = req.params.category_id;
  
    try {
      const results = await Event.find({category_id: eventType});
      console.log(results);
      res.status(200).json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //Get All Cities
  router.get('/cities', async (req, res, next) => {

    try {
      const results = await City
      .find()
      .select('_id city');
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error retrieving cities from database' });
    }
  });

//Get All Events for a City
router.get('/cities/:city_id', async (req, res, next) => {
    const city = req.params.city_id;
  
    try {
      const results = await Event.find({city_id: city});
      console.log(results);
      if (results.length === 0) {
        return res.status(404).json({ message: `No events found for ${city}` });
      }
      res.status(200).json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //GET requests for popular Events 
router.get('/popular/:popularNum', async (req, res, next) => {
  const popularCount = req.params.popularNum;
  try {
    const docs = await Event.find()
      .sort({times_clicked: -1})
      .limit(popularCount)
      .select('_id name image')
      .exec();
    res.status(200).json(docs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
  });
  
//GET requests for individual Events 
router.get('/:eventId', (req, res, next) => {
    const id = req.params.eventId;
    Event.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({message: 'Page Not Found! :( '});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});



/* router.get('/:category', (req, res, next) => {
    const category = req.params.category;
    
    if (category === 'music') {
      Event
        .find({ category_id: 1 })
        .then((musicEvents) => {
          console.log(musicEvents);
          res.status(200).json(musicEvents);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
        });
    } else if (category === 'theater') {
      Event
        .find({ category_id: 2 })
        .then((theaterEvents) => {
          console.log(theaterEvents);
          res.status(200).json(theaterEvents);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
        });
    } else if (category === 'musical') {
        Event
          .find({ category_id: 3 })
          .then((musicalEvents) => {
            console.log(musicalEvents);
            res.status(200).json(musicalEvents);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
          });
    } else if (category === 'standupcomedy') {
        Event
          .find({ category_id: 4 })
          .then((standUpComedyEvents) => {
            console.log(standUpComedyEvents);
            res.status(200).json(standUpComedyEvents);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
          }); 
    } else if (category === 'sports') {
        Event
          .find({ category_id: 5 })
          .then((sportsEvents) => {
            console.log(sportsEvents);
            res.status(200).json(sportsEvents);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
          });
    } else if (category === 'cinema') {
        Event
          .find({ category_id: 6 })
          .then((cinemaEvents) => {
            console.log(cinemaEvents);
            res.status(200).json(cinemaEvents);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
          });
    } else {
      res.status(400).json({ error: 'Invalid category' });
    }
  }); */

/* router.get('/music', async (req, res, next) => {
    try {
      const musicEvents = await Event.find({ category_id: 1 });
      console.log(musicEvents);
      res.status(200).json(musicEvents);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  
  router.get('/theater', async (req, res, next) => {
    try {
      const theaterEvents = await Event.find({ category_id: 2 });
      console.log(theaterEvents);
      res.status(200).json(theaterEvents);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
 */
/* router.get('/:category', async (req, res, next) => {
    const categoryId = req.params.category_id;
    const category = req.params.category;
    
    try {
      let events;
  
      if (categoryId === '1') {
        events = await Event.find({ category: 'Music' });
      } else if (categoryId === '2') {
        events = await Event.find({ category: 'Theater' });
      } else {
        return res.status(400).send('Invalid category id');
      }
  
      console.log(events);
  
      res.status(200).send(events);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  }); */

/* router.get('/:category', (req, res, next) => {
    const category_id = parseInt(req.params.category);
    Event
      .find({ category_id: category_id })
      .select('name price _id location date image')
      .exec()
      .then(docs => {
          console.log(docs);
          res.status(200).json(docs);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({
              error: err
          });
      });
  });
 */

/* router.get('/:category', (req, res, next) => {
    const category = req.params.category ;
    const category_id = req.params.category_id ;
    Event
      .find({ category_id: category_id })
      .select('name price _id location date image')
      .exec()
      .then(docs => {
          console.log(docs);
          res.status(200).json(docs);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({
              error: err
          });
      });
  }); */
  

/* router.get('/music', (req, res, next) => {
    Event
    .find({ category_id: 1 })
    .select('name price _id location date image')
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/theater', (req, res, next) => {
    Event
    .find({ category_id: 2 })
    .select('name price _id location date image')
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/musicals', (req, res, next) => {
    Event
    .find({ category_id: 3 })
    .select('name price _id location date image')
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/standupcomedy', (req, res, next) => {
    Event
    .find({ category_id: 4 })
    .select('name price _id location date image')
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/sports', (req, res, next) => {
    Event
    .find({ category_id: 5 })
    .select('name price _id location date image')
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/cinema', (req, res, next) => {
    Event
    .find({ category_id: 6 })
    .select('name price _id location date image')
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}); */
/* router.get('/', (req, res, next) => {
    Event
    .find()
    .select('name price _id')
    .exec()
    .then(docs => {
        const response = {
            count : docs.length,
            events: docs.map(doc => {
                return {
                    name: doc.name,
                    price: doc.price,
                    _id: doc._id,
                    url: 'http://localhost:3000/events/' + doc._id,
                }
            })
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}); */

//Post requests for individual Events
/* router.post('/', (req, res, next) => {                  //router.post('/events',..)
     const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
     });
     event
     .save()
     .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'POST requests to /events',
            createdEvent: result
        });
     })
     .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
     })
}); */



//Changing Data in the DB 
/* router.patch('/:eventId', (req, res, next) => {
    const id = req.params.eventId;
     Event.findByIdAndUpdate({_id: id}, { $set: req.body }, { new: true})
     .exec()
     .then(result => {
        console.log(result);
        res.status(200).json(result);
     })
     .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
     })
}); */

//Deleting Data in DB
/* router.delete('/:eventId', (req, res, next) => {
    const id = req.params.eventId;
    Event
    .remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
 }); */

module.exports = router;

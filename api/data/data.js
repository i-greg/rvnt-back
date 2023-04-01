const mongoose = require('mongoose');

const events = [
    {
        name: 'Iron Maiden', time: '10:00 AM', price: 50, date: '2023-04-01', location: 'Eightball', 
        image: 'event1.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 0, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Thessaloniki',category: 'Music', category_img: 'music.jpg'
    },
    {
        name: 'The Phanom of The Opera', time: '09:00 AM', price: 20, date: '2023-04-01', location: 'Μέγαρο Μουσικής', 
        image: 'event1.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 0, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Athens',category: 'Opera', category_img: 'music.jpg'
    },
    {
        name: 'The Clash', time: '09:00 AM', price: 20, date: '2023-04-01', location: 'Gagarin', 
        image: 'event1.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 0, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Athens',category: 'Music', category_img: 'music.jpg'
    }
];

module.exports = events;
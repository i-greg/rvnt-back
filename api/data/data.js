const mongoose = require('mongoose');

const events = [
    {
        name: 'Iron Maiden', time: '10:00 AM', price: 50, date: '2023-04-01', location: 'Eightball', 
        image: 'https://dynamicmedia.livenationinternational.com/p/l/n/e427255d-0ffa-41d5-bf2a-ce3d03108427.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 40, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Thessaloniki',category: 'Music', category_img: 'music.jpg'
    },
    {
        name: 'The Phanom of The Opera', time: '09:00 AM', price: 20, date: '2023-04-01', location: 'Μέγαρο Μουσικής', 
        image: 'https://cdn.londonandpartners.com/asset/the-phantom-of-the-opera-musical-at-her-majestys-theatre_phantom-of-the-opera-image-courtesy-of-cameron-mackintosh_240b6958e824776c4b4b222d72281b95.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 30, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Athens',category: 'Opera', category_img: 'music.jpg'
    },
    {
        name: 'The Clash', time: '09:00 AM', price: 20, date: '2023-04-01', location: 'Gagarin', 
        image: 'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/the-clash-in-london-gus-stewart.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 0, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Athens',category: 'Music', category_img: 'music.jpg'
    },
    {
        name: 'The Clash', time: '09:00 AM', price: 20, date: '2023-04-01', location: 'Gagarin', 
        image: 'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/the-clash-in-london-gus-stewart.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 20, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Athens',category: 'Music', category_img: 'music.jpg'
    },
    {
        name: 'The Clash', time: '09:00 AM', price: 20, date: '2023-04-01', location: 'Gagarin', 
        image: 'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/the-clash-in-london-gus-stewart.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 10, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Athens',category: 'Music', category_img: 'music.jpg'
    }
];

module.exports = events;
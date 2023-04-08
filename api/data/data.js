const mongoose = require('mongoose');

const events = [
    {
        name: 'Iron Maiden', time: ['10:00 AM'], price: 50, date: ['2023-04-01'], location: 'Eightball', 
        image: 'https://dynamicmedia.livenationinternational.com/p/l/n/e427255d-0ffa-41d5-bf2a-ce3d03108427.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 40, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Heraklion',category: 'Music Event'
    },
    {
        name: 'The Phanom of The Opera', time: ['09:00 AM'], price: 20, date: ['2023-04-01'], location: 'Μέγαρο Μουσικής', 
        image: 'https://cdn.londonandpartners.com/asset/the-phantom-of-the-opera-musical-at-her-majestys-theatre_phantom-of-the-opera-image-courtesy-of-cameron-mackintosh_240b6958e824776c4b4b222d72281b95.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 30, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Athens',category: 'Theater'
    },
    {
        name: 'The Clash', time: ['09:00 PM'], price: 20, date: ['2023-04-28'] , location: 'Gagarin', 
        image: 'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/the-clash-in-london-gus-stewart.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 0, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Ioannina',category: 'Music Event'
    },
    {
        name: 'Dogville', time: ['6:00 PM', '09:00 PM'], price: 22, date: ['2023-04-27', '2023-04-28'], location: 'Νέος Ακάδημος', 
        image: 'https://www.athinorama.gr/Content/ImagesDatabase/d7/d7f96a71bf9b452a8265da02d661dc9a.jpg?width=741&quality=80', tickets_total: 100, tickets_remaining: 50, times_clicked: 0, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Athens',category: 'Theater'
    },
    {
        name: 'Paok vs Aris', time: ['08:30 PM'], price: 22, date: ['2023-04-22'], location: 'Γήπεδο Τούμπας', 
        image: 'https://cityportal.gr/wp-content/uploads/2023/01/%CF%80%CE%B1%CE%BF%CE%BA-%CE%B1%CF%81%CE%B7%CF%82.jpg', tickets_total: 100, tickets_remaining: 50, times_clicked: 0, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Thessaloniki',category: 'Sports'
    }

];

const cities = [
    
          "Athens",
          "Thessaloniki",
          "Patras",
          "Heraklion",
          "Larissa",
          "Volos",
          "Ioannina",
          "Chania",
          "Kalamata",
          "Chalcis",
          "Serres",
          "Kavala",
          "Rhodes",
          "Katerini",
          "Drama",
          "Alexandroupoli",
          "Mytilene",
          "Komotini",
          "Corfu",
          "Tripoli"
]

const categories = [
          {
            "name": "Music Event",
            "img": "https://billetto.co.uk/blog/wp-content/uploads/2019/06/zhqczjr9fho-e1560853535167-800x440.jpg"
          },
          {
            "name": "Art Exhibition",
            "img": "https://www.jacksonsart.com/blog/wp-content/uploads/2020/01/Mall-Gallery-Main-Gallery-Exhibition-Hire.jpg"
          },
          {
            "name": "Food Festival",
            "img": "https://www.posist.com/restaurant-times/wp-content/uploads/2019/12/grub-fest.jpg"
          },
          {
            "name": "Cinema",
            "img": "https://www.grandsierraresort.com/hubfs/recreation/Grand-Sierra-Cinema-view-of-auditorium_q085_1920x1080.jpg"
          },
          {
            "name": "Sports",
            "img": "https://www.sfina.gr/wp-content/uploads/2020/02/paok-filathloi-toumpa-500.jpg"
          },
          {
            "name": "Theater",
            "img": "https://frenchbien.com/wp-content/uploads/2018/07/theater.jpg"
          },
          {
            "name": "Comedy Show",
            "img": "https://media.istockphoto.com/id/1206780681/photo/microphone-at-a-comedy-show-or-music-performance-show-on-stage-entertainment.jpg?s=612x612&w=0&k=20&c=N-LrbY0Tgbzu5Ybs8ZC_RyGldXOzuBLGLbtA70RKoVo="
          },
          {
            "name": "Fashion Show",
            "img": "https://people.com/thmb/XeliHe5Ces1VuLsoMYZWeL14u3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1019x597:1021x599)/paris-fashion-week-1-5a21720c78a044e48ce4c72509987d1c.jpg"
          }
        ]


module.exports = {events, categories, cities};
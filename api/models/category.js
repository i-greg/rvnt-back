const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category: { type: String, required: true },
    category_img: { type: String, required: true},
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

/* const AllCategories = [
    {
        category: "Cinema",
        category_img: "https://www.verdict.co.uk/wp-content/uploads/2017/10/shutterstock_384996514.jpg"
    },
    {
        category: "Music",
        category_img: "https://billetto.co.uk/blog/wp-content/uploads/2019/06/zhqczjr9fho-e1560853535167-800x440.jpg"
    },
    {
        category: "Theater",
        category_img: "https://frenchbien.com/wp-content/uploads/2018/07/theater.jpg"
    },
    {
        category: "Sports",
        category_img: "https://img.freepik.com/fotos-kostenlos/sportgeraete_53876-138077.jpg?w=2000"
    },
    {
        category: "Comedy",
        category_img: "https://www.agriniopress.gr/wp-content/uploads/2019/12/mathioudakis-theodoropoulos-3.jpg"
    },
    {
        category: "Talk",
        category_img: "https://speakupforsuccess.com/wp-content/uploads/2014/03/Susan-Cain-Speaking-at-TED-1024x682.jpg"
    },
    {
        category: "Musical",
        category_img: "https://www.thegeorge-hotel.de/__we_thumbs__/3285_3_WvB_US_Glamour_G7Q1631_A4_300dpi-1.jpg?m=1541436194"
    },
    {
        category: "Festival",
        category_img: "https://www.visitberlin.de/system/files/styles/visitberlin_hero_visitberlin_desktop_2x/private/image/Lollapalooza_Berlin_2016_Atmo_43_Johannes_Riggelsen_DL_PPT_0.jpg?h=bb5434d7&itok=HHHSejdr"
    },
];

Category
.insertMany(AllCategories)
.then(() => console.log('Categories Added'))
.catch(err => console.log(err)); */


const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    city: { type: String, required: true},
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

const City = mongoose.model('City', citySchema);

module.exports = City;

/* const AllCities = [
    {
        city: "Athens, Αθήνα"
    },
    {
        city: "Thessaloniki, Θεσσαλονίκη"
    },
    {
        city: "Patra, Πάτρα"
    },
    {
        city: "Serres, Σέρρες"
    },
    {
        city: "Kozani, Κοζάνη"
    },
    {
        city: "Agrinio, Αγρίνιο"
    },
    {
        city: "Volos, Βόλος"
    },
    {
        city: "Trikala, Τρίκαλα"
    },
    {
        city: "Lamia, Λαμία"
    },
    {
        city: "Kalamata, Καλαμάτα"
    },
    {
        city: "Heraklio, Ηράκλειο"
    },
    {
        city: "Pyrgos, Πύργος"
    },
    {
        city: "Kavala, Καβάλα"
    },
    {
        city: "Alexandroupoli, Αλεξανδρούπολη"
    },
    {
        city: "Xanthi, Ξάνθη"
    },
    {
        city: "Komotini, Κομοτηνή"
    },
    {
        city: "Vathy, Βαθύ"
    },
    {
        city: "Kastoria, Καστοριά"
    },
    {
        city: "Ioannina, Ιωάννινα"
    },
    {
        city: "Arta, Άρτα"
    }
];

City
.insertMany(AllCities)
.then(() => console.log('Cities Added'))
.catch(err => console.log(err)); */


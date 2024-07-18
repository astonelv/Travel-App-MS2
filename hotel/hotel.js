const express = require('express');
const app = express();
app.use(express.json());


let hotels = [];

app.get('/hotels', (req, res) => {
    res.json(hotels);
});

app.post('/hotels', (req, res) => {
    const hotel = req.body;
    hotels.push(hotel);
    res.status(201).send();
});

app.get('/hotels/:id', (req, res) => {
    const { id } = req.params;
    const hotel = hotels.find(h => h.id === id);
    if (!hotel) res.status(404).send('Hotel not found');
    else res.json(hotel);
});

app.put('/hotels/:id', (req, res) => {
    const { id } = req.params;
    const hotelIndex = hotels.findIndex(h => h.id === id);
    if (hotelIndex === -1) res.status(404).send('Hotel not found');
    else {
        hotels[hotelIndex] = req.body;
        res.send();
    }
});

app.delete('/hotels/:id', (req, res) => {
    const { id } = req.params;
    const hotelIndex = hotels.findIndex(h => h.id === id);
    if (hotelIndex === -1) res.status(404).send('Hotel not found');
    else {
        hotels.splice(hotelIndex, 1);
        res.send();
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
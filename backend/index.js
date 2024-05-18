const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connection } = require('./db/index.js');


const app = express();

app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Routes
const personRoutes = require('./routes/personRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const locationRoutes = require('./routes/locationRoutes');

app.use('/api/persons', personRoutes); 
app.use('/api/orders', orderRoutes); 
app.use('/api/reviews', reviewRoutes); 
app.use('/api/locations', locationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

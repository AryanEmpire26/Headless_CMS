const db = require('../db');

// Controller functions for CRUD operations related to locations
const getAllLocations = (req, res) => {
    db.query('SELECT * FROM location', (error, results) => {
        if (error) {
            console.error('Error fetching locations:', error);
            res.status(500).json({ error: 'Error fetching locations' });
        } else {
            res.status(200).json(results);
        }
    });
};

const getLocationById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM location WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error fetching location by ID:', error);
            res.status(500).json({ error: 'Error fetching location by ID' });
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: 'Location not found' });
            } else {
                res.status(200).json(results[0]);
            }
        }
    });
};

const createLocation = (req, res) => {
    const { name, latitude, longitude, disc } = req.body;
    db.query(
        'INSERT INTO location (name, latitude, longitude, disc) VALUES (?, ?, ?, ?)',
        [name, latitude, longitude, disc],
        (error, results) => {
            if (error) {
                console.error('Error creating location:', error);
                res.status(500).json({ error: 'Error creating location' });
            } else {
                res.status(201).json({ message: 'Location created successfully', id: results.insertId });
            }
        }
    );
};

const updateLocation = (req, res) => {
    const { id } = req.params;
    const { name, latitude, longitude, disc } = req.body;
    db.query(
        'UPDATE location SET name = ?, latitude = ?, longitude = ?, disc = ? WHERE id = ?',
        [name, latitude, longitude, disc, id],
        (error, results) => {
            if (error) {
                console.error('Error updating location:', error);
                res.status(500).json({ error: 'Error updating location' });
            } else {
                if (results.affectedRows === 0) {
                    res.status(404).json({ error: 'Location not found' });
                } else {
                    res.status(200).json({ message: 'Location updated successfully' });
                }
            }
        }
    );
};

const deleteLocation = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM location WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error deleting location:', error);
            res.status(500).json({ error: 'Error deleting location' });
        } else {
            if (results.affectedRows === 0) {
                res.status(404).json({ error: 'Location not found' });
            } else {
                res.status(200).json({ message: 'Location deleted successfully' });
            }
        }
    });
};

module.exports = {
    getAllLocations,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation
};

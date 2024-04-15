const Accommodation = require('../models/accommodationSchema');

// Controller to edit accommodation data
exports.editAccommodation = async (req, res) => {
    try {
        const { id } = req.params;
        const { bh1VacantRooms, bh2VacantRooms, bh3VacantRooms, ghVacantRooms } = req.body;

        const updatedAccommodation = await Accommodation.findByIdAndUpdate(id, {
            bh1VacantRooms,
            bh2VacantRooms,
            bh3VacantRooms,
            ghVacantRooms
        }, { new: true });

        if (!updatedAccommodation) {
            return res.status(404).json({ message: 'Accommodation data not found' });
        }

        res.json({ message: 'Accommodation data updated successfully', accommodation: updatedAccommodation });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Controller to get all accommodation data
exports.getAllAccommodations = async (req, res) => {
    try {
        const accommodations = await Accommodation.find();
        res.json(accommodations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

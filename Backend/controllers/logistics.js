const Logistic = require('../models/logisticSchema');

// Function to add a new logistic vendor
exports.addLogistic = async (req, res) => {
    try {
        const newLogistic = new Logistic(req.body);
        await newLogistic.save();
        res.status(201).json({ message: 'Logistic vendor added successfully', logistic: newLogistic });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to delete a logistic vendor
exports.deleteLogistic = async (req, res) => {
    try {
        const logistic = await Logistic.findByIdAndDelete(req.params.id);
        if (!logistic) {
            return res.status(404).json({ message: 'Logistic vendor not found' });
        }
        res.json({ message: 'Logistic vendor deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to edit a logistic vendor
exports.editLogistic = async (req, res) => {
    try {
        const logistic = await Logistic.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!logistic) {
            return res.status(404).json({ message: 'Logistic vendor not found' });
        }
        res.json({ message: 'Logistic vendor updated successfully', logistic });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to filter logistic vendors based on deal status
exports.filterLogisticsByDealStatus = async (req, res) => {
    try {
        const { dealStatus } = req.query;
        const logistics = await Logistic.find({ dealStatus });
        res.json(logistics);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to get all logistic vendors
exports.getAllLogistics = async (req, res) => {
    try {
        const logistics = await Logistic.find();
        res.json(logistics);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

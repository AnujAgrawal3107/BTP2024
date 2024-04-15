const College = require('../models/collegeSchema');

// Function to add a new college
exports.addCollege = async (req, res) => {
    try {
        const newCollege = new College(req.body);
        await newCollege.save();
        res.status(201).json({ message: 'College added successfully', college: newCollege });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to delete a college
exports.deleteCollege = async (req, res) => {
    try {
        const college = await College.findByIdAndDelete(req.params.id);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        res.json({ message: 'College deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to edit a college
exports.editCollege = async (req, res) => {
    try {
        const college = await College.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        res.json({ message: 'College updated successfully', college });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to filter colleges based on deal status
exports.filterCollegesByDealStatus = async (req, res) => {
    try {
        const { dealStatus } = req.query;
        const colleges = await College.find({ dealStatus });
        res.json(colleges);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to get all colleges
exports.getAllColleges = async (req, res) => {
    try {
        const colleges = await College.find();
        res.json(colleges);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const Sponsorship = require('../models/sponsorshipSchema');

// Function to add a new sponsorship
exports.addSponsorship = async (req, res) => {
    try {
        const newSponsorship = new Sponsorship(req.body);
        await newSponsorship.save();
        res.status(201).json({ message: 'Sponsorship added successfully', sponsorship: newSponsorship });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to delete a sponsorship
exports.deleteSponsorship = async (req, res) => {
    try {
        const sponsorship = await Sponsorship.findByIdAndDelete(req.params.id);
        if (!sponsorship) {
            return res.status(404).json({ message: 'Sponsorship not found' });
        }
        res.json({ message: 'Sponsorship deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to edit a sponsorship
exports.editSponsorship = async (req, res) => {
    try {
        const sponsorship = await Sponsorship.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!sponsorship) {
            return res.status(404).json({ message: 'Sponsorship not found' });
        }
        res.json({ message: 'Sponsorship updated successfully', sponsorship });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to filter sponsorships based on deal status
exports.filterSponsorshipsByDealStatus = async (req, res) => {
    try {
        const { dealStatus } = req.query;
        const sponsorships = await Sponsorship.find({ dealStatus });
        res.json(sponsorships);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to get all sponsorships
exports.getAllSponsorships = async (req, res) => {
    try {
        const sponsorships = await Sponsorship.find();
        res.json(sponsorships);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

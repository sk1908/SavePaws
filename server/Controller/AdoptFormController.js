const AdoptForm = require('../Model/AdoptFormModel');
const express = require('express');
const asyncHandler = require('express-async-handler');

const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

const saveForm = asyncHandler(async (req, res) => {
    const { email, livingSituation, phoneNo, previousExperience, familyComposition, petId } = req.body;

    if (!email || !livingSituation || !phoneNo || !petId) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const form = await AdoptForm.create({
        email,
        livingSituation,
        phoneNo,
        previousExperience,
        familyComposition,
        petId,
    });

    res.status(201).json(form);
});


const getAdoptForms = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Pagination parameters
    const forms = await AdoptForm.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit));

    res.status(200).json(forms);
});

const deleteForm = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }

    const form = await AdoptForm.findByIdAndDelete(id);

    if (!form) {
        return res.status(404).json({ message: 'Form not found' });
    }

    res.status(200).json({ message: 'Form deleted successfully' });
});

// Delete all requests for a specific pet
const deleteAllRequests = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid pet ID format' });
    }

    const result = await AdoptForm.deleteMany({ petId: id });

    if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Forms not found for the specified pet' });
    }

    res.status(200).json({ message: 'Forms deleted successfully' });
});

module.exports = {
    saveForm,
    getAdoptForms,
    deleteForm,
    deleteAllRequests,
};

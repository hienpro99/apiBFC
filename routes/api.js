// routes/api.js
const express = require('express');
const router = express.Router();
const Data = require('../models/dataModel');
router.get('/get-data', async(req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Đã xảy ra lỗi' });
    }
});

router.get('/display-data', async(req, res) => {
    try {
        const data = await Data.find();
        res.render('index', { data });
    } catch (error) {
        res.status(500).json({ error: 'Đã xảy ra lỗi' });
    }
});

router.post('/add-data', async(req, res) => {
    try {
        const { selectedPackage, phoneNumber, selectedAssets } = req.body;

        const newData = new Data({
            selectedPackage,
            phoneNumber,
            selectedAssets,
        });

        await newData.save();
        res.status(201).json({ message: 'Dữ liệu đã được thêm thành công' });
    } catch (error) {
        res.status(500).json({ error: 'Đã xảy ra lỗi' });
    }
});

module.exports = router;
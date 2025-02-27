const mongoose = require('mongoose');
const User = require('../models/User');
const Visa1 = require('../models/Visa1');
const Visa2 = require('../models/Visa2');
const Accept1 = require('../models/Accept1');
const Accept2 = require('../models/Accept2');

exports.getUserDetails = async (req, res) => {
    try {
        const { uniqueid } = req.params;

        if (!uniqueid) {
            return res.status(400).json({ success: false, error: "Missing uniqueid in URL" });
        }

        // Fetch data from all the models
        const [user, visa1Data, visa2Data, accept1Data, accept2Data] = await Promise.all([
            User.findOne({ uniqueid }),
            Visa1.findOne({ uniqueid }),
            Visa2.findOne({ uniqueid }),
            Accept1.findOne({ uniqueid }),
            Accept2.findOne({ uniqueid })
        ]);

        // If no data is found, render the detail page with null values for each model
        if (!user  && !visa1Data && !visa2Data && !accept1Data && !accept2Data) {
            return res.render('detail', {
                user: null, 
                visa1Data: null,
                visa2Data: null,
                accept1Data: null,
                accept2Data: null
            });
        }

        // Render the detail page with the data from all models
        res.render('detail', {
            user,
            visa1Data,
            visa2Data,
            accept1Data,
            accept2Data
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

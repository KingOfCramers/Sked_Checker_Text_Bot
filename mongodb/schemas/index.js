const mongoose = require("mongoose");

module.exports = {
    HFACSchema: mongoose.model('HFAC', {
        recordListTitle: {
            type: String,
            require: true
        },
        recordListTime: {
            type: String,
            require: true
        },
        recordListDate: {
            type: String,
            require: true
        },
        link: {
            type: String,
            require: true
        }
    })
};
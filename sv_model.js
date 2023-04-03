const mongoose = require('mongoose');

const SinhVienSchema =   new mongoose.Schema({
    ten: {
        type: String,
    },
    tuoi: {
        type: String,
    },
    adresss:{
        type: String,
    }
});

const SinhVienModel = mongoose.model('sinhvien', SinhVienSchema);

module.exports = SinhVienModel;
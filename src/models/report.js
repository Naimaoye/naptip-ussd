import mongoose from 'mongoose';

const reportSchema =  new mongoose.Schema({
    ussdID: { type: String },
    phoneNumber: { type: String },
    isRegistrationComplete: { type: Boolean, default: false },
    state: { type: String },
    incidenceType: { type: String },
    ussdQuestionNumber: { type: Number, default: 1, required: false },
    status: {
        type: String,
        enum : ['OPEN','CLOSE', 'CANCEL', 'REFER', 'IN-PROGRESS'],
        default: 'OPEN'
    },
});

const Report = mongoose.model('report', reportSchema);
export default Report;

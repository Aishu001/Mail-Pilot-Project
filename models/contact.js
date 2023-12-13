import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        unique: true,
        required: true
    },

   

});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

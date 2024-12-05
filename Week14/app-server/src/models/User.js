// to tell mongoose to describe the user database model

// don't need express here, it's just a vlaidation schema

// formic - automate onChange, handleChange, input binding, error handling, yup to write validaiton schema, etc

const mongoose = require('mongoose')

// SCHEMA: a JSON/JS object that explains validation - what fields should be what type - required, min/max, human-readable
// this schema is where we tell mongoose about the different properties our user collection (MongoDB) has to have

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

// Finally, we need to associate this schema with mongoose
// we need schemas to create a model to DB - DB knows fields etc - no need to do any settings in MongoDB, mongoose handles it
mongoose.model('User', userSchema)
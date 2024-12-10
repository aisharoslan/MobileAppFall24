const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// this Schema is where we tell mongoose about the different properties
// our user collection has to have
const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// Salting and Hashing
// 2nd param - cannot use arrow function
// we need to use the function keyword here in order to have access to the keyword 'this' inside the function, with an arrow function, this = this file, we need 'this' to be this user that we are saving
// LOOK AT HER NOTES!!
userSchema.pre('save', function (next) {
  const user = this
  // look at the password, if it's plain text, generate that salt
  // ONLY if the user has not just modified their password
  if (!user.isModified(user.password)) {
    // give up and continue on
    return next()
  }
  // otherwise, we're creating a new user and password - so modifying it
  // generate a salt string, then hash it, to do this we need the bcrypt lib
  // param 1: encoding factor, param2: (error, salt we generated)
  bcrypt.genSalt(10, (err, salt) => {
    // give up on error
    if (err) {
      return next(err) // pass error on - will show up when we do the req
    }
    // hash it (encrypt)
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err) // pass error on - will show up when we do the req
      }
      // update/overwrite the user's plain text password
      user.password = hash
      // continue on with our save
      next()
      // that stores our hashed password inside of our DB
    })
  })
})

// automate the password checking process for /signin
// add a method to our schema (using function keyword again)
// candidatePassword = incoming password that user supplies when trying to login
// create a signin route
userSchema.methods.comparePassword = function (candidatePassword) {
  // this = User Model
  const user = this
  // create a new Promise, we always pass it a callback function
  // automatically invoked with a resolve and reject
  return new Promise((resolve, reject) => {
    // argument 1 = incoming candidate password
    // argument 2 = the salted and hashed password from our DB
    // argument 3 = callback called with an error object and boolean if it matched or not
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err)
      }
      if (!isMatch) { // not a match
        return reject(false)
      }
      // if we passed those checks our passwords match
      resolve(true)
    })

  })
}

// Finally, we need to associate this Schema with mongoose
mongoose.model('User', userSchema)

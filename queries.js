/* Add all the required libraries*/
var mongoose = require('mongoose'), 
    Listing = require('./ListingSchema.js'),
    config = require('./config');
    mConnection = mongoose.connection;

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);

/* 
  Find the document that contains data corresponding to Library West,
  then log it to the console. 
*/
var findLibraryWest = function() {
  Listing.findOne({ name: 'Library West'}, function(err, doc) {
    if(err)
      throw(err)
    console.log("~Finding~");
    console.log(doc)
    console.log("~Found~");
  });
};

/*
  Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
  on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
  and remove this listing from your database and log the document to the console. 
*/
var removeCable = function() {
  Listing.deleteOne({ code: 'CABL'}, function(err, doc) { 
    if(err)
      throw(err)
    console.log("~Deleting~")
    console.log(doc);
    console.log("~Deleted~")
  });
};

/*
  Phelps Lab address is incorrect. Find the listing, update it, and then 
  log the updated document to the console. 
*/
var updatePhelpsLab = function() {
  Listing.updateOne({ name: 'Phelps Laboratory'}, {address: '1953 Museum Rd, Gainesville, FL 32603'}, function(err, doc) {
  if(err)
    throw(err);
  console.log("~Updating~");
  Listing.findOne({ name: 'Phelps Laboratory'}, function(err, upDoc) {
    if(err)
      throw(err);
    console.log(upDoc);
    console.log("~Updated~");
    });
  }); 
};

//Retrieve all listings in the database, and log them to the console. 
var retrieveAllListings = function() {
  Listing.find({}, function(err, doc) {
  if(err)
    throw(err);
  console.log("~~~~~~~~~~~~");
  console.log(doc);
  console.log("~AllListings~");
  });
};

  findLibraryWest();
  removeCable();
  updatePhelpsLab();
  retrieveAllListings();
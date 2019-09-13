'use strict';

//Import modules/files you may need to correctly run the script. 

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
*/
fs.readFile('listings.json', 'utf8', function(err, data) {
   if(err)
     throw(err);
  let listingData = JSON.parse(data);
  listingData.entries.forEach(function(err, element) {
    if(err)
      throw(err);
    let temp = new Listing(element);
    temp.save();
  });
})
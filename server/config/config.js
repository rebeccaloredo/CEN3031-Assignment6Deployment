//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://rebeccal:password@ds127044.mlab.com:27044/uf_bootcamp3', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyCXjeKD90Z1crxltFXVeheDCKeXjOASDgA'
  },
  port: process.env.PORT
};

const request = require('request');
const breed = process.argv[2];

const getBreed = (breed, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0]) {
      return callback(error, data[0].description);
    } else {
      return callback("Breed not found");
    }
  });  
  };

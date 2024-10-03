#!/usr/bin/node
// script displays the status code of a GET request.

const request = require('request');

if (process.argv.length > 2) {
  const url = process.argv[2];
  request.get(url, (error, response) => {
    if (error) {
      console.error(`An error occurred while making the request: ${error}`);
    } else {
      console.log(`code: ${response.statusCode}`);
    }
  });
} else {
  console.log('provide the URL as an argument.');
}

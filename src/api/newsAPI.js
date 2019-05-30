
import React from 'react';
import ReactDOM from 'react-dom';

const sendCountyRequest = (searchItem, callback) => {
  var x = new XMLHttpRequest();
  x.open('GET','https://newsapi.org/v2/everything?q='+searchItem+'&apiKey='+process.env.NEWS_API_KEY);

  x.send();

  x.onload = function() {
    if (x.status != 200) { // analyze HTTP status of the response
      console.error(`Error ${x.status}: ${x.statusText}`); // e.g. 404: Not Found
    } else { // show the result
      if (callback) {
        callback(x.response);
      }
    }
  };


}


export default sendCountyRequest;

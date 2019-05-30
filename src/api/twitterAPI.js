
import React from 'react';
import ReactDOM from 'react-dom';

const sendTwitterReq = (searchItem, callback) => {
  var x2 = new XMLHttpRequest();
  x2.open('GET','/twitter/'+searchItem);

  x2.send();

  x2.onload = function() {
    if (x2.status != 200) { // analyze HTTP status of the response
      console.error(`Error ${x.status}: ${x.statusText}`); // e.g. 404: Not Found
    } else { // show the result
      if (callback) {
        callback(x2.response);
      }
    }
  };


}

export default sendTwitterReq;

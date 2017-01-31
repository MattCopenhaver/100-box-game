import React from 'react';
import Box from './Box';
var _ = require('lodash');

function Row(props) {
  var displayBoxes = [];
  var count = 0;
  var moveAvailable = false;

  function searchForArray(haystack, needle){
    var i, j, current;
    for(i = 0; i < haystack.length; ++i){
      if(needle.length === haystack[i].length){
        current = haystack[i];
        for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
        if(j === needle.length)
          return true;
      }
    }
    return false;
  }

  props.row.forEach(function (number) {
    if (searchForArray(props.moveOptions, [props.rowNumber, count])) {
      moveAvailable = true;
    }
    displayBoxes.push(
      <Box
          key={count}
          number={number}
          rowNumber={props.rowNumber}
          columnNumber={count}
          moveOptions={props.moveOptions}
          moveAvailable={moveAvailable}
      />
    );
    count++;
    moveAvailable = false;
  });
  return (
    <div className='row'>
      {
        displayBoxes
      }
    </div>
  )
}

module.exports = Row;

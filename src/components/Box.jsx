import React from 'react';
var actions = require('../actions/actions');

function display(number) {
  if (!number) {
    return ''
  } else {
    return number;
  }
}

function Box(props) {
  function getStyle() {
    var style = 'box';
    // console.log(props.moveAvailable)
    if (props.moveAvailable) {
      return style + ' move-available';
    }

    if (props.number) {
      return style + ' move-played';
    }

    return style;
  }

  function handleClick() {
    if (props.moveAvailable) {
      actions.playMove([props.rowNumber, props.columnNumber])
    }
  }

  function getColorStyle() {
    if (!props.number) {
      return {

      }
    }
    var alpha = .05 + .0095 * props.number;
    return {
      background :'rgba(0, 128, 0, ' + alpha + ')'
    }
  }

  return <div className={getStyle()} style={getColorStyle()} onClick={handleClick}><h2>{display(props.number)}</h2></div>;
}

module.exports = Box;

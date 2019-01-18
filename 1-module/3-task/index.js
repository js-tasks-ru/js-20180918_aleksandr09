'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let current = 0;
  let numbers = [];

"03"
  for (let i = 0; i < str.length; i++) {

    if (isNumeric(parseFloat(str.substring(current)))) {
      numbers.push (parseFloat(str.substring(current)));
    }

    if (~str.indexOf(' ', current) && ~str.indexOf(',', current)) {
      current = Math.min(str.indexOf(' ', current), str.indexOf(',', current)) +1;

    } else if ( ~str.indexOf(' ', current) ) {
      current = str.indexOf(' ', current) +1;

    } else if ( ~str.indexOf(',', current) ) {
      current = str.indexOf(',', current) +1;

    } else break;

  }

  return {min: Math.min( ...numbers ),
          max: Math.max( ...numbers )};
}

function isNumeric(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

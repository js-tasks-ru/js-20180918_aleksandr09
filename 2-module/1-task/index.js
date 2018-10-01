/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
  let newObj = {};
  for (let property in obj) {
    if (typeof obj[property] != 'object' || obj[property] === null ) {
      newObj[property] = obj[property];
    } else {
      newObj[property] = clone(obj[property]);
    }
  }

  return newObj;
}

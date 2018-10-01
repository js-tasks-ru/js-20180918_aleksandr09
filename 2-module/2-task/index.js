/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
  let result = [];

  for (let property in obj) {
    if (obj[property] === value) {
      result.push (property);

    } else if (typeof obj[property] === "object" && obj[property] != null) {
      let iResult = find(obj[property], value);

        if (typeof iResult === "string") {
          result.push(property + '.' + iResult);

        } else if (iResult) {
          for (let i = 0; i<iResult.length; i++) {
            result.push(property + '.' + iResult[i]);
          }
        }
    }
  }

  if (result.length === 0) {
    return null;
  } else if (result.length === 1) {
    return result[0];
  } else return result;

}

/* jshint esversion: 6 */
const checkData = (data) => {
  if (Array.isArray(data)) {
    return true;
  } else {
    throw new Error("Can Only Sort Arrays");
  }
};

module.exports = checkData;
"use strict";

const validateVisaCardNumber = (str) => {
  const regExpVisa = /^4[0-9]{5}([0-9]{6}|[0-9]{9})[0-9]{4}$/;
  return str.match(regExpVisa) ? true : false;
};

export default validateVisaCardNumber;

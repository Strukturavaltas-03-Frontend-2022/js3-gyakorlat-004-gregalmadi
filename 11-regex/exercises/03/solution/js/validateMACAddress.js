"use strict";

const validateMACAddress = (macAddress) => {
  const regExpMacAddress = /^([0-9a-fA-F]{2}[:-]){5}([0-9a-fA-F]{2})$/;
  return macAddress.match(regExpMacAddress) ? true : false;
};

export default validateMACAddress;

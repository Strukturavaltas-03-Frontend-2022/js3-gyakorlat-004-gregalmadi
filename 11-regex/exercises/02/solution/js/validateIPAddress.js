"use strict";

const validateIPAddress = (IPv4) => {
  const regExpIPv4 =
    /^(((1[0-9]{0,2})|(2[0-5]{2})|(2[0-9]{1})|([3-9][0,9]{2}))([.-])){1}((0|(1[0-9]{0,2})|(2[0-5]{2})|(2[0-9]{1})|([3-9][0,9]{2}))([.-])){2}((0|1[0-9]{0,2})|(2[0-5]{2})|(2[0-9]{1})|([3-9][0,9]{2}))$/;
  return IPv4.match(regExpIPv4) ? true : false;
};

export default validateIPAddress;

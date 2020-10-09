const defangIPaddr = function(address) {
  const splited = address.split('.');
  return splited.join('[.]');
};

module.exports = defangIPaddr;
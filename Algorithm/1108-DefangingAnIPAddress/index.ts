export function defangIPaddr (address: string): string {
  const splited = address.split('.');
  return splited.join('[.]');
};


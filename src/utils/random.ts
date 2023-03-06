export function uuid() {
  return self.crypto.randomUUID();
}

export function hexToBase64(hexString: string): string {
  const hexArray = hexString.match(/.{1,2}/g) || [];
  const byteArray = new Uint8Array(hexArray.map(byte => parseInt(byte, 16)));
  const base64 = btoa(String.fromCharCode(...byteArray));
  return base64;
}

export function randomId() {
  return hexToBase64(uuid().replace(/-/g, ''));
}

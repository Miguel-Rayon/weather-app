export const decodeText = (encodedText: string): string => {
  const decoder = new TextDecoder("utf-8");
  const encodedArray = new Uint8Array(
    encodedText.split("").map((char) => char.charCodeAt(0))
  );
  return decoder.decode(encodedArray);
};

function extractTimestampFromUUIDv7(uuid) {
  const parts = uuid.split("-");

  const highBitsHex = parts[0] + parts[1].slice(0, 4);

  const timestampInMilliseconds = Number.parseInt(highBitsHex, 16);

  return new Date(timestampInMilliseconds).toISOString();
}

module.exports = extractTimestampFromUUIDv7;

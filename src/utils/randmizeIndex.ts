export function getRandomIndices(length: number, count: number) {
  const indices: number[] = [];
  while (indices.length < count) {
    const index = Math.floor(Math.random() * length);
    if (!indices.includes(index)) {
      indices.push(index);
    }
  }
  return indices;
}

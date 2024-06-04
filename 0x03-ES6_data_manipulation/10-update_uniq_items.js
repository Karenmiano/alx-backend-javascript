function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
      throw new Error('Cannot process'); // Throw an error if the input is not a Map
  }

  map.forEach((value, key) => {
      if (value === 1) {
          map.set(key, 100);
      }
  });

  return map;
}
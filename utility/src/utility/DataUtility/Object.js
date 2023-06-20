const returnedPathForObject = (
  findKey,
  item,
  itemIndex,
  originalPath = false
) => {
  const path = [];
  let bufferKeys, deepKeys;
  if (item.__proto__.constructor.name === "Object") {
    bufferKeys = Object.keys(item);
    if (bufferKeys.includes(findKey) && path.length === 0) {
      if (itemIndex !== null) path.push(`[${itemIndex}]`);
      path.push(findKey);
      if (originalPath) return path;
      return path.length > 1 ? path.join(".") : path.join();
    }
    //--!TODO ---> if we dont found our field to move on
    bufferKeys.forEach((key) => {
      deepKeys = Object.keys(item[key]);
      if (path.length > 0) return;
      //Second deep
      if (deepKeys.includes(findKey) && path.length === 0) {
        if (itemIndex !== null) path.push(`[${itemIndex}]`);
        path.push(key, findKey);
        if (originalPath) return path;
        return path.length > 2 ? path.join(".") : path.join();
      }

      deepKeys.forEach((deepKey) => {
        if (typeof item[key][deepKey] === "object") {
          if (
            Object.keys(item[key][deepKey]).includes(findKey) &&
            path.length === 0
          ) {
            if (itemIndex !== null) path.push(`[${itemIndex}]`);
            path.push(key, deepKey, findKey);
            if (originalPath) return path;
            return path.length > 1 ? path.join(".") : path.join();
          }
        }
      });
    });
  }
  if (path.length === 0) return null;
  if (originalPath) return path;
  return path.join(".");
};

export { returnedPathForObject };

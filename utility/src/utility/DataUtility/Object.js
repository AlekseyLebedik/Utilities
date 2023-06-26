import { isEmpty, get } from "lodash";

/*PATH FIELD OBJECT*/
const pathFieldObject = ({ findKey, item, withKey }) => {
  const recursiveObject = (obj, findKey, path = [], pathInstance = []) => {
    if (obj.__proto__.constructor.name !== "Object") {
      return [];
    }

    let result = [];
    for (const [key, _] of Object.entries(obj)) {
      if (Object.keys(obj[key]).includes(findKey) && path.length === 0) {
        result = [...pathInstance, key];

        break;
      }
      const newPathInstance = [...pathInstance, key];

      result = recursiveObject(obj[key], findKey, path, newPathInstance);

      if (result.length > 0) {
        break;
      }
    }

    return result;
  };

  if (item.__proto__.constructor.name === "Object") {
    const path = recursiveObject(item, findKey);

    if (withKey) path.push(findKey);

    return path.length > 1 ? path.join(".") : path.join();
  }

  return null;
};

/*DEEP EMPTY CHECK*/

const isDeepEmpty = (fieldCheck, obj) => {
  switch (obj.__proto__.constructor.name) {
    case "Object":
      const path = returnedPathForObject(fieldCheck, obj);

      return { isEmpty: isEmpty(get(obj, path)) };

    case "Array":
      return obj.map((objItem) => {
        const path = returnedPathForObject(fieldCheck, objItem);
        return { isEmpty: isEmpty(get(objItem, path)) };
      });
  }
  return { isEmpty: true };
};

const sortedByArrayOrder = (orderArray, obj) =>
  orderArray.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});

export { pathFieldObject, isDeepEmpty, sortedByArrayOrder };

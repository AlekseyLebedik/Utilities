import { get, set } from "lodash";
import { returnedPathForObject } from "./Object";

//ADD FIELD TO EXIST
const addFieldToExistingOnes = (
  findObjectKey,
  checkObjectValue,
  addFieldKey,
  addFieldValue,
  existingDataInstanse = MOCK
) => {
  let returnedData, path;

  switch (existingDataInstanse.__proto__.constructor.name) {
    case "Array":
      returnedData = existingDataInstanse.map((exist) => {
        const checkObject =
          get(exist, returnedPathForObject(findObjectKey, exist, null)) ===
          checkObjectValue;

        if (checkObject) {
          path = returnedPathForObject(addFieldKey, exist, null);

          set(exist, path, addFieldValue);
        }
        return exist;
      });

      return returnedData;
    case "Object":
      path = returnedPathForObject(addFieldKey, existingDataInstanse, null);

      set(existingDataInstanse, path, addFieldValue);

      return existingDataInstanse;
  }
};

export { addFieldToExistingOnes };

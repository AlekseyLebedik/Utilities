import { get, set } from "lodash";
import { returnedPathForObject } from "./Object";

const MOCK = [
  {
    user: { id: 0, name: "Amady", title: "Job" },
    protocol: { status: 200, returned_data: ["hu", "is"] },
  },
  {
    user: { id: 1, name: "Sumrak", title: "Job-1" },
    protocol: { status: 200, returned_data: ["Sumrak here", "is you"] },
  },
  {
    user: { id: 2, name: "Abraham", title: "Job-1" },
    protocol: {
      status: 201,
      returned_data: ["I am Abraham who lived a long time ago?", "Im not him"],
    },
  },
  {
    user: { id: 3, name: "Samanta", title: "Job" },
    protocol: {
      status: 301,
      returned_data: ["I'm the only girl here.", "yeap"],
    },
  },
];

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

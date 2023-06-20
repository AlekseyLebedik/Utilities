import { indexOf, concat } from "lodash";

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
  whichObject,
  lookingForFiledValue,
  addField,
  existingArray = MOCK
) => {
  let returnedData;
  switch (whichObject.__proto__.constructor.name) {
    case "Object":
      const indexArray = indexOf(existingArray, [
        ...Object.keys(whichObject),
        ...Object.values(whichObject),
      ]);

      if (indexArray !== -1) {
        const convertedObject = [
            ...existingArray[indexArray],
            {
              [lookingForFiledValue]: concat(
                existingArray[indexArray][lookingForFiledValue],
                addField
              ),
            },
          ],
          returnedData = [...existingArray, ...convertedObject];
        console.log({ returnedData });
      }
      console.log(existingArray, indexArray, [
        ...Object.keys(whichObject),
        ...Object.values(whichObject),
      ]);
      break;
    case "Array":
      console.log("Array");
      break;
    case "String":
      console.log("String");
      break;
  }
};

export { addFieldToExistingOnes };

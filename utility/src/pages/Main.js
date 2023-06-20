import React from "react";
import utility from "@utility";
import { addFieldToExistingOnes } from "@utility/DataUtility/Array";

const Mock = [
  { id: 0, title: "skkd" },
  { id: 1, title: "lkdiid" },
];

const Main = (props) => {
  const u = addFieldToExistingOnes({ id: 2233 }, "title", { hi: "hi" }, Mock);
  console.log(u);
  return <div>Main page</div>;
};

export default Main;

const MOCK = [
  {
    user: { some: { id: 0 }, name: "Amady", title: "Job" },
    protocol: { status: 200, returned_data: ["hu", "is"] },
  },
  {
    user: { some: { id: 1 }, name: "Sumrak", title: "Job-1" },
    protocol: { status: 200, returned_data: ["Sumrak here", "is you"] },
  },
  {
    user: { some: { id: 2 }, name: "Abraham", title: "Job-1" },
    protocol: {
      status: 201,
      returned_data: ["I am Abraham who lived a long time ago?", "Im not him"],
    },
  },
  {
    user: { some: { id: 3 }, name: "Samanta", title: "Job" },
    protocol: {
      status: 301,
      returned_data: ["I'm the only girl here.", "yeap"],
    },
  },
];

const MOCK_1 = [
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

const MOCK_2 = [
  { id: 0, title: "skkd" },
  { id: 1, title: "lkdiid" },
];

export { MOCK, MOCK_1, MOCK_2 };

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

const DEEP_MOCK = [
  {
    user: {
      some: { deep: { deep_1: { deep_2: { id: 0 } } } },
      name: "Amady",
      title: "Job",
    },
    protocol: { status: 200, returned_data: ["hu", "is"] },
  },
  {
    user: {
      some: { deep: { deep_1: { deep_2: { id: 0 } } } },
      name: "Sumrak",
      title: "Job-1",
    },
    protocol: { status: 200, returned_data: ["Sumrak here", "is you"] },
  },
  {
    user: {
      some: { deep: { deep_1: { deep_2: { id: 0 } } } },
      name: "Abraham",
      title: "Job-1",
    },
    protocol: {
      status: 201,
      returned_data: ["I am Abraham who lived a long time ago?", "Im not him"],
    },
  },
  {
    user: {
      some: { deep: { deep_1: { deep_2: { id: 0 } } } },
      name: "Samanta",
      title: "Job",
    },
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

const SORTED_MOCK = {
  event: [
    {
      id: 1,
      name: "Event",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 1.3,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 2,
      name: "Long service name for testing",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 2.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 3,
      name: "Legs",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 3.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 4,
      name: "Goods",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 3.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 5,
      name: "Change nos",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.2,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 6,
      name: "Change rot",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.4,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 7,
      name: "To Special",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
  ],
  commercial: [
    {
      id: 1,
      name: "Commercial",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 1.3,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 2,
      name: "Long service name for testing",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 2.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 3,
      name: "Legs",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 3.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 4,
      name: "Goods",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 3.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 5,
      name: "Change nos",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.2,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 6,
      name: "Change rot",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.4,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 7,
      name: "To Special",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
  ],
  beauty: [
    {
      id: 1,
      name: "Mc.Gregor",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 1.3,
      info: "This setting will do a lot of good staff and improve quality",
      rating: 4.3,
    },
    {
      id: 2,
      name: "SalivanXX",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 2.5,
      info: "This setting will do a lot of good staff and improve quality",
      rating: 3.5,
    },
    {
      id: 3,
      name: "slizarunn",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 3.5,
      info: "This setting will do a lot of good staff and improve quality",
      rating: 4.4,
    },
    {
      id: 4,
      name: "Goods",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 3.5,
      info: "This setting will do a lot of good staff and improve quality",
      rating: 2.5,
    },
    {
      id: 5,
      name: "Change nos",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.2,
      info: "This setting will do a lot of good staff and improve quality",
      rating: 3.8,
    },
    {
      id: 6,
      name: "Change rot",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.4,
      info: "This setting will do a lot of good staff and improve quality",
      rating: 5,
    },
    {
      id: 7,
      name: "To Special",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
      info: "This setting will do a lot of good staff and improve quality",
      rating: 4.9,
    },
  ],
  professional: [
    {
      id: 1,
      name: "Professional",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 1.3,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 2,
      name: "Long service name for testing",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 2.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 3,
      name: "Legs",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 3.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 4,
      name: "Goods",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 3.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 5,
      name: "Change nos",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.2,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 6,
      name: "Change rot",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.4,
      info: "This setting will do a lot of good staff and improve quality",
    },
    {
      id: 7,
      name: "To Special",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
      info: "This setting will do a lot of good staff and improve quality",
    },
  ],
  simple: [
    {
      id: 1,
      name: "To face",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
      part: "face",
    },
    {
      id: 2,
      name: "Nails",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
    },
    {
      id: 3,
      name: "Legs",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
    },
    {
      id: 4,
      name: "Goods",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
    },
    {
      id: 5,
      name: "Change nos",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
    },
    {
      id: 6,
      name: "Change rot",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
    },
    {
      id: 7,
      name: "To Special",
      image: "/src/assets/img/services-mini-icon.svg",
      miniImage: "/src/assets/img/services-mini-icon.svg",
      price: 0.5,
      part: "special",
    },
  ],
};

export { MOCK, MOCK_1, MOCK_2, DEEP_MOCK, SORTED_MOCK };

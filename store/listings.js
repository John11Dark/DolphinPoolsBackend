const userImageMapper = require("../src/mappers/userImagesMapper");

let listings = [
  {
    id: 1,
    title: "First Pool",
    description: "Lorem ipsum is a demo latin text that fill up the space",
    email: "client@mail.com",
    countryCode: "+356",
    clientPhoneNumber: "79992300",
    clientFirstName: "John",
    clientLastName: "Muller",
    clientAddressStreetOne: "Triq, 49",
    clientAddressStreetTwo: "haddingle Street",
    clientAddressLocality: "ir-rabat",
    questionTypePicker_ID: 1,
    poolType_ID: 01,
    poolLocation_ID: 003,
    poolLength: 25.2,
    poolWidth: 25.25,
    poolDepthStart: 25.254,
    poolDepthEnd: 25.254,
    poolPerimeter: 25.25,
    copingPerimeter: 1.3,
    balanceTankLength: 10.5,
    balanceTankWidth: 10.5,
    balanceTankDepth: 10.5,
    balanceTankPipe: 10.5,
    poolVolume: 100,
    numberOfWallInlets: 1,
    numberOfSumps: 1,
    numberOfSkimmers: 1,
    numberOfLights: 1,
    spaJets: 1,
    counterCurrent: 1,
    vacuumPoints: 1,
    projectType: "Commercial",
    poolType: "Skimmer",
    poolLocation: "Above Ground",
    poolAreaLocation: "Outdoor",
    poolSteps : true,
    mosaicOrTileBorder: true,
    poolLeaking: true,
    finalPrice: 5400.0,

    initialDate: "2022-6-12",
    status: false,
    location: {
      latitude: 35.878173828125,
      longitude: 14.396160663677879,
    },
    user: {
      id: 1,
      name: "John Muller",
      role: "Administrator",
      image: userImageMapper([{ fileName: "JohnMuller" }]),
    },
    images: [{ fileName: "PoolThree" }],
  },
  {
    title: "This is the second pool",
    email: "john@mail.com",
    countryCode: "+356",
    clientFirstName: "First Name",
    clientLastName: "Last Name",
    clientAddressStreetOne: "Triq Ħad-Dingli",
    clientAddressStreetTwo: "49",
    clientAddressLocality: "Rabat",
    clientPhoneNumber: "79992300",
    questionTypePicker_ID: 1,
    poolType_ID: 1,
    poolLocation_ID: 4,
    poolLength: 25,
    poolWidth: 25,
    poolDepthStart: 25,
    poolDepthEnd: 0,
    poolPerimeter: 25,
    copingPerimeter: 25,
    balanceTankLength: 25,
    description:
      "This is some text to explain about the pool and re marks or question to be considered",
    initialDate: "20220610",
    status: "false",
    images: [
      { fileName: "PoolTwo" },
      { fileName: "PoolThree" },
      { fileName: "PoolOne" },
    ],
    location: {
      latitude: 35.878173828125,
      longitude: 14.396160663677879,
    },
    id: 2,
    user: {
      id: 1,
      name: "John Muller",
      role: "Administrator",
      image: userImageMapper([{ fileName: "JohnMuller" }]),
    },
  },
  {
    title: "Il-mellieha Over flow pool",
    email: "john@mail.com",
    countryCode: "+356",
    clientFirstName: "First Name",
    clientLastName: "Last Name",
    clientAddressStreetOne: "Triq Ħad-Dingli",
    clientAddressStreetTwo: "49",
    clientAddressLocality: "Rabat",
    clientPhoneNumber: "79992300",

    questionTypePicker_ID: 1,
    poolType_ID: 1,
    poolLocation_ID: 4,
    poolLength: 25,
    poolWidth: 25,
    poolDepth: 25,
    poolPerimeter: 25,
    copingPerimeter: 25,
    balanceLength: 25,
    description:
      "This is some text to explain about the pool and re marks or question to be considered",
    initialDate: "20220611",
    status: "false",
    images: [
      { fileName: "PoolOne" },
      { fileName: "PoolThree" },
      { fileName: "PoolTwo" },
    ],
    location: {
      latitude: 35.878173828125,
      longitude: 14.396160663677879,
    },
    id: 3,
    user: {
      id: 1,
      name: "John Muller",
      role: "Administrator",
      image: userImageMapper([{ fileName: "JohnMuller" }]),
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const updateList = (id, values) => {
  let newList = getListing(id);
  listings = listings.filter((list) => list.id !== id);
  console.log(values["status"]);
  newList.status = values["status"];

  listings.push(newList);
  listings.sort((elementA, elementB) => elementA.id - elementB.id);
};
const filterListings = (predicate) => listings.filter(predicate);

const deleteList = (id) =>
  (listings = listings.filter((list) => list.id !== id));

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
  updateList,
  deleteList,
};

const userImageMapper = require("../mappers/userImagesMapper");

// variables
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
    poolSteps: true,
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
      image: "http://192.168.1.181:9000/assets/JohnMuller_full.jpg",
    },
    images: [
      { fileName: "PoolOne" },
      { fileName: "PoolTwo" },
      { fileName: "PoolThree" },
      { fileName: "PoolFour" },
      { fileName: "PoolFive" },
      { fileName: "PoolSix" },
    ],
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
      id: 8,
      name: "Dolphin Pools",
      role: "Administrator",
      image: "http://192.168.1.181:9000/assets/JohnMuller_full.jpg",
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
      image: "http://192.168.1.181:9000/assets/JohnMuller_full.jpg",
    },
  },
  {
    title: "This is the second pool",
    email: "john@mail.com",
    countryCode: "+356",
    clientPhoneNumber: "79230096",
    clientFirstName: "John",
    clientLastName: "Muller",
    description: "some text",
    initialDate: "2022/7/13",
    id: 4,
    images: [
      { fileName: "fourthPool" },
      { fileName: "fourthPool" },
      { fileName: "fourthPool" },
    ],
    status: "false",
    numberOfWallInlets: "1",
    numberOfSkimmers: "1",
    numberOfSumps: "1",
    numberOfLights: "1",
    spaJets: "1",
    counterCurrent: "1",
    vacuumPoints: "1",
    questionTypePicker_ID: "2",
    poolType_ID: "1",
    poolLocation_ID: "1",
    poolLength: "575.4",
    poolWidth: "1.5",
    poolDepthEnd: "45.",
    poolDepthStart: "24.55",
    poolPerimeter: ".54",
    copingPerimeter: "424",
    balanceLength: "4584",
    poolVolume: "14796.346375000001",
    balanceTankWidth: "44",
    balanceTankDepth: "444",
    balanceTankPipe: "444",
    clientAddressStreetOne: "Triq, 68",
    clientAddressStreetTwo: "Had-Dingle Street",
    clientAddressLocality: "ir-Rabat",
    location: { latitude: 35.878197105462895, longitude: 14.396166796041845 },
    user: {
      name: "John Muller",
      id: 1,
      role: "Administrator",
      image: "http://192.168.1.181:9000/assets/JohnMuller_full.jpg",
    },
  },
];

let archivedListings = [
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
    id: 4,
    user: {
      id: 1,
      name: "John Muller",
      role: "Administrator",
      image: "http://192.168.1.181:9000/assets/JohnMuller_full.jpg",
    },
    isInArchive: true,
  },
];

let deletedLists = [
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
    id: 5,
    user: {
      id: 1,
      name: "John Muller",
      role: "Administrator",
      image: "http://192.168.1.181:9000/assets/JohnMuller_full.jpg",
    },
    isInArchive: false,
    isInRecycleBin: true,
    addedData: Date.now().toLocaleString(),
  },
];

// functions
const addArchivedListing = (listing) => {
  listing.isInArchive = true;
  archivedListings.push(listing);
  listings = listings.filter((listId) => listId.id !== listing.id);
  archivedListings.sort((elementA, elementB) => elementA.id - elementB.id);
};

const addListing = (listing) => {
  if (listing.id == undefined) listing.id = listings.length + 1;
  listings.push(listing);
  listings.sort((elementA, elementB) => elementA.id - elementB.id);
};

const deleteList = (id, userListings = false) => {
  if (!userListings) {
    const list = getListing(id);
    (list.isInRecycleBin = true),
      (list.addedData = Date.now().toLocaleString());
    deletedLists.push(list);
    listings = listings.filter((list) => list.id !== id);
  } else {
    const userListings = listings.filter((list) => list.user.id === id);
    userListings.forEach((list) => {
      (list.isInRecycleBin = true),
        (list.addedData = Date.now().toLocaleString());
      deletedLists.push(list);
    });
    listings = listings.filter((list) => list.user.id !== id);
  }
  listings.sort((elementA, elementB) => elementA.id - elementB.id);
  deletedLists.sort((elementA, elementB) => elementA.id - elementB.id);
};

const filterListings = (predicate) => listings.filter(predicate);

const getArchivedListings = () => archivedListings;

const getDeletedListings = () => deletedLists;
const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const restoreListing = (id) => {
  const list = deletedLists.filter((list) => list.id === id);
  list[0].isInRecycleBin = false;
  deletedLists = deletedLists.filter((item) => item.id !== id);
  listings.push(list[0]);
  return list[0];
};
const updateList = (id, values) => {
  let newList = getListing(id);
  listings = listings.filter((list) => list.id !== id);
  newList.status = values["status"];
  addListing(newList);
};

const unarchive = (id) => {
  const list = archivedListings.filter((list) => list.id === id);
  if (list[0] == null || list.length == 0) return null;
  archivedListings = archivedListings.filter((list) => list.id !== id);
  list[0].isInArchive = false;
  addListing(list[0]);
  return list[0];
};

module.exports = {
  addListing,
  addArchivedListing,
  deleteList,
  filterListings,
  getArchivedListings,
  getDeletedListings,
  getListings,
  getListing,
  restoreListing,
  updateList,
  unarchive,
};

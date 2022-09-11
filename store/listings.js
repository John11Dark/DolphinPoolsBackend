// variables
const config = require("config");

let listings = [
  {
    user: {
      name: "Dolphin Pools App",
      id: 6,
      role: "Administrator",
      image: `${config.get("assetsBaseUrl")}DolphinPoolApp_full.jpg`,
    },
    site: "Il-mellieha Over flow pool",
    email: "email@gm.com",
    countryCode: "+356",
    clientPhoneNumber: "79230096",
    clientFirstName: "John",
    clientLastName: "Muller",
    address: {
      streetLineOne: "StreetOne",
      streetLineTwo: undefined,
      locality: 3,
      location: {
        latitude: 35.89099722016769,
        longitude: 14.461754106055244,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
    },
    initialDate: "Wed Jul 20 2022",
    status: false,
    tileType: {
      label: "Mosaic",
      value: 1,
      icon: "overscan",
      backgroundColor: "#ea552b",
    },
    projectType: {
      label: "Pool",
      value: 0,
      icon: "pool",
      backgroundColor: "#BEB3AD",
    },

    poolLocation: {
      label: "in-Ground",
      value: 0,
      icon: "floor-plan",
      backgroundColor: "#55bbda",
    },
    indoor: false,
    poolSteps: false,
    quotationType: false,
    newPool: false,
    poolType: false,
    poolLength: "12",
    poolWidth: "12",
    poolDepthEnd: "12",
    poolDepthStart: "12",
    poolVolume: "1,728",
    balanceLength: "8",
    balanceTankWidth: "4",
    balanceTankDepth: "1.3",
    balanceTankVolume: "8.47",
    numberOfWallInlets: undefined,
    numberOfSkimmers: undefined,
    numberOfSumps: undefined,
    numberOfLights: undefined,
    spaJets: undefined,
    counterCurrent: undefined,
    vacuumPoints: undefined,
    poolLeaking: false,
    description:
      "N’Hampshah heatah door-yahd rig up gummah got in a gaum, yahd way up north The County railed ’em, mistah man bub jeezly clammin’ puckahbrush bogan yut wickid decent justa smidgin, puckahbrush whawf fish chowdah stove up windah bendah well theyah wicked cunnin’ Ahcadiuh podunk.",
    poolPerimeter: undefined,
    copingPerimeter: undefined,
    images: [
      { fileName: "PoolOne" },
      { fileName: "PoolTwo" },
      { fileName: "PoolThree" },
      { fileName: "PoolFour" },
      { fileName: "PoolFive" },
      { fileName: "PoolSix" },
    ],
    id: 0,
  },
  {
    user: {
      name: "John Muller",
      id: 1,
      role: "Administrator",
      image: `${config.get("assetsBaseUrl")}JohnMuller_full.jpg`,
    },
    site: "King Fish Pool",
    clientFirstName: "John",
    clientLastName: "Muller",
    countryCode: "+356",
    clientPhoneNumber: "79230096",
    email: "email@gm.com",
    initialDate: "Mon Jul 25 2022",
    address: {
      streetLineOne: "StreetOne",
      streetLineTwo: undefined,
      locality: 12,
      location: {
        latitude: 35.89099722016769,
        longitude: 14.461754106055244,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      },
    },
    status: false,
    newPool: true,
    quotationType: false,
    indoor: false,
    poolSteps: false,
    poolType: true,
    tileType: {
      label: "Mosaic",
      value: 1,
      icon: "overscan",
      backgroundColor: "#ea552b",
    },
    projectType: {
      label: "Pool",
      value: 0,
      icon: "pool",
      backgroundColor: "#BEB3AD",
    },

    poolLocation: {
      label: "in-Ground",
      value: 0,
      icon: "floor-plan",
      backgroundColor: "#55bbda",
    },
    poolPerimeter: "undefined",
    copingPerimeter: "undefined",
    poolLength: "8",
    poolWidth: "4",
    poolDepthEnd: undefined,
    poolDepthStart: "1.3",
    poolVolume: "41.6",
    poolLeaking: false,
    balanceLength: undefined,
    balanceTankWidth: undefined,
    balanceTankDepth: undefined,
    balanceTankVolume: undefined,
    numberOfWallInlets: undefined,
    numberOfSkimmers: undefined,
    numberOfSumps: undefined,
    numberOfLights: undefined,
    spaJets: undefined,
    counterCurrent: undefined,
    vacuumPoints: undefined,
    description:
      "N’Hampshah heatah door-yahd rig up gummah got in a gaum, yahd way up north The County railed ’em, mistah man bub jeezly clammin’ puckahbrush bogan yut wickid decent justa smidgin, puckahbrush whawf fish chowdah stove up windah bendah well theyah wicked cunnin’ Ahcadiuh podunk.",
    finalPrice: 6500,
    options: [
      { value: 5, label: "New Liner", price: 0, quantity: 1 },
      { value: 4, label: "Plastering", price: 0, quantity: 2 },
      { value: 7, label: "New Glass Mosaic", price: 0, quantity: 1 },
    ],
    images: [
      { fileName: "PoolOne" },
      { fileName: "PoolTwo" },
      { fileName: "PoolThree" },
      { fileName: "PoolFour" },
      { fileName: "PoolFive" },
      { fileName: "PoolSix" },
    ],
    id: 1,
  },
  {
    user: {
      name: "John Muller",
      id: 1,
      role: "Administrator",
      image: `${config.get("assetsBaseUrl")}JohnMuller_full.jpg`,
    },
    site: "WhiteJacks Pool",
    email: "email@gm.com",
    countryCode: "+356",
    clientPhoneNumber: "79230096",
    clientFirstName: "John",
    clientLastName: "Muller",
    address: {
      streetLineOne: "StreetOne",
      streetLineTwo: undefined,
      locality: 7,
      location: {
        latitude: 35.89099722016769,
        longitude: 14.461754106055244,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      },
    },
    initialDate: "Mon Jul 25 2022",
    status: false,
    tileType: {
      label: "Mosaic",
      value: 1,
      icon: "overscan",
      backgroundColor: "#ea552b",
    },
    projectType: {
      label: "Pool",
      value: 0,
      icon: "pool",
      backgroundColor: "#BEB3AD",
    },

    poolLocation: {
      label: "in-Ground",
      value: 0,
      icon: "floor-plan",
      backgroundColor: "#55bbda",
    },
    indoor: undefined,
    poolSteps: false,
    quotationType: false,
    newPool: false,
    poolType: false,
    poolLength: "8",
    poolWidth: "4",
    poolDepthEnd: undefined,
    poolDepthStart: "1.3",
    poolVolume: "41.6",
    balanceLength: "undefined",
    balanceTankWidth: undefined,
    balanceTankDepth: undefined,
    balanceTankVolume: undefined,
    numberOfWallInlets: undefined,
    numberOfSkimmers: undefined,
    numberOfSumps: undefined,
    numberOfLights: undefined,
    spaJets: undefined,
    counterCurrent: undefined,
    vacuumPoints: undefined,
    description:
      "N’Hampshah heatah door-yahd rig up gummah got in a gaum, yahd way up north The County railed ’em, mistah man bub jeezly clammin’ puckahbrush bogan yut wickid decent justa smidgin, puckahbrush whawf fish chowdah stove up windah bendah well theyah wicked cunnin’ Ahcadiuh podunk.",
    poolPerimeter: "undefined",
    copingPerimeter: "undefined",
    options: [
      { value: 5, label: "New Liner", price: 0, quantity: 1 },
      { value: 4, label: "Plastering", price: 0, quantity: 2 },
      { value: 7, label: "New Glass Mosaic", price: 0, quantity: 1 },
    ],
    finalPrice: 5000,
    images: [
      { fileName: "PoolSix" },
      { fileName: "PoolOne" },
      { fileName: "PoolTwo" },
      { fileName: "PoolThree" },
      { fileName: "PoolFour" },
      { fileName: "PoolFive" },
    ],
    id: 2,
  },
];

let archivedListings = [
  {
    user: {
      name: "John Muller",
      id: 1,
      role: "Administrator",
      image: `${config.get("assetsBaseUrl")}JohnMuller_full.jpg`,
    },
    site: "WhiteJacks Pool",
    email: "email@gm.com",
    countryCode: "+356",
    clientPhoneNumber: "79230096",
    clientFirstName: "John",
    clientLastName: "Muller",
    address: {
      streetLineOne: "StreetOne",
      streetLineTwo: undefined,
      locality: 4,
      location: {
        latitude: 35.89099722016769,
        longitude: 14.461754106055244,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      },
    },
    initialDate: "Mon Jul 25 2022",
    status: false,
    tileType: {
      label: "Mosaic",
      value: 1,
      icon: "overscan",
      backgroundColor: "#ea552b",
    },
    projectType: {
      label: "Pool",
      value: 0,
      icon: "pool",
      backgroundColor: "#BEB3AD",
    },

    poolLocation: {
      label: "in-Ground",
      value: 0,
      icon: "floor-plan",
      backgroundColor: "#55bbda",
    },
    indoor: undefined,
    poolSteps: false,
    quotationType: false,
    newPool: false,
    poolType: false,
    poolLength: "8",
    poolWidth: "4",
    poolDepthEnd: undefined,
    poolDepthStart: "1.3",
    poolVolume: "41.6",
    balanceLength: "undefined",
    balanceTankWidth: undefined,
    balanceTankDepth: undefined,
    balanceTankVolume: undefined,
    numberOfWallInlets: undefined,
    numberOfSkimmers: undefined,
    numberOfSumps: undefined,
    numberOfLights: undefined,
    spaJets: undefined,
    counterCurrent: undefined,
    vacuumPoints: undefined,
    description:
      "N’Hampshah heatah door-yahd rig up gummah got in a gaum, yahd way up north The County railed ’em, mistah man bub jeezly clammin’ puckahbrush bogan yut wickid decent justa smidgin, puckahbrush whawf fish chowdah stove up windah bendah well theyah wicked cunnin’ Ahcadiuh podunk.",
    poolPerimeter: "undefined",
    copingPerimeter: "undefined",
    options: [
      { value: 5, label: "New Liner", price: 0, quantity: 1 },
      { value: 4, label: "Plastering", price: 0, quantity: 2 },
      { value: 7, label: "New Glass Mosaic", price: 0, quantity: 1 },
    ],
    finalPrice: 5000,
    images: [
      { fileName: "PoolSix" },
      { fileName: "PoolOne" },
      { fileName: "PoolTwo" },
      { fileName: "PoolThree" },
      { fileName: "PoolFour" },
      { fileName: "PoolFive" },
    ],
    id: 20235,
    isInArchive: true,
  },
];

let deletedLists = [
  {
    user: {
      name: "John Muller",
      id: 1,
      role: "Administrator",
      image: `${config.get("assetsBaseUrl")}JohnMuller_full.jpg`,
    },
    site: "WhiteJacks Pool",
    email: "email@gm.com",
    countryCode: "+356",
    clientPhoneNumber: "79230096",
    clientFirstName: "John",
    clientLastName: "Muller",
    address: {
      streetLineOne: "StreetOne",
      streetLineTwo: undefined,
      locality: 4,
      location: {
        latitude: 35.89099722016769,
        longitude: 14.461754106055244,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      },
    },
    initialDate: "Mon Jul 25 2022",
    status: false,
    tileType: {
      label: "Mosaic",
      value: 1,
      icon: "overscan",
      backgroundColor: "#ea552b",
    },
    projectType: {
      label: "Pool",
      value: 0,
      icon: "pool",
      backgroundColor: "#BEB3AD",
    },

    poolLocation: {
      label: "in-Ground",
      value: 0,
      icon: "floor-plan",
      backgroundColor: "#55bbda",
    },
    indoor: undefined,
    poolSteps: false,
    quotationType: false,
    newPool: false,
    poolType: false,
    poolLength: "8",
    poolWidth: "4",
    poolDepthEnd: undefined,
    poolDepthStart: "1.3",
    poolVolume: "41.6",
    balanceLength: "undefined",
    balanceTankWidth: undefined,
    balanceTankDepth: undefined,
    balanceTankVolume: undefined,
    numberOfWallInlets: undefined,
    numberOfSkimmers: undefined,
    numberOfSumps: undefined,
    numberOfLights: undefined,
    spaJets: undefined,
    counterCurrent: undefined,
    vacuumPoints: undefined,
    description:
      "N’Hampshah heatah door-yahd rig up gummah got in a gaum, yahd way up north The County railed ’em, mistah man bub jeezly clammin’ puckahbrush bogan yut wickid decent justa smidgin, puckahbrush whawf fish chowdah stove up windah bendah well theyah wicked cunnin’ Ahcadiuh podunk.",
    poolPerimeter: "undefined",
    copingPerimeter: "undefined",
    options: [
      { value: 5, label: "New Liner", price: 0, quantity: 1 },
      { value: 4, label: "Plastering", price: 0, quantity: 2 },
      { value: 7, label: "New Glass Mosaic", price: 0, quantity: 1 },
    ],
    finalPrice: 5000,
    images: [
      { fileName: "PoolSix" },
      { fileName: "PoolOne" },
      { fileName: "PoolTwo" },
      { fileName: "PoolThree" },
      { fileName: "PoolFour" },
      { fileName: "PoolFive" },
    ],
    id: 204545654645,
    isInRecycleBin: true,
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
  console.log(listing);
};

const deleteList = (id, userListings = false) => {
  if (!userListings) {
    const list = getListing(id);
    list.isInRecycleBin = true;
    list.addedData = Date.now().toLocaleString();
    deletedLists.push(list);
    listings = listings.filter((list) => list.id !== id);
  } else {
    const userListings = listings.filter((list) => list.user.id === id);
    userListings.forEach((list) => {
      list.isInRecycleBin = true;
      list.addedData = Date.now().toLocaleString();
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
  console.log(values, id);
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

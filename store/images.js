const userImageMapper = require("../mappers/userImagesMapper");

let images = [
  // {
  //   id: 1,
  //   fileName: "PoolOne",
  // },
  // {
  //   id: 2,
  //   fileName: "PoolTwo",
  // },
  // {
  //   id: 3,
  //   fileName: "PoolThree",
  // },
  // {
  //   id: 4,
  //   fileName: "PoolFour",
  // },
  // {
  //   id: 5,
  //   fileName: "PoolFive",
  // },
  // {
  //   id: 6,
  //   fileName: "PoolSix",
  // },
];

let folders = [
  //
];

const addImage = (folderIndex, image) => {
  const itemId = folders[folderIndex].items.length;
  folders[folderIndex].items.push({
    id: itemId,
    uri: image.uri,
    label: image?.label ? image.label : "",
  });
};

const createNewFolder = (label, iconName, items) => {
  folders.push({
    id: folders.length + 1,
    iconName,
    label,
    items,
  });
};

const getImages = async () => {
  const result = await userImageMapper(images);
  return result;
};

const deleteImage = (id) => {
  images = images.filter((image) => image.id != id);
};

const deleteFolder = (folderId) => {
  folders = folders.filter((folder) => folder.id != folderId);
};

module.exports = {
  addImage,
  deleteImage,
  getImages,
  createNewFolder,
  deleteFolder,
};

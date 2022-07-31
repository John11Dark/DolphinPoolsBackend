const userImageMapper = require("../mappers/userImagesMapper");

let images = [
  {
    id: 1,
    fileName: "PoolOne",
  },
  {
    id: 2,
    fileName: "PoolTwo",
  },
  {
    id: 3,
    fileName: "PoolThree",
  },
  {
    id: 4,
    fileName: "PoolFour",
  },
  {
    id: 5,
    fileName: "PoolFive",
  },
  {
    id: 6,
    fileName: "PoolSix",
  },
];
const addImage = (image) => {
  images.push(image);
};

const getImages = async () => {
  const result = await userImageMapper(images);
  return result;
};

const deleteImage = (id) => {
  images = images.filter((image) => image.id != id);
};

module.exports = {
  addImage,
  deleteImage,
  getImages,
};

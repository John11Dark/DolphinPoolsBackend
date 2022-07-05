const config = require("config");

const mapper = (userImages) => {
  const baseUrl = config.get("assetsBaseUrl");
  const mapImage = (image) => ({
    url: `${baseUrl}${image.fileName}_full.jpg`,
    thumbnailUrl: `${baseUrl}${image.fileName}_thumb.jpg`,
  });

  return {
    images: userImages.map(mapImage),
  };
};

module.exports = mapper;

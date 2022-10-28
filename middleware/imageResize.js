const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = async (req, res, next) => {
  const outputFolder = "public/assets";
  const images = [];
  const name = req.body.flag === "user" ? req.body?.name : req.body?.site;

  const resizePromises = req.files.map(async (file, index) => {
    const fileName = `${name.split(" ").join("")}_${index}`;
    await sharp(file.path)
      .resize(2000)
      .jpeg({ quality: 50 })
      .toFile(path.resolve(outputFolder, `${fileName}_full.jpg`));

    await sharp(file.path)
      .resize(100)
      .jpeg({ quality: 30 })
      .toFile(path.resolve(outputFolder, `${fileName}_thumb.jpg`));

    fs.unlinkSync(file.path);

    images.push(fileName);
  });
  await Promise.all([...resizePromises]);

  if (req.body.flag === "user") {
    req.image = images;
  } else {
    req.images = images;
  }
  next();
};

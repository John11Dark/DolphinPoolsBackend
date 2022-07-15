const config = require("config");
const comments = [];

const initialComment = {
  comment: "There is no comments to show yet!",
  id: 0,
  dateTime: new Date().toDateString(),
  user: {
    name: "Dolphin Pools App",
    id: 0,
    image: [
      {
        thumbnailUrl: `${config.get("assetsBaseUrl")}DolphinPoolsApp_full.jpg`,
        url: `${config.get("assetsBaseUrl")}DolphinPoolsApp_thumb.jpg`,
      },
    ],
  },
};

const getComments = (listingId) => {
  let listComments = comments.filter(
    (listingComments) => listingComments.listingId === listingId
  );
  if (
    listComments === undefined ||
    listComments === null ||
    listComments.length === 0
  )
    listComments.push(initialComment);

  return listComments;
};

const postComments = (comment) => {
  comment.id = comments.length + 1;
  comments.push(comment);
};

module.exports = {
  getComments,
  postComments,
};

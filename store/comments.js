const comments = [
  {
    comment: "There is no comments to show yet!",
    id: 0,
    listingId: 1,
    dateTime: new Date().toDateString(),
    user: {
      name: "John Muller",
      id: 0,
      image: [
        {
          thumbnailUrl:
            "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
          url: "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
        },
      ],
    },
  },
  {
    comment: "There is no comments to show yet!",
    id: 1,
    listingId: 1,
    dateTime: new Date().toDateString(),
    user: {
      name: "John Muller",
      id: 0,
      image: [
        {
          thumbnailUrl:
            "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
          url: "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
        },
      ],
    },
  },
  {
    comment: "There is no comments to show yet!",
    id: 2,
    listingId: 1,
    dateTime: new Date().toDateString(),
    user: {
      name: "Sara Mathew",
      id: 0,
      image: [
        {
          thumbnailUrl:
            "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
          url: "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
        },
      ],
    },
  },
  {
    comment: "There is no comments to show yet!",
    id: 0,
    listingId: 3,
    dateTime: new Date().toDateString(),
    user: {
      name: "Dolphin Pools App",
      id: 0,
      image: [
        {
          thumbnailUrl:
            "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
          url: "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
        },
      ],
    },
  },
];

const initialComment = {
  comment: "There is no comments to show yet!",
  id: 0,
  dateTime: new Date().toDateString(),
  user: {
    name: "Dolphin Pools App",
    id: 0,
    image: [
      {
        thumbnailUrl:
          "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
        url: "https://dolphinpoolsltdbackend.herokuapp.com/assets/DolphinpoolsApp_thumb.png",
      },
    ],
  },
};

const getComments = (listingId) => {
  let listComments = comments.filter(
    (listingComments) => listingComments.listingId === listingId
  );
  if (listComments === undefined || listComments === null) {
    listComments = [initialComment];
  }
  console.log(listComments);
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

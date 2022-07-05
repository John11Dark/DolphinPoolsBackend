let messages = [
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "Is this still available?",
    id: 1,
    dateTime: 1586044521956,
  },
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "I'm interested in this item. Do you provide free delivery?",
    id: 2,
    dateTime: 1586044521956,
  },
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "Please give me a call and we'll arrange this for you.",
    id: 3,
    dateTime: 1586044521956,
  },
  {
    fromUserId: 1,
    toUserId: 3,
    listingId: 1,
    content: "Please give me a call and we'll arrange this for you.",
    id: 4,
    dateTime: 1586044521956,
  },
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "Please give me a call and we'll arrange this for you.",
    id: 5,
    dateTime: 1586044521956,
  },
  {
    fromUserId: 2,
    toUserId: 1,
    listingId: 1,
    content: "Please give me a call and we'll arrange this for you.",
    id: 6,
    dateTime: 1586044521956,
  },
];

const deletedMessages = [];

const getMessagesForUser = (toUserId) =>
  messages.filter((message) => message.toUserId === toUserId);

const add = (message) => {
  message.id = messages.length + 1;
  message.dateTime = Date.now();
  messages.push(message);
};

const deleteMessage = (id) => {
  deletedMessages.push(messages.filter((message) => message.id === id));
  messages = messages.filter((message) => message.id !== id);
};
module.exports = { add, getMessagesForUser, deleteMessage };

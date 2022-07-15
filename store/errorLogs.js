const errorLogs = [];

const getErrors = () => errorLogs;

const postErrors = (error) => {
  error.id = errorLogs.length + 1;
  errorLogs.push(error);
};

module.exports = {
  getErrors,
  postErrors,
};

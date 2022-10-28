const config = require("config");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const mongoose = require("mongoose");
// const io = require("socket.io")(port);

const port = process.env.PORT || config.get("port");
const dataBaseUrl = config.get("dataBaseUrl");
const localIP = process.env.localIpAddress || config.get("localIpAddress");
const app = express();
const dataBase = mongoose.connection;

const categories = require("./routes/categories");
const listings = require("./routes/listings");
const listing = require("./routes/listing");
const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const comments = require("./routes/comments");
const errorLogs = require("./routes/errorLogs");
const messages = require("./routes/messages");
const images = require("./routes/images");
const expoPushTokens = require("./routes/expoPushTokens");

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/categories", categories);
app.use("/api/listing", listing);
app.use("/api/listings", listings);
app.use("/api/comments", comments);
app.use("/api/errors", errorLogs);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/expoPushTokens", expoPushTokens);
app.use("/api/messages", messages);
app.use("/api/images", images);

try {
  mongoose.connect(dataBaseUrl, {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: true,
  });
  dataBase.on("open", () => console.log("connected to database"));
  dataBase.on("error", (error) => console.error("db error", error));
} catch (error) {
  console.error(error);
}

app.listen(port, () => {
  console.log(`Server has started on  ${localIP}:${port}...`);
});

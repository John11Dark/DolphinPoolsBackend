const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
//const io = require("socket.io")(port);

const categories = require("./routes/categories");
const listings = require("./routes/listings");
const listing = require("./routes/listing");
const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const my = require("./routes/my");
const comments = require("./routes/comments");
const errorLogs = require("./routes/errorLogs");
const messages = require("./routes/messages");
const images = require("./routes/images");
const expoPushTokens = require("./routes/expoPushTokens");

const mongoose = require("mongoose");
const dataBase = mongoose.connection;
const app = express();

const port = process.env.PORT || config.get("port");
const dataBaseUrl = process.env.dataBaseUrl || config.get("dataBaseUrl");
const localIP = process.env.localIpAddress || config.get("localIpAddress");

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());
//app.use(express.urlencoded({ extended: true }));

app.use("/api/categories", categories);
app.use("/api/listing", listing);
app.use("/api/listings", listings);
app.use("/api/comments", comments);
app.use("/api/errors", errorLogs);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/expoPushTokens", expoPushTokens);
app.use("/api/messages", messages);
app.use("/api/images", images);

// io.on("connection", socket =>{
//   const id = socket.handshake.query.id
//   socket.join(id)
// })

mongoose.connect(dataBaseUrl + "DolphinPoolsLtdApp", {
  useNewUrlParser: true,
});

dataBase.on("error", (error) => console.error("db error", error));
dataBase.on("open", () => console.log("connected to database"));

app.listen(port, function () {
  console.log(`Server has started on  ${localIP}:${port}...`);
});

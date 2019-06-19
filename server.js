const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const passport = require("passport");
// const flash = require("connect-flash");
// const session = require("express-session");
const PORT = process.env.PORT || 3001;
let db = require("./models");

const users = require("./routes/api/users");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());

//cors
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200,
    credentials: true
  })
)

//socket io
io.on('connection', (socket) => {
  socket.on('connect', (message) => {
    console.log("This is the server message" + message);
    socket.emit('server-message', "welcome");
  });
  socket.on('new-message', (message) => {
    console.log(message);
    // write message to db
    io.emit('new-message', message);
  })
});


// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
db.sequelize.sync().then(function() {
  console.log("started!!!");

  http.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
});

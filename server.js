const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
let db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBook");

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
db.sequelize.sync().then(function() {
  console.log("started!!!");

  app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
});

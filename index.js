const express = require("express");

const passport = require("passport");
const cookieSession = require("cookie-session");

require("./models/User");
require("./services/passport");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.connect(keys.mongooseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>React With Nodejs</h1>");
});

app.listen(PORT);


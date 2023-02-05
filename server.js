const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

hbs.handlebars.registerHelper('greaterThanZeroFish', function (number) {
  if (number > 0) return new hbs.handlebars.SafeString("<p> Note: You need to catch " + number + " fish before this fish will spawn.</p>");
});

hbs.handlebars.registerHelper('greaterThanZeroBug', function (number) {
  if (number > 0) return new hbs.handlebars.SafeString("<p> Note: You need to catch " + number + " bugs before this bug will spawn.</p>");
});

hbs.handlebars.registerHelper('greaterThanZeroSea', function (number) {
  if (number > 0) return new hbs.handlebars.SafeString("<p> Note: You need to catch " + number + " sea creatures before this creature will spawn.</p>");
});

hbs.handlebars.registerHelper('Char-ChSalmon', function (name) {
  if (name === "Char" || name === "Cherry Salmon") return new hbs.handlebars.SafeString("<p>Note: This fish is available from 4pm-9am in its spring/summer months but all day in its fall/winter months.</p>");
});

const sess = {
  secret: "secret",
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(PORT, () => {
  console.log("App listening at http://localhost:3001");
  sequelize.sync({ force: false });
});

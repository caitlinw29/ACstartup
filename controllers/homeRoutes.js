const router = require("express").Router();
const { User, Bug, Fish, Sea } = require("../models");
const withAuth = require("../utils/auth");

//route to render landing page
router.get("/", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/home");
      return;
    }
    res.render("landing", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to render the signup form
router.get("/signup", async (req, res) => {
  try {
    //if already signed in, redirect to homepage
    if (req.session.logged_in) {
      res.redirect("/home");
      return;
    }
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to render the login form
router.get("/login", async (req, res) => {
  try {
    //if already logged in, redirect to homepage
    if (req.session.logged_in) {
      res.redirect("/home");
      return;
    }
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to render the about page
router.get("/about", async (req, res) => {
  try {
    res.render("about");
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to render the home page, only if user is signed in
router.get("/home", withAuth, async (req, res) => {
  try {
    const bugData = await Bug.findAll();
    const bugs = bugData.map((bug) => bug.get({ plain: true }));
    if (!bugs.length) {
      res.redirect("/seed");
      return;
    }

    const fishData = await Fish.findAll();
    const fish = fishData.map((fish) => fish.get({ plain: true }));

    const seaData = await Sea.findAll();
    const sea = seaData.map((sea) => sea.get({ plain: true }));

    res.render("home", {
      bugs,
      fish,
      sea,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to render the seed page, only if logged in - one time route for first user
router.get("/seed", withAuth, async (req, res) => {
  try {
    //checks if data already exists
    const bugData = await Bug.findAll();
    const bugs = bugData.map((bug) => bug.get({ plain: true }));
    if (bugs.length) {
      res.redirect("/home");
      return;
    }
    res.render("seed");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

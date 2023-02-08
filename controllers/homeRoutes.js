const router = require("express").Router();
const { User, Bug, Fish, Sea, Fossil, Art, Achievement } = require("../models");
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
    //checks if data already exists (first user seeds database)
    const bugData = await Bug.findOne({ where: { name: "Common Butterfly" } });
    if (bugData === null) {
      res.redirect("/seed");
      return;
    }

    res.render("home", {
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
    const bugData = await Bug.findOne({ where: { name: "Common Butterfly" } });
    if (bugData) {
      res.redirect("/home");
      return;
    }

    res.render("seed");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/bug", withAuth, async (req, res) => {
  try {
    const bugData = await Bug.findAll();
    const bugs = bugData.map((bug) => bug.get({ plain: true }));

    res.render("bug", {
      bugs,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sea", withAuth, async (req, res) => {
  try {
    const seaData = await Sea.findAll();
    const sea = seaData.map((sea) => sea.get({ plain: true }));

    res.render("sea", {
      sea,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/fish", withAuth, async (req, res) => {
  try {
    const fishData = await Fish.findAll();
    const fish = fishData.map((fish) => fish.get({ plain: true }));

    res.render("fish", {
      fish,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/fossil", withAuth, async (req, res) => {
  try {
    const fossilData = await Fossil.findAll();
    const fossil = fossilData.map((fossil) => fossil.get({ plain: true }));

    res.render("fossil", {
      fossil,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/art", withAuth, async (req, res) => {
  try {
    const artData = await Art.findAll();
    const art = artData.map((art) => art.get({ plain: true }));

    res.render("art", {
      art,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/achievement", withAuth, async (req, res) => {
  try {
    // const achievementData = await Achievement.findAll();
    // const achievement = achievementData.map((achievement) =>
    //   achievement.get({ plain: true })
    // );

    res.render("achievement", {
      // achievement,
      achievements: true,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

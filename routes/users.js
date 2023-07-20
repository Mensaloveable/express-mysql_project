const express = require("express");
var router = express.Router();

const mysql = require("../config/mysql-config");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/comments", (req, res, next) => {
  const getCommentsQuery = "SELECT * FROM `comments`";

  mysql.query(getCommentsQuery, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

/**
 Can also use
  router.get("/comments", async (req, res, next) => {
  try {
    const getCommentsQuery = "SELECT * FROM `comments`";
    const results = await mysql.query(getCommentsQuery);
    res.send(results);
  } catch (err) {
    res.send(err);
  }
});
 */

module.exports = router;

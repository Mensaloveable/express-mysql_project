const express = require("express");
var router = express.Router();

const connection = require("../config/mysql-config");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/comments", (req, res, next) => {
  const getCommentsQuery = "SELECT * FROM `comments`";

  connection.query(getCommentsQuery, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

router.get("/comment/:id", (req, res, next) => {
  const commentQuery = "SELECT * FROM `comments` WHERE `id` =" + req.params.id;

  console.log(commentQuery);
  connection.query(commentQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.send("No such Id");
    } else {
      if (result.length === 0) {
        res.send("No such Id");
      }
      res.send(result);
    }
  });
});

// router.get('/comment/:id', (req, res, next) => {
//   // const commentQuery = "SELECT * FROM `comments` WHERE `cid` = ?";
//   const commentQuery = "SELECT * FROM `comments` WHERE `id` = 1";
//   const commentId = req.params.id;

//   connection.query(commentQuery, [commentId], (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

module.exports = router;

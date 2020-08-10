/** @format */
const path = require("path");
const express = require("express");
const router = express.Router();

const userData = require("./user");

router.get("/", (req, res, next) => {
   // // console.log(userData.products);
   // res.sendFile(
   //    path.join(__dirname, "./", "list.html"),
   // );
   const userDetail = userData.userData;
   res.render("list", {
      users: userDetail,
      pageTitle: "Data List",
      path: "/",
   });
});
module.exports = router;

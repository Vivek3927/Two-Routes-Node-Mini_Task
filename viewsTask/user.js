/** @format */
const path = require("path");
const express = require("express");
const router = express.Router();

const userData = [];

router.get("/Add-user", (req, res, next) => {
   // res.sendFile(
   //    path.join(__dirname, "./", "Add-user.html"),
   // );
   res.render("Add-user", {
      pageTitle: "Add Name",
      path: "/Add-user",
   });
});

router.post("/Add-user", (req, res, next) => {
   userData.push({ title: req.body.title });
   // console.log(req.body);
   res.redirect("/");
});
exports.viewsTask = router;
exports.userData = userData;

const express = require("express");
const router = express.Router();
const blogController = require("../Controllers/blogController");
const blogDetails = require("../Controllers/blogDetailsController");
const comment = require("../Controllers/commentController");
const message = require("../Controllers/messageController");
const portfolio = require("../Controllers/portfolioController");
const product = require("../Controllers/productController");
const profit = require("../Controllers/profitController");
const project = require("../Controllers/projectController");
const service = require("../Controllers/serviceController");
const title = require("../Controllers/titleController");

// Create Blog API
router.get("/blog/create", blogController.create);

// Read Blog API
router.get("/blog/read", blogController.read);

// Delete Blog API
router.get("/blog/delete", blogController.delete);

// Update Blog API
router.get("/blog/update", blogController.update);

//==================Blog Details============

// Create Blog API Details
router.get("/blog-details/create", blogDetails.create);

// Read Blog API Details
router.get("/blog-details/read", blogDetails.read);

// Delete Blog API Details
router.get("/blog-details/delete", blogDetails.delete);

// Update Blog API Details
router.get("/blog-details/update", blogDetails.update);
//==================Comment============

// Create Blog Comment
router.get("/comment/create", comment.create);

// Read Blog Comment
router.get("/comment/read", comment.read);

// Delete Blog Comment
router.get("/comment/delete", comment.delete);

// Update Blog Comment
router.get("/comment/update", comment.update);
//==================Message============

// Create Blog Massage
router.get("/message/create", message.create);

// Read Blog Massage
router.get("/message/read", message.read);

// Delete Blog Massage
router.get("/message/delete", message.delete);

// Update Blog Massage
router.get("/message/update", message.update);
//==================Message============

// Create Blog Portfolio
router.get("/portfolio/create", portfolio.create);

// Read Blog Portfolio
router.get("/portfolio/read", portfolio.read);

// Delete Blog Portfolio
router.get("/portfolio/delete", portfolio.delete);

// Update Blog Portfolio
router.get("/portfolio/update", portfolio.update);

module.exports = router;

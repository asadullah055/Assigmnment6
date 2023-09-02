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
//==================Portfolio============

// Create Blog Portfolio
router.get("/portfolio/create", portfolio.create);

// Read Blog Portfolio
router.get("/portfolio/read", portfolio.read);

// Delete Blog Portfolio
router.get("/portfolio/delete", portfolio.delete);

// Update Blog Portfolio
router.get("/portfolio/update", portfolio.update);

//================product============

// Create product
router.get("/product/create", product.create);

// Read product
router.get("/product/read", product.read);

// Delete product
router.get("/product/delete", product.delete);

// Update product
router.get("/product/update", product.update);

//================profit============

// Create profit
router.get("/profit/create", profit.create);

// Read profit
router.get("/profit/read", profit.read);

// Delete profit
router.get("/profit/delete", profit.delete);

// Update profit
router.get("/profit/update", profit.update);
//================project============

// Create project
router.get("/project/create", project.create);

// Read project
router.get("/project/read", project.read);

// Delete project
router.get("/project/delete", project.delete);

// Update project
router.get("/project/update", project.update);
//================service============

// Create service
router.get("/service/create", service.create);

// Read service
router.get("/service/read", service.read);

// Delete service
router.get("/service/delete", service.delete);

// Update service
router.get("/service/update", service.update);
//================title============

// Create title
router.get("/title/create", title.create);

// Read title
router.get("/title/read", title.read);

// Delete title
router.get("/title/delete", title.delete);

// Update title
router.get("/title/update", title.update);

module.exports = router;

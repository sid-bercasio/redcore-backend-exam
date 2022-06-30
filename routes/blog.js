const express = require("express");
const blogController = require("../controllers/blog.controllers");
const checkAuth = require("../middleware/auth-checker")

const router = express.Router();
router.get('/',checkAuth.checkAuth, blogController.index);
router.post('/',checkAuth.checkAuth, blogController.create);
router.get('/:id',checkAuth.checkAuth, blogController.show);
router.put('/:id',checkAuth.checkAuth, blogController.update);
router.delete('/:id',checkAuth.checkAuth, blogController.destroy);


module.exports = router;
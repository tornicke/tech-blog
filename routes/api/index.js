const router = require("express").Router();
const userRoutes = require("./userRoutes");
//const projectRoutes = require('./projectRoutes');
const blogRoutes = require("./blogRoutes");

router.use("/users", userRoutes);
//router.use('/projects', projectRoutes);
router.use("/blogs", blogRoutes);

module.exports = router;

const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    return res.status(200).json(newBlog);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json(updatedBlog);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allBlogs = await Blog.findAll();

    return res.status(200).json(allBlogs);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);

    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.destroy({
      where: {
        id,
      },
    });

    if (!deletedBlog) {
      return res.status(400).json({ message: "The blog does not exist" });
    }

    return res
      .status(200)
      .json({ message: "The blog was successfully deleted" });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

module.exports = router;

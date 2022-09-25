const router = require("express").Router();
const { Blog, Comment, User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    return res.status(200).json(newComment);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json(updatedComment);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allComments = await Comment.findAll();

    return res.status(200).json(allComment);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    return res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.destroy({
      where: {
        id,
      },
    });

    if (!deletedComment) {
      return res.status(400).json({ message: "The comment does not exist" });
    }

    return res
      .status(200)
      .json({ message: "The comment was successfully deleted" });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

module.exports = router;

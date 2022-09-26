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

module.exports = router;

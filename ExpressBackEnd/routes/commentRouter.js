const { Router } = require("express");
const commentRouter = Router();
const { Comment } = require("../models.js");
const { restrict } = require("../services/auth");

commentRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const comment = await Comment.findAll();
      res.json(comment);
    } catch (e) {
      next(e);
    }
  })
  .post(restrict, async (req, res, next) => {
    try {
      const comment = await Comment.create({
        ...req.body,
        userId: res.locals.user.id
      });
      res.json(comment);
    } catch (e) {
      next(e);
    }
  });

commentRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      res.json(comment);
    } catch (e) {
      next(e);
    }
  })

  .put(restrict, async (req, res, next) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      await post.update(req.body);
      res.json(comment);
    } catch (e) {
      next(e);
    }
  })

  .delete(restrict, async (req, res, next) => {
    try {
      const comment = await Comment.destroy({ where: { id: req.params.id } });
      res.json(comment);
    } catch (e) {
      next(e);
    }
  });

module.exports = commentRouter;

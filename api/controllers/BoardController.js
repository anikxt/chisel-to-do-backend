/**
 * BoardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: async function listBoard(req, res) {
    const output = await Board.find({}).fetch();
    res.send(output);
  },

  create: async function createBoard(req, res) {
    var board = req.body;
    const output = await Board.create(board).fetch();
    res.send(output);
  },

  destroy: async function deleteBoard(req, res) {
    var id = req.body.id;
    await Board.destroy({ id: id }).fetch();
    await Todo.destroy({ boardId: id }).fetch();
    res.sendStatus(200);
  },
};

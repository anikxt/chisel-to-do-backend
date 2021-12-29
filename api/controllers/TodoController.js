/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function createTodo(req, res) {
    var todo = req.body;
    const output = await Todo.create(todo).fetch();
    res.send(output);
  },

  update: async function editTodo(req, res) {
    var name = req.body.name;
    var isComplete = req.body.isComplete;
    var id = req.body.id;
    const output = await Todo.update({ id: id })
      .set({
        name: name,
        isComplete: isComplete,
      })
      .fetch();
    res.send(output);
  },

  destroy: async function deleteTodo(req, res) {
    var id = req.body.id;
    output = await Todo.destroy({ id: id }).fetch();
    res.send(output);
  },
};

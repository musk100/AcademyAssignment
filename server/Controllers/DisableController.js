const connection = require("../config/Database")

module.exports = function (app) {
  app.delete("/api/remove/:id", (request, response) => {
    const { id } = request.params
    const sqlRemove = "DELETE FROM taskmanagement_db WHERE id = ?"
    connection.query(sqlRemove, id, (error, result) => {
      if (error) {
        console.log(error)
      }
    })
  })
}

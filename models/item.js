var db = require('../db.js')


module.exports.create = function(itemName, itemImg, done) {
  var param={item_name: itemName, item_img: itemImg }
  db.get().query('INSERT INTO Item (item_name, item_img) VALUES(?,?)',param, function(err, result) {

    if (err) return done(err)
    done(null, result.insertId)
  })
}

module.exports.getAll = function(done) {
  db.get().query('SELECT * FROM Item', function (err, rows) {
    if (err) return done(err)
    done(null,rows)
  })
}

module.exports.getAllByItem = function(itemId, done) {
  db.get().query('SELECT * FROM Item WHERE item_id = ?', itemId, function (err, rows) {
    if (err) return done(err)
    done(null, rows)
  })
}

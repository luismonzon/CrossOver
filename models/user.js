var db = require('../db.js')


module.exports.create = function(username, done) {

  db.get().query('INSERT INTO User (username) VALUES(?)', username, function(err, result) {

    if (err) return done(err)
    done(null, result.insertId)
  })
}

module.exports.getAll = function(done) {
  db.get().query('SELECT * FROM User', function (err, rows) {
    if (err) return done(err)
    done(null,rows)
  })
}


module.exports.setLogged = function(username,done) {
  db.get().query('UPDATE User SET logged=true where username= ?', username,function (err, rows) {
    if (err) return done(err)
    done(null,rows)
  })
}
module.exports.getAllByUser =  function(username, done) {

  db.get().query('SELECT * FROM User WHERE username = ?', username, function (err, result) {
    console.log(result);
    if (err) return done(err)
    done(null, result)
  })
}

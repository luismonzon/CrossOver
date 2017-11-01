var mysql = require ('mysql')
  , async = require ('async');


  var state = {
    pool: null
  }

module.exports.connect = function(done){
  state.pool =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crossover'
  })
  done()
}

module.exports.get = function(){
  return state.pool
}

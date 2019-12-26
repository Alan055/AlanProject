const mysql = require('mysql')
const config = require('./../../config/config')
const pool = mysql.createPool(config.MYSQL)

let query = function (sql, args) {
	return new Promise((resolve, reject) => {
		pool.getConnection(function (err, connection) {
			if(err) {resolve(err)} else{
				connection.query(sql,args,(err,result)=>{
					err ? reject(err) : resolve(result)
					connection.release()
				})
			}
		})
	})
}

module.exports = {query}
